/* сделать кнопку "Купить", которая при нажатии меняет значение на "Товар добавлен в корзину" на 2 секунды */

const buyButton = document.querySelector('.buy');

buyButton.addEventListener('click', (event) => {
	if (event.isTrusted) {
		buyButton.textContent = 'Товар добавлен в корзину';
		setTimeout(() => {
			buyButton.textContent = 'Купить';
		}, 2000)
	}
})