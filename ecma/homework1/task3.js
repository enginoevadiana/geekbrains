// const rootElement = document.getElementById('root');
// const targetElement = findElementByClass(rootElement, 'class__one');
// console.log(targetElement);

// function findElementByClass(rootElement, targetElement) {
// 	console.log(targetElement);
// }

// console.log(findElementByClass(rootElement, targetElement));

const rootElement = document.getElementById('root');
// const targetElement = findElementByClass(rootElement, 'my-class');
// console.log(targetElement);

console.log(rootElement);
console.log(rootElement.children);
console.log(findElementByClass(rootElement, 'my-class'));

function findElementByClass(rootElement, className) {
	if (rootElement.classList.contains(className)) {
		console.log('have');
		return rootElement;
	}
	// if (rootElement.children.length === 0) return;

	// for (const child of rootElement.children) {
	// 	const el = findElementByClass(child, className);
	// 	if (el) return el;
	// }
}



// Напишите рекурсивную функцию findElementByClass, которая принимает корневой элемент дерева DOM и название класса в качестве аргументов и возвращает первый найденный элемент с указанным классом в этом дереве.