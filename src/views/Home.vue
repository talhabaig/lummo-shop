<template>
  <div>
    <heroSection />
    <banyakFitur />
    <langkahKecil />
    <cocokUntuk />
    <kata-mereka />
    <banyakMetodo />
  </div>
</template>
<script>
import banyakFitur from "../components/homePage/banyakFitur.vue";
import langkahKecil from "../components/homePage/langkahKecil.vue";
import cocokUntuk from "../components/homePage/cocokUntuk.vue";
import HeroSection from "../components/homePage/heroSection.vue";
import KataMereka from "../components/homePage/kataMereka.vue";
import banyakMetodo from "../components/homePage/banyakMetodo.vue";
export default {
  components: {
    banyakFitur,
    langkahKecil,
    cocokUntuk,
    HeroSection,
    KataMereka,
    banyakMetodo,
  },
  data() {
    return {};
  },
};
</script>
