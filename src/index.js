import readlineSync from 'readline-sync';

const questionCount = 3;

const game = (description, getAnswerAndQuestion) => {
  console.log('Welcome to the Brain Games!');

  const userName = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${userName}!`);

  console.log(description);

  for (let i = 0; i < questionCount; i += 1) {
    const [question, rightAnswer] = getAnswerAndQuestion();

    console.log(`Question: ${question}`);

    const usersAnswer = readlineSync.question('Your answer: ');

    if (usersAnswer === rightAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${usersAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLet's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default game;
