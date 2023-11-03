const photoContainer = document.querySelector('.photoContainer');
let photoForHistory;

if (localStorage.getItem('lastPhoto') === null) {
	photoForHistory = [];
}
else {
	photoForHistory = JSON.parse(localStorage.getItem('lastPhoto'));
}
let historyLengthEnd = 5;

async function fetchPhoto() {
	try {
		// const response = await fetch(`https://api.unsplash.com/photos/random?client_id=9Ik9WiFnw9BApZ9xxvFWdv7cW3LdzjUiL6Ojde-eEUE`);
		const response = await fetch(`https://api.unsplash.com/photos/random?client_id=YtQxKsLwBCu79iQtAqfmKeQ27i7XY9wKvgxtfJ8uOGk`);

		const photo = await response.json();

		if (photoForHistory.length === historyLengthEnd) {
			photoForHistory.shift();
		}
		photoForHistory.push(photo.urls.small);
		localStorage.setItem('lastPhoto', JSON.stringify(photoForHistory));

		return photo;
	} catch (error) {
		console.error('Ошибка при загрузке фотографий:', error);
		return [];
	}
}

async function loadPhoto() {
	const photo = await fetchPhoto();
	const photoPlace = document.createElement('img');
	photoPlace.classList.add('photoPlace');
	photoPlace.src = photo.urls.small;
	photoPlace.alt = photo.alt_description;
	photoContainer.appendChild(photoPlace);

	const authorName = document.createElement('p');
	authorName.classList.add('authorName');
	authorName.textContent = photo.user.name;
	photoContainer.appendChild(authorName);
}

const likeIcon = document.querySelector('.likeIcon');
const heartBreakIcon = document.querySelector('.heartBreakIcon');

let likeCount = document.querySelector('.likeCount');
if (localStorage.getItem('likeCount') === null) {
	localStorage.setItem('likeCount', 0);
}
let storedLikeCount = localStorage.getItem('likeCount');
likeCount.textContent = storedLikeCount;

likeIcon.addEventListener('click', () => {
	storedLikeCount++;
	likeCount.textContent = storedLikeCount;
	localStorage.setItem('likeCount', storedLikeCount);
});

heartBreakIcon.addEventListener('click', () => {
	if (storedLikeCount === 0) {
		heartBreakIcon.disabled = true;
		return;
	}
	storedLikeCount--;
	likeCount.textContent = storedLikeCount;
	localStorage.setItem('likeCount', storedLikeCount);
});


loadPhoto();

