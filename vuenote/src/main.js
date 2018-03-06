// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import axios from "axios";
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import note from "./components/note.vue";
import "bulma/css/bulma.css";
import Icon from "vue-awesome/components/Icon";

Vue.component("note", note);
Vue.component("icon", Icon);

Vue.config.productionTip = false;
window.axios = axios;
new Vue({
    el: "#app",
    router,
    components: { App, Icon },
    template: "<App/>",
});
export const HTTP = axios.create({
    baseURL: "http://localhost:3030/note",
    headers: {
        Authorization: "Bearer {token}",
    },
});
