<!--<template>
<div id="del-button">
       <delButton></delButton>
</div>
</template>-->
<script>
// eslint-disable-next-line
/* eslint-disable */
import Vue from 'vue'
import delButton from './removeButton.vue'
  export default {
    components: {
      'delButton':delButton
    }
  }
  Vue.component('child', {
  // declare the props
  props: ['message'],
  // like data, the prop can be used inside templates and
  // is also made available in the vm as this.message
  template: '<p>{{ message }}</p>'
})
</script>
