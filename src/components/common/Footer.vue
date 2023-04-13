<template>
  <FooterUpper />
  <div class="bg-light py-[70px]">
    <div class="container">
      <div class="grid gap-5 sm:gap-0 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 row">
        <div>
          <div class="max-w-[150px] mb-[40px] mx-auto sm:mx-0">
            <img src="@/assets/img/footer-logo.png" alt="" />
          </div>
          <p class="mb-4 sm:text-blue text-center sm:text-start">
            LummoSHOP membantu kamu untuk membuat website toko online kamu dengan Mudah,
            Aman, dan GRATIS!
          </p>
          <p class="hidden sm:block text-[#6f5fb3]">
            2022 © PT BeeGroup Financial Indonesia, a subsidiary of Tulp Street Pte. Ltd.
            All Rights Reserved
          </p>
        </div>
        <div class="flex flex-col">
          <span class="text-blue text-[1.25rem] mb-5">Produk</span>
          <ul>
            <li class="mb-[12px]">Unduh LummoSHOP</li>
            <li class="mb-[12px]">LummoSHOP Plus</li>
            <li class="mb-[12px]">Toko Online</li>
            <li class="mb-[12px]">Jualan Online</li>
            <li class="mb-[12px]">Syarat & Ketentuan</li>
            <li class="mb-[12px]">Kebijakan Privasi</li>
          </ul>
        </div>
        <div class="flex flex-col">
          <span class="text-blue text-[1.25rem] mb-5">Bantuan</span>
          <ul>
            <li class="mb-[12px]">FAQ</li>
            <li class="mb-[12px]">Pusat Edukasi</li>
            <li class="mb-[12px]">Testimoni Pengguna</li>
            <li class="mb-[12px]">Tool Bisnis</li>
            <li class="mb-[12px]">Kontak Kami</li>
            <li class="mb-[12px]">Careers</li>
          </ul>
        </div>
        <div class="flex flex-col">
          <span class="text-blue text-[1.25rem] mb-5">Connect</span>
          <ul class="flex sm:flex-col justify-between">
            <li class="mb-[12px] flex items-center">
              <i class="fa-brands text-blue fa-twitter text-[1.25rem] mr-2"></i
              ><span class="hidden sm:inline">Twitter</span>
            </li>
            <li class="mb-[12px] flex items-center">
              <i class="fa-brands text-blue fa-facebook text-[1.25rem] mr-2"></i
              ><span class="hidden sm:inline">FaceBook</span>
            </li>
            <li class="mb-[12px] flex items-center">
              <i class="fa-brands text-blue fa-instagram text-[1.25rem] mr-2"></i
              ><span class="hidden sm:inline">Instagram</span>
            </li>
            <li class="mb-[12px] flex items-center">
              <i class="fa-brands text-blue fa-youtube text-[1.25rem] mr-2"></i
              ><span class="hidden sm:inline">Youtube</span>
            </li>
            <li class="mb-[12px] flex items-center">
              <i class="fa-brands text-blue fa-tiktok text-[1.25rem] mr-2"></i
              ><span class="hidden sm:inline">TikTok</span>
            </li>
          </ul>
          <div class="max-w-[134px] mt-1 mx-auto sm:mx-0 mb-5">
            <img src="@/assets/img/footer-google-logo.svg" alt="" />
          </div>
          <p class="sm:hidden text-center block text-[#6f5fb3]">
            2022 © PT BeeGroup Financial Indonesia, a subsidiary of Tulp Street Pte. Ltd.
            All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FooterUpper from "./FooterUpper.vue";
export default {
  components: { FooterUpper },

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
        ],
      },
    };
  },
};
</script>
