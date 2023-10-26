"use strict";

// Добавляем каталог товаров в константу
const productsCatalog = document.querySelector('.productsCatalog');

// localStorage.setItem('name1', JSON.stringify(['review1', 'review2']));
// localStorage.setItem('name2', JSON.stringify(['review1', 'review2']));
// localStorage.setItem('name3', JSON.stringify(['review45', 'review46']));

//Обработка каждого товара
for (let i = 0; i < localStorage.length; ++i) {
	// Создание карточки товара
	const productCard = document.createElement('div');
	productCard.className = "productCard";
	productsCatalog.append(productCard);
	//Внесение названия товара в карточку
	const productName = document.createElement('a');
	productName.className = "productName";
	productName.innerHTML = localStorage.key(i);
	productCard.append(productName);

	// Создание блока с отзывами
	let productReviews = document.createElement('div');
	productReviews.className = "productReviews";
	productReviews.innerHTML = '<h3>Отзывы:</h3>';
	productCard.append(productReviews);
	// // Обработка каждого отзыва
	let storedUsername = JSON.parse(localStorage.getItem(localStorage.key(i)));
	if (storedUsername.length === 0) {
		let some = document.createElement('p');
		some.innerHTML = 'Отзывов пока нет';
		productReviews.append(some);
	}
	else {
		// Вывод отзывов для данного товара
		storedUsername.forEach((review, index) => {
			let reviewText = document.createElement('p');
			reviewText.className = "reviewText";
			reviewText.innerHTML = review;
			productReviews.append(reviewText);

			// Создание кнопки удаления отзыва
			let deleteButton = document.createElement('button');
			deleteButton.className = "deleteReview";
			deleteButton.innerHTML = 'Удалить';
			productReviews.append(deleteButton);

			// Удаления отзыва при нажатии на него
			function deleteReview(event) {
				// console.log(storedUsername);
				// console.log(productName.innerHTML);
				// console.log(review);
				storedUsername.splice(index, 1);

				// storedUsername = storedUsername.splice(event.target, 1);
				localStorage.setItem(productName.innerHTML, JSON.stringify(storedUsername));
				// console.log(storedUsername);
			}
			deleteButton.addEventListener('click', deleteReview);
		})
	}

	// Вывод отзывов при нажатии на продукт
	function showReviews(event) {
		productReviews.classList.toggle('show');
	}
	productName.addEventListener('click', showReviews);

}









// const product = [
// 	"Apple iPhone 13",
// 	{
// 		name: "Alex",
// 		age: 25
// 	}
// ];

// // Массив товаров и отзывов на них для начальной загрузки
// const initialData = [
// 	{
// 		product: "Apple iPhone 13",
// 	},
// 	{
// 		product: "Samsung Galaxy Z Fold 3",
// 	},
// 	{
// 		product: "Sony PlayStation 5",
// 	},
// ];
// const initialData = [
// 	{
// 		product: "Apple iPhone 13",
// 		reviews: [
// 			{
// 				id: 1,
// 				text: "Отличный телефон! Батарея держится долго.",
// 			},
// 			{
// 				id: 2,
// 				text: "Камера супер, фото выглядят просто потрясающе.",
// 			},
// 		],
// 	},
// 	{
// 		product: "Samsung Galaxy Z Fold 3",
// 		reviews: [
// 			{
// 				id: 3,
// 				text: "Интересный дизайн, но дорогой.",
// 			},
// 		],
// 	},
// 	{
// 		product: "Sony PlayStation 5",
// 		reviews: [
// 			{
// 				id: 4,
// 				text: "Люблю играть на PS5, графика на высоте.",
// 			},
// 		],
// 	},
// ];

// Обработка каждого существующего товара
// initialData.forEach((good) => {
// 	// Создание карточки товара
// 	const productsCatalog = document.querySelector('.productsCatalog');
// 	// productsCatalog.innerHTML = '<div class="productCard"></div>';
// 	let productCard = document.createElement('div');
// 	// productsCatalog.innerHTML = '<p class="productName">' + good.product + '</p>';
// 	productCard.className = "productCard";
// 	productsCatalog.append(productCard);
// 	//Внесение названия товара в карточку
// 	let productName = document.createElement('a');
// 	productName.className = "productName";
// 	productName.innerHTML = good.product;
// 	productCard.append(productName);

// Создание блока с отзывамиs
// let productReviews = document.createElement('div');
// productReviews.className = "productReviews";
// productReviews.innerHTML = '<h3>Отзывы:</h3>';
// productCard.append(productReviews);
// // // Обработка каждого отзыва
// let reviewText = document.createElement('p');
// reviewText.className = "reviewText";
// reviewText.innerHTML = reviewsOne;
// productReviews.append(reviewText);
// const deleteButton = document.createElement('button');
// deleteButton.textContent = 'Удалить';
// deleteButton.classList.add('delete-button');
// // deleteButton.setAttribute('data-product', product);
// // deleteButton.setAttribute('data-review', review);
// productReviews.appendChild(deleteButton);


// Создание формы для добавления отзыва
// let addReview = document.createElement('form');
// addReview.className = "addReview";
// addReview.id = "form";
// addReview.innerHTML = '<textarea class="review" id="review" name="review" rows="5" cols="33" required></textarea><br><input class="submitButton" type="submit">';
// productReviews.append(addReview);


// })



// Проверка длины отзыва
// function checkReviewLength(review) {
// 	if (review.length < 50 || review.length > 500) {
// 		return 'Отзыв должен содержать от 50 до 500 символов.';
// 	}
// }
// Функция публикации отзыва
// function handleFormSubmit(event) {
// 	// Отмена отправки формы
// 	event.preventDefault();
// 	const addReview = event.target;
// 	let newReview = addReview.querySelector('.review').value;
// 	// Запуск и обработка проверки длины отзыва
// 	let checkReviewLengthResult = checkReviewLength(newReview);
// 	if (checkReviewLengthResult) {
// 		console.log(checkReviewLengthResult);
// 		let checkReviewText = document.createElement('p');
// 		checkReviewText.className = "checkReviewText";
// 		checkReviewText.innerHTML = checkReviewLengthResult;
// 		addReview.after(checkReviewText);
// 	}
// 	// Создание отзыва
// 	let reviewTextNew = document.createElement('p');
// 	reviewTextNew.className = "reviewText";
// 	reviewTextNew.innerHTML = newReview;
// 	addReview.before(reviewTextNew);
// 	addReview.reset();
// }
// // Обработчик события отправки формы
// const applicantFormContainer = document.querySelector(".productsCatalog");
// applicantFormContainer.addEventListener('submit', handleFormSubmit);
