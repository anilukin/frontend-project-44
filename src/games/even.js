import { getUsersAnswer } from '../index.js';
import randomNumber from '../helper.js';

const evenTask = () => console.log('Answer "yes" if the number is even, otherwise answer "no".');

const getRightAnswer = (num) => {
  let rightAnswer;
  if (num % 2 === 0) {
    rightAnswer = 'yes';
  } else if (num % 2 !== 0) {
    rightAnswer = 'no';
  }
  return rightAnswer;
};

const evenGame = () => {
  const number = randomNumber(0, 100);

  console.log(`Question: ${number}`);

  const usersAnswer = getUsersAnswer();
  const rightAnswer = getRightAnswer(number);

  const answerArray = [rightAnswer, usersAnswer];

  return answerArray;
};

export {
  evenTask, evenGame,
};
