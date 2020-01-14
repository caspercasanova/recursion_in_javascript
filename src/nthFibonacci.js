/* eslint-disable func-style */
/* eslint-disable indent */
// A Fibonacci sequence is a list of numbers that begins with 0 and 1, and each
// subsequent number is the sum of the previous two.

// For example, the first five Fibonacci numbers are:
//   0 1 1 2 3

// If n were 4, your function should return 3; for 5, it should return 5.

// Write a function that accepts a number, n, and returns the nth Fibonacci
// number. Use a recursive solution to this problem; if you finish with time
// left over, implement an iterative solution.

// example usage:
// nthFibonacci(2); // => 1
// nthFibonacci(3); // => 2
// nthFibonacci(4); // => 3
// etc...

var nthFibonacci = function(n) {
	let fibNums = [0, 1];
	let nth = 2;

	function addFibs() {
		let lastNum = fibNums[fibNums.length - 1];
		let secondToLast = fibNums[fibNums.length - 2];
		let subsequentNumber = lastNum + secondToLast;

		fibNums.push(subsequentNumber);
		nth++;
		console.log(fibNums);
		if (n > fibNums.length) {
			return addFibs();
		}
	}

	if (n > fibNums.length) {
		return addFibs();
	} else {
		let lastNum2 = fibNums[fibNums.length - 1];
		let secondToLast2 = fibNums[fibNums.length - 2];
		let subsequentNumber2 = lastNum2 + secondToLast2;
		console.log(subsequentNumber2);
		return subsequentNumber2;
	}
};
