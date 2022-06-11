import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./config/config";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import VueMoment from "vue-moment";
import VueQRCodeComponent from "vue-qrcode-component";
import store from "./store/store";
import VueClipboard from "vue-clipboard2";
import VueSocialSharing from "vue-social-sharing";

Vue.component("qr-code", VueQRCodeComponent);

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueMoment);
Vue.use(store);
Vue.use(VueClipboard);
Vue.use(VueSocialSharing);

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount("#app");
