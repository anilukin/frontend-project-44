import game from '../index.js';
import randomNumber from '../helper.js';

const description = 'Find the greatest common divisor of given numbers.';

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

const getAnswerAndQuestion = () => {
  const number1 = randomNumber(0, 100);
  const number2 = randomNumber(0, 100);

  const question = `${number1} ${number2}`;

  const rightAnswer = getGcd(number1, number2).toString();

  return [question, rightAnswer];
};

const runGcdGame = () => {
  game(description, getAnswerAndQuestion);
};

export default runGcdGame;
