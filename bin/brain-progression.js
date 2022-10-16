#!/usr/bin/env node

import {
  printWelcome, getUserName, greetUser, questionCount, randomNumber, getUsersAnswer, accept,
  reject, congr,
} from '../src/index.js';

import { progressionTask } from '../src/games/progression.js';

printWelcome();
const userName = getUserName();
greetUser(userName);

progressionTask();

let mistake = false;

for (let i = 0; i < questionCount; i += 1) {
  const progrLength = randomNumber(5, 10);
  const firstProgrElement = randomNumber(0, 50);
  const progrStep = randomNumber(0, 50);

  const progression = [];

  for (let j = 0; j < progrLength; j += 1) {
    const element = firstProgrElement + j * progrStep;
    progression.push(element);
  }

  const questionElement = randomNumber(0, (progrLength - 1));

  const rightAnswer = progression[questionElement];

  progression[questionElement] = '..';

  console.log(`Question: ${progression.join(' ')}`);

  const usersAnswer = getUsersAnswer();
  if (usersAnswer === rightAnswer.toString()) {
    accept();
  } else {
    reject(usersAnswer, rightAnswer, userName);
    mistake = true;
    break;
  }
}
if (mistake === false) {
  congr(userName);
}
