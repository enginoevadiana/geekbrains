
// фильтр по атрибуту data-
const filterElementsByDataAttribute = (attributeName, maxPrice) => {
	const elements = Array.from(document.querySelectorAll(`[${attributeName}]`));
	elements.forEach(element => {
		const price = parseFloat(element.getAttribute(attributeName));
		if (price > maxPrice) {
			element.style.display = 'none';
		}
	});
};

filterElementsByDataAttribute('data-price', 50);

// сортировка по атрибуту data-
const sortElementsByDataAttribute = attributeName => {
	const rating = document.querySelector('.rating');
	const elements = Array.from(rating.querySelectorAll(`[${attributeName}]`));
	elements.sort((a, b) => {
		const ratingA = parseInt(a.getAttribute(attributeName));
		const ratingB = parseInt(b.getAttribute(attributeName));
		// сортировка по убыванию
		// return ratingB - ratingA;
		// сортировка по возрастанию
		return ratingA - ratingB;
	});
	elements.forEach(element => {
		rating.appendChild(element);
	});
};

sortElementsByDataAttribute('data-rating');

const price = document.querySelector('.price');
price.addEventListener('click', function (e) {
	// блок на который мы поставили слушатель
	console.log(this);
	// конкретный элемент, по которому кликнули
	console.log(e.target);
});