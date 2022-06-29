require('./bootstrap');
require("@/store/subscriber");

window.Vue = require('vue').default;
import App from './App.vue'
import router from './router'
import store from './store'

Vue.component("App", App);

store.dispatch("auth/attempt", localStorage.getItem("token")).then(() => {
    new Vue({
        router,
        store,
        render: (h) => h(App),
    }).$mount("#app");
});
