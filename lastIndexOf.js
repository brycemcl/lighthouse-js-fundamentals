const lastIndexOf = (array, element) => {
  let i = array.length - 1;
  while (i >= 0) {
    if (array[i] === element) {
      return i;
    }
    i--;
  }
  return -1;
};
let testArray = [0, 1, 4, 1, 2];
//console.log(testArray);
console.log(lastIndexOf(testArray, 1));
//console.log(testArray);
console.log(lastIndexOf([0, 1, 4, 1, 2], 3));