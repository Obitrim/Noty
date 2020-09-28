<template>
	<div class="NotePreviewBoard bg-white">
		<button type="button" class="d-md-none" @click="$emit('goToNotes')">back</button>
		<div class="p-3" v-html="previewedNote.content"></div>
	</div>
</template>

<script>
import { mapState } from "vuex";

export default {
	computed: {
		...mapState(['previewedNote'])
	}
}
</script>