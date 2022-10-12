const evenTask = () => console.log('Answer "yes" if the number is even, otherwise answer "no".');

const getRightAnswer = (num) => {
  let rightAnswer;
  if (num % 2 === 0) {
    rightAnswer = 'yes';
  } else if (num % 2 !== 0) {
    rightAnswer = 'no';
  }
  return rightAnswer;
};

export {
  evenTask, getRightAnswer,
};
