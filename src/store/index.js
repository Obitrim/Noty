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
		},

		readNote: (state, note) => {
			state.previewedNote = note;
		},

		setFocusedCategory: (state, category) => {
			state.focusedCategory = category.toLowerCase();
		}

		// editNote: (state, note) => {
		// 	state.newNote = {
		// 		content: note.content,
		// 		editing: true
		// 	}
		// }
	},

	actions: {}
});

export default store;