/* Вы разрабатываете веб-страницу для отображения расписания занятий в спортивном клубе. Каждое занятие имеет название, время проведения, максимальное количество участников и текущее количество записанных участников.

1. Создайте веб-страницу с заголовком "Расписание занятий" и областью для отображения занятий.

2. Загрузите информацию о занятиях из предоставленных JSON-данных. Каждое занятие должно отображаться на странице с указанием его названия, времени проведения, максимального количества участников и текущего количества записанных участников.

3. Пользователь может нажать на кнопку "Записаться" для записи на занятие. Если максимальное количество участников уже достигнуто, кнопка "Записаться" становится неактивной.

4. После успешной записи пользователя на занятие, обновите количество записанных участников и состояние кнопки "Записаться".

5. Запись пользователя на занятие можно отменить путем нажатия на кнопку "Отменить запись". После отмены записи, обновите количество записанных участников и состояние кнопки.

6. Все изменения (запись, отмена записи) должны сохраняться и отображаться в реальном времени на странице.

7. При разработке используйте Bootstrap для стилизации элементов. */

const infoContainer = document.querySelector('.infoContainer');

const json =
	'[{"name":"Балет","date":"Среда","time":"14:00","membersCount":"15","currentMembersCount":"0"},{"name":"Бокс","date":"Понедельник","time":"18:00","membersCount":"6","currentMembersCount":"0"},{"name":"Фехтование","date":"Вторник","time":"16:00","membersCount":"10","currentMembersCount":"0"}]'

const sportLessons = JSON.parse(json);

function dataProcess() {
	sportLessons.forEach((lesson) => {
		let allMembers = lesson.membersCount;
		const resultMarkup = `
			<div class="col-sm lessonCard">
			<h4>${lesson.name}</h4>
      <p><span class="title">Дата и время занятия:</span>
      ${lesson.date} ${lesson.time}</p>
      <p><span class="title">Максимальное количество участников:</span>
      <span class="allPossible">${lesson.membersCount}</span></p>
			<p><span class="title">Количество записавшихся:</span>
			<span class="inList">${lesson.currentMembersCount}</span></p>
			<button class="btn btn-success goToLesson">Записаться</button><br>
			<button disabled class="btn btn-warning neverMind">Отменить запись</button>
			</div>
    `;
		infoContainer.insertAdjacentHTML('beforeend', resultMarkup);
	})
}

dataProcess();


const inListText = document.querySelector('.inList');
let addButton = document.querySelectorAll('.goToLesson');
// const neverMind = document.querySelector('.neverMind');
let neverMind = document.querySelectorAll('.neverMind');

addButton.forEach(item => {
	item.addEventListener('click', event => {
		let currentMembers = (event.target.closest('div')).querySelector('.inList').textContent;
		let allMembers = Number((event.target.closest('div')).querySelector('.allPossible').textContent);
		const articleItem = (event.target.closest('div')).querySelector('.inList');
		addButton = (event.target.closest('div')).querySelector('.goToLesson');
		neverMind = (event.target.closest('div')).querySelector('.neverMind');

		currentMembers++;
		neverMind.disabled = false;
		if (currentMembers >= allMembers) {
			addButton.disabled = true;
		}

		articleItem.textContent = currentMembers;
	});
});

neverMind.forEach(item => {
	item.addEventListener('click', event => {
		let currentMembers = (event.target.closest('div')).querySelector('.inList').textContent;
		const articleItem = (event.target.closest('div')).querySelector('.inList');
		addButton = (event.target.closest('div')).querySelector('.goToLesson');
		neverMind = (event.target.closest('div')).querySelector('.neverMind');

		addButton.disabled = false;
		currentMembers--;
		if (currentMembers === 0) {
			neverMind.disabled = true;
		}

		articleItem.textContent = currentMembers;
	});
})
