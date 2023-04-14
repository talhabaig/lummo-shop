<template>
  <div class="container py-[80px]">
    <div class="text-center mx-auto" v-motion-slide-visible-once-bottom>
      <h2 class="text-2xl md:text-4xl mb-16">{{ data.heading }}</h2>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 row">
      <div>
        <div v-for="(d, i) in data.list" :key="i" class="mb-5">
          <div
            class="flex flex-col px-6 bg-[#eae8f4] border border-[#ada4d3] rounded-[4px]"
          >
            <div
              @click="itemShow1 !== d.itemid ? (itemShow1 = d.itemid) : (itemShow1 = -1)"
              class="flex items-center justify-between cursor-pointer"
            >
              <div
                class="py-3 text-[15px] max-w-[80%] overflow-hidden text-ellipsis whitespace-nowrap"
                :class="{ 'whitespace-normal': d.itemid === itemShow1 }"
              >
                {{ d.title }}
              </div>
              <div class="icon">
                <svg
                  class="fill-blue accordion-transition"
                  :class="{ 'svg-icon': d.itemid === itemShow1 }"
                  width="14px"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448  512"
                >
                  <path
                    d="M192 384c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L192 306.8l137.4-137.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-160 160C208.4 380.9 200.2 384 192 384z"
                  />
                </svg>
              </div>
            </div>
            <div
              class="h-0 overflow-hidden accordion-transition"
              :class="{ 'h-[200px]': d.itemid === itemShow1 }"
            >
              <div class="text-[12px] lg:text-[13px] leading-[1.43rem] py-4">
                {{ d.description }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-motion-slide-visible-once-bottom>
        <div v-for="(d, i) in data.list2" :key="i" class="mb-5">
          <div
            class="flex flex-col px-6 bg-[#eae8f4] border border-[#ada4d3] rounded-[4px]"
          >
            <div
              @click="itemShow2 !== d.itemid ? (itemShow2 = d.itemid) : (itemShow2 = -1)"
              class="flex items-center justify-between cursor-pointer"
            >
              <div
                class="py-3 text-[15px] max-w-[80%] overflow-hidden text-ellipsis whitespace-nowrap"
                :class="{ 'whitespace-normal': d.itemid === itemShow2 }"
              >
                {{ d.title }}
              </div>
              <div class="icon">
                <svg
                  class="fill-blue accordion-transition"
                  :class="{ 'svg-icon': d.itemid === itemShow2 }"
                  width="14px"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448  512"
                >
                  <path
                    d="M192 384c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L192 306.8l137.4-137.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-160 160C208.4 380.9 200.2 384 192 384z"
                  />
                </svg>
              </div>
            </div>
            <div
              class="h-0 overflow-hidden accordion-transition"
              :class="{ 'h-[200px]': d.itemid === itemShow2 }"
            >
              <div class="text-[12px] lg:text-[13px] leading-[1.43rem] py-4">
                {{ d.description }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="text-center mt-10 text-blue">Temukan jawaban lainnya di sini</div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      showAccordion: false,
      itemShow1: -1,
      itemShow2: -1,

      data: {
        heading: "Ada Pertanyaan? Temukan Jawabannya di Sini!",
        list: [
          {
            itemid: 1,
            show: false,

            title: "Apa kelebihan utama membuat website toko online pakai LummoSHOP?",
            description:
              "Pertama, jadi mudah kelola produk di katalog online. Bisa atur produk, foto, deskripsi, dan info ketersediaan produk langsung dari satu dashboard.",
            description1:
              "Kedua, lebih mudah jangkau pelanggan secara online semudah share status dan link kepada calon pembeli potensial lewat Whatsapp atau akun media sosial. Bisa share link toko online-mu atau link produk spesifik yang ada di katalogmu.",
            description2:
              "Ketiga, tersedia berbagai pilihan pembayaran untuk pelanggan dengan fitur link pembayaran LummoSHOP yang 100% aman terverifikasi Bank Indonesia dan bebas biaya transfer antar bank. Bisa transfer dari bank manapun atau e-wallet.",
            description3:
              "Keempat, bisa atur pesanan dan pengiriman produk dari satu aplikasi. Pesanan dan pengiriman bisa dipantau dan dilakukan langsung dalam satu dashboard.",
          },
          {
            itemid: 3,
            show: false,
            title: "Bagaimana cara menggunakan aplikasi LummoSHOP?",
            description: "Cara menggunakan aplikasi LummoSHOP pun sangat mudah:",
            detail:
              "Daftarkan nama usahamu, alamat dan tambahkan foto produk-produk kamu ke Katalog Produk.",
            detail1:
              "Toko online / online shop kamu langsung dibuatkan begitu informasi tentang usahamu dilengkapi dan kamu bisa dapatkan link ke toko online / online shop mu dari beranda aplikasi LummoSHOP.",
            detail2:
              "Lebih mudah untuk mempromosikan usahamu dengan membagikan katalog produk, toko online dan produk ke pelanggan lewat WhatsApp, Instagram, Facebook dan lainnya.",
            detail3: "Terima pesanan barang langsung dari pelanggan.",
            detail4: "Kirim pesanan ke pelanggan.",
          },

          {
            itemid: 5,
            show: false,
            title: "Apakah data saya aman?",
            description:
              "Iya, semua data kamu tersimpan secara aman di Cloud Server jadi kamu bisa akses data kamu di mana saja dan kapan saja. Meskipun kamu ganti handphone, kamu masih dapat akses menggunakan nomor handphone yang terdaftar di LummoSHOP. Terima kasih sudah menggunakan aplikasi LummoSHOP.",
          },
        ],
        list2: [
          {
            itemid: 2,
            show: false,
            title: "Apakah akan ada fitur-fitur baru?",
            description:
              "Kami akan segera memperbarui LummoSHOP dengan lebih banyak fitur yang membantu kamu jualan online lebih maksimal, seperti bulk upload produk, pilihan kurir pengiriman yang lebih banyak, dan lainnya.",
          },
          {
            itemid: 4,
            show: false,
            title: "Apakah aplikasi ini gratis?",
            description:
              "LummoSHOP akan selalu GRATIS untuk diunduh dan membantu kamu dalam membuat website toko online pribadi langsung dari HP secara mudah. Hanya ada potongan biaya layanan transaksi sebesar 2,5% (untuk kategori makanan dan minuman) dan 1% (untuk kategori lainnya) dari total pembayaran di luar biaya pengiriman. Fitur LummoSHOP lainnya GRATIS digunakan tanpa dikenakan biaya dan kamu juga bebas unggah produk sebanyak-banyaknya.",
          },

          {
            itemid: 6,
            show: false,
            title: "Gratis berapa lama?",
            description:
              "Fitur yang ada pada LummoSHOP saat ini akan selalu gratis untuk digunakan. LummoSHOP membantu kamu untuk membuat toko online / online shop bisnismu! GRATIS! Apa pun usahamu, kini semua orang bisa jualan online dan tingkatkan pendapatan dan keuntungan. Dengan LummoSHOP, kamu bisa buat produk katalog dari tokomu di handphone dan bagikan dengan pelangganmu lewat WhatsApp, Facebook, Instagram, dan lainnya. Jualan jadi lebih mudah dan bisa dilakukan kapan saja dan di mana saja dari handphonemu dengan LummoSHOP. Terima kasih sudah menggunakan aplikasi LummoSHOP.",
          },
        ],
      },
    };
  },
};
</script>
