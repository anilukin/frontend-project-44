#!/usr/bin/env node

import {
  printWelcome, getUserName, greetUser, questionCount, randomNumber, getUsersAnswer, accept,
  reject, congr,
} from '../src/index.js';

import { primeTask, getPrimeAnswer } from '../src/games/prime.js';

printWelcome();
const userName = getUserName();
greetUser(userName);

primeTask();

let mistake = false;

for (let i = 0; i < questionCount; i += 1) {
  const number = randomNumber(0, 100);
  console.log(`Question: ${number}`);
  const usersAnswer = getUsersAnswer();
  const rightAnswer = getPrimeAnswer(number);

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
