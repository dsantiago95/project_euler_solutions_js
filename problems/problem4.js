/*
Problem 4: Largest palindrome product

A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two 3-digit numbers.
*/

//checks if two iterable object have the same members, in the same order.
function isEqual(A, B) {
    if (A.constructor == B.constructor) {
        if (A.length == B.length) {
            for(let i = 0; i < A.length; i++) {
                if (A[i] != B[i]) {
                    return false;
                }
            }
        }
    }
    return true;
}

//converts the integer input to an array of single digit integers
function toDigitArray(x) {
    var digitArray = []
    var numberOfDigits = x.toString().length;
    for(let i = numberOfDigits - 1; i >= 0; i--) {
        let digit = Math.floor(x/Math.pow(10, i)); //get the digit in the ith place
        digitArray.push(digit);
        x -= digit * Math.pow(10, i); // subtract the ith place from the number, i.e. 1234 -> 0234, then 234 -> 034, etc.
    }
    return digitArray;
}


function isPalindrome (x) {
    return isEqual(toDigitArray(x), toDigitArray(x).reverse());
}

function largestPalindrome() {
    var largest = 0;
    for (let i = 0; i < 999; i++) {
        for (let j = 0; j < 999; j++) {
            if (isPalindrome(i * j) && (i * j) > largest) {
               largest = i * j;
            }
        }
    }
    return largest;
}