<template>
    <div class="">
        {{ data.heading }}
        <br>
        <div v-for="(d, i) in data.list" :key="i" class="flex">
            <div>
                <img :src="`src/assets/img/${d.image}`" alt="">
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
    components: {

    },
    data() {
        return {
            data: {
                heading: "Kata Mereka yang Jualan Online di LummoSHOP?",
                list: [
                    {
                        title: "Fitur lengkap dan GRATIS",
                        name: "Ketty",
                        brand: "Petite Bakery",
                        description: "LummoSHOP mempermudah saya dalam membuat website jualan online, tanpa harus memikirkan dana tambahan. Fiturnya yang lengkap bisa saya pakai dengan GRATIS",
                        image: 'petite-bakery-testimony.png',
                    },
                    {
                        title: "Aplikasi yang lengkap, terintegrasi, dan simpel!",
                        name: "Ginan",
                        brand: "Bababerry",
                        description: "Semua semakin terintegrasi sehingga berjualan menjadi lebih efisien. Tinggal klik, kurir siap dipesan dan barang tinggal dikirim. Saat pesanan sudah sampai otomatis notifikasi pesanan akan masuk di aplikasi dan juga WhatsApp.",
                        image: 'bababerry_testimonial.png',
                    },
                    {
                        title: "Memudahkan Konsumen Bertransaksi!",
                        name: "Gabriela Kartini",
                        brand: "Bungoprak",
                        description: "LummoSHOP, selain berfungsi sebagai web-catalog, sangat memudahkan konsumen saya untuk bertransaksi. Mereka bisa pilih cara pembayaran yang mereka suka. Voucher LummoSHOP juga berhasil membuat konsumen saya nyaman.",
                        image: 'bungopark.png',
                    },
                    {
                        title: "Mudah pantau pesanan",
                        name: "Steve",
                        brand: "Sambal Mbul",
                        description: "LummoSHOP mempermudah saya untuk membuat dan memantau pesanan pelanggan. Serta tips dan pelatihan bisnis dari tim LummoSHOP membantu saya dalam mengembangkan bisnis",
                        image: 'sambal-mbul.png',
                    },
                    {
                        title: "Sangat mudah bagi pelanggan saya",
                        name: "Putri",
                        brand: "Mookie",
                        description: "Dengan fitur integrasi pembayaran dan logistik dari LummoSHOP. Membantu saya dalam memberikan service yang terbaik kepada pelanggan dan sangat mudah digunakan bagi pelanggan saya",
                        image: 'mookie-1.png',
                    },
                    {
                        title: "Jualan tanpa khawatir pesaing",
                        name: "Dewi",
                        brand: "Salam Resto & Cafe",
                        description: "LummoSHOP membantu saya dalam meningkatkan omzet penjualan. Karena, dengan link LummoSHOP yang saya sebar ke pelanggan dapat meningkatkan brand saya, tanpa khawatir dengan produk dari penjual lain.",
                        image: 'salam-resto-cafe.png',
                    },


                ]
            },
            section2: [{
                title: "Banyak Metode Pembayaran", description: "Pembeli bisa memilih metode pembayaran yang paling nyaman untuk mereka. Pilihan mulai dari virtual account/bank transfer, QRIS, e-wallet hingga cash on delivery (COD)."
                , image: "payment-partners.png"
            }, {
                title: "Berbagai Pilihan Pengiriman", description: "Pembelimu juga akan dimudahkan dengan banyaknya jenis pengiriman yang bisa dipilih sesuai yang mereka butuhkan, mulai dari pengiriman reguler, instan dan juga same-day."
                , image: "shipping-partners-20220211.png"
            }]

        };
    },
};
</script>
 
  