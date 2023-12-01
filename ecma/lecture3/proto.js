// Прототип

// Объект робот-пылесос.
const VacuumCleaner = {
	Model: "vacuum cleaner",
	counterOfStarts: 0,
	isFull: false,
	isObstacle: false,
	startCleaning: function () {
		this.counterOfStarts++;
		// Добавим дополнительный вывод, чтобы знать чей метод мы вызвали.
		console.log('I am the method of VacuumCleaner');
		console.log('I am cleaning... I have been started: ',
			this.counterOfStarts, 'times.');
	},
	goCharge: function () {
		// Добавим дополнительный вывод, чтобы знать чей метод мы вызвали.
		console.log('I am the method of VacuumCleaner');
		console.log('I am going to charge...');
	}
};

// Мы оставили в объекте только служебные свойства и методы, при этом мы убрали даже свойства isUVLampOn - так как это свойство будет не во всех моделях пылесосов. Теперь мы хотели бы создать пылесос с конкретными характеристиками, но чтобы не создавать объект с нуля и прописывать все свойства мы можем взять базовую модель VacuumCleaner и наследоваться от неё, установив у нового объекта свойства прототипа __proto__ на родительский объект и добавив новые свойства

// Объект робот-пылесос.
const DancingSeries = {
	// Объявляем новые свойства и переопределить свойство model.
	model: "dancing series",
	power: 200,
	batterySize: 2100,
	boxSize: 0.5,
	workTime: 45,
	isUVLampOn: false,
	// Добавляем новый метод.
	switchUVLamp: function () {
		// Добавим дополнительный вывод, чтобы знать чей метод мы вызвали.
		console.log('I am the method of DancingSeries');
		this.isUVLampOn = !this.isUVLampOn;
		console.log(`UV lamp is ${this.isUVLampOn ? 'working' :
			'not working'}.`);
	},
	// Делаем ссылку на прототип от родителя.
	__proto__: VacuumCleaner,
};

// Наш новый объект DancingSeries - это тоже некий общий объект для создания серии пылесосов с одинаковым функционалом, и разными характеристиками. Далее на основе него мы уже можем создать несколько конкретных моделей пылесосов, переписав в них характеристики. Давайте создадим робот Samba:

const Samba = {
	// Обновляем свойства под конкретную модель.
	model: "Samba-1",
	power: 250,
	batterySize: 2500,
	workTime: 50,
	// Делаем ссылку на прототип от родителя.
	__proto__: DancingSeries,
};

// Давайте попробуем вызвать методы и свойства нашего нового объекта Samba:

// Обращение к свойствам объекта.
console.log(Samba.model); // "Samba-1"
console.log(Samba.isFull); // false
// Вызов методов объекта.
Samba.startCleaning();
// I am the method of VacuumCleaner
// 'I am cleaning... I have been started: 1 times.'
Samba.isUVLampOn = true;
Samba.switchUVLamp();
// I am the method of DancingSeries
// 'UV lamp is not working.'
Samba.goCharge();
// I am the method of VacuumCleaner
// 'I am going to charge...'

// Все свойства и методы доступны при обращении к объекту Samba, и как мы можем видеть, когда их нет в самом объекте движок JavaScript пытается найти их в родительском объекте, который указан в свойстве __proto__, и будет искать по цепочки прототипов пока не найдёт, либо получит undefined, если свойство или метод не будет найдено даже в самом верхнем объекте Object.

// Если мы попытаемся в потомке переопределить свойство или метод из родительского объекта, то родительский объект остается нетронутым, а в дочерний запишется новое свойство или метод, и оно будет вызываться при обращении к нему, давайте создадим еще одного робота, и переопределим в нем метод startCleaning:

// Объект робот-пылесос.
const Djaiv = {
	// Обновляем свойства под конкретную модель.
	model: "Djaiv-1",
	power: 250,
	batterySize: 2500,
	workTime: 50,
	// Переопределим метод startCleaning.
	startCleaning: function () {
		this.counterOfStarts++;
		// Добавим дополнительный вывод, чтобы знать чей метод мы вызвали.
		console.log('I am the method of Djaiv');
		console.log('I am Djaiv, and I am cleaning... I have been started: ', this.counterOfStarts, 'times.');
	},
	// Делаем ссылку на прототип от родителя.
	__proto__: DancingSeries,
};

// И попробуем вызвать методы пылесоса Samba и Djaiv, чтобы увидеть разницу:

Samba.startCleaning();
// I am the method of VacuumCleaner
// 'I am cleaning... I have been started: 1 times.'
Djaiv.startCleaning();
// I am the method of Djaiv
// I am Djaiv, and I am cleaning... I have been started:  1 times.

// Мы можем видеть, что объект Samba использует родительский метод и он не изменился, а Djaiv использует свой собственный метод.