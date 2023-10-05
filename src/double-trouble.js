function doubleTrouble(arrOfNumbers, target) {
  console.log('arrOfNumbers: ', arrOfNumbers);
  console.log('target: ', target);
  let result = [];
  for (let i = 0; i < arrOfNumbers.length; i++) {
    result.push(arrOfNumbers[i]);
    if (arrOfNumbers[i] + arrOfNumbers[i + 1] === target) {
      break;
    }
  }
  console.log('result: ', result);
  return result;
}

module.exports = doubleTrouble;
