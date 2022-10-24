import { getUsersAnswer } from '../index.js';
import randomNumber from '../helper.js';

const progressionTask = () => console.log('What number is missing in the progression?');

const progressionGame = () => {
  const progrLength = randomNumber(5, 10);
  const firstProgrElement = randomNumber(0, 50);
  const progrStep = randomNumber(0, 50);

  const progression = [];

  for (let i = 0; i < progrLength; i += 1) {
    const element = firstProgrElement + i * progrStep;
    progression.push(element);
  }

  const questionElement = randomNumber(0, (progrLength - 1));

  const rightAnswer = progression[questionElement];

  progression[questionElement] = '..';

  console.log(`Question: ${progression.join(' ')}`);

  const usersAnswer = getUsersAnswer();

  const answerArray = [rightAnswer.toString(), usersAnswer];

  return answerArray;
};

export {
  progressionTask, progressionGame,
};
