
<template lang="html">
  <body>
    <h1 class="title is-1"> {{ loginTitle }} </h1>
    <div class="container">
      <div class="content">
        <div class="column">
          <div class="column is-half is-offset-one-quarter">
            <div class="field">
              <p class="control has-icons-left has-icons-right">
                <input
                  class="input"
                  type="email"
                  placeholder="Email">
                <span class="icon is-small is-left">
                  <icon name="envelope"/>
                </span>
                <span class="icon is-small is-right">
                  <i class="fas fa-check"/>
                </span>
              </p>
            </div>
            <div class="field">
              <p class="control has-icons-left">
                <input
                  class="input"
                  type="password"
                  placeholder="Password">
                <span class="icon is-small is-left">
                  <icon name="key"/>
                </span>
              </p>
            </div>
            <div class="field">
              <p class="control">
                <button class="button is-success">
                  Login
                </button>
              </p>
            </div>

          </div>
        </div>
      </div>
  </div></body>

</template>

<script>
import "vue-awesome/icons";
export default {
    data(){
        return {
            loginTitle: "Login to View Your Notes"
        };
    }
};
</script>

<style>
h1.title.is-1  {
color:#23d160;
}
</style>

