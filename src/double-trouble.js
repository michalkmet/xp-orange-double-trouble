function doubleTrouble(arrOfNumbers, target) {
  console.log('arrOfNumbers: ', arrOfNumbers);
  console.log('target: ', target);
  for (let i = 0; i < arrOfNumbers.length; i++) {
    console.log('i: ', i);
    console.log('arrOfNumbers[i]: ', arrOfNumbers[i]);
    console.log('arrOfNumbers[i+1]: ', arrOfNumbers[i+1]);
    console.log('arrOfNumbers: ', arrOfNumbers);
    if (arrOfNumbers[i] + arrOfNumbers[i + 1] === target) {
      console.log('we are gonna splice');
      arrOfNumbers.splice(i + 1, 1);
      i--;
      continue;
    }
  }
  return arrOfNumbers;
}

module.exports = doubleTrouble;
