"use strict";

/*
###Задание 1
Необходимо создать класс Library. Конструктор класса, должен принимать начальный 
список книг (массив) в качестве аргумента. Убедитесь, что предоставленный массив 
не содержит дубликатов; в противном случае необходимо выбросить ошибку.
1. Класс должен содержать приватное свойство #books.
2. Реализуйте геттер allBooks, который возвращает текущий список книг.
3. Реализуйте метод addBook(title), который позволяет добавлять книгу в список. 
Если книга с таким названием уже существует в списке, выбросьте ошибку с 
соответствующим сообщением.
4. Реализуйте метод removeBook(title), который позволит удалять книгу из списка 
по названию. Если книги с таким названием нет в списке, выбросьте ошибку с 
соответствующим сообщением.
5. Реализуйте метод hasBook(title), который будет проверять наличие книги в 
библиотеке и возвращать true или false в зависимости от того, есть ли такая 
книга в списке или нет.
*/

class Library {
	#books;

	constructor(booksList) {
		const booksUniqueList = new Set(booksList);

		if (booksUniqueList.size !== booksList.length) {
			throw new Error('Список книг содержит дубликаты.');
		}
		this.#books = booksList;
	}

	get allBooks() {
		return this.#books;
	}

	addBook(bookName) {
		if (this.#books.includes(bookName)) {
			throw new Error('Книга с таким названием уже существует.');
		}
		this.#books.push(bookName);
	}

	removeBook(bookName) {
		if (!(this.#books.includes(bookName))) {
			throw new Error('Книги с таким названием нет в списке.');
		}
		let index = this.#books.indexOf(bookName);
		this.#books.splice(index, 1);
	}

	bookListChecker(bookName) {
		if (this.#books.includes(bookName)) {
			return true;
		}
		else { return false; }
	}
}

// Создаем массив с книгами
let library = new Library(['Пиши, сокращай', 'Гарри Поттер и Узник Азкабана', 'Тайная опора', 'Тихий Дон']);

// Выводим текущий список книг
console.log(library.allBooks);

// Добавляем новую книгу
library.addBook('Война и мир');
console.log(library.allBooks);

// Удаляем книгу
library.removeBook('Тихий Дон');
console.log(library.allBooks);

// Проверяем наличие книг в списке
console.log(library.bookListChecker('Тихий Дон')); //false
console.log(library.bookListChecker('Гарри Поттер и Узник Азкабана')); //true

// Ошибки

// // Добавляем книгу с повторяющимся названием
// library.addBook('Пиши, сокращай');
// console.log(library.allBooks);

// // Удаляем несуществующую книгу
// library.removeBook('Анна Каренина');
// console.log(library.allBooks);