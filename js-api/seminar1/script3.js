/* Вы создаете веб-страницу для отображения списка статей. Каждая статья состоит из заголовка и текста. Вам необходимо использовать Bootstrap для стилизации элементов.
Используйте Bootstrap, чтобы стилизовать элементы:
Заголовок статьи (<h2>)
Текст статьи (<p>)
Кнопки "Добавить статью", "Удалить" и "Редактировать".
Создайте начальный список статей, который будет загружаться при загрузке страницы. Используйте JSON-данные для определения заголовков и текстов статей.
Позвольте пользователю добавлять новые статьи. При нажатии на кнопку "Добавить статью" должна появиться новая статья с заголовком "Новая статья" и текстом "Введите содержание статьи...".
* Реализуйте функциональность удаления статей. При нажатии на кнопку "Удалить" соответствующая статья должна быть удалена из списка.
* Реализуйте функциональность редактирования статей. При нажатии на кнопку "Редактировать" пользователь должен иметь возможность изменить заголовок и текст статьи. Используйте всплывающее окно или prompt для ввода новых данных.
* Все изменения (добавление, удаление, редактирование) должны быть сохранены в локальное хранилище браузера, чтобы они сохранялись после перезагрузки страницы.
*/

const articlesData = [
	{
		title: 'Заголовок статьи 1',
		content: 'Содержание статьи 1'
	},
	{
		title: 'Заголовок статьи 2',
		content: 'Содержание статьи 2'
	}
];

articlesData.forEach((article) => {
	let articleBlock = document.createElement('div');
	articleBlock.className = "articleBlock";
	container.append(articleBlock);
	// Название
	let articleName = document.createElement('h2');
	articleName.className = "articleName";
	articleName.textContent = article.title;
	articleBlock.append(articleName);
	// Текст
	let articleText = document.createElement('p');
	articleText.className = "articleText";
	articleText.textContent = article.content;
	articleBlock.append(articleText);
	// Кнопки
	// Редактировать
	const editButton = document.createElement('button');
	editButton.className = "btn btn-warning mt-3 editButton";
	editButton.textContent = 'Редактировать статью';
	articleBlock.append(editButton);
	// Удалить
	const deleteButton = document.createElement('button');
	deleteButton.className = "btn btn-danger mt-3 deleteButton";
	deleteButton.textContent = 'Удалить статью';
	articleBlock.append(deleteButton);

})

addButton.addEventListener('click', function (event) {
	let articleBlock = document.createElement('div');
	articleBlock.className = "articleBlock";
	container.append(articleBlock);
	// Название
	let articleName = document.createElement('h2');
	articleName.className = "articleName";
	articleName.textContent = 'Новая статья';
	articleBlock.append(articleName);
	// Текст
	let articleText = document.createElement('p');
	articleText.className = "articleText";
	articleText.textContent = 'Введите содержание статьи...';
	articleBlock.append(articleText);
	// Кнопки
	// Редактировать
	const editButton = document.createElement('button');
	editButton.className = "btn btn-warning mt-3 editButton";
	editButton.textContent = 'Редактировать статью';
	articleBlock.append(editButton);
	// Удалить
	const deleteButton = document.createElement('button');
	deleteButton.className = "btn btn-danger mt-3 deleteButton";
	deleteButton.textContent = 'Удалить статью';
	articleBlock.append(deleteButton);
})

const deleteButton = document.querySelector('.deleteButton');
deleteButton.addEventListener('click', event => {
	const articleItem = event.target.closest('div');
	articleItem.remove();
	// const lastBox = container.lastChild;
})


