<template>
  <div class="bg-blue">
    <div class="container">
      <div
        class="grid gap-8 sm:gap-32 md:gap-0 grid-cols-1 md:grid-cols-2 items-center row py-[25px] md:pb-[50px] pt-[145px]"
      >
        <div>
          <div class="flex flex-col">
            <h1
              class="text-[2.3rem] lg:text-[3.1rem] leading-[2.875rem] lg:leading-[3.8rem] font-extrabold text-green mb-4"
            >
              Tempat Bisnis
              <span class="typed-text">{{ typeValue }}</span>
              <span class="blinking-cursor">|</span>
              <span class="cursor" :class="{ typing: typeStatus }">&nbsp;</span>
              <!-- <span class="text-white"> headscaffdfdf</span> -->
              <span class="block">
                Mulai Toko Online-mu, Pegang Kendali untuk Berkembang</span
              >
            </h1>
            <span class="text-white text-[0.9375rem]"
              >With a complete & practical online store website, there are no more
              barriers to optimizing your business growth opportunities.</span
            >
            <div class="flex md:flex-col lg:flex-row gap-3 mt-9">
              <button
                class="bg-white hover:bg-[#ffffffeb] text-blue sm:py-3 sm:px-[1.85rem] py-2 px-3 text-[0.8rem] sm:text-[1rem] rounded-md border border-[#d1d5db] w-fit"
              >
                Create a demo Schedule
              </button>
              <button
                class="bg-green hover:bg-[#cbf04deb] text-blue text-[0.8rem] sm:text-[1rem] sm:py-3 sm:px-[1.85rem] py-2 px-3 rounded-md w-fit relative after:absolute after:top-[-15px] after:right-[-15px] after:sm:right-[-25px] after:px-[0.5rem] after:rounded-[16px] after:sm:py-[2px] after:bg-white after:text-blue after:content-['Gratis'] after:text-[0.8rem] after:sm:text-[0.875rem] after:shadow-md"
              >
                From now on
              </button>
            </div>
          </div>
        </div>
        <div>
          <div class="pb-24 md:pb-0">
            <img src="@/assets/img/hero-bg.png" alt="img" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: () => {
    return {
      typeValue: "",
      typeStatus: false,
      displayTextArray: [
        "Fashion",
        "F&B",
        "Kuliner",
        "Kecantikan",
        "Hijab",
        "Mainan",
        "Hobi",
        "KULINER",
      ],
      typingSpeed: 100,
      erasingSpeed: 100,
      newTextDelay: 2000,
      displayTextArrayIndex: 0,
      charIndex: 0,
    };
  },
  created() {
    setTimeout(this.typeText, this.newTextDelay + 200);
  },
  methods: {
    typeText() {
      if (this.charIndex < this.displayTextArray[this.displayTextArrayIndex].length) {
        if (!this.typeStatus) this.typeStatus = true;
        this.typeValue += this.displayTextArray[this.displayTextArrayIndex].charAt(
          this.charIndex
        );
        this.charIndex += 1;
        setTimeout(this.typeText, this.typingSpeed);
      } else {
        this.typeStatus = false;
        setTimeout(this.eraseText, this.newTextDelay);
      }
    },
    eraseText() {
      if (this.charIndex > 0) {
        if (!this.typeStatus) this.typeStatus = true;
        this.typeValue = this.displayTextArray[this.displayTextArrayIndex].substring(
          0,
          this.charIndex - 1
        );
        this.charIndex -= 1;
        setTimeout(this.eraseText, this.erasingSpeed);
      } else {
        this.typeStatus = false;
        this.displayTextArrayIndex += 1;
        if (this.displayTextArrayIndex >= this.displayTextArray.length)
          this.displayTextArrayIndex = 0;
        setTimeout(this.typeText, this.typingSpeed + 1000);
      }
    },
  },
};
</script>
<style lang="scss" scoped>
h1 {
  span.typed-text {
    color: white;
  }
}

// Cursor blinking CSS Starts...
.blinking-cursor {
  color: white;
  -webkit-animation: 1s blink step-end infinite;
  -moz-animation: 1s blink step-end infinite;
  -ms-animation: 1s blink step-end infinite;
  -o-animation: 1s blink step-end infinite;
  animation: 1s blink step-end infinite;
}

@keyframes blink {
  from,
  to {
    color: transparent;
  }

  50% {
    color: white;
  }
}

// Cursor blinking CSS Ends...
</style>
