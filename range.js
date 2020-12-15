const range = (start, end, step) => {
  let rangeLocal = [];
  //setup an error catcher and return an empty array if error occurs
  if ((typeof start === !"number") || (typeof end === !"number") || (typeof step === !"number") || (start > end) || (step <= 0)) {
    return rangeLocal;
  } else {
    //this is the adding logic
    let currentNumber = start;
    while (currentNumber <= end) {
      rangeLocal.push(currentNumber);
      currentNumber += step;
    }
  }
  return rangeLocal;
};


console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));
console.log(range(-5, 2, -3));
console.log(range(-5, -6, 3));