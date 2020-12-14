let num = 99;
while (num > 0) {
  let bottle = (x) => {
    if (x == "1") {
      return `${x} bottle`;
    } else {
      return `${x} bottles`;
    }
  };
  let bottleStart = bottle(num);
  let bottleEnd = bottle(num - 1);
  console.log(`${bottleStart} of juice on the wall! ${bottleStart} of juice! Take one down, pass it around... ${bottleEnd} of juice on the wall!`);
  num--;
}