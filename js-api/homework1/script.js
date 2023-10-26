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
	'[{"name":"Балет","date":"November 3","time":"14:00","membersCount":"15","currentMembersCount":"0"},{"name":"Бокс","date":"November 5","time":"18:00","membersCount":"6","currentMembersCount":"0"},{"name":"Фехтование","date":"November 3","time":"16:00","membersCount":"10","currentMembersCount":"0"}]'

const sportLessons = JSON.parse(json);

function dataProcess() {

	sportLessons.forEach((lesson) => {
		// let currentMembers = lesson.currentMembersCount;
		let allMembers = lesson.membersCount;
		const resultMarkup = `
			<div class="lessonCard">
			<h4>${lesson.name}</h4>
      <p>Дата и время занятия: ${lesson.date} ${lesson.time}</p>
      <p>Максимальное количество участников: ${lesson.membersCount}</p>
			<p class="inList">Количество записавшихся: ${lesson.currentMembersCount}</p>
			<button class="goToLesson">Записаться</button>
			<button class="neverMind">Отменить запись</button>
			</div>
    `;
		infoContainer.insertAdjacentHTML('beforeend', resultMarkup);

		const addButton = document.querySelector('.goToLesson');
		const cancelButton = document.querySelector('.neverMind');
		const inListText = document.querySelector('.inList');

		addButton.addEventListener('click', addMember);

		function addMember() {
			let members = lesson.currentMembersCount++;
			console.log(lesson.currentMembersCount);
			console.log(lesson.membersCount);
			if (lesson.currentMembersCount > lesson.membersCount) {
				addButton.disabled = true;
			}
			inListText.textContent = 'Количество записавшихся: ' + members;
			// var newDiv = document.createElement("div");
			// newDiv.textContent = members;

			// infoContainer.append(newDiv);
		}



		// for (let i = 0; i < addButton.length; i++) {
		// 	addButton[i].addEventListener("click", function () {
		// 		currentMembers++;
		// 		console.log(currentMembers);
		// 		if (currentMembers > allMembers) {
		// 			addButton.disabled = true;
		// 		}
		// 	});
		// }

		// closeButton.addEventListener('click', closeWindow);

		// function closeWindow() {
		// 	modalWindow.classList.toggle('active');
		// 	openButton.disabled = false;
		// }

		console.log(lesson.name);
	})
}

dataProcess();

// console.log(sportLessons[0].name);
// console.log(sportLessons[1].date);
// console.log(sportLessons[2].time);


// fetch('./data.json')
// 	.then((response) => response.json())
// 	.then((json) => {
// 		// const jsonResponse = json;
// 		// console.log(json[0].date);
// 		console.log(json);
// 	});

// let url = './data.json';
// let response = fetch('./data.json');

// let commits = response.json(); // читаем ответ в формате JSON

// async function foo() {
// 	let obj;
// 	const res = await fetch('./data.json')
// 	obj = await res.json();
// 	const parcing = map(obj);
// 	// console.log(obj)
// 	return parcing;
// }

// const results = foo()(
// 	ids.map(id =>
// 		asyncFunc(id).then(result => ({ id, result }))
// 	)
// );
// const firstItem = results[0];
// console.log(firstItem.result, firstItem.id);
// let data = foo();
// console.log(data);

// foo();

// alert(commits[0].name);


// const json = JSON.parse(jsonResponse);

// console.log(json.name);
// // Luke Skywalker
// console.log(json.date);
// // male
// console.log(json.time);
// // 19BBY

