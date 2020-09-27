<template>
  <div class="AppEditor">
    <vue-editor class="mx-2" v-model="noteContent"/>
    <button type="button" class="saveBtn btn mx-2 my-4 ">Save</button>
  </div>
</template>

<script>
import { VueEditor } from 'vue2-editor';

export default {
  components: { VueEditor },

  data(){
    return {
      noteContent: ""
    }
  }
}
</script>