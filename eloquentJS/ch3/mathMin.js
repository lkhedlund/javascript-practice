/*
The previous chapter introduced the standard function Math.min that returns its smallest argument. We can do that ourselves now. Write a function min that takes two arguments and returns their minimum.
*/

function mathMin(x, y) {
  if (x < y) {
    return x;
  } else if (x > y) {
    return y;
  } else {
    return 0;
  }
}

console.log(mathMin(0, -10), mathMin(0, 1), mathMin(10, 20));
