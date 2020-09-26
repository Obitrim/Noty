<template>
	<div class="AppRecents py-3 px-4">
		<div class="row">
			<div class="col-sm-6 col-md-4 col-xl-3 my-2" 
				v-for="(note, index) in notes" 
				:key="note.title + index"
				>
				<NoteCard :note="note"/>
			</div>
		</div>
	</div>
</template>

<script>
import { mapState } from "vuex";
import NoteCard from "@/components/cards/NoteCard.vue";

export default {
	components: { NoteCard },

	computed: {
		...mapState(["notes"])
	}
}
</script>