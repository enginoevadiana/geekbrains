// Надо запустить сервер (GoLive)
// Функция, которая устанавливает куки с указанными именем, значением и сроком действия в днях 

let setCookie = (name, value, days) => {
	let expirationDate = new Date();
	expirationDate.setDate(expirationDate.getDate() + days);

	let cookieValue = encodeURIComponent(value) + '; expires=' + expirationDate.toUTCString();
	document.cookie = name + '=' + cookieValue;
};

setCookie('username', 'John Doe', 7);
setCookie('userinfo', 'Mister', 5);
setCookie('userinfo', 'Mister2', 55);

// Функция, которая возвращает значение куки с указнным именем

let getCookie = (name) => {
	let cookies = document.cookie.split(';');
	for (let cookie of cookies) {
		let [cookieName, cookieValue] = cookie.trim().split('=');
		if (cookieName === name) {
			return decodeURIComponent(cookieValue);
		}
	}
	return null;
};

let username = getCookie('username');
console.log('Значение куки "username":', username);

// Функция, которая удаляет куки с указнным именем

let deleteCookie = (name) => {
	document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
};

deleteCookie('username');
