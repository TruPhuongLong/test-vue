<template>
    <div id="container-page">
        <nav-bar class="container-80"></nav-bar>
        <div style="background-color: #F2F2F2">
            <category class="container-80"></category>
        </div>
        <div class="container-80">
            <div>
                left
            </div>

            <div>
                <product-list :item-source="listProducts"></product-list>
            </div>
        </div>
    </div>
</template>

<script>
import navBar from './nav.vue'
import category from './category.vue'
import productList from './product-list.vue'
export default {
    components: {navBar, category, productList},
    data(){
        return {
            listProducts: [
                {id: 0, url: "../assets/watch.jpg", name: 'Watch', price: '20'},
                {id: 1, url: "../assets/watch.jpg", name: 'Watch', price: '20'},
                {id: 2, url: "../assets/watch.jpg", name: 'Watch', price: '20'},
                {id: 3, url: "../assets/watch.jpg", name: 'Watch', price: '20'},
                {id: 4, url: "../assets/watch.jpg", name: 'Watch', price: '20'},
                {id: 5, url: "../assets/watch.jpg", name: 'Watch', price: '20'},
                {id: 6, url: "../assets/watch.jpg", name: 'Watch', price: '20'},
                {id: 7, url: "../assets/watch.jpg", name: 'Watch', price: '20'},
                {id: 8, url: "../assets/watch.jpg", name: 'Watch', price: '20'},
                {id: 8, url: "../assets/watch.jpg", name: 'Watch', price: '20'}
            ]
        }
    }
}
</script>

<style>
#container-page > div.container-80 > div:first-child {
    float: left;
    width: 25%;
    background-color: red;
    height: 500px;
}
#container-page > div.container-80 > div:last-child {
    float: left;
    width: 75%;
    background-color: yellow;
    height: 500px;
}
</style>


