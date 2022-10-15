#!/usr/bin/env node

import {
  printWelcome, getUserName, greetUser, randomNumber, questionCount, getUsersAnswer, accept,
  reject, congr,
} from '../src/index.js';

import {
  calcTask, getRandomSign, calc,
} from '../src/games/calc.js';

printWelcome();
const userName = getUserName();
greetUser(userName);

calcTask();

let mistake = false;

for (let i = 0; i < questionCount; i += 1) {
  const number1 = randomNumber(0, 100);
  const number2 = randomNumber(0, 100);
  const mathSign = getRandomSign();

  console.log(`Question: ${number1} ${mathSign} ${number2}`);

  const rightAnswer = calc(number1, mathSign, number2);

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
