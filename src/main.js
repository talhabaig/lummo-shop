import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import "./assets/styles/main.scss";
import router from "./router/router";
const Vue = createApp(App);
Vue.use(router);
Vue.mount("#app");
