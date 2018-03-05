<template lang="html">
<div class="section">
     <h2 class="title is-2"> Edit This Note </h2>
<noteForm></noteForm>
</div>
</template>
<script>
// eslint-disable-next-line
/* eslint-disable */
import axios from 'axios';
import HTTP from '../main.js';
import note from '@/components/note.vue'
import search from '@/components/search.vue'
import noteForm from '@/components/noteForm.vue'
window.axios = axios
export default {
// eslint-disable-next-line
    components: {
      note,
      search,
      noteForm
  },
  data() {
    return {
      posts: [],
      errors: [],
      edit:true
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


