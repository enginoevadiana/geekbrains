// Объект робот-пылесос.
const VacuumCleaner = {
	Model: "vacuum cleaner",
	counterOfStarts: 0,
	isFull: false,
	isObstacle: false,
	startCleaning: function () {
		this.counterOfStarts++;
		console.log('I am the method of VacuumCleaner');
		console.log('I am cleaning... I have been started: ',
			this.counterOfStarts, 'times.');
	},
	goCharge: function () {
		console.log('I am the method of VacuumCleaner');
		console.log('I am going to charge...');
	}
};

const DancingSeries = {
	model: "dancing series",
	power: 200,
	batterySize: 2100,
	boxSize: 0.5,
	workTime: 45,
	isUVLampOn: false,
	switchUVLamp: function () {
		console.log('I am the method of DancingSeries');
		this.isUVLampOn = !this.isUVLampOn;
		console.log(`UV lamp is ${this.isUVLampOn ? 'working' :
			'not working'}.`);
	},
	__proto__: VacuumCleaner,
};

// Конструктор объекта робот-пылесос.
function Samba(serailNumber) {
	// Создаем свойства объекта, используя this.
	this.serialNumber = serailNumber;
	this.model = "Samba-1";
	this.power = 250;
	this.batterySize = 2500;
	this.workTime = 50;
	// Делаем ссылку на прототип от родителя.
	// this.__proto__ = DancingSeries;
}
// Вместо this.__proto__ можно использовать:
Samba.prototype = DancingSeries;

// Создадим экземпляр нового объекта.
const Samba1 = new Samba(1014778);
console.log(Samba1.serialNumber); // 1014778
console.log(Samba1.startCleaning()); // I am the method of VacuumCleaner
// I am cleaning... I have been started:  1 times.

// Посмотрим на свойства __proto__ и prototype
console.log(Samba1.__proto__); // {model: "dancing series", power: 200, batterySize: 2100, boxSize: 0.5, workTime: 45, ...}
console.log(Samba1.prototype); // undefined
console.log(Samba1.__proto__ === Samba.prototype); // true

// Создадим 10 роботов пылесосов Samba, как на конвейере.
const robots = [];
for (let index = 0; index < 10; index++) {
	// Создадим экземпляр нового объекта и добавляем его в массив наших роботов, каждый с уникальным серийным номером.
	robots.push(new Samba(index));
}
console.log(robots[3].serialNumber); // 3
console.log(robots[7].serialNumber); // 7

console.log(robots);