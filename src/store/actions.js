import db from '@/firebase/db.js';
import swal from 'sweetalert';

export default {
	loadNoteDocuments: ({commit}) => {
		commit('showLoader');
		let notes = [];
		db.collection('notes')
			.get()
			.then(snapShot => {
				snapShot.forEach(doc => {
					let noteDocumentData = doc.data();
					notes.push({
						id: doc.id,
						title: noteDocumentData.title,
						category: noteDocumentData.category,
						content: noteDocumentData.content,
						color: noteDocumentData.color,
						lastModified: noteDocumentData.lastModified
					})
				});

				let noteCategories = [...notes].map(note => note.category);
				noteCategories = Array.from(new Set(noteCategories));
				commit('setNoteCategories', noteCategories);
				commit('categorizeNotes', notes);
				commit('showLoader', false);
			})
			.catch(err => {
				swal('Failed to load resource', 
					'There seems to be problem with your internet connection. Check it and refresh page', 
					'error'
				);
				/*eslint no-console: ["error", {allow: ["error"]}]*/
				console.error(err);
				commit('showLoader', false);
			})
	}
}