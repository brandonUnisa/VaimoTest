import Vue from 'vue';
import VueRouter from 'vue-router';
import VueBlu from 'vue-blu';
import { Slide } from 'vue-burger-menu'
import 'vue-blu/dist/css/vue-blu.min.css';
import $ from 'jquery'

Vue.use(VueRouter);
Vue.use(VueBlu);
Vue.use(Slide);

const router = new VueRouter({
    mode: 'history',
    base: '/',
    routes: []
});instance.interceptors.request.use(config => {
  NProgress.start()
  return config
})

new Vue({
    router,
    beforeCreate() {
        let request = new XMLHttpRequest();
        request.open("GET", "http://localhost:8000/cart/get");
        request.setRequestHeader('Cache-Control', '3600');
        request.send();
        request.onload = () => {
            var res = JSON.parse(request.response);
            console.log(res);
            $("#cartNum").text(res.totalItems);
            if(res.totalItems == 1) {
                $("#itemsText").text("item");
            } else {
                $("#itemsText").text("items");
            }
            $("#cartTotal").text(res.totalPrice);
        }
    },
    methods: {
        checkEmail: function() {
            $("#status").empty();
            $("#status").append('<div class="circle-border m-t-20"><div class="circle-core"></div></div></div><p class="verify loading"> Subscribing to news letter...</p>')
            let params = "?email=" + $('#email').val();;
            let request = new XMLHttpRequest();
            request.open("GET", "http://localhost:8000/newsletter/subscribe" + params);
            request.send();
            request.onload = () => {
                console.log(JSON.parse(request.response));
                $("#status").empty();
                if(JSON.parse(request.response) == true) {
                    $("#status").append('<p class="verify green m-t-20"><i class="fa fa-check" style="font-size:19px; margin-right: 5px;"></i> Subscription successful.</p>');
                } else {
                    $("#status").append('<p class="verify red m-t-20"><i class="fa fa-exclamation-triangle" style="font-size:19px; margin-right: 5px;"></i> Email verification failed...</p>');
                }
            }
        }
    },
    components: {
        Slide // Register your component
    }
}).$mount('#app');