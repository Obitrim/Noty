<template>
  <div class="AppEditor mt-2 d-flex">
    <vue-editor class="mx-2" v-model="newNote.content"/>
    <button type="button" class="saveBtn btn btn-lg mx-2 my-4 align-self-end" @click="saveNote">Save</button>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { VueEditor } from 'vue2-editor';

export default {
  components: { VueEditor },

  computed: {
    ...mapState(['newNote'])
  },

  methods: {
    saveNote(){
      if(this.newNote.editing){
        // edit note
      } else {
        // create new note
      }
    }
  }


}
</script>