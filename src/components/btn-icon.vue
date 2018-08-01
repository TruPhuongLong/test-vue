<template>
    <button>
        <icon :name="icon" :style="style"/>
    </button>
</template>

<script>
import icon from './icon.vue'
export default {
    components: {icon},
    props: ['icon', 'style']
}
</script>

<style>
button{
    background-color: transparent;
    border: none;
}
</style>


