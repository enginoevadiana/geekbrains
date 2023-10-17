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

// Массив товаров и отзывов на них для начальной загрузки
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

// Обработка каждого существующего товара
initialData.forEach((good) => {
	// Создание карточки товара
	const productsCatalog = document.querySelector('.productsCatalog');
	let productCard = document.createElement('div');
	productCard.className = "productCard";
	productsCatalog.append(productCard);
	// Внесение названия товара в карточку
	let productName = document.createElement('p');
	productName.className = "productName";
	productName.innerHTML = good.product;
	productCard.append(productName);
	// Создание блока с отзывами
	let productReviews = document.createElement('div');
	productReviews.className = "productReviews";
	productReviews.innerHTML = '<h3>Отзывы:</h3>';
	productCard.append(productReviews);
	// Обработка каждого отзыва
	good.reviews.forEach((review) => {
		let reviewText = document.createElement('p');
		reviewText.className = "reviewText";
		reviewText.innerHTML = review.text;
		productReviews.append(reviewText);
	})
	// Создание формы для добавления отзыва
	let addReview = document.createElement('form');
	addReview.className = "addReview";
	addReview.id = "form";
	addReview.innerHTML = '<textarea class="review" id="review" name="review" rows="5" cols="33" required></textarea><br><input class="submitButton" type="submit">';
	productReviews.append(addReview);
})
// Проверка длины отзыва
function checkReviewLength(review) {
	if (review.length < 50 || review.length > 500) {
		return 'Отзыв должен содержать от 50 до 500 символов.';
	}
}
// Функция публикации отзыва
function handleFormSubmit(event) {
	// Отмена отправки формы
	event.preventDefault();
	const addReview = event.target;
	let newReview = addReview.querySelector('.review').value;
	// Запуск и обработка проверки длины отзыва
	let checkReviewLengthResult = checkReviewLength(newReview);
	if (checkReviewLengthResult) {
		console.log(checkReviewLengthResult);
		let checkReviewText = document.createElement('p');
		checkReviewText.className = "checkReviewText";
		checkReviewText.innerHTML = checkReviewLengthResult;
		addReview.after(checkReviewText);
	}
	// Создание отзыва
	let reviewTextNew = document.createElement('p');
	reviewTextNew.className = "reviewText";
	reviewTextNew.innerHTML = newReview;
	addReview.before(reviewTextNew);
	addReview.reset();
}
// Обработчик события отправки формы
const applicantFormContainer = document.querySelector(".productsCatalog");
applicantFormContainer.addEventListener('submit', handleFormSubmit);
