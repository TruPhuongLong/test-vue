<template>
    <div id="nav-container">
        <btn-icon class="left" icon="menu.png" :style="{width: '30px', height: '30px'}"></btn-icon>
        <btn-icon class="bettwen" icon="logo.png" :style="{width: '50px', height: '50px'}"></btn-icon>
        <span class="right">
            <btn-icon icon="search.png" ></btn-icon>
            <btn-icon icon="heart.png" ></btn-icon>
            <btn-icon icon="shopping-cart.png" ></btn-icon>
            <btn-icon icon="user.png" ></btn-icon>
        </span>
    </div>
</template>

<script>
import btnIcon from './btn-icon.vue';
export default {
    components: {btnIcon}
}
</script>

<style>
#nav-container{
    text-align: center;
}

</style>


