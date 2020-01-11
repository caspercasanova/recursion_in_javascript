/* eslint-disable indent */
// Given two integers -- a base and an exponent -- write a
// recursive function that computes the exponent math and
// returns the result.

// Exponent math is performed by multiplying the base by itself
// x number of times, where x is the exponent given.

// Examples:

var power = function(base, exponent) {
	if (exponent === 1) {
		return base;
	} else {
		return base * power(base, exponent - 1);
	}
};

console.log(power(10, 3));
console.log(power(5, 2));
console.log(power(2, 4));
console.log(power(2, 2));
