<template>
  <div class="bg-blue py-8 md:py-[70px]">
    <div class="container carousel">
      <div>
        <div
          class="max-w-[775px] text-center mb-6 mx-auto"
          v-motion-slide-visible-once-bottom
        >
          <h2 class="text-2xl md:text-4xl my-6 text-white">
            {{ data.heading }}
          </h2>
          <span class="text-[#ADA4D3]">
            {{ data.description }}
          </span>
        </div>
      </div>
      <Carousel
        :items-to-show="1"
        :wrap-around="true"
        :breakpoints="breakpoints"
        v-motion-slide-visible-once-bottom
      >
        <Slide v-for="(d, i) in data.list" :key="i">
          <div class="flex flex-col p-[25px]">
            <div class="carousel__item">
              <div class="max-w-[200px] sm:max-w-[280px]">
                <img :src="d.image" alt="" />
              </div>
            </div>
            <div class="flex gap-2 my-6 items-center">
              <div class="w-[42px] h-[42px]">
                <img class="rounded-full" :src="d.imageLogo" alt="logo" />
              </div>
              <div class="flex flex-col leading-4">
                <span class="text-white">
                  {{ d.title }}
                </span>
                <span class="text-[#ada4d3] text-[0.85rem] text-left">
                  {{ d.description }}
                  <br />
                  {{ d.description }}
                </span>
              </div>
            </div>
          </div>
        </Slide>
        <template #addons>
          <Navigation />
        </template>
      </Carousel>
    </div>
  </div>
</template>

<script>
import { Carousel, Navigation, Slide } from "vue3-carousel";
import image1 from "../../assets/img/pejuang-store.png";
import image2 from "../../assets/img/wesafeu-mockup-810p-1650p.png";
import image3 from "../../assets/img/wannabe-19-mockup-810p-1650p.png";
import image4 from "../../assets/img/vr_tjendol.png";
import imagelogo1 from "../../assets/img/logo-store-1.jpg";
import imagelogo2 from "../../assets/img/logo-store-2.jpg";
import imagelogo3 from "../../assets/img/logo-store-3.jpg";
import imagelogo4 from "../../assets/img/logo-store-4.jpg";
export default {
  components: {
    Carousel,
    Slide,
    Navigation,
  },
  data() {
    return {
      breakpoints: {
        // carousel breakponits 576px and up
        576: {
          itemsToShow: 2,
        },
        768: {
          itemsToShow: 4,
        },
      },
      data: {
        heading: "Cocok untuk Berbagai Jenis & Skala Bisnis",
        description:
          "Semua layanan LummoSHOP mendukungmu yang baru memulai, sudah merintis ataupun sedang ingin membesarkan bisnis.",
        list: [
          {
            title: "Petite Bakery",
            description: "pakistan",
            image: image1,
            imageLogo: imagelogo1,
          },
          {
            title: "Petite Bakery",
            description: "pakistan",
            image: image2,
            imageLogo: imagelogo2,
          },
          {
            title: "Petite Bakery",
            description: "pakistan",
            image: image3,
            imageLogo: imagelogo3,
          },
          {
            title: "Petite Bakery",
            description: "pakistan ",
            image: image4,
            imageLogo: imagelogo4,
          },
        ],
      },
    };
  },
};
</script>
