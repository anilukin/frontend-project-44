import { getUsersAnswer } from '../index.js';
import randomNumber from '../helper.js';

const calcTask = () => console.log('What is the result of the expression?');

const mathOperation = ['+', '-', '*'];

const calc = (num1, operator, num2) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      return null;
  }
};

const calcGame = () => {
  const number1 = randomNumber(0, 100);
  const number2 = randomNumber(0, 100);
  const mathSign = mathOperation[randomNumber(0, (mathOperation.length - 1))];

  console.log(`Question: ${number1} ${mathSign} ${number2}`);

  const rightAnswer = calc(number1, mathSign, number2);
  const usersAnswer = getUsersAnswer();

  const answerArray = [rightAnswer.toString(), usersAnswer];

  return answerArray;
};

export {
  calcTask, calcGame,
};
