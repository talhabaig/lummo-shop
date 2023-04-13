<template>
  <Header />
  <router-view />
  <Footer />
  <scroll-to-top />
</template>

<script>
import Header from "../components/common/Header.vue";
import Footer from "../components/common/Footer.vue";
import ScrollToTop from "../components/common/ScrollToTop.vue";
export default {
  components: {
    Header,
    Footer,
    ScrollToTop,
  },
};
</script>
