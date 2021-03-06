/*
Problem 2: Even Fibonacci numbers

Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:

1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.
*/

//argument n is the nth fibonacci number to calculate to.
function fib(n) {
    if (n == 1 || n == 2) {
	return 1;
    } else if (n > 1) {
	return fib(n - 2) + fib(n - 1)
    }
}

function sum_fib(max_fib_value) {
    var sum = 0
    for (var i = 1; fib(i) < max_fib_value; i++) {
	if (fib(i) % 2 == 0) {
	    sum += fib(i)
	}
    }
    return sum
}



/*
computing the fib sequence.

f_1 = 1
f_2 = 1

f_3 = f_1 + f_2 = 1 + 1 = 2
f_4 = f_2 + f_3 = 1 + 2 = 3
f_5 = f_3 + f_4 = 2 + 3 = 5
f_6 = f_4 + f_5 = 3 + 5 = 8
*/	
