#!/usr/bin/env node

import {
  printWelcome, getUserName, greetUser, randomNumber, questionCount, getUsersAnswer, accept,
  reject, congr,
} from '../src/index.js';

import { gcdTask, getGcd } from '../src/games/gcd.js';

printWelcome();
const userName = getUserName();
greetUser(userName);

gcdTask();

let mistake = false;

for (let i = 0; i < questionCount; i += 1) {
  const number1 = randomNumber(0, 100);
  const number2 = randomNumber(0, 100);

  console.log(`Question: ${number1} ${number2}`);

  const rightAnswer = getGcd(number1, number2);

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
