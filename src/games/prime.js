import { randomNumber, getUsersAnswer } from '../index.js';

const primeTask = () => console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

const getPrimeAnswer = (num) => {
  let answer;
  if (num > 2) {
    answer = 'no';
  }
  const numRoot = Math.sqrt(num);
  let n = 0;
  for (let i = 1; i < numRoot; i += 1) {
    if (num % i === 0) {
      n += 1;
    }
  }
  if (n === 1) {
    answer = 'yes';
  } else answer = 'no';
  return answer;
};

const primeGame = () => {
  const number = randomNumber(0, 100);

  console.log(`Question: ${number}`);

  const usersAnswer = getUsersAnswer();
  const rightAnswer = getPrimeAnswer(number);

  const answerArray = [rightAnswer, usersAnswer];

  return answerArray;
};

export {
  primeTask, primeGame,
};
