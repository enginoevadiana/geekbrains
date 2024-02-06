<template>
	<div>
		<button @click="upCounter">Значение счетчика равно {{ counter }}</button>
	</div>
</template>

<script>
export default {
	name: 'AddCount',

	data() {
		return {
			counter: 0,
		};
	},

	methods: {
		upCounter() {
			this.counter++
		}
	},
};
</script>

<style lang="scss" scoped></style>