<template>
  <div class="bg-[#f4f9fd] py-[100px]">
    <div class="container">
      <div class="text-center mx-auto">
        <h2 class="text-2xl md:text-4xl mb-16">
          {{ data.heading }}
        </h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 items-center row">
        <div>
          <img :src="`src/assets/img/${data.selectedData.image}`" alt="" />
        </div>
        <div>
          <div class="flex flex-col pl-5">
            <h4 class="mb-1 text-[1.5rem] text-blue">
              {{ data.selectedData.title }}
            </h4>
            <span>
              {{ data.selectedData.description }}
            </span>
            <span class="block mt-4 text-blue"> {{ data.selectedData.name }}</span>
            <span class="text-[#6f5fb3]"> {{ data.selectedData.brand }}</span>
            <div class="flex items-center gap-4 mt-9">
              <div
                @click="previous()"
                class="flex justify-center items-center w-[32px] h-[32px] text-white bg-[#9ca3af] rounded-full"
              >
                <svg
                  class="w-[14px]"
                  fill="white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path
                    d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"
                  />
                </svg>
              </div>
              <div class="flex gap-1">
                <span>{{ data.selectedData.id }}</span>
                <span>/</span>
                <span>{{ data.list.length }}</span>
              </div>
              <div
                @click="next"
                class="flex justify-center items-center w-[32px] h-[32px] text-white bg-[#9ca3af] rounded-full"
              >
                <svg
                  class="w-[14px]"
                  fill="white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path
                    d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
                  />
                </svg>
              </div>
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
        heading: "Kata Mereka yang Jualan Online di LummoSHOP?",
        selectedData: {
          id: 1,
          title: "Fitur lengkap dan GRATIS",
          name: "Ketty",
          brand: "Petite Bakery",
          description:
            "LummoSHOP mempermudah saya dalam membuat website jualan online, tanpa harus memikirkan dana tambahan. Fiturnya yang lengkap bisa saya pakai dengan GRATIS",
          image: "petite-bakery-testimony.png",
        },
        list: [
          {
            id: 1,
            title: "Fitur lengkap dan GRATIS",
            name: "Ketty",
            brand: "Petite Bakery",
            description:
              "LummoSHOP mempermudah saya dalam membuat website jualan online, tanpa harus memikirkan dana tambahan. Fiturnya yang lengkap bisa saya pakai dengan GRATIS",
            image: "petite-bakery-testimony.png",
          },
          {
            id: 2,
            title: "Aplikasi yang lengkap, terintegrasi, dan simpel!",
            name: "Ginan",
            brand: "Bababerry",
            description:
              "Semua semakin terintegrasi sehingga berjualan menjadi lebih efisien. Tinggal klik, kurir siap dipesan dan barang tinggal dikirim. Saat pesanan sudah sampai otomatis notifikasi pesanan akan masuk di aplikasi dan juga WhatsApp.",
            image: "bababerry_testimonial.png",
          },
          {
            id: 3,
            title: "Memudahkan Konsumen Bertransaksi!",
            name: "Gabriela Kartini",
            brand: "Bungoprak",
            description:
              "LummoSHOP, selain berfungsi sebagai web-catalog, sangat memudahkan konsumen saya untuk bertransaksi. Mereka bisa pilih cara pembayaran yang mereka suka. Voucher LummoSHOP juga berhasil membuat konsumen saya nyaman.",
            image: "bungopark.png",
          },
          {
            id: 4,
            title: "Mudah pantau pesanan",
            name: "Steve",
            brand: "Sambal Mbul",
            description:
              "LummoSHOP mempermudah saya untuk membuat dan memantau pesanan pelanggan. Serta tips dan pelatihan bisnis dari tim LummoSHOP membantu saya dalam mengembangkan bisnis",
            image: "sambal-mbul.png",
          },
          {
            id: 5,
            title: "Sangat mudah bagi pelanggan saya",
            name: "Putri",
            brand: "Mookie",
            description:
              "Dengan fitur integrasi pembayaran dan logistik dari LummoSHOP. Membantu saya dalam memberikan service yang terbaik kepada pelanggan dan sangat mudah digunakan bagi pelanggan saya",
            image: "mookie-1.png",
          },
          {
            id: 6,
            title: "Jualan tanpa khawatir pesaing",
            name: "Dewi",
            brand: "Salam Resto & Cafe",
            description:
              "LummoSHOP membantu saya dalam meningkatkan omzet penjualan. Karena, dengan link LummoSHOP yang saya sebar ke pelanggan dapat meningkatkan brand saya, tanpa khawatir dengan produk dari penjual lain.",
            image: "salam-resto-cafe.png",
          },
        ],
      },
    };
  },
  methods: {
    next() {
      if (this.data.selectedData.id < 6) {
        this.data.selectedData = this.data.list.filter(
          (x) => x.id > this.data.selectedData.id
        )[0];
      }
    },
    previous() {
      if (this.data.selectedData.id > 1) {
        this.data.selectedData = this.data.list
          .filter((x) => x.id < this.data.selectedData.id)
          .reverse()[0];
      }
    },
  },
};
</script>
