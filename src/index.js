import readlineSync from 'readline-sync';

const userName = readlineSync.question('Welcome to the Brain Games!\nMay I have your name? ');

const greetingUser = () => console.log(`Hello, ${userName}!`);

const randomNumber = (max = 100) => Math.round(max * Math.random());
const questionCount = 3;

export {
  userName, greetingUser, randomNumber, questionCount,
};
