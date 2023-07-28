const multiplication = (x,y) =>
{
  // special cases
  if (x === 0 || y === 0) return 0;
  if (x === 1) return y;
  if (y === 1) return x;

  let result = 0;
  const isNegative = (x < 0 && y > 0) || (x > 0 && y < 0);
  x = Math.abs(x);
  y = Math.abs(y);

  while (y > 0) {
    result += x;
    y--;
  }

  return isNegative ? -result : result;
}


const testOne = multiplication(5,6);
const testTwo = multiplication(3,4);

console.log(testOne);
console.log(testTwo);