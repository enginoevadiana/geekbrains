/* Вам предоставляется задача создать простой онлайн опросник, который позволяет пользователям отвечать на вопросы с вариантами ответов. Ваша задача - разработать интерфейс и функциональность для этого опросника, используя HTML, CSS и JavaScript.
Создайте интерфейс с несколькими вопросами и вариантами ответов. Каждый вопрос должен иметь несколько вариантов ответов.
Реализуйте обработку событий, чтобы пользователи могли выбирать варианты ответов.
Добавьте кнопку "Завершить опрос", которая будет показывать результаты опроса.
При нажатии на кнопку "Завершить опрос", вы должны проверить, что пользователь ответил на все вопросы, и отобразить выбранные им варианты ответов.
Если пользователь не ответил на все вопросы, покажите ему сообщение о необходимости ответить на все вопросы перед завершением опроса.
По желанию можно добавить стилизацию опросника с использованием CSS для лучшего пользовательского опыта.
*/

const form = document.querySelector('form');
const finishButton = document.querySelector('.finish');
const results = document.querySelector('.results');

finishButton.addEventListener('click', (event) => {
	event.preventDefault();

	if (!form['q1'].value || !form['q2'].value) {
		results.textContent = 'Необходимо ответить на все вопросы';

	}
	else {
		// const questionOne = document.querySelector('input[name="q1"]:checked').value;
		// const questionTwo = document.querySelector('input[name="q2"]:checked').value;

		const resultMarkup = `
      <h3>Результаты:</h3>
      <p>Вопрос 1: ${form['q1'].value}</p>
      <p>Вопрос 2: ${form['q2'].value}</p>
    `;

		// <p>Вопрос 1: ${questionOne}</p>
		// <p>Вопрос 2: ${questionTwo}</p>

		//вставить html в конец results
		results.insertAdjacentHTML('beforeend', resultMarkup);
		form.reset();
	}
})