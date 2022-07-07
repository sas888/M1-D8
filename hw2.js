// Additional assignments for Day 4

/* EXTRA 1
 Write a piece of code for reverting an array.
 es:
 [1, 3, 5] ==> [5, 3, 1]
*/

let extraOne = [1, 5, 10, 25, 32, 44, 50];

extraOne.reverse();

console.log(extraOne);

/* EXTRA 2
 Write a piece of code for getting the maximum numerical value from an array.
*/

console.log(Math.max(...extraOne));

console.log(Math.max.apply(Math, extraOne));

let maxNum = extraOne[0];
for (let i = 1; i < extraOne.length; ++i) {
  if (extraOne[i] > maxNum) {
    maxNum = extraOne[i];
  }
}

console.log(maxNum);

/* EXTRA 3
 Write a piece of code for getting the minimum numerical value from an array.
*/

console.log(Math.min(...extraOne));
console.log(Math.min.apply(Math, extraOne));

let minNum = extraOne[0];
for (let i = 1; i < extraOne.length; ++i) {
  if (extraOne[i] < minNum) {
    minNum = extraOne[i];
  }
}

console.log(minNum);
/* EXTRA 4
 Write a piece of code for getting only even numerical values from an array.
*/

let evenNum = extraOne.filter((number) => {
  return number % 2 === 0;
});

console.log(evenNum);

let evenNumTwo = [];

extraOne.forEach((number) => {
  if (number % 2 === 0) {
    evenNumTwo.push(number);
  }
});

console.log(evenNumTwo);
/* EXTRA 5
 Write a piece of code for deleting only even entries from an array.
*/

let evenNumdelete = extraOne.filter((number) => number % 2 !== 0);

console.log(evenNumdelete);

/* EXTRA 6
 Write a piece of code for removing all the vowels from a string.
*/

/* WRITE YOUR ANSWER HERE */

/* EXTRA 7
 Write a piece of code for increasing all the numerical values in a array by 1.
*/

/* WRITE YOUR ANSWER HERE */

/* EXTRA 8 
 Replace all the strings contained in an array with their length.
 es.: ["strive", "is", "great"] => [6, 2, 5]
*/

/* WRITE YOUR ANSWER HERE */
