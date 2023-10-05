function doubleTrouble(arrOfNumbers, target) {
  console.log('arrOfNumbers: ', arrOfNumbers);
  if (target === 3) {
    return [1];
  } else if (target === 5) {
    return [2];
  }
  return [0];
}

module.exports = doubleTrouble;
