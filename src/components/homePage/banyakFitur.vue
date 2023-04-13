<template>
  <div
    v-motion
    :initial="{
      opacity: 0,
      y: 100,
    }"
    :enter="{
      opacity: 1,
      y: 0,
    }"
  />

  <div class="bg-[#eef2ff]">
    <div class="container py-16">
      <div
        class="max-w-[775px] text-center mx-auto mb-20"
        v-motion-slide-visible-once-bottom
      >
        <h2 class="text-2xl md:text-4xl my-6">
          {{ data.heading }}
        </h2>
        <span>
          {{ data.description }}
        </span>
      </div>
      <div
        v-for="(d, i) in data.list"
        :key="i"
        class="targe flex flex-col md:flex-row gap-12 md:gap-0 row items-center mb-10 nth-row-reverse"
      >
        <div class="md:w-2/4" v-motion-slide-visible-once-bottom>
          <div class="lg:px-12 w-full">
            <h3 class="lg:text-[1.875rem] text-[1.25rem]">
              {{ d.title }}
            </h3>
            <span>
              {{ d.description }}
            </span>
          </div>
        </div>
        <div class="md:w-2/4" v-motion-slide-visible-once-bottom>
          <img :src="`src/assets/img/${d.image}`" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      data: {
        heading: "Banyak Fitur Toko Online Pintar untuk Kendalikan Bisnis Lebih Mudah",
        description:
          "Kamu bisa gunakan fitur-fitur toko online yang saling terhubung untuk membuat proses bisnis-mu lebih simpel, efisien, dan akurat.",
        list: [
          {
            title: "Website Toko Online yang Mudah Dikelola",
            description:
              "Pengelolaan bisnis semakin praktis dengan sistem manajemen order, pembayaran, hingga pengiriman barang yang lengkap.",
            image: "Website-Toko.png",
          },
          {
            title: "Produk-mu Jadi Pusat Perhatian",
            description:
              "Tanpa saingan & perang harga, pengunjung lebih terpikat untuk membeli.",
            image: "Produk-mu.png",
          },
          {
            title: "Upload Ribuan Produkmu ke Katalog dalam Hitungan Menit",
            description:
              "Tanpa ribet, tampilkan seluruh produk kamu dengan berbagai variannya!",
            image: "Upload-Ribuan.png",
          },
          {
            title: "Fitur Pembayaran & Pengiriman Lengkap",
            description:
              "Selengkap e-commerce. Memudahkan pembeli-mu memilih jenis pembayaran & pengiriman sesuai kebutuhan.",
            image: "Fitur-Pembayaran.png",
          },
        ],
      },
    };
  },
};
</script>
