/* Вы должны создать веб-страницу, которая позволяет пользователю динамически управлять элементами на странице. Ниже приведены основные требования и функциональность:
На странице должны быть кнопки "Добавить элемент", "Удалить элемент" и "Клонировать элемент".
При нажатии на кнопку "Добавить элемент" на страницу добавляется новый квадратный элемент (<div>) с размерами 100x100 пикселей. Этот элемент должен иметь класс .box и содержать текст, указывающий порядковый номер элемента (1, 2, 3 и так далее).
При нажатии на кнопку "Удалить элемент" удаляется последний добавленный элемент, если таковой имеется.
При нажатии на кнопку "Клонировать элемент" создается копия последнего добавленного элемента и добавляется на страницу.
Все элементы имеют класс .box и стилизованы с помощью CSS .
Элементы могут быть добавлены, удалены и клонированы в любом порядке и в любом количестве. */

let container = document.getElementById('container');

let addElement = document.getElementById('addButton');

let cloneElement = document.getElementById('cloneButton');

let deleteElement = document.getElementById('removeButton');

addElement.addEventListener('click', function (event) {
	const newBox = document.createElement("div");
	newBox.classList.add('box');
	newBox.textContent = container.children.length + 1;
	container.append(newBox);
})

deleteElement.addEventListener('click', function (event) {
	const lastBox = container.lastChild;
	container.removeChild(lastBox);
})

cloneElement.addEventListener('click', function (event) {
	const lastBox = container.lastChild;
	const clone = lastBox.cloneNode(true);
	container.append(clone);
})




