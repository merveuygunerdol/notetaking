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
                  @click="edit"> Edit</span>
                <span
                  v-if="!isEdit"
                  class="button is-info"
                  @click="add"> Save </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </body>
</template>
<script>
import axios from "axios";
export default {
    props: {
        isEdit: {
            type:  Boolean,
            default:  true
        }
    },
    data() {
        return {
            note: { title:"" , body:"" }
        };
    }, methods: {
        add() {
            let newNote = {
                title: this.note.title,
                body: this.note.body
            };
            console.log(newNote);
            axios.post("http://localhost:3030/note", newNote)
                .then((response) => {
                    console.log(response.data);
                })
                .catch((error) => {
                    console.log(error);
                });
        },

    }
};
</script>
