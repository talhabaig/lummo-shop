<template>
  <div class="">
    {{ data.heading }}
    <br />
    <div v-for="(d, i) in data.list" :key="i" class="flex">
      <div>
        <img :src="`src/assets/img/${d.image}`" alt="" />
      </div>

      <div>
        <span>LANGKAH {{ i + 1 }}</span>
        <br />
        {{ d.title }}
        <br />
        {{ d.description }}
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
            title: "Apakah data saya aman?",
            description:
              "Iya, semua data kamu tersimpan secara aman di Cloud Server jadi kamu bisa akses data kamu di mana saja dan kapan saja. Meskipun kamu ganti handphone, kamu masih dapat akses menggunakan nomor handphone yang terdaftar di LummoSHOP. Terima kasih sudah menggunakan aplikasi LummoSHOP.",
          },
          {
            title: "Apakah akan ada fitur-fitur baru?",
            description:
              "Kami akan segera memperbarui LummoSHOP dengan lebih banyak fitur yang membantu kamu jualan online lebih maksimal, seperti bulk upload produk, pilihan kurir pengiriman yang lebih banyak, dan lainnya.",
          },
          {
            title: "Apakah aplikasi ini gratis?",
            description:
              "LummoSHOP akan selalu GRATIS untuk diunduh dan membantu kamu dalam membuat website toko online pribadi langsung dari HP secara mudah. Hanya ada potongan biaya layanan transaksi sebesar 2,5% (untuk kategori makanan dan minuman) dan 1% (untuk kategori lainnya) dari total pembayaran di luar biaya pengiriman. Fitur LummoSHOP lainnya GRATIS digunakan tanpa dikenakan biaya dan kamu juga bebas unggah produk sebanyak-banyaknya.",
          },

          {
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
