<template>
	<div>
		<p>Сумма всех платежей: {{ getFV }}</p>
		<div v-for="item in items" :key="item.id">
			{{ item }}
		</div>
	</div>
</template>

<script>
export default {
	name: 'PaymentDisplay',
	props: {
		items: {
			type: Array,
			default() {
				return [];
			},
		},
	},
	computed: {
		getFV() {
			return this.$store.getters.getFullPayment;
		}
	}
};
</script>