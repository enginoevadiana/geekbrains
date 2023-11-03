const bigImage = document.querySelector('.bigImage');
const nextImageButton = document.querySelector('.nextImage');
const prevImageButton = document.querySelector('.prevImage');
const littleImagesContainer = document.querySelector('.littleImagesContainer');

if (localStorage.getItem('lastPhoto') === null) {
	bigImage.src = 'https://i.pinimg.com/564x/9b/5f/f6/9b5ff629f3dc9beeab9942e591aaa21f.jpg';

	const newImage = document.createElement('img');
	newImage.classList.add('littleImage');
	newImage.src = 'https://i.pinimg.com/564x/9b/5f/f6/9b5ff629f3dc9beeab9942e591aaa21f.jpg';
	nextImageButton.before(newImage);
}
else {
	bigImage.src = (JSON.parse(localStorage.getItem('lastPhoto'))[0]);

	(JSON.parse(localStorage.getItem('lastPhoto'))).forEach(element => {
		const newImage = document.createElement('img');
		newImage.classList.add('littleImage');
		newImage.src = element;
		nextImageButton.before(newImage);
	});
}

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

