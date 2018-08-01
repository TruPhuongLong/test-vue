<template>
    <img :src="require('../assets/' + name)" :alt="name" :style="style"/>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    style: {
      type: String,
      default: function(){
        return 'width: 10px; height: 10px'
      }
    }
  }
};
</script>

<style>
/* img {
  width: 10px;
  height: 10px;
} */
</style>


