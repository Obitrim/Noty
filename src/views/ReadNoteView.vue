<template>
	<div class="ReadNoteViewWrapper">
		<div class="ReadNoteView d-flex">
			<div class="NoteList mx-md-2">
				<NoteListHeader @filter="filter = $event"/>
				<div class="Main bg-white">
					<template v-if="emptySearchResults">
						<div class="text-center p-3">No results found for <strong>{{ filter }}</strong></div>
					</template>
					<template>
						<NoteCard 
							v-for="(note, index) in searchResults"
							:key="note.title + index"
							:note="note"
							:shadow="false"
							divider
						/>
					</template>
				</div>
			</div>
			<NotePreviewBoard/>
		</div>
	</div>
</template>

<script>
import { mapState } from "vuex";
import NoteCard from "@/components/cards/NoteCard.vue";
import NoteListHeader from "@/components/note/NoteListHeader.vue";
import NotePreviewBoard from "@/components/note/NotePreviewBoard.vue";

export default {
	components: {
		NoteCard,
		NoteListHeader,
		NotePreviewBoard
	},

	data(){
		return {
			filter: ""
		}
	},

	computed: {
		...mapState(['notes']),

		searchResults(){
			let regExp = new RegExp(`${this.filter}`, 'i')
			return this.notes.filter(note => regExp.test(note.title) || regExp.test(note.content));
		},

		searchResultsCount(){
			return this.searchResults.length;
		},

		emptySearchResults(){
			return this.searchResults.length === 0;
		}
	}

}
</script>