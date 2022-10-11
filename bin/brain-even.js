#!/usr/bin/env node
import readlineSync from 'readline-sync';
import {
  userName, greetingUser, randomNumber, questionCount,
} from '../src/index.js';

greetingUser();

console.log('Answer "yes" if the number is even, otherwise answer "no".');

let mistake = false;

for (let i = 0; i < questionCount; i += 1) {
  const number = randomNumber();
  console.log(`Question: ${number}`);
  const usersAnswer = readlineSync.question('Your answer: ');
  if (
    (number % 2 === 0 && usersAnswer === 'yes')
    || (number % 2 !== 0 && usersAnswer === 'no')
  ) {
    console.log('Correct!');
  } else {
    if (usersAnswer === 'yes') {
      console.log(
        `'${usersAnswer}' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${userName}!`,
      );
    }
    if (usersAnswer === 'no') {
      console.log(
        `'${usersAnswer}' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${userName}!`,
      );
    }
    if (usersAnswer !== 'no' && usersAnswer !== 'yes') {
      console.log(
        `'${usersAnswer}' is wrong answer ;(. Use "yes" or "no" for answer.\nLet's try again, ${userName}!`,
      );
    }
    mistake = true;
    break;
  }
  if (mistake === false) {
    console.log(`Congratulations, ${userName}!`);
  }
}
