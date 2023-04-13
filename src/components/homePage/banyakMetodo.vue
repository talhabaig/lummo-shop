<template>
  <div class="py-[80px] bg-light">
    <div class="container">
      <div class="flex flex-col-reverse md:flex-row row items-center mb-4 text-center">
        <div class="md:w-1/2 w-full" v-motion-slide-visible-once-bottom>
          <h3 class="mb-[20px] text-[1.25rem] lg:text-[1.875rem]">
            Banyak Metode Pembayaran
          </h3>
          <p>
            Pembeli bisa memilih metode pembayaran yang paling nyaman untuk mereka.
            Pilihan mulai dari virtual account/bank transfer, QRIS, e-wallet hingga cash
            on delivery (COD).
          </p>
        </div>
        <div class="md:w-1/2 w-full" v-motion-slide-visible-once-bottom>
          <img src="@/assets/img/payment-partners.png" alt="" />
        </div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 row items-center text-center">
        <div v-motion-slide-visible-once-bottom>
          <img src="@/assets/img/payment-partners2.png" alt="" />
        </div>
        <div v-motion-slide-visible-once-bottom>
          <h3 class="mb-[20px] text-[1.25rem] lg:text-[1.875rem]">
            Banyak Metode Pembayaran
          </h3>
          <p>
            Pembeli bisa memilih metode pembayaran yang paling nyaman untuk mereka.
            Pilihan mulai dari virtual account/bank transfer, QRIS, e-wallet hingga cash
            on delivery (COD).
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
