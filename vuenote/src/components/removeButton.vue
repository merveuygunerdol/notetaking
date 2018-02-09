<template>
  <div class="remove-button">
    <button v-on:click="remove">Delete</button>
  </div>
</template>
<script>
// eslint-disable-next-line
/* eslint-disable */
    export default {
        methods: {
            remove : function(event) {
                console.log('clicked')
            }
        }
    }
</script>
