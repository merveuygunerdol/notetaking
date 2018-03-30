<template lang="html">
  <div class="section">
    <h2 class="title is-2"> {{ editTitle }} </h2>
    <noteForm
      :is-edit="true"
      v-model="note"/>
  </div>
</template>
<script>
import axios from "axios";
//import HTTP from "../main.js";
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
            note:{}
        };
    },
    created() {
        this.fetchNote();
    },
    methods: {
        fetchNote(){
            let id = this.$route.params.id;
            axios.get("http://localhost:3030/note/" + id)
                .then(response => {
                    this.note = response.data;
                    note.title = response.data.title;
                    note.body = response.data.body;
                    console.log(id, note.title,note.body);
                })
                .catch(e => {
                    this.errors.push(e);
                });
        },
    }
};
</script>


