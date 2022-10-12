import readlineSync from 'readline-sync';

const printWelcome = () => console.log('Welcome to the Brain Games!');

const getUserName = () => {
  const userName = readlineSync.question('May I have your name? ');
  return userName;
};

const greetUser = (userName) => console.log(`Hello, ${userName}!`);

const randomNumber = (max = 100) => Math.round(max * Math.random());
const questionCount = 3;

const getUsersAnswer = () => {
  const usersAnswer = readlineSync.question('Your answer: ');
  return usersAnswer;
};
const accept = () => console.log('Correct!');

const reject = (usersAnswer, rightAnswer, userName) => console.log(`'${usersAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLet's try again, ${userName}!`);

const congr = (userName) => console.log(`Congratulations, ${userName}!`);

export {
  printWelcome, getUserName, greetUser, randomNumber, questionCount, getUsersAnswer, accept,
  reject, congr,
};
