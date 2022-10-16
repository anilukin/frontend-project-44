#!/usr/bin/env node

import {
  printWelcome, getUserName, greetUser, randomNumber, questionCount, getUsersAnswer,
  accept, reject, congr,
} from '../src/index.js';

import {
  evenTask, getRightAnswer,
} from '../src/games/even.js';

printWelcome();
const userName = getUserName();
greetUser(userName);

evenTask();

let mistake = false;

for (let i = 0; i < questionCount; i += 1) {
  const number = randomNumber(0, 100);
  console.log(`Question: ${number}`);
  const usersAnswer = getUsersAnswer();

  const rightAnswer = getRightAnswer(number);

  if (usersAnswer === rightAnswer) {
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
