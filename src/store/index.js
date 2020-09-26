import Vue from "vue";
import Vuex from "vuex";
import state from "./state.js";

Vue.use(Vuex);

const store = new Vuex.Store({
	state,
	getters: {},

	mutations: {
		showSidebar: (state, show=true) => {
			state.navOpen = show;
		}
	},

	actions: {}
});

export default store;