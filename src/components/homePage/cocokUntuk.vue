<template>
  <div class="bg-blue py-8 md:py-[70px]">
    <div class="container carousel">
      <div>
        <div class="max-w-[775px] text-center mx-auto">
          <h2 class="text-2xl md:text-4xl my-6 text-white">
            {{ data.heading }}
          </h2>
          <span class="text-[#ADA4D3]">
            {{ data.description }}
          </span>
        </div>
      </div>
      <Carousel :items-to-show="1" :wrap-around="true" :breakpoints="breakpoints">
        <Slide v-for="(d, i) in data.list" :key="i">
          <div class="flex flex-col p-[25px]">
            <div class="carousel__item">
              <div class="max-w-[340px]">
                <img :src="`src/assets/img/${d.image}`" alt="" />
              </div>
            </div>
            <div class="flex gap-2 my-6 items-center">
              <div class="w-[42px] h-[42px]">
                <img
                  class="rounded-full"
                  :src="`src/assets/img/${d.imageLogo}`"
                  alt="logo"
                />
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
            image: "pejuang-store.png",
            imageLogo: "logo-store-1.jpg",
          },
          {
            title: "Petite Bakery",
            description: "pakistan",
            image: "wesafeu-mockup-810p-1650p.png",
            imageLogo: "logo-store-2.jpg",
          },
          {
            title: "Petite Bakery",
            description: "pakistan",
            image: "wannabe-19-mockup-810p-1650p.png",
            imageLogo: "logo-store-3.jpg",
          },
          {
            title: "Petite Bakery",
            description: "pakistan ",
            image: "vr_tjendol.png",
            imageLogo: "logo-store-4.jpg",
          },
        ],
      },
    };
  },
};
</script>
