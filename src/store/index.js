import Vue from "vue";
import Vuex from "vuex";
import swal from 'sweetalert';
import state from "./state.js";
import router from '@/router';

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
		},

		saveNote: state => {
			if(state.newNote.editing){
				// edit note

			} else {
				// create new note
				state.categorizedNotes[state.focusedCategory].push({
					...state.newNote,
					category: state.focusedCategory
				});
				state.newNote = {
					content: '',
					editing: false,
					categoryName: "",
				}
				swal('Successful', 'Note created', 'success').then(() => {
					router.push(`/read/${state.focusedCategory}`);
				})
			}
		},

		setSaveNoteMode: (state, note) => {
			//add other note features
			state.newNote = {
				content: note ? note.content : '',
				editing: !!note
			}
		},

		setNewNoteTitle: (state, noteTitle) => {
			state.newNote.title = noteTitle;
		}
	},

	actions: {}
});

export default store;