/*
Problem 3: Largest prime factor

The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?
*/

/*
Start from the square root of the number, then check if x-- | x. If it does, is it prime? Stop at the first occurence.
*/

const THE_NUMBER =  600851475143;

function isPrime(x) {
    for (let i = 2; i < Math.floor(Math.sqrt(x)); i++) {
        if (x % i == 0) {
            return false;
        }
    }
    return true;
}

function largestPrimeDivisor(x) {
    for (let i = Math.floor(Math.sqrt(x)); i > 0; i--) {
        if (x % i == 0 && isPrime(i)) {
            return i;
        }
        
    }
}