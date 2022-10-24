import { getUsersAnswer } from '../index.js';
import randomNumber from '../helper.js';

const gcdTask = () => console.log('Find the greatest common divisor of given numbers.');

const getGcd = (num1, num2) => {
  let minNum = Math.abs(num1);
  let maxNum = Math.abs(num2);
  if (minNum === 0 && maxNum === 0) {
    return 1;
  }
  while (minNum !== 0 && maxNum !== 0) {
    if (maxNum > minNum) {
      maxNum -= minNum;
    } else {
      minNum -= maxNum;
    }
  }
  return maxNum + minNum;
};

const gcdGame = () => {
  const number1 = randomNumber(0, 100);
  const number2 = randomNumber(0, 100);

  console.log(`Question: ${number1} ${number2}`);

  const rightAnswer = getGcd(number1, number2);
  const usersAnswer = getUsersAnswer();

  const answerArray = [rightAnswer.toString(), usersAnswer];

  return answerArray;
};

export {
  gcdTask, gcdGame,
};
