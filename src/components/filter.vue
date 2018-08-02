<template>
    <div id="filter">
        <h4>Color</h4>
        <color-list :item-source="listColor"></color-list>

        <h4>Size</h4>
        <size-list :sizes="listSize"></size-list>
    </div>
</template>

<script>
import colorList from './color-list.vue'
import sizeList from './size-list.vue'

export default {
    components: {colorList, sizeList},
    props: ['listColor', 'listSize']
}
</script>

<style>

</style>


