/*
Problem 5: Smallest multiple

2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
*/

//brute force

//Produces an array of length x with integers 1 to x
function range(x) {
    let intRange = new Array(x);
    for (let i = 0; i < x; i++) {
        intRange[i] = i + 1;
    }
    return intRange;
}


//checks if a number, x, is divisible by every element of an array, A.
function isDivisibleByArray(x, A) {
    for (let i = 0; i < A.length; i++) {
        if (x % A[i] != 0) {
            return false;
        }
    }
    return true;
}

function smallestMultiple(start) {
    let intRange = range(20);
    while (!isDivisibleByArray(start, intRange)) {
        start++;
    }
    return start;
}
