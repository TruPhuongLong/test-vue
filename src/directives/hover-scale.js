import Vue from 'vue'

export default Vue.directive('hover-scale', {
    bind(el){
        const bd = el.style.border;
        el.onmouseover = () => {
            // el.style.backgroundColor = 'red';
            el.style.border = '2px solid green'
        }
        el.onmouseout = () => {
            // el.style.backgroundColor = bg;
            el.style.border = bd;
        }
    }
})