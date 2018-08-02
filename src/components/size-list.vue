<template>
    <div id="size-list">
        <size-shape v-for="s in sizes" :key="s" :size="s" style="margin: 4px;"></size-shape>
    </div>
</template>

<script>
import sizeShape from './size-shape.vue'
export default {
    components: {sizeShape},
    props: ['sizes']
}
</script>

<style>
#size-list{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}
</style>


