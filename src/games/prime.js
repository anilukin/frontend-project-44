import game from '../index.js';
import randomNumber from '../helper.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  let n = 0;
  for (let i = 1; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      n += 1;
    }
  }
  return n === 1;
};

const getAnswerAndQuestion = () => {
  const number = randomNumber(0, 100);

  const question = `${number}`;

  const rightAnswer = isPrime(number) ? 'yes' : 'no';

  return [question, rightAnswer];
};

const runPrimeGame = () => {
  game(description, getAnswerAndQuestion);
};

export default runPrimeGame;
