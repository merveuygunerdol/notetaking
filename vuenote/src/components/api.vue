<template>
<div>
  <ul v-if="posts && posts.length">
    <li v-for="post of posts" :key="post">
      <strong><child :message="post.title"></child></strong>
      <child :message="post.body"></child>
        <delButton></delButton>
    </li>
  </ul>

  <ul v-if="errors && errors.length">
    <li v-for="error of errors" :key="error">
      {{error.message}}
    </li>
  </ul>
</div>
</template>

<script>
// eslint-disable-next-line
/* eslint-disable */
import axios from 'axios';
import HTTP from '../main.js';
import note from '@/components/note.vue'
import delButton from './removeButton.vue'
window.axios = axios
export default {
// eslint-disable-next-line
  data() {
    return {
      posts: [],
      errors: []
    }
  },
  // Fetches posts when the component is created.
  created() {
    axios.get(`http://localhost:3030/note`)
    .then(response => {
      // JSON responses are automatically parsed.
      this.posts = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })

    // async / await version (created() becomes async created())
    //
    // try {
    //   const response = await axios.get(`http://jsonplaceholder.typicode.com/posts`)
    //   this.posts = response.data
    // } catch (e) {
    //   this.errors.push(e)
    // }
  }
}
</script>
