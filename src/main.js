import Vue from 'vue'
// import App from './App.vue'
import Nav from './components/nav'
import './main.css'
import ContainerPage from './components/container-page.vue'

new Vue({
  el: '#app',
  render: h => h(ContainerPage)
})
