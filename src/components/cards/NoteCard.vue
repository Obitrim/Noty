<template>
	<div class="NoteCard p-3 bg-white" :class="{ shadow, divider }">
		<p class="CategoryName my-0">
			<span 
				class="CategoryColorIndicator d-inline-block mr-1"
				:style="{backgroundColor: note.color || 'red'}"
				>
					
			</span>
			{{ note.category }}
		</p>
		<h3 class="NoteTitle my-2">
			{{ slicedNoteTitle }}
		</h3>
		<div class="d-flex justify-content-end mt-3">
			<button 
				type="button" 
				class="ReadBtn BgWarning px-2 py-1" 
				@click="readNote" 
				v-if="readBtn"
				>
				Read
			</button>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		note: {
			type: Object,
			validator: function(note){
				return note.category && note.title;
			},
			required: true
		},

		shadow: {
			type: Boolean,
			default: true
		},

		divider: {
			type: Boolean,
			default: false
		},
		readBtn: {
			type: Boolean,
			default: true
		}
	},

	data(){
		return {
			visibleCharCount: 70
		}
	},

	computed: {
		slicedNoteTitle(){
			if(this.note.title.length > this.visibleCharCount){
				return this.note.title.slice(0, this.visibleCharCount - 3) + "...";
			}

			return this.note.title;
		}
	},

	methods: {
		readNote(){
			this.$store.commit('readNote', this.note);
			this.$emit('read');
			this.$router.push({name: 'read'});
		}
	}
}
</script>