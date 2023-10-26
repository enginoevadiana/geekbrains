/* Создайте простое модальное окно, которое появляется при клике на кнопку "Открыть модальное окно" и закрывается при клике на кнопку "Закрыть". Модальное окно должно содержать заголовок "Модальное окно" и кнопку для закрытия. */

const openButton = document.querySelector('.openButton');
const closeButton = document.querySelector('.closeButton');
const modalWindow = document.querySelector('.modalWindow');


openButton.addEventListener('click', openWindow);

function openWindow() {
	modalWindow.classList.toggle('active');
	openButton.disabled = true;
}

closeButton.addEventListener('click', closeWindow);

function closeWindow() {
	modalWindow.classList.toggle('active');
	openButton.disabled = false;
}



