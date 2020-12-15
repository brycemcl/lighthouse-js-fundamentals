const loopyLighthouse = (range, multiples, words) => {
  let x = range[0];
  while (x <= range[1]) {
    let printToConsole = "";
    if (!(x % multiples[0])) {
      printToConsole = printToConsole + words[0];
    }
    if (!(x % multiples[1])) {
      printToConsole = printToConsole + words[1];
    }
    if (!printToConsole) {
      printToConsole = x;
    }
    console.log(printToConsole);
    x++;
  }
};

