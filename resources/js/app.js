import Vue from 'vue';
import VueRouter from 'vue-router';
import VueBlu from 'vue-blu'
import 'vue-blu/dist/css/vue-blu.min.css'

Vue.use(VueRouter);
Vue.use(VueBlu);

const router = new VueRouter({
    mode: 'history',
    base: '/',
    routes: []
});

new Vue({
    router
}).$mount('#app');