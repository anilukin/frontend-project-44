const gcdTask = () => console.log('Find the greatest common divisor of given numbers.');

const getGcd = (num1, num2) => {
  let minNum = Math.abs(num1);
  let maxNum = Math.abs(num2);
  if (minNum === 0 || maxNum === 0) {
    return 1;
  }
  while (minNum !== 0 && maxNum !== 0) {
    if (maxNum > minNum) {
      maxNum -= minNum;
    } else {
      minNum -= maxNum;
    }
  }
  return maxNum + minNum;
};

export {
  gcdTask, getGcd,
};
