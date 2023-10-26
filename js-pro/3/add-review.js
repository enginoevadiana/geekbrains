// Функция публикации отзыва
function handleFormSubmit(event) {
	// Отмена отправки формы
	event.preventDefault();
	const addReviewForm = document.querySelector('form');

	let newReviewName = (addReviewForm.querySelector('.reviewName')).value;
	let newReviewText = (addReviewForm.querySelector('.reviewText')).value;
	let arr = JSON.parse(localStorage.getItem(newReviewName)) || [];
	arr.push(newReviewText);
	localStorage.setItem(newReviewName, JSON.stringify(arr));
	addReviewForm.reset();
}
// Обработчик события отправки формы
const applicantFormContainer = document.querySelector(".addReview");
applicantFormContainer.addEventListener('submit', handleFormSubmit);