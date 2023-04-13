import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import "./assets/styles/main.scss";
import router from "./router/router";
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
import { MotionPlugin } from '@vueuse/motion';
const Vue = createApp(App);
Vue.use(router).use( Carousel, Slide, Pagination, Navigation).use(MotionPlugin);

Vue.mount("#app");
