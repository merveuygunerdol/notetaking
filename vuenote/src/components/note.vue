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
            :href="`http://localhost:8080/#/editNote/${id}`">Edit</a>
          <a
            class="button is-rounded is-danger is-inverted"
            @click="remove()">Delete</a>
        </div>
      </article>
    </div>
    <div
      class="modal"
      :class="{'is-active':isActive}">
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
            @click="removeNote()">Delete Note</button>
          <button
            class="button"
            @click="cancel">Cancel</button>
        </footer>
      </div>
    </div>

    <!-- <div class="modal">
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
    </div> -->

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
            default: this.id
        },
    },
    data() {
        return {
            post:"",
            posts:[],
            isActive: false
        };
    },
    methods: {
        remove() {
            this.isActive = true;
            let noteId = this.id;
            console.log(noteId);
        },
        removeNote() {
            this.isActive = true;
            let noteId = this.id;
            axios.delete("http://localhost:3030/note/" + noteId)
                .then(() => console.log(noteId))
                .catch(e => {
                    this.errors.push(e);
                });
            this.isActive = false;
            window.location = "http://localhost:8080/";
        },
        cancel(){
            window.location.reload();
        },
    }
};
</script>
<style>
  li {list-style-type: none;}
</style>

