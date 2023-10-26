/* Определение текущего размера окна браузера:
Напишите функцию, которая будет выводить текущую ширину и высоту окна браузера при его изменении.
Подтверждение закрытия страницы: */

window.addEventListener(`resize`, event => {
	console.log(screen.availWidth);
	console.log(screen.availHeight);
}, false);

/* Создайте всплывающее окно или диалоговое окно, которое появляется при попытке закрыть вкладку браузера и спрашивает пользователя, уверен ли он в своем решении закрыть страницу. */
window.addEventListener('beforeunload', function (event) {
	// Отменяем поведение по умолчанию
	event.preventDefault()

	// Chrome требует наличия returnValue
	event.returnValue = ''
})




