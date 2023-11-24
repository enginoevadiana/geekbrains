
const createCounter = () => {
	let counter = 0;
	return () => {
		return ++counter;
	}
}

const counter2 = createCounter();
console.log(counter2());
console.log(counter2());
console.log(counter2()); // 3

const counter3 = createCounter();
console.log(counter3()); // 1

// запоминает значение в кэше

const closureFunction = () => {
	const cashe = {};
	return (x) => {
		if (cashe[x]) return cashe[x];
		const result = x * x;
		cashe[x] = result;
		return result;
	}
}

const chachedPow = closureFunction();
console.log(chachedPow(2)); // 4
console.log(chachedPow(8)); // 64
console.log(chachedPow(2)); // 4 выведет уже запомненное значение