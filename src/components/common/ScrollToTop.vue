<template>
  <div
    @click="scrollToTop"
    v-if="showButton"
    class="scroll-to-top"
    :class="{ 'class-to-add': shouldAddClass }"
  >
    <i class="fa-sharp fa-solid fa-arrow-up" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      shouldAddClass: false,
      scrollPosition: 0,
    };
  },
  computed: {
    showButton() {
      return this.scrollPosition > 600;
    },
  },
  mounted() {
    window.addEventListener("scroll", this.trackScroll);
    this.shouldAddClass = true;
  },
  beforeDestroy() {
    // window.removeEventListener("scroll", this.trackScroll);
  },
  methods: {
    trackScroll() {
      this.scrollPosition = window.pageYOffset;
    },
    scrollToTop() {
      window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>

<style lang="scss">
.scroll-to-top {
  display: flex;
  width: 50px;
  height: 50px;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  background-color: #6f5fb3;
  position: fixed;
  bottom: 10px;
  right: 15px;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  color: #fff;
  transition: all 0.3s;

  &:hover {
    background-color: #666;
  }

  @media (max-width: 576px) {
    font-size: 1rem;
  }
}

.class-to-add {
  animation: scroll 0.35s linear;
}

@keyframes scroll {
  0% {
    transform: translateY(-100vh);
  }

  // 100% {
  //   transform: translateY(100vh);
  // }
}
</style>
