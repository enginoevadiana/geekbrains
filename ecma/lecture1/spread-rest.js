// spread
const arr = [10, 5, 16];
function max(param1, param2) {
	if (param1 > param2) {
		return param1;
	} else if (param1 < param2) {
		return param2;
	} else {
		return 'Числа равны';
	}
}
console.log(max(...arr));
console.log(Math.max(...arr));

// rest
const arr2 = [10, 5, 16, 8, 3];
function max2(param1, param2, ...rest) { // вместо rest может быть любое другое слово
	if (param1 > param2) {
		console.log(param1);
	} else if (param1 < param2) {
		console.log(param2);
	} else {
		return 'Числа равны';
	}
	console.log(rest); // выведет [16, 8, 3]
}

max2(...arr2);


// Spread 
// Есть два массива объектов. Каждый - это группа студентов
const studentsGroup1PracticeTime = [
	{
		firstName: "Ivanov",
		practiceTime: 56
	},
	{
		firstName: "Petrov",
		practiceTime: 120
	},
	{
		firstName: "Sidorov",
		practiceTime: 148
	},
	{
		firstName: "Belkin",
		practiceTime: 20
	},
	{
		firstName: "Avdeev",
		practiceTime: 160
	}
];
const studentsGroup2PracticeTime = [
	{
		firstName: "Mankov",
		practiceTime: 87
	},
	{
		firstName: "Kistin",
		practiceTime: 133
	},
	{
		firstName: "Kotlyarov",
		practiceTime: 140
	},
	{
		firstName: "Peskov",
		practiceTime: 10
	},
];
// Напишем функцию, которая умеет принимать неограниченное число аргументов, и находить максимум среди них
function findMax() {
	const values = arguments; // arguments - переменная доступная внутри каждой функции, которая содержит в себе все аргументы,	переданные в функцию. Является псевдомассивом.
	let maxValue = -Infinity;
	// Так как arguments является псевдомассивом, мы не можем применять к нему новые методы массивов такие как forEach или reduce, поэтому будем итерировать по старинке.
	for (let index = 0; index < values.length; index++) {
		if (values[index] > maxValue) maxValue = values[index];
	}
	return maxValue;
};

// Мы должны передавать в нашу функции только числа, а в наших массивах содержаться объекты, поэтому сначала создадим массивы 	только со значениями времени отработанными студентами.
const group1PracticeTime = studentsGroup1PracticeTime.map((student) =>
	student.practiceTime);
const group2PracticeTime = studentsGroup2PracticeTime.map((student) =>
	student.practiceTime);

// Теперь можем вызывать нашу функцию поиска максимального значения.Она принимает множество числовых аргументов, а у нас есть только массив, вот тут нам и поможет оператор spread.

const maxTimeFromGroup1 = findMax(...group1PracticeTime); //...group1PracticeTime - вытянет из массива все элементы и передаст их в функцию как отдельные переменные.
// Это аналогично страшной и неудобной записи:
// findMax(group1PracticeTime[0], group1PracticeTime[1], group1PracticeTime[2], group1PracticeTime[3] group1PracticeTime[4])
console.log('maxTimeFromGroup1: ', maxTimeFromGroup1); // 160
const maxTimeFromGroup2 = findMax(...group2PracticeTime);
console.log('maxTimeFromGroup2: ', maxTimeFromGroup2); // 140
// Давайте также найдем максимально отработанное время среди двух групп.Мы можем сделать это передав данные обоих массивов в функцию таким образом:
// findMax(...group1PracticeTime, ...group2PracticeTime);
// А можем объединить два массива в один - это очень частая операция и оператор расширения(spread) очень в этом помогает.
const bothGroupsTime = [...group1PracticeTime,
...group2PracticeTime];
// Для объединения двух массивов нам нужно вытащить их элементы в один общий массив, поэтому мы объявляем новый массив, а в качестве его элементов делаем расширение элементов первого и второго массива.Также мы могли бы добавить в него и другие элементы.
const maxTimeBothGroups = findMax(...bothGroupsTime);
console.log('maxTimeBothGroups: ', maxTimeBothGroups); // 160