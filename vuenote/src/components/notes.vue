<template>
  <div>
    <h1> Welcome to HelloNote </h1>
    <search/>
    <ul v-if="posts && posts.length">
      <li
        v-for="post of posts"
        :key="post">
        <note v-bind="post"/>
      </li>
    </ul>

    <ul v-if="errors && errors.length">
      <li
        v-for="error of errors"
        :key="error">
        {{ error.message }}
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
import search from '@/components/search.vue'
window.axios = axios
export default {
// eslint-disable-next-line
    components: {
      note,
      search
  },
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
<style>
  li {list-style-type: none;}
</style>
