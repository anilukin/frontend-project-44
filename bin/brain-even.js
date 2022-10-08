#!/usr/bin/env node
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);

console.log('Answer "yes" if the number is even, otherwise answer "no".');

const randomNumber = () => Math.round(100 * Math.random());
const questionCount = 3;
let mistake = false;

for (let i = 0; i < questionCount; i += 1) {
  const number = randomNumber();
  console.log(`Question: ${number}`);
  const usersAnswer = readlineSync.question('Your answer: ');
  if (
    // eslint-disable-next-line operator-linebreak
    (number % 2 === 0 && usersAnswer === 'yes') ||
    (number % 2 !== 0 && usersAnswer === 'no')
  ) {
    console.log('Correct!');
  } else {
    if (usersAnswer === 'yes') {
      console.log(
        `'${usersAnswer}' is wrong answer ;(. Correct answer was 'no'.`
      );
    }
    if (usersAnswer === 'no') {
      console.log(
        `'${usersAnswer}' is wrong answer ;(. Correct answer was 'yes'.`
      );
    }
    mistake = true;
    break;
  }
  if (mistake === false) {
    console.log(`Congratulations, ${userName}!`);
  }
}
