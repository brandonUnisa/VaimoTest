import Vue from 'vue';
import VueRouter from 'vue-router';
import Popover from 'vue-js-popover'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

Vue.use(VueRouter);
Vue.use(VueMaterial);
Vue.use(Popover);

const router = new VueRouter({
    mode: 'history',
    base: '/',
    routes: []
});

new Vue({
    router
}).$mount('#app');