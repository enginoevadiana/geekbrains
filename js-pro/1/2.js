"use strict";
/*
###Задание 2
Вы управляете рестораном, в котором работают разные повара, специализирующиеся 
на определенных блюдах. Клиенты приходят и делают заказы на разные блюда.
Необходимо реализовать функцию newOrder. Создавать вспомогательные функции, 
коллекции, не запрещается. Старайтесь использовать коллекции Map/Set, где это 
актуально. Представленный ниже код должен работать.

Повара и их специализации:
Олег - специализация: Пицца.
Андрей - специализация: Суши.
Анна - специализация: Десерты.

Блюда, которые могут заказать посетители:
Пицца "Маргарита"
Пицца "Пепперони"
Пицца "Три сыра"
Суши "Филадельфия"
Суши "Калифорния"
Суши "Чизмаки"
Суши "Сеякемаки"
Десерт Тирамису
Десерт Чизкейк
*/

// Специализация поваров
const chefSpecialization = new Map();

chefSpecialization.set("Пицца", "Олег");
chefSpecialization.set("Суши", "Андрей");
chefSpecialization.set("Десерты", "Анна");

// Блюда из меню и их специализация
const menuDish = new Map();

menuDish.set("Маргарита", "Пицца");
menuDish.set("Пепперони", "Пицца");
menuDish.set("Три сыра", "Пицца");
menuDish.set("Филадельфия", "Суши");
menuDish.set("Калифорния", "Суши");
menuDish.set("Чизмаки", "Суши");
menuDish.set("Сеякемаки", "Суши");
menuDish.set("Тирамису", "Десерты");
menuDish.set("Чизкейк", "Десерты");

// Ищем повара для приготовления блюда
function findChefForDish(dishName) {
	const dishSpecialization = menuDish.get(dishName);
	const chefName = chefSpecialization.get(dishSpecialization);
	return chefName ? `Готовит повар: ${chefName}` : "Блюдо не найдено";
}
// console.log(findChefForDish("Тирамису"));

// Конструктор заказа
function Order(id, name, order) {
	this.orderId = id;
	this.clientName = name;
	this.clientOrder = order;
}

// Выводим заказ в консоль
function displayOrder(orderName) {
	console.log("Клиент: " + orderName.clientName);
	console.log("Заказ №: " + orderName.orderId);
	console.log("Состав заказа:");
	orderName.clientOrder.forEach((dish) => {
		console.log(dish.join(' '));
		console.log(findChefForDish(dish[0]));
	})
	console.log(" ");
}

// Заказы
let orderOne = new Order(1, "Иван", [["Маргарита", 1], ["Пепперони", 2], ["Чизкейк", 1]]);
let orderTwo = new Order(2, "Елизавета", [["Филадельфия", 5], ["Калифорния", 3]]);
let orderThree = new Order(3, "Павел", [["Филадельфия", 1], ["Трубочка с вареной сгущенкой", 2]]);
let orderFour = new Order(4, "Эльвира", [["Чизмаки", 1], ["Три сыра", 1], ["Чизкейк", 1], ["Мохито", 1]]);

displayOrder(orderOne);
displayOrder(orderTwo);
displayOrder(orderThree);
displayOrder(orderFour);


// function displayOrder(orderName) {
// 	console.log("Клиент: " + orderName.clientName + ";\nзаказ: ");
// 	orderName.clientOrder.forEach((dish) => {
// 		console.log(dish.join(' '));
// 		// return ('Блюдо ', arrDishes++, ': ' + dish)
// 	})
// }