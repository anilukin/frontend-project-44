import readlineSync from 'readline-sync';

const questionCount = 3;

const game = (description, getAnswerAndQuestion) => {
  console.log('Welcome to the Brain Games!');

  const userName = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${userName}!`);

  console.log(description);

  let mistake = false;

  for (let i = 0; i < questionCount; i += 1) {
    const answerAndQuestionArr = getAnswerAndQuestion();

    console.log(`Question: ${answerAndQuestionArr[0]}`);

    const usersAnswer = readlineSync.question('Your answer: ');
    const rightAnswer = answerAndQuestionArr[1];

    if (usersAnswer === rightAnswer) {
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
};

export default game;
