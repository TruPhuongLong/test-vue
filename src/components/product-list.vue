<template>
    <div id="list" >
        <product v-for="item in itemSource" :key="item.id" v-hover-scale>
            <img slot="image" src="../assets/watch.jpg" />
            <h3 slot="name">{{item.name}}</h3>
            <h5 slot="price">{{item.price | dolar}}</h5>
        </product>
    </div>
</template>

<script>
import product from './product-card.vue'
import dolar from '../pipes/dolar.js'
import hoverScale from '../directives/hover-scale.js'

export default {
    components: {product},
    props: {
        itemSource: Array,
    }
}
</script>

<style>
#list{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    text-align: center;
}
</style>


