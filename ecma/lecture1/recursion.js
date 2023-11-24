// пример рекурсии - факториал

// 1! = 1
// 2! = 1 * 2
// 3! = 1 * 2 * 3
// 4! = 1 * 2 * 3 * 4
// и это то же самое, что
// 4! = 3! * 4
// =>
// n! = (n-1)! * n

function factorial(number) {
	if (number === 1) {
		return 1;
	}
	return factorial(number - 1) * number;
}

console.log(factorial(3)); // 6
console.log(factorial(4)); // 24