// Функция публикации отзыва
function handleFormSubmit(event) {
	// Отмена отправки формы
	event.preventDefault();
	let addReviewForm = document.querySelector('form');
	let newReviewText = addReviewForm.querySelector('.reviewText');
	let newReviewTextValue = newReviewText.value;
	console.log(JSON.stringify(newReviewTextValue));
	addReviewForm.reset();
}
// Обработчик события отправки формы
const applicantFormContainer = document.querySelector(".addReview");
applicantFormContainer.addEventListener('submit', handleFormSubmit);