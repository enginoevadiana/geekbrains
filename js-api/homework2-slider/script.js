/* Вашей задачей является создание веб-слайдера для отображения изображений на веб-странице. Слайдер должен позволять переключаться между изображениями и отображать их в центре экрана.

1. Создайте интерфейс веб-страницы, который включает в себя следующие элементы:

a. Контейнер для отображения текущего изображения.
b. Кнопки "Предыдущее изображение" и "Следующее изображение" для переключения между изображениями.
c. Навигационные точки (индикаторы) для быстрого переключения между изображениями.

2. Используйте HTML для создания элементов интерфейса.

3. Используйте JavaScript для обработки событий:

a. При клике на кнопку "Предыдущее изображение" должно отображаться предыдущее изображение.
b. При клике на кнопку "Следующее изображение" должно отображаться следующее изображение.
c. При клике на навигационные точки, слайдер должен переключаться к соответствующему изображению.

4. Слайдер должен циклически переключаться между изображениями, то есть после последнего изображения должно отображаться первое, и наоборот.

5. Добавьте стилизацию для слайдера и элементов интерфейса с использованием CSS для улучшения внешнего вида. */

const bigImage = document.querySelector('.bigImage');
const nextImageButton = document.querySelector('.nextImage');
const prevImageButton = document.querySelector('.prevImage');
const littleImagesContainer = document.querySelector('.littleImagesContainer');

const slides = Array.from(littleImagesContainer.querySelectorAll('img'));
const slideCount = slides.length;
let slideIndex = 0;

prevImageButton.addEventListener('click', showPreviousSlide);
nextImageButton.addEventListener('click', showNextSlide);

function showPreviousSlide() {
	slideIndex = (slideIndex - 1 + slideCount) % slideCount;
	bigImage.src = slides[slideIndex].src;
}

function showNextSlide() {
	slideIndex = (slideIndex + 1) % slideCount;
	bigImage.src = slides[slideIndex].src;
}

slides.forEach(item => {
	item.addEventListener('click', () => {
		bigImage.src = item.src;
	});
});

