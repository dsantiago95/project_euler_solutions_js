/*
Problem 6: Sum square difference

The sum of the squares of the first ten natural numbers is,
12 + 22 + ... + 102 = 385

The square of the sum of the first ten natural numbers is,
(1 + 2 + ... + 10)2 = 552 = 3025

Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.

Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.
*/

//uses range() from problem5.js. There's probably a way better way to do this mathematically.
function sumOfSquares(x) {
    let sum = 0;
    range(x).forEach((value) => sum += value*value);
    return sum;
}

function squareOfSum(x) {
    let sum = 0;
    range(x).forEach((value) => sum += value);
    return sum*sum;
}