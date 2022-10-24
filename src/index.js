import readlineSync from 'readline-sync';

const printWelcome = () => console.log('Welcome to the Brain Games!');

const getUserName = () => {
  const userName = readlineSync.question('May I have your name? ');
  return userName;
};

const greetUser = (userName) => console.log(`Hello, ${userName}!`);

const questionCount = 3;

const getUsersAnswer = () => {
  const usersAnswer = readlineSync.question('Your answer: ');
  return usersAnswer;
};

const accept = () => console.log('Correct!');

const reject = (usersAnswer, rightAnswer, userName) => console.log(`'${usersAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLet's try again, ${userName}!`);

const congr = (userName) => console.log(`Congratulations, ${userName}!`);

const game = (gameRules, askQuestion) => {
  printWelcome();

  const userName = getUserName();

  greetUser(userName);

  gameRules();

  let mistake = false;

  for (let i = 0; i < questionCount; i += 1) {
    const answerArray = askQuestion();
    const rightAnswer = answerArray[0];
    const usersAnswer = answerArray[1];

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
};

export {
  getUsersAnswer, game,
};
