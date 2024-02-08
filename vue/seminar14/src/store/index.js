import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		counter: 0,
		cart: [],
	},
	mutations: {
		ADD_COUNTER(state) {
			state.counter++;
		},
		SUBSTRACT_COUNTER(state) {
			state.counter--;
		},
		ADD_ITEM_TO_CART(state, item) {
			state.cart.push(item);
		}
	},
	getters: {
		cartItems(state) {
			return state.cart;
		},
		totalItems(state) {
			return state.cart.length;
		},
		totalPrice(state) {
			return state.cart.reduce((acc, b) => acc = acc + b.price, 0);
		}
	},
	actions: {
		addItemToCart(context, item) {
			context.commit('ADD_ITEM_TO_CART', item);
		}
	}
}) 