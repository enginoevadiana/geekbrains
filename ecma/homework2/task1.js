class Book {
	title;
	author;
	pages;

	displayInfo() {
		console.log(`Book title: ${this.title}, author: ${this.author}, pages: ${this.pages}.`);
	}
}

const HarryPotterOne = new Book();
HarryPotterOne.title = `Harry Potter and the Philosopher's Stone`;
HarryPotterOne.author = `J. K. Rowling`;
HarryPotterOne.pages = 342;

console.log(HarryPotterOne.title);
console.log(HarryPotterOne.author);
console.log(HarryPotterOne.pages);

HarryPotterOne.displayInfo();