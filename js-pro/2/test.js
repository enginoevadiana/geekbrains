"use strict";

/*
###Задание 2
Вы разрабатываете систему отзывов для вашего веб-сайта. Пользователи могут 
оставлять отзывы, но чтобы исключить слишком короткие или слишком длинные 
сообщения, вы решаете установить ограничение, отзыв должен быть не менее 50 
символов в длину и не более 500. В случае неверной длины, необходимо выводить 
сообщение об ошибке, рядом с полем для ввода.

Создайте HTML-структуру. На странице должны отображаться все товары и отзывы 
под каждым товаром. Под каждым блоком отзывов, должна быть возможность добавить 
отзыв для конкретного продукта.

При добавлении отзыва, он должен отображаться на странице под предыдущими 
отзывами, а не заменять их.
Массив initialData должен использоваться для начальной загрузки данных 
при запуске вашего приложения.
*/

const initialData = [
	{
		product: "Apple iPhone 13",
		reviews: [
			{
				id: 1,
				text: "Отличный телефон! Батарея держится долго.",
			},
			{
				id: 2,
				text: "Камера супер, фото выглядят просто потрясающе.",
			},
		],
	},
	{
		product: "Samsung Galaxy Z Fold 3",
		reviews: [
			{
				id: 3,
				text: "Интересный дизайн, но дорогой.",
			},
		],
	},
	{
		product: "Sony PlayStation 5",
		reviews: [
			{
				id: 4,
				text: "Люблю играть на PS5, графика на высоте.",
			},
		],
	},
];



// console.log(initialData[0]);

let idProduct = 0;

initialData.forEach((num) => {
	// Создание карточки товара
	const productsCatalog = document.querySelector('.productsCatalog');
	let productCard = document.createElement('div');
	productCard.className = "productCard";
	productsCatalog.append(productCard);

	// Создание параграфов с названием товара
	let productName = document.createElement('p');
	productName.className = "productName";
	productName.innerHTML = num.product;
	productCard.append(productName);

	// Создание блока с отзывами
	let productReviews = document.createElement('div');
	productReviews.className = "productReviews" + idProduct;
	productReviews.innerHTML = '<h3>Отзывы:</h3>';
	productCard.append(productReviews);

	// Создание параграфов со всеми существующими отзывами
	num.reviews.forEach((review) => {
		let reviewText = document.createElement('p');
		reviewText.className = "reviewText";
		reviewText.innerHTML = review.text;
		productReviews.append(reviewText);
	})

	// Создание формы добавления отзыва
	let addReview = document.createElement('form');
	addReview.className = "addReview";
	addReview.id = "form";
	// addReview.method = 'POST';
	addReview.innerHTML = '<textarea class="review" id="review" name="review" rows="5" cols="33" maxlength="500" required></textarea><br><input class="submitButton" type="submit">';
	// addReview.innerHTML = '<textarea class="review' + idProduct + '" id="review" name="review" rows="5" cols="33" maxlength="500" minlength="50" required></textarea><br><input class="submitButton" type="submit">';
	productReviews.append(addReview);

	// let newReview = document.querySelector('.review').value;
	// console.log(newReview);

	// let submitButton = document.createElement('input');
	// submitButton.className = "submitButton";
	// submitButton.method = 'POST';
	// submitButton.type = 'submit';
	// submitButton.innerHTML = 'Добавить';
	// addReview.append(submitButton);


	// console.log(num);
	// console.log(num.product);




})

let submits = document.querySelectorAll('.productCard');

for (let submit of submits) {
	// при клике на какой-либо из элементов срабатывает следующая функция, мы получаем доступ к текущему элементу
	submit.addEventListener('submit', function (e) {
		e.preventDefault();
		console.log(e.target);
		console.log(e.target.classList);

		let textareaBox = document.querySelector('.' + e.target.className).querySelector('textarea');
		console.log(textareaBox.value);
		// проверяем нажимали ли на текущий фильтр раньше, если да,
		// if (e.target.classList.contains("clicked")) {
		// 	// то меняем значение на all
		// 	rateFilterText = "all";
		// 	e.target.classList.remove("clicked");
		// }
		// else {

		// }
	});
}

// function handleFormSubmit(event) {
// 	// let idCurrentProduct = productReviews.className;
// 	// console.log(idCurrentProduct);

// 	// let currentBlock = productReviews;
// 	// console.log(currentBlock);
// 	// console.log(productReviews);

// 	// console.log(applicantForm);
// 	// Просим форму не отправлять данные самостоятельно
// 	event.preventDefault();
// 	console.log('Отправка!');
// 	// Создание нового отзыва
// 	let newReview = document.querySelector('.review' + i).value;
// 	console.log(i);
// 	console.log(newReview);
// 	let reviewTextNew = document.createElement('p');
// 	reviewTextNew.className = "reviewText";
// 	reviewTextNew.innerHTML = newReview;
// 	// currentBlock.append(reviewTextNew);
// 	// productReviews.append(reviewTextNew);
// 	let addReview = document.querySelector('form');
// 	addReview.before(reviewTextNew);
// 	addReview.reset();

// 	// console.log(newReview);



// }
// const applicantForm = document.getElementById("form0");
// console.log(applicantForm);

// applicantForm.addEventListener('submit', handleFormSubmit);

// const applicantForm = document.querySelectorAll(".productCard");

// for (var i = 0, element; element = applicantForm[i]; i++) {
// 	element.addEventListener('submit', {
// 		handleEvent(event) {
// 			event.preventDefault();
// 			console.log('Отправка!');

// 			const className = event.currentTarget.className + idProduct;
// 			console.log(className);

// 			console.log(event);

// 			const currentBlock = '.' + event.currentTarget;
// 			// console.log(currentBlock);
// 			// console.log(event.currentTarget);
// 			// console.log('.' + event.currentTarget);
// 			let newReview = document.querySelector('.' + className).querySelector('.review').value;
// 			console.log(newReview);
// 			let reviewTextNew = document.createElement('p');
// 			reviewTextNew.className = "reviewText";
// 			reviewTextNew.innerHTML = newReview;
// 			// currentBlock.append(reviewTextNew);
// 			// productReviews.append(reviewTextNew);
// 			let addReview = document.querySelector('form');
// 			addReview.before(reviewTextNew);
// 			addReview.reset();
// 		}
// 	});
// }

// document.addEventListener("click", function (e) {
// 	console.log(e.target);
// });

// document.addEventListener('click', function () { console.log(this, arguments); });


// for (let i = 0; i < applicantForm.length; i++) {
// 	applicantForm[i].addEventListener("submit", handleFormSubmit);
// }

// for (var i = 0, element; element = applicantForm[i]; i++) {
// 	element.addEventListener("submit", handleFormSubmit);
// }

// for (var i = 0, element; element = applicantForm[i]; i++) {
// 	element.addEventListener("submit", handleFormSubmit);
// }

// element.addEventListener('submit',function(e){
// 	if(e.target && e.target.classList.contains('class-example')){
// 			//do something
// 	}
// });