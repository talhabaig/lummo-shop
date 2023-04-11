<template>
    <div class="">
        {{ data.heading }}
        <br>
        {{ data.description }}
        <br>
        <div v-for="(d, i) in data.list" :key="i" class="flex">
            <div>
                {{ d.title }}
                {{ d.description }}
            </div>
            <div>
                <img :src="`src/assets/img/${d.image}`" alt="">
            </div>
        </div>
    </div>
</template>
  
<script>

export default {
    components: {

    },
    data() {
        return {
            showMenu: true,
            data: {
                heading: "Banyak Fitur Toko Online Pintar untuk Kendalikan Bisnis Lebih Mudah",
                description: "Kamu bisa gunakan fitur-fitur toko online yang saling terhubung untuk membuat proses bisnis-mu lebih simpel, efisien, dan akurat.",
                list: [
                    {
                        title: "Website Toko Online yang Mudah Dikelola",
                        description: "Pengelolaan bisnis semakin praktis dengan sistem manajemen order, pembayaran, hingga pengiriman barang yang lengkap.",
                        image: 'Website-Toko.png'
                    },
                    {
                        title: "Produk-mu Jadi Pusat Perhatian",
                        description: "Tanpa saingan & perang harga, pengunjung lebih terpikat untuk membeli.",
                        image: 'Produk-mu.png'
                    },
                    {
                        title: "Upload Ribuan Produkmu ke Katalog dalam Hitungan Menit",
                        description: "Tanpa ribet, tampilkan seluruh produk kamu dengan berbagai variannya!",
                        image: 'Upload-Ribuan.png'
                    },
                    {
                        title: "Fitur Pembayaran & Pengiriman Lengkap",
                        description: "Selengkap e-commerce. Memudahkan pembeli-mu memilih jenis pembayaran & pengiriman sesuai kebutuhan.",
                        image: 'Fitur-Pembayaran.png'
                    },

                ]
            }
        };
    },
};
</script>
 
  