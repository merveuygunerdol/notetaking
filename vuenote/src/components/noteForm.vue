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
                <input
                  class="input"
                  type="text"
                  placeholder="Note Title"
                  v-model="note.title">
              </div>
            </div>
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
        }
    },
    data() {
        return {
            isActive: false,

        };
    }, methods: {
        add() {
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
        allNotes(){
            location.href = "http://localhost:8080/#/";
        },
        saveNote() {
            console.log("merve");
            let savedNote = {
                title: this.note.title,
                body: this.note.body,
            };
            let noteId = this.id;
            console.log(savedNote);
            axios.get("http://localhost:3030/note", noteId)
                .then((response) => {
                    console.log(response.data);
                });
            window.location = "http://localhost:8080/";
        }
    }
};
</script>
