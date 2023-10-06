function doubleTrouble(arrOfNumbers, target) {
  for (let i = 0; i < arrOfNumbers.length; i++) {
    if (arrOfNumbers[i] + arrOfNumbers[i + 1] === target) {
      arrOfNumbers.splice(i + 1, 1);
      i--;
      continue;
    }
  }
  return arrOfNumbers;
}

module.exports = doubleTrouble;
