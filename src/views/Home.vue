<template>
    <div>
        <banyakFitur/>
        <langkahKecil/>
        <cocokUntuk/>
    </div>
</template>
<script>
 import banyakFitur from "../components/homePage/banyakFitur.vue"
 import langkahKecil from "../components/homePage/langkahKecil.vue"
 import cocokUntuk from "../components/homePage/cocokUntuk.vue"
 export default {
    components:{
        banyakFitur,langkahKecil,cocokUntuk
    },
    data() {
      return {  
      };
    },
  };
 </script>