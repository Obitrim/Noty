import Vue from "vue";
import Vuex from "vuex";
import swal from 'sweetalert';
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
		},

		addNewCategory: (state, categoryName) => {

			categoryName = categoryName.toLowerCase();
			state.categorizedNotes[categoryName] = [];
			state.noteCategories.push(categoryName);
			swal('Successful', 'You Successfully added a new category of notes', 'success');
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