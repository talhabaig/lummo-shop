<template>
    <div class="">
        {{ data.heading }}
        <br>
        {{ data.description }}
        <br>
        <div v-for="(d, i) in data.list" :key="i" class="flex">
            <div>
                <img :src="`src/assets/img/${d.image}`" alt="">
            </div>
            
            <div>
                <span>LANGKAH {{ i+1 }}</span>
            <br/>
                {{ d.title }}
                <br/>
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
                heading: "Langkah Kecil untuk Membuka Peluang Besar",
                description: "Ikuti 4 langkah di bawah ini untuk mempercepat bisnis online-mu!",
                list: [
                    {
                        title: "Mulai Bikin Toko Online-mu",
                        description: "Masukkan nama brand-mu dan pastikan sesuai dengan nama yang tertera pada link website untuk mempermudah branding toko online-mu.",
                        image: 'image-step-1.png',
                    },
                    {
                        title: "Produk-mu Jadi Pusat Perhatian",
                        description: "Tanpa saingan & perang harga, pengunjung lebih terpikat untuk membeli.",
                        image: 'image-step-2.png'
                    },
                    {
                        title: "Upload Ribuan Produkmu ke Katalog dalam Hitungan Menit",
                        description: "Tanpa ribet, tampilkan seluruh produk kamu dengan berbagai variannya!",
                        image: 'image-step-3.png'
                    },
                    {
                        title: "Fitur Pembayaran & Pengiriman Lengkap",
                        description: "Selengkap e-commerce. Memudahkan pembeli-mu memilih jenis pembayaran & pengiriman sesuai kebutuhan.",
                        image: 'image-step-4.png'
                    },

                ]
            }
        };
    },
};
</script>
 
  