/* Print all of the numbers from 1 to 100 where numbers divisible by 3 print Fizz, numbers divisible by 5 print buzz, and numbers divisible by both print FizzBuzz */

for (var i = 1; i <= 100; i++) {
  if ((i % 3 === 0) && (i % 5 === 0)) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
