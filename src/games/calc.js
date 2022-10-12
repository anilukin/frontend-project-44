const calcTask = () => console.log('What is the result of the expression?');

const mathOperation = ['+', '-', '*'];
const getRandomSign = (max = (mathOperation.length - 1)) => {
  const i = Math.round(Math.random() * max);
  return mathOperation[i];
};

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

export {
  calcTask, getRandomSign, calc,
};
