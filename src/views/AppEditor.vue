<template>
  <div id="editor" class="w-100 h-100 bg-white"></div>
</template>

<script>
import Link from '@editorjs/link';
import List from '@editorjs/list';
import Header from '@editorjs/header';
import Editor from '@editorjs/editorjs';
import SimpleImage from '@editorjs/simple-image';

export default {
  mounted(){
    new Editor({
      holder: "editor",
      tools: {
        link: Link,
        list: List,
        header: { 
          class: Header,
          inlineToolbar: ['link']
        },
        image: SimpleImage
      }
    });
  }
}
</script>