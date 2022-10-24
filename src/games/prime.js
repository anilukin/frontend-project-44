import { getUsersAnswer } from '../index.js';
import randomNumber from '../helper.js';

const primeTask = () => console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  const numRoot = Math.sqrt(num);
  let n = 0;
  for (let i = 1; i <= numRoot; i += 1) {
    if (num % i === 0) {
      n += 1;
    }
  }
  if (n === 1) {
    return true;
  } return false;
};

const primeGame = () => {
  const number = randomNumber(0, 100);

  console.log(`Question: ${number}`);

  const usersAnswer = getUsersAnswer();
  const rightAnswer = isPrime(number) ? 'yes' : 'no';

  const answerArray = [rightAnswer, usersAnswer];

  return answerArray;
};

export {
  primeTask, primeGame,
};
