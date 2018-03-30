<template lang="html">
  <body>
    <h1 class="title is-1"> {{ mainPageTitle }} </h1>
    <section class="section">
      <div class="container">
        <div class="content">
          <div class="columns">
            <div class="column is-three-fifths ">
              <h2 class="subtitle">
                Here are your last notes
              </h2>
              <li
                v-for="(post, index) of posts"
                :key="index">
                <note v-bind="post"/>
              </li>
            </div>
            <div class="column">
              <search/>
              <a
                href="http://localhost:8080/#/addNote"
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
export default {
    components: {
      note,
      search
  },
  data() {
    return {
      posts: "",
      errors: "",
      mainPageTitle: 'Welcome to HelloNote'
    }
  },
  // Fetches posts when the component is created.
  created() {
    axios.get(`http://localhost:3030/note`)
    .then(response => {
      this.posts = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })
  }
}
</script>
<style>
.title {
color:slateblue;
}
</style>


