#!/usr/bin/env node
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);

console.log('What is the result of the expression?');

const randomNumber = (max = 100) => Math.round(max * Math.random());
const questionCount = 3;
const mathOperation = ['+', '-', '*'];
const getRandomSign = (max = (mathOperation.length - 1)) => {
  const i = Math.round(Math.random() * max);
  return mathOperation[i];
};
let mistake = false;

for (let i = 0; i < questionCount; i += 1) {
  const number1 = randomNumber();
  const number2 = randomNumber();
  const mathSign = getRandomSign();
  let rightAnswer;
  console.log(`Question: ${number1} ${mathSign} ${number2}`);
  if (mathSign === '+') {
    rightAnswer = number1 + number2;
  } else if (mathSign === '-') {
    rightAnswer = number1 - number2;
  } else if (mathSign === '*') {
    rightAnswer = number1 * number2;
  }
  const usersAnswer = readlineSync.question('Your answer: ');
  if (usersAnswer === rightAnswer.toString()) {
    console.log('Correct!');
  } else {
    console.log(`'${usersAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLet's try again, ${userName}!`);
    mistake = true;
    break;
  }
}
if (mistake === false) {
  console.log(`Congratulations, ${userName}!`);
}
