import game from '../index.js';
import randomNumber from '../helper.js';

const description = 'What is the result of the expression?';

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

const getAnswerAndQuestion = () => {
  const number1 = randomNumber(0, 100);
  const number2 = randomNumber(0, 100);
  const mathSign = mathOperation[randomNumber(0, (mathOperation.length - 1))];

  const question = `${number1} ${mathSign} ${number2}`;

  const rightAnswer = calc(number1, mathSign, number2).toString();

  return [question, rightAnswer];
};

const runCalcGame = () => {
  game(description, getAnswerAndQuestion);
};

export default runCalcGame;
