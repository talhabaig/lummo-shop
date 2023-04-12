<template>
  <div>
    <heroSection />
    <banyakFitur />
    <langkahKecil />
    <cocokUntuk />
  </div>
</template>
<script>
import banyakFitur from "../components/homePage/banyakFitur.vue";
import langkahKecil from "../components/homePage/langkahKecil.vue";
import cocokUntuk from "../components/homePage/cocokUntuk.vue";
import HeroSection from "../components/homePage/heroSection.vue";
export default {
  components: {
    banyakFitur,
    langkahKecil,
    cocokUntuk,
    HeroSection,
  },
  data() {
    return {};
  },
};
</script>
