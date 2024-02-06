<template>
	<div id="app">
		<PaymentDisplay :items="paymentList" />
		<AddList @addNewPay="addNewPay" />
	</div>
</template>

<script>
import AddList from './components/AddList.vue';
import PaymentDisplay from './components/PaymentDisplay.vue';

export default {
	name: 'App',
	components: {
		PaymentDisplay,
		AddList
	},
	data() {
		return {
			paymentList: [],
		};
	},
	methods: {
		fetchData() {
			return [
				{
					date: '28.03.2023',
					category: 'Food',
					value: 169,
				},
				{
					date: '29.03.2023',
					category: 'Transport',
					value: 157,
				},
				{
					date: '29.03.2023',
					category: 'Food',
					value: 456,
				}
			]
		},
		addNewPay(data) {
			this.paymentList.push(data);
		}
	},
	created() {
		this.paymentList = this.fetchData();
	}
}
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>
