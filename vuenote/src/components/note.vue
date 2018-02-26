<template>
  <div id="hellonote" v-bind="post">
    <p>{{ title }}</p>
    <p>{{ body }}</p>
      <div class="remove-button">
    <button type="button" @click="deleteNote">Delete</button>
  </div>
  <div class="edit-button">
    <button type="button" @click="editNote">Edit</button>
  </div>
  </div>
</template>
<script>
// eslint-disable-next-line
/* eslint-disable */
//import Vue from 'vue'
//import delButton from './removeButton.vue'
  export default {
    components: {
    },
    props: ['title', 'body'],
     methods: {
           deleteNote: function(id) {
            axios.delete('http://localhost:3030/note/' + id )
            .then(response => this.post.id);
            //window.location.reload();
            console.log(this.id)
              }
        }
        }
</script>
