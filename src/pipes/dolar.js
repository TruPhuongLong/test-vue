import Vue from 'vue'

export default Vue.filter('dolar', function(money){
    return '$' + money;
})