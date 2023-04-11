<template>
  <div class="">
    <div class="bg-blue">
      <nav
        class="max-w-[1270px] m-auto flex flex-col lg:flex-row justify-between lg:items-center px-[30px] py-6 text-white text-[0.875rem]"
      >
        <div class="flex items-center justify-between">
          <div class="w-[102px] lg:w-[152px]">
            <img src="@/assets/img/lummo-shop-logo.png" alt="img" />
          </div>
          <div @click="showMenu = !showMenu" class="w-[44px] h-[44px] bg-green lg:hidden">
            toggle
          </div>
        </div>
        <div
          class="hidden lg:flex items-center flex-col lg:flex-row"
          :class="{ isToggled: showMenu }"
        >
          <ul class="flex lg:flex-row flex-col items-center m-auto lg:m-0">
            <li class="p-[12px]">Unduh LummoSHOP</li>
            <li class="p-[12px]">Upgrade LummoSHOP</li>
            <li class="p-[12px]">Layanan</li>
            <li class="p-[12px]">Jelajahi</li>
          </ul>

          <div class="flex flex-col lg:flex-row w-fit m-auto lg:m-0 gap-1 text-[12px]">
            <button
              class="border border-[d1d5db] bg-white text-blue px-2 py-1 rounded-[3px] my-[10px] lg:my-0 h-fit"
            >
              Buat Jadwal Demo
            </button>
            <button class="bg-green text-blue py-1 px-2 rounded-[3px] h-fit">
              Login
            </button>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showMenu: true,
    };
  },
};
</script>
<style scoped>
.isToggled {
  display: flex;
}
</style>
