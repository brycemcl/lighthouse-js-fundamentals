// creates a line of * for a given length
function makeLine(length) {
  var line = "";
  for (var j = 1; j <= length; j++) {
    line += "* ";
  }
  return line + "\n";
}
// creates a triangle 
function buildTriangle(base) {
  let triangle = "";
  for (let i = 0; i < base; i++) {
    triangle = triangle + makeLine(i + 1);
  }
  return triangle;
}

console.log(buildTriangle(10));