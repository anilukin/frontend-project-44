import game from '../index.js';
import randomNumber from '../helper.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const getAnswerAndQuestion = () => {
  const number = randomNumber(0, 100);

  const question = `${number}`;

  const rightAnswer = isEven(number) ? 'yes' : 'no';

  return [question, rightAnswer];
};

const runEvenGame = () => {
  game(description, getAnswerAndQuestion);
};

export default runEvenGame;
