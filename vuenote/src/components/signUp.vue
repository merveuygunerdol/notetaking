
<template lang="html">
  <body>
    <h1 class="title is-1"> {{ signUpTitle }} </h1>
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
              <div class="control has-icons-left has-icons-right">
                <input
                  class="input"
                  type="text"
                  placeholder="Name">
                <span class="icon is-small is-left">
                  <icon name="user-o"/>
                </span>
                <span class="icon is-small is-right">
                  <i class="fas fa-exclamation-triangle"/>
                </span>
              </div>
            </div>
            <div class="field">
              <p class="control">
                <button class="button is-danger">
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
            signUpTitle: "Welcome to HelloNote"
        };
    }
};
</script>

<style>
h1.title.is-1  {
color:#ff3860;
}
</style>

