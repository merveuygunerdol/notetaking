<template>
  <div class="content">
    <div class="tile">
      <article class="tile is-child notification is-primary">
        <p class="title">{{ title }}</p>
        <p class="subtitle">{{ body }}</p>
        <p class="subtitle">{{ id }}</p>
        <div class="buttons has-addons">
          <a
            class="button is-rounded is-inverted is-primary"
            :href="`http://localhost:8080/#/editNote/${id}`"
            @click="edit">Edit</a>
          <a
            class="button is-rounded is-danger is-inverted"
            @click="remove()">Delete</a>
        </div>
      </article>
    </div>
    <div class="modal">
      <div class="modal-background "/>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Delete this note?</p>
        </header>
        <section class="modal-card-body">
          <div> You won't be able to revert this! </div>
        </section>
        <footer class="modal-card-foot">
          <button
            class="button is-danger"
            @click="removeNote(id)">Delete Note</button>
          <button
            class="button"
            @click="cancel">Cancel</button>
        </footer>
      </div>
    </div>

    <div class="modal">
      <div class="modal-background "/>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title"/>
        </header>
        <section class="modal-card-body">
          <div class="is-$red"> Note Deleted</div>
        </section>
        <footer class="modal-card-foot">

          <button
            class="button is-danger"
            @click="cancel">All Notes</button>
        </footer>
      </div>
    </div>

  </div>
</template>
<script>
import axios from "axios";
export default {
    props: {
        title: {
            type: String,
            default: this.title
        },
        body: {
            type: String,
            default: this.body
        },
        id: {
            type: Number,
            default: undefined
        }
    },
    data() {
        return {
            post:""
        };
    },
    methods: {
        remove(id) {
            var modal = document.getElementsByClassName("modal");
            modal[0].classList.add("is-active");
            let noteId = this.id;
            console.log(noteId);
        },
        removeNote(posts, id) {
            var modal = document.getElementsByClassName("modal");
            let noteId = this.id;
            axios.delete("http://localhost:3030/note/" + noteId)
                .then((response) => this.posts.splice(noteId, 1));
            modal[0].classList.remove("is-active");
            window.location = "http://localhost:8080/";
        },
        cancel(){
            window.location.reload();
        },
        edit(post) {
            // let noteId = this.id;
            // axios.get("http://localhost:3030/note/" + noteId )
            //     .then(response => {
            //     // JSON responses are automatically parsed.
            //         this.post = response.data;
            //         console.log(response.data);
            //     })
            //     .catch(e => {
            //         this.errors.push(e);
            //     });
            // let id = this.$route.params.id;
            // axios.get("http://localhost:3030/note/" + id)
            //     .then(response => {
            //         console.log(id);

            //     })
            //     .catch(e => {
            //         this.errors.push(e);
            //     });

        }
    }
};
</script>
<style>
  li {list-style-type: none;}
</style>

