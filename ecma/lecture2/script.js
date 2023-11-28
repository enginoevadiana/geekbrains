const Roomba = {
	counterOfStarts: 0,
	startCleaning: function () {
		this.counterOfStarts++;
		console.log('I am cleaning... I have been started: ',
			this.counterOfStarts, 'times.');
	},
}

Roomba.startCleaning(); // I am cleaning... I have been started:  1 times.
Roomba.startCleaning();

setTimeout(Roomba.startCleaning, 1000); // I am cleaning... I have been started:  NaN times.

setTimeout(function () {
	Roomba.startCleaning();
}, 1000); // I am cleaning... I have been started:  3 times.

