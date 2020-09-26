<template>
	<div class="ReadNoteViewWrapper">
		<div class="ReadNoteView d-flex">
			<div class="NoteList mx-md-2">
				<NoteListHeader @filter="filter = $event"/>
				<div class="Main bg-white">
					<NoteCard 
						:note="{
							title:'Some owesome note title',
							category:'school'
						}"
						:shadow="false"
						divider
					/>
				</div>
			</div>
			<div class="NoteContent">Read View</div>
		</div>
	</div>
</template>

<script>
import { mapState } from "vuex";
import NoteCard from "@/components/cards/NoteCard.vue";
import NoteListHeader from "@/components/note-list/NoteListHeader.vue";

export default {
	components: {
		NoteCard,
		NoteListHeader,
	},

	data(){
		return {
			filter: ""
		}
	},

	computed: {
		...mapState(['notes']),

		filteredNotes(){
			let regExp = new RegExp(`${this.filter}`, 'i')
			// return this.notes.filter(note => regExp.test(note.title) || regExp.test(note.content));
		}
	}

}
</script>