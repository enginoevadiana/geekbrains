const usersContainer = document.querySelector('.usersContainer');
let usersList;

if (localStorage.getItem('usersList') === null || localStorage.getItem('usersList') === undefined) {
	// console.log('localstorage is not here');
	loadUsers();
}
else {
	// console.log('localstorage here');
	usersList = JSON.parse(localStorage.getItem('usersList'));
	if (usersList.length === 0) {
		loadUsers();
	}
	else {
		showUsersList(usersList);
	}
}

async function fetchUsers() {
	try {
		const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
		const users = await response.json();
		localStorage.setItem('usersList', JSON.stringify(users));
		// console.log('fetchUsers is working');
		return users;
	} catch (error) {
		console.error('Ошибка при загрузке фотографий:', error);
		return [];
	}
}

async function loadUsers() {
	const usersList = await fetchUsers();
	showUsersList(usersList);
}

function showUsersList(usersList) {
	usersList = JSON.parse(localStorage.getItem('usersList'));
	usersContainer.textContent = '';
	usersList.forEach(user => {
		let userItem = document.createElement('div');
		userItem.classList.add('userItem');
		usersContainer.appendChild(userItem);

		let userName = document.createElement('p');
		userName.classList.add('userName');
		userName.textContent = user.name;
		userItem.appendChild(userName);

		let userEmail = document.createElement('p');
		userEmail.classList.add('userEmail');
		userEmail.textContent = user.email;
		userItem.appendChild(userEmail);

		let userPhone = document.createElement('p');
		userPhone.classList.add('userPhone');
		userPhone.textContent = user.phone;
		userItem.appendChild(userPhone);

		let deleteButton = document.createElement('button');
		deleteButton.classList.add('deleteButton');
		deleteButton.textContent = 'Delete';
		userItem.appendChild(deleteButton);
	});
	makeUserDeleted(usersList);
}

function makeUserDeleted(usersList) {
	let deleteButton = document.querySelectorAll('.deleteButton');

	deleteButton.forEach(item => {
		item.addEventListener('click', event => {
			let deletedUserName = event.target.parentNode.firstChild.textContent;
			let deletedUser = usersList.find((user) => { return user.name === deletedUserName; });

			let deletedUserId = usersList.indexOf(deletedUser);

			usersList.splice(deletedUserId, 1);
			localStorage.setItem('usersList', JSON.stringify(usersList));
			showUsersList(usersList);
		});
	});
}


// Необходимо получить список всех пользователей с помощью бесплатного API (https://jsonplaceholder.typicode.com/users) и отобразить их на странице. Пользователь должен иметь возможность удалить любого пользователя из списка. Данные при получении необходимо сохранить в локальное хранилище браузера localStorage. При удалении пользователь должен удаляться не только со страницы, но и из локального хранилища localStorage