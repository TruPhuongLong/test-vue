<template>
    <img :src="require('../assets/' + name)" :alt="name"/>
</template>

<script>
export default {
  props: ["name"]
};
</script>

<style>
img {
  width: 30px;
  height: 30px;
}
</style>


