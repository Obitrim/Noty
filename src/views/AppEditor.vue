<template>
  <div class="AppEditor mt-2 d-flex">
    <h1 class="BgDarkPrimary AppEditor__NoteTitle text-white mx-2 p-2">
      {{ noteTitle }} 
    </h1>
    <vue-editor class="mx-2" v-model="$store.state.newNote.content"/>
    <button 
      type="button" 
      class="saveBtn btn btn-lg mx-2 my-4 align-self-end" 
      @click="saveNote"
      >
      Save
    </button>
  </div>
</template>

<script>
import swal from "sweetalert";
import { VueEditor } from 'vue2-editor';

export default {
  components: { VueEditor },

  data(){
    return {
      noteTitle: ''
    }
  },

  methods: {
    saveNote(){
      this.$store.commit('saveNote');
    },

    openNoteTitleInputPopup(){
      swal({
        title: "Enter note title",
        content: "input"
      }).then(noteTitle => {
        if(noteTitle.trim().length < 3) 
          throw new Error('Please provide a good descriptive note title');

        this.noteTitle = noteTitle;
        this.$store.commit('setNewNoteTitle', this.noteTitle);
      }).catch(() => {
        swal('Note title is required','Please provide a good descriptive note title', 'error').then(() => {
          this.openNoteTitleInputPopup();
        })
      });
    }
  },

  mounted(){
   this.openNoteTitleInputPopup();
  }


}
</script>