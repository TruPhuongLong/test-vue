<template>
    <div id="product">
        <slot name="image"></slot>
        <slot name="name"></slot>
        <slot name="price"></slot>
    </div>
</template>

<script>
export default {
    props: ['item']
}
</script>

<style>
#product{
    width: 240px;
    margin: 10px;
    box-sizing: border-box;
}
</style>


