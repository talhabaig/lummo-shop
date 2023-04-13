<template>
  <div>
    <heroSection />
    <banyakFitur />
    <langkahKecil />
    <cocokUntuk />
    <kata-mereka />
    <banyakMetodo />
    <ada-pertanyaan />
  </div>
</template>
<script>
import banyakFitur from "../components/homePage/banyakFitur.vue";
import langkahKecil from "../components/homePage/langkahKecil.vue";
import cocokUntuk from "../components/homePage/cocokUntuk.vue";
import HeroSection from "../components/homePage/heroSection.vue";
import KataMereka from "../components/homePage/kataMereka.vue";
import banyakMetodo from "../components/homePage/banyakMetodo.vue";
import AdaPertanyaan from "../components/homePage/adaPertanyaan.vue";
export default {
  components: {
    banyakFitur,
    langkahKecil,
    cocokUntuk,
    HeroSection,
    KataMereka,
    banyakMetodo,
    AdaPertanyaan,
  },
  data() {
    return {};
  },
};
</script>
