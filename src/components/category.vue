<template>
    <div id="category">
        <category-link link="a/b/c" style="padding: 25px 0px 5px;"></category-link>
        <category-title style="padding: 30px 0px 35px;">woment</category-title>
        <category-shortby 
            :short-array="['price', 'new']" 
            style="position: absolute; right: 0px; top: 50%; transform: translate(0, -50%);"
        >
        </category-shortby>
    </div>
</template>

<script>
import categoryLink from './category-link.vue'
import categoryTitle from './category-title.vue'
import categoryShortby from './category-shortby.vue'
export default {
    components: {categoryLink, categoryTitle, categoryShortby}
}
</script>

<style>
#category{
    /* overflow: auto; */
    position: relative;
}
</style>


