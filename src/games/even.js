import { getUsersAnswer } from '../index.js';
import randomNumber from '../helper.js';

const evenTask = () => console.log('Answer "yes" if the number is even, otherwise answer "no".');

const isEven = (num) => num % 2 === 0;

const evenGame = () => {
  const number = randomNumber(0, 100);

  console.log(`Question: ${number}`);

  const usersAnswer = getUsersAnswer();
  const rightAnswer = isEven(number) ? 'yes' : 'no';

  const answerArray = [rightAnswer, usersAnswer];

  return answerArray;
};

export {
  evenTask, evenGame,
};
