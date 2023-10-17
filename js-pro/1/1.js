"use strict";

/*
###Задание 1
Создайте обычный объект "Музыкальная коллекция", который можно итерировать. 
Каждая итерация должна возвращать следующий альбом из коллекции. Коллекция 
альбомов - это массив внутри нашего объекта (создать несколько альбомов самому).
Каждый альбом имеет следующую структуру:
{
	title: "Название альбома",
	artist: "Исполнитель",
	year: "Год выпуска"
}
Используйте цикл for...of для перебора альбомов в музыкальной коллекции и 
вывода их в консоль в формате:
"Название альбома - Исполнитель (Год выпуска)"
*/

const musicCollection = {
	albums: [
		{
			title: "STADIUM ARCADIUM",
			artist: "RHCP",
			year: "2006",
		},
		{
			title: "Горгород",
			artist: "Oxxxymiron",
			year: "2016",
		},
		{
			title: "Harry Potter and the Prisoner of Azkaban (soundtrack)",
			artist: "John Williams",
			year: "2004",
		},
	],
};

musicCollection[Symbol.iterator] = function () {

	let albumId = 0;

	const next = () => {
		if (albumId < this.albums.length) {
			const album = this.albums[albumId];
			albumId++;
			return { value: album, done: false };
		} else {
			return { done: true };
		}
	};

	return { next };
};

for (const album of musicCollection) {
	console.log(`${album.title} - ${album.artist} (${album.year})`);
}
console.log(" ");
console.log(" ");