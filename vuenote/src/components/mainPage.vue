<template lang="html">
  <body>
    <h1 class="title is-1">Welcome to HelloNote</h1>
    <section class="section">
      <div class="container">
        <div class="content">
          <div class="columns">
            <div class="column is-three-fifths ">
              <h2 class="subtitle">
                Here are your last notes
              </h2>
              <li
                v-for="post of posts"
                :key="post">
                <note v-bind="post"/>
              </li>
            </div>
            <div class="column">
              <search/>
              <a
                href=""
                class="button is-danger is-large">
              Add a Note</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </body>
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
.title {
color:slateblue;
}
</style>


