<template>
    <div id="color-list">
        <color-circle v-for="item in itemSource" :key="item" :color="item"></color-circle>
    </div>
</template>

<script>
import colorCircle from './color-circle.vue'
export default {
    components: {colorCircle},
    props: {
        itemSource: Array
    }
}
</script>

<style>
#color-list{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}
</style>


