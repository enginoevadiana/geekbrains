"use strict";

/*
Необходимо попросить пользователя ввести три числа.
Необходимо создать функцию, в которую мы должны передать эти три числа.
Функция должна определить максимальное, среди переданных ей значение и 
вывести сообщение: "Максимальное значение среди чисел N1, N2, N3 равно N."

Примечание: Условимся, что пользователь всегда вводит корректные значения, 
три числа. Проверять их не нужно.
*/

const numberOne = Number(prompt('Число 1'));
const numberTwo = Number(prompt('Число 2'));
const numberThree = Number(prompt('Число 3'));


function maxNumber(numberOne, numberTwo, numberThree) {
	let max;
	if (numberOne < numberTwo) {
		max = numberTwo;
	}
	else {
		max = numberOne;
	}
	if (numberThree > max) {
		max = numberThree;
	}
	console.log(`Максимальное значение среди чисел ${numberOne}, ${numberTwo}, ${numberThree} равно ${max}.`);
}

maxNumber(numberOne, numberTwo, numberThree);
