import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import "./assets/styles/main.scss";
import router from "./router/router";
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
const Vue = createApp(App);
Vue.use(router).use( Carousel, Slide, Pagination, Navigation);

Vue.mount("#app");
