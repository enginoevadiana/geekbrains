import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		paymentList: [],
	},
	mutations: {
		SET_PAYMENT(state, payments) {
			state.paymentList = payments;
		},
		ADD_PAYMENT(state, pay) {
			state.paymentList.push(pay);
		},
	},
	getters: {
		getPayment: (state) => state.paymentList,
		getFullPayment: (state) => {
			return state.paymentList
				.reduce((a, b) => a + b.value, 0);
		},
	},
	actions: {
		fetchData({ commit }) {
			setTimeout(() => {
				const paymentList = [
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
				commit('SET_PAYMENT', paymentList)
			}, 1000);
		}
	},
	modules: {
		// модули Vuex для разделения хранилища на под-хранилища
	}
}) 