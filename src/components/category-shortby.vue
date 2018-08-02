<template>
    <div id="category-shortby">
        <select>
            <option v-for="s in shortArray" :key="s">{{s}}</option>
        </select>
    </div>
</template>

<script>
export default {
    props: {
        shortArray: Array
    }
};
</script>

<style>

#category-shortby select {
  width: 100px;
  height: 40px;
  border: none;
  border-bottom: 1px solid black;
  background-color: transparent;
}

</style>


