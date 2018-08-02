<template>
    <div id="color" v-on:click="onclick" :style="{'background-color': color}">
        
    </div>
</template>

<script>
export default {
    props: ['color'],
    methods: {
        onclick(){
            this.$emit('colorchanged', color)
        }
    }
}
</script>

<style>
#color{
    width: 35px;
    height: 35px;
    border-radius: 50%;
    margin: 5px;
}
</style>


