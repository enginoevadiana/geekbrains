// Устанавливать прототип объекта можно используя свойство __proto__, но также в языке есть два метода для чтения и установки прототипа объекта - это getPrototypeOf и setPrototypeOf

// Метод getPrototypeOf позволяет получить ссылку на объект прототип

// Давайте узнаем какой объект является прототипом для нашего объекта Djaiv, потом посмотрим кто является его прототипом и кто является прототипом его прототипа:

const DjaivProto = Object.getPrototypeOf(Djaiv);
console.log(DjaivProto.model); // dancing series
const DjaivProtoProto = Object.getPrototypeOf(DjaivProto);
console.log(DjaivProtoProto.model); //vacuum cleaner
const DjaivProtoProtoProto = Object.getPrototypeOf(DjaivProtoProto);
console.log(DjaivProtoProtoProto); // [object Object]

// В последнем прототипе мы не стали смотреть свойство model, т.к. там его нет, мы добрались до самого высокого родителя, которым является объект Object, все объекты наследуются от него. Если мы попытаемся получить его прототип, то в ответ получим null, т.к. Объект Object не имеет прототипа.



// Метод setPrototypeOf принимает два аргумента, первый это объект для которого устанавливается прототип, второй - это объект который будет прототипом для первого.

// Для начала создадим объект серии

// Объект робот-пылесос.
const MusicSeries = {
	// Объявляем новые свойства и переопределяем свойство model.
	model: "music series",
	power: 200,
	batterySize: 2100,
	boxSize: 0.5,
	workTime: 45,
	// Добавляем новый метод.
	startWipe: function () {
		// Добавим дополнительный вывод, чтобы знать чей метод мы вызвали.
		console.log('I am the method of MusicSeries');
		console.log('I am starting to wipe the floor...');
	},
	// Делаем ссылку на прототип от родителя.
	__proto__: VacuumCleaner,
};

// Создадим нашего нового робота:

// Объект робот-пылесос.
const Blues = {
	// Обновляем свойства под конкретную модель.
	model: "Bluees-1",
	power: 250,
	batterySize: 2500,
	workTime: 50,
};
// Установим прототип для робота.
Object.setPrototypeOf(Blues, MusicSeries);

// Теперь можем попробовать вызвать методы наших роботов, проверяя кто является их прототипом:

if (Object.getPrototypeOf(Djaiv).model === 'dancing series') {
	Djaiv.startCleaning(); //
}
if (Object.getPrototypeOf(Blues).model === 'music series') {
	Blues.startWipe(); //
}
// Если мы не будем проверять прототип и просто вызовем метод чужого прототипа мы, естественно, получим ошибку.
Djaiv.startWipe(); // Uncaught TypeError: Djaiv.startWipe is not a function