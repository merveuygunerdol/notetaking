<template>
  <div id="hellonote" v-bind="post">
    <p>{{ title }}</p>
    <p>{{ body }}</p>
    <delButton></delButton>
  </div>
</template>
<script>
// eslint-disable-next-line
/* eslint-disable */
//import Vue from 'vue'
import delButton from './removeButton.vue'
  export default {
    components: {
      'delButton':delButton
    },
    props: ['title', 'body'],
        }
</script>
