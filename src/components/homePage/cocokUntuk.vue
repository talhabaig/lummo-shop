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
     
    data() {
        return {
            showMenu: true,
            data: {
                heading: "Cocok untuk Berbagai Jenis & Skala Bisnis",
                description: "Semua layanan LummoSHOP mendukungmu yang baru memulai, sudah merintis ataupun sedang ingin membesarkan bisnis.",
                list: [
                    {
                        title: "Petite Bakery",
                        description: "light_text-color none",
                        image: 'pejuang-store.png',
                    },
                    {
                        title: "Produk-mu Jadi Pusat Perhatian",
                        description: "Tanpa saingan & perang harga, pengunjung lebih terpikat untuk membeli.",
                        image: 'wesafeu-mockup-810p-1650p.png'
                    },
                    {
                        title: "Upload Ribuan Produkmu ke Katalog dalam Hitungan Menit",
                        description: "Tanpa ribet, tampilkan seluruh produk kamu dengan berbagai variannya!",
                        image: 'wannabe-19-mockup-810p-1650p.png'
                    },
                    {
                        title: "Fitur Pembayaran & Pengiriman Lengkap",
                        description: "Selengkap e-commerce. Memudahkan pembeli-mu memilih jenis pembayaran & pengiriman sesuai kebutuhan.",
                        image: 'vr_tjendol.png'
                    },

                ]
            }
        };
    },
};
</script>
 
  