<template>
    <div id="size-shape">
        <h4>{{size}} </h4>
    </div>
</template>

<script>
export default {
    props: ['size']
}
</script>

<style>
#size-shape{
    width: 40px;
    height: 40px;
    border: 1px solid gray;
}
#size-shape h4{
    margin: 0px;
    line-height: 40px;
    text-align: center;
}
</style>


