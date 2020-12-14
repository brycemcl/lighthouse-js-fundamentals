let x = 1;
while (x <= 20) {
  let printToConsole = "";
  if (!(x % 3)) {
    printToConsole = printToConsole + "Julia";
  }
  if (!(x % 5)) {
    printToConsole = printToConsole + "James";
  }
  if (!printToConsole) {
    printToConsole = x;
  }
  console.log(printToConsole);
  x++;
}
