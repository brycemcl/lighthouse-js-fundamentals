let x = 100;
while (x <= 200) {
  let printToConsole = "";
  if (!(x % 3)) {
    printToConsole = printToConsole + "Loopy";
  }
  if (!(x % 4)) {
    printToConsole = printToConsole + "Lighthouse";
  }
  if (!printToConsole) {
    printToConsole = x;
  }
  console.log(printToConsole);
  x++;
}
