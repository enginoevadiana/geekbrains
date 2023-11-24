const houses = [];

let i = 0;
while (i < 10) {
	let house = function () {
		let houseNumber = i; // блочная переменная, которая сохраняет значение i, именно ее значение попадет в лексическое окружение функции house 

		console.log(houseNumber);
	};
	houses.push(house);
	i++;
}

houses[0](); // 10
houses[7](); // 10

// const houses = [];

// let i = 0;
// while (i < 10) {
// 	let houseNumber = i;
// 	let house = function () {
// 		console.log(houseNumber);
// 	};
// 	houses.push(house);
// 	i++;
// }

// houses[0](); // 0
// houses[7](); // 7