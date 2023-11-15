"use strict";

/*
Необходимо реализовать четыре функции, каждая функция должна принимать по два
числа и выполнять одну из операций (каждая функция выполняет одну из них):
1. Сложение
2. Разность
3. Умножение
4. Деление
Необходимо сделать так, чтобы функция вернула число, например выражение
console.log(sum(2, 6)); должно вывести число 8 в консоль (sum - функция
сложения в данном примере, ваши названия функций могут отличаться).
Округлять значения, которые возвращают функции не нужно, однако, обратите
внимание на разность, функция должна вычесть из большего числа меньшее, либо
вернуть 0, если числа равны.
Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать
не нужно.
Демонстрировать работы функций не обязательно.
*/

function sum(numberOne, numberTwo) {
	return numberOne + numberTwo;
}

function subtraction(numberOne, numberTwo) {
	if (numberOne < numberTwo) {
		return numberTwo - numberOne;
	}
	if (numberOne > numberTwo) {
		return numberOne - numberTwo;
	}
	else {
		return 0;
	}
}

function multiplication(numberOne, numberTwo) {
	return numberOne * numberTwo;
}

function division(numberOne, numberTwo) {
	return numberOne / numberTwo;
}

console.log(subtraction(4, 4));
console.log(division(10, 2));