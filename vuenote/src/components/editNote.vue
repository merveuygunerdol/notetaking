<template lang="html">
  <div class="section">
    <h2 class="title is-2"> {{ editTitle }} </h2>
    <li
      v-for="post of posts"
      :key="post">
      <note v-bind="post"/>
    </li>
    <noteForm :is-edit="true" />
  </div>
</template>
<script>
import axios from "axios";
import HTTP from "../main.js";
import note from "@/components/note.vue";
import search from "@/components/search.vue";
import noteForm from "@/components/noteForm.vue";
window.axios = axios;
export default {
    components: {
        note,
        search,
        noteForm
    },
    data() {
        return {
            posts: [],
            errors: [],
            editTitle: "Edit This Note",
        };
    },
    mounted() {
        let id = this.$route.params.id;
        let tit = this.title;
        axios.get("http://localhost:3030/note/" + id)
            .then(response => {
                console.log(id, tit);
            })
            .catch(e => {
                this.errors.push(e);
            });
    }
};
</script>


