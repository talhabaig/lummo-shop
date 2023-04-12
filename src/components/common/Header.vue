<template>
  <div class="bg-blue fixed z-40 w-full">
    <nav
      class="max-w-[1270px] m-auto flex flex-col lg:flex-row justify-between lg:items-center px-[30px] py-6 text-white text-[0.875rem]"
    >
      <div class="flex items-center justify-between">
        <div class="w-[102px] lg:w-[152px]">
          <img src="@/assets/img/lummo-shop-logo.png" alt="img" />
        </div>
        <div @click="showMenu = !showMenu" class="lg:hidden">
          <svg width="18" height="14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              v-if="!showMenu"
              d="M1 1h16M1 7h16M1 13h16"
              class="icon-bars"
              stroke="#EAE8F4"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              v-else
              d="M1 13 13 1M1 1l12 12"
              class="icon-times"
              stroke="#fff"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </div>
      </div>
      <div
        class="transition-all duration-300 lg:flex lg:gap-2 items-center flex-col lg:flex-row h-0 lg:h-auto overflow-hidden"
        :class="{ 'flex h-[253px]': showMenu }"
      >
        <ul class="flex lg:flex-row flex-col items-center m-auto lg:m-0">
          <li class="p-[12px]">Unduh LummoSHOP</li>
          <li class="p-[12px]">Upgrade LummoSHOP</li>
          <li class="p-[12px]">Layanan</li>
          <li class="p-[12px]">Jelajahi</li>
        </ul>

        <div class="flex flex-col lg:flex-row w-fit m-auto lg:m-0 lg:gap-3 text-[12px]">
          <button
            class="border border-[d1d5db] bg-white text-blue px-2 py-1 rounded-[3px] my-[10px] lg:my-0 h-fit"
          >
            Buat Jadwal Demo
          </button>
          <button class="bg-green text-blue py-1 px-3 rounded-[3px] h-fit">Login</button>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showMenu: false,
    };
  },
};
</script>
