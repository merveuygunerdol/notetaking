<template lang="html">
  <body>
    <!-- h2 Add / Edit Note-->
    <div class="container">
      <div class="content">
        <div class="colummn">
          <div class="column is-half is-offset-one-quarter">
            <div class="field">
              <label class="label">Title</label>
              <div class="control">
                <input
                  class="input"
                  type="text"
                  placeholder="Note Title">
              </div>
            </div>
            <div class="field">
              <label class="label">Body</label>
              <div class="control">
                <textarea
                  class="textarea"
                  placeholder="Note Body"/>
              </div>
            </div>
            <div class="control">
              <!-- button Add / Save-->
              <div class="buttons">
                <span
                  v-if="isEdit"
                  class="button is-success"> Edit</span>
                <span
                  v-if="!isEdit"
                  class="button is-info">Save </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </body>
</template>
<script>
export default {
    props: {
        isEdit: {
            type: Boolean,
            default: false
        }
    }
};
</script>
