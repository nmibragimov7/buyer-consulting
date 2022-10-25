<template>
  <div class="fixed top-0 right-0 left-0 z-50 shadow-box-gray bg-white">
    <div class="header__wrap">
      <div class="header__logo">
        BUYER CONSULTING
      </div>
      <div class="flex items-start gap-8">
        <div class="flex flex-col gap-2">
          <div class="header__social header__social--mail">
            <span class="text-[10px]">kundyz.saparbay@gmail.com</span>
          </div>
          <div class="header__social header__social--phone">
            <span class="text-[10px]">+7 707 442 77 40</span>
          </div>
        </div>
        <div class="header__feedback" @click="toScroll">
          Обратная связь
        </div>
        <div class="flex flex-col items-center gap-1.5 cursor-pointer hover:text-blue transition-all">
          <img src="/svg/burger.svg" alt="burger" width="28">
          <span class="text-[8px]">МЕНЮ</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  // data() {
  //   return {
  //     axisY: 0
  //   }
  // },
  // mounted() {
  //   window.addEventListener("scroll", this.handleScroll)
  // },
  // beforeDestroy() {
  //   window.removeEventListener("scroll", this.handleScroll)
  // },
  methods: {
    // handleScroll() {
    //   this.axisY = window.scrollY
    //   console.log(window.scrollY)
    // },
    toScroll() {
      window.scrollTo({
        top: 420,
        left: 0,
        behavior: 'smooth'
      });
    }
  }
}
</script>

<style lang="scss" scoped>
.header {

  &__wrap {
    @apply container mx-auto flex justify-between py-4;
  }
  &__logo {
    @apply text-blue text-2xl cursor-pointer transition-all;
  }
  &__social {
    @apply flex items-center gap-1.5 cursor-pointer pl-5 bg-contain bg-left bg-no-repeat transition-all;
    &--mail {
      @apply bg-mail hover:bg-mail-hover;
    }
    &--phone {
      @apply bg-phone hover:bg-phone-hover;
    }
  }
  &__feedback {
    @apply text-sm flex items-center justify-center border border-primary hover:border-blue hover:text-blue border-solid py-1.5 px-4 cursor-pointer transition-all;
  }
}
</style>
