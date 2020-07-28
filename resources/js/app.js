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

async function checkMail() {
    $("#status").empty();
    $("#status").append('<div class="circle-border m-t-20"><div class="circle-core"></div></div></div><p class="verify loading"> Subscribing to news letter...</p>')
    let params = "?email=" + $('#email').val();;
    let request = new XMLHttpRequest();
    request.open("GET", "http://frontend-candidate.vaimo.com/brandon.bezuidenhout/public/newsletter/subscribe" + params);
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

function getCart() {
    let request = new XMLHttpRequest();
    request.open("GET", "http://frontend-candidate.vaimo.com/brandon.bezuidenhout/public/cart/get");
    request.setRequestHeader('Cache-Control', '3600');
    request.send();
    request.onload = () => {
        var res = JSON.parse(request.response);
        console.log(res);
        $("#cartnum").text(res.totalItems);
        if(res.totalItems == 1) {
            $("#itemstext").text("item");
        }
        $("#carttotal").text("€ " + res.totalPrice);
    }
}
$(document).ready(function() {
    getCart();
    if(getWidth() < 991) {
        $('.divFoo').replaceClass('dropright', 'dropdown');
    }
});
(function($) {
    $.fn.replaceClass = function(pFromClass, pToClass) {
        return this.removeClass(pFromClass).addClass(pToClass);
    };
}(jQuery));

new Vue({
    router
}).$mount('#app');