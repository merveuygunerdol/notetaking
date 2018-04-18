<template lang="html">
  <body>
    <!-- h2 Add / Edit Note-->
    <div class="container">
      <div class="content">
        <div class="colummn">
          <div class="column is-half is-offset-one-quarter">
            <div class="field">
              <label class="label"> Title </label>
              <div class="control">
                <p class="control has-icons-left has-icons-right">
                  <input
                    class="input"
                    id="title"
                    type="text"
                    placeholder="Note Title"
                    v-model="note.title"
                    @input="onChange">
                  <span class="icon is-small is-left">
                    <icon name="edit"/>
                  </span>
                </p>
              </div>
            </div>
            <p
              class="help is-danger"
              v-if="controltitle">Title is required</p>
            <div class="field">
              <label class="label">Body</label>
              <div class="control">
                <textarea
                  class="textarea"
                  placeholder="Note Body"
                  v-model="note.body"/>
              </div>
            </div>
            <div class="control">
              <!-- button Add / Save-->
              <div class="buttons">
                <span
                  v-if="isEdit"
                  class="button is-success"
                  @click="saveNote"> Save </span>
                <span
                  v-if="!isEdit"
                  class="button is-info"
                  @click="add"> Save </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="modal"
        :class="{'is-active':isActive}">
        <div class="modal-background "/>
        <div class="modal-card">
          <header class="modal-card-head">
            <p class="modal-card-title">New Note!</p>
          </header>
          <section class="modal-card-body">
            <div> Your note is added! </div>
          </section>
          <footer class="modal-card-foot">
            <button
              class="button is-danger"
              @click="allNotes">All Notes</button>
          </footer>
        </div>
      </div>
    </div>
  </body>
</template>
<script>
import axios from "axios";
import note from "@/components/note.vue";
export default {
    components: {
        note
    },
    model:{
        prop:"note"
    },
    props: {
        isEdit: {
            type:  Boolean,
            default:  true
        },
        note: {
            type: Object,
            default: () => ({
            })
        },
    },
    data() {
        return {
            isActive: false,
            controltitle: false

        };
    }, methods: {
        add() {
            let title = document.getElementById("title").value;
            if(title === "") {
                this.controltitle = true;
                return;
            }
            this.isActive = true;
            let noteId = this.id;
            console.log(noteId);
            let newNote = {
                title: this.note.title,
                body: this.note.body
            };
            console.log(newNote);
            axios.post("http://localhost:3030/note", newNote)
                .then((response) => {
                    console.log(response.data);
                    this.isActive = true;
                })
                .catch((error) => {
                    console.log(error);
                });
            window.location = "http://localhost:8080/";
        },
        onChange(){
            this.controltitle = false;
        },
        allNotes(){
            location.href = "http://localhost:8080/";
        },
        saveNote() {
            console.log("merve");
            let savedNote = {
                id : this.note.id,
                title: this.note.title,
                body: this.note.body
            };
            console.log(savedNote);
            axios.post("http://localhost:3030/note/update", savedNote)
                .then((response) => {
                    console.log(response.data);
                });
            window.location = "http://localhost:8080/";
        }
    }
};
</script>
