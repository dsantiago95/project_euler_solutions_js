/*
Problem 7: 10001st prime

By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

What is the 10 001st prime number?
*/

//uses isPrime() from problem3.js
function nthPrime(n) {
    let count = 0; //counting the primes
    let number = 2; //number to test for primality
    while(count < n) {
        if(isPrime(number)) {
            count++;
        }
        number++;
    }
    return (number - 1);
}