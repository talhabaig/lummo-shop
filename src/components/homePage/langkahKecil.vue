<template>
  <div class="py-[100px]">
    <div class="container">
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

      <div class="grid grid-cols-1 md:grid-cols-2 row">
        <div v-for="(d, i) in data.list" :key="i" class="mb-12 targe">
          <div class="flex flex-col items-center text-center">
            <div class="max-w-[370px] mx-auto" v-motion-slide-visible-once-bottom>
              <img :src="d.image" alt="" />
            </div>
            <div class="flex flex-col max-w-[500px]" v-motion-slide-visible-once-bottom>
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
import image1 from "../../assets/img/image-step-1.png";
import image2 from "../../assets/img/image-step-2.png";
import image3 from "../../assets/img/image-step-3.png";
import image4 from "../../assets/img/image-step-4.png";
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
            image: image1,
          },
          {
            title: "Produk-mu Jadi Pusat Perhatian",
            description:
              "Tanpa saingan & perang harga, pengunjung lebih terpikat untuk membeli.",
            image: image2,
          },
          {
            title: "Upload Ribuan Produkmu ke Katalog dalam Hitungan Menit",
            description:
              "Tanpa ribet, tampilkan seluruh produk kamu dengan berbagai variannya!",
            image: image3,
          },
          {
            title: "Fitur Pembayaran & Pengiriman Lengkap",
            description:
              "Selengkap e-commerce. Memudahkan pembeli-mu memilih jenis pembayaran & pengiriman sesuai kebutuhan.",
            image: image4,
          },
        ],
      },
    };
  },
};
</script>
