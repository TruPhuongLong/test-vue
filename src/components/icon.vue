<template>
    <img :src="require('../assets/' + name)" :alt="name" />
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    }
  }
};
</script>

<style>
img {
  width: 100%;
  height: auto;
}
</style>


