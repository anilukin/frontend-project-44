import game from '../index.js';
import randomNumber from '../helper.js';

const description = 'What number is missing in the progression?';

const getProgression = () => {
  const progrLength = randomNumber(5, 10);
  const firstProgrElement = randomNumber(0, 50);
  const progrStep = randomNumber(0, 50);

  const progression = [];

  for (let i = 0; i < progrLength; i += 1) {
    const element = firstProgrElement + i * progrStep;
    progression.push(element);
  }
  return progression;
};

const getAnswerAndQuestion = () => {
  const progr = getProgression();

  const questionElement = randomNumber(0, (progr.length - 1));

  const rightAnswer = progr[questionElement].toString();

  progr[questionElement] = '..';

  const question = `${progr.join(' ')}`;

  return [question, rightAnswer];
};

const runProgressionGame = () => {
  game(description, getAnswerAndQuestion);
};

export default runProgressionGame;
