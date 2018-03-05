<template>
  <div class="tile">
    <article class="tile is-child notification is-primary">
      <p class="title">{{ title }}</p>
      <p class="subtitle">{{ body }}</p>
      <div class="buttons has-addons">
        <a class="button is-rounded is-inverted is-primary">Edit</a>
        <a class="button is-rounded is-danger is-inverted">Delete</a>
      </div>
    </article>

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
<style>
  li {list-style-type: none;}
</style>

