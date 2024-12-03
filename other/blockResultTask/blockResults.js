let array = ["123", "city", "code", "cat", "00000"];
let array2 = ["123", "cow", "dog", "cat", "00000"];

function checkingArray(array) {
	let newArray = [];
	for (let i = 0; i < array.length; i++) {
		if (array[i].length <= 3) {
			newArray.push(array[i]);
		}
	}
	return newArray;
}

console.log(checkingArray(array));
console.log(checkingArray(array2));