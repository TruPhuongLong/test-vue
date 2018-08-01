<template>
    <button :style="style">
        <icon :name="icon" />
    </button>
</template>

<script>
import icon from './icon.vue'
export default {
    components: {icon},
    props: {
        icon: String,
        style: {
            default(){
                return {
                    width: '20px',
                    height: '20px'
                }
            }
        }
    }
}
</script>

<style>
button{
    background-color: transparent;
    border: none;
    padding: 0px;
}
</style>


