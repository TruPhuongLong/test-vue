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
      default: function(){
        return {
          width: '20px',
          height: '20px'
        }
      }
    }
  }
};
</script>

<style>
img{
  /* background-color: red; */
  object-fit: fill;
}
</style>


