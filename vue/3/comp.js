const compItem = {
	name: 'comp-item',
	template: `<p>item info</p>`
}

Vue.component('new-component', {
	props: ['title'],
	data() {
		return {
			counter: 0
		}
	},

	components: {
		'comp': compItem,
	},

	methods: {
		increase(step) {
			this.counter += step;
		}
	},

	template: `
	<div>
		<h3>{{ title }}</h3>
		<comp></comp>
		<p>counter click {{counter}}</p>
		<button @click="increase(2)">+2</button>
	</div>
	`
});

Vue.component('change-one', {
	template: `
	<div>
		<h2>Info change component</h2>
	</div>
	`,
});

Vue.component('change-two', {
	template: `
	<div>
		<h2>Info change component 2</h2>
		<p>Text</p>
	</div>
	`,
});

Vue.component('change-three', {
	template: `
	<ul>
		<li>list item 1</li>
		<li>list item 2</li>
		<li>list item 3</li>
	</ul>
	`,
});