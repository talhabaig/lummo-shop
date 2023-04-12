<template>
  <div class="py-[100px]">
    <div class="container">
      <div class="max-w-[775px] text-center mx-auto mb-20">
        <h2 class="text-2xl md:text-4xl my-6">
          {{ data.heading }}
        </h2>
        <span>
          {{ data.description }}
        </span>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 row">
        <div v-for="(d, i) in data.list" :key="i" class="mb-12">
          <div class="flex flex-col items-center text-center">
            <div class="max-w-[370px] mx-auto">
              <img :src="`src/assets/img/${d.image}`" alt="" />
            </div>
            <div class="flex flex-col max-w-[500px]">
              <span class="block mb-4">LANGKAH {{ i + 1 }}</span>
              <span class="mb-3 lg:text-[1.875rem] text-[1.23rem]">
                {{ d.title }}
              </span>
              <span>
                {{ d.description }}
              </span>
            </div>
          </div>
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
        heading: "Langkah Kecil untuk Membuka Peluang Besar",
        description: "Ikuti 4 langkah di bawah ini untuk mempercepat bisnis online-mu!",
        list: [
          {
            title: "Mulai Bikin Toko Online-mu",
            description:
              "Masukkan nama brand-mu dan pastikan sesuai dengan nama yang tertera pada link website untuk mempermudah branding toko online-mu.",
            image: "image-step-1.png",
          },
          {
            title: "Produk-mu Jadi Pusat Perhatian",
            description:
              "Tanpa saingan & perang harga, pengunjung lebih terpikat untuk membeli.",
            image: "image-step-2.png",
          },
          {
            title: "Upload Ribuan Produkmu ke Katalog dalam Hitungan Menit",
            description:
              "Tanpa ribet, tampilkan seluruh produk kamu dengan berbagai variannya!",
            image: "image-step-3.png",
          },
          {
            title: "Fitur Pembayaran & Pengiriman Lengkap",
            description:
              "Selengkap e-commerce. Memudahkan pembeli-mu memilih jenis pembayaran & pengiriman sesuai kebutuhan.",
            image: "image-step-4.png",
          },
        ],
      },
    };
  },
};
</script>
