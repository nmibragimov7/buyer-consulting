<template>
  <div class="fixed top-0 right-0 left-0 z-50 shadow-box-gray bg-white">
    <div class="header__wrap">
      <div class="layout__logo">
        BUYER CONSULTING
      </div>
      <div class="flex items-start gap-8">
        <div class="hidden md:flex flex-col gap-2">
          <div class="layout__contacts layout__contacts--mail">
            <a href="mailto:kundyz.saparbay@gmail.com" class="text-[10px]">kundyz.saparbay@gmail.com</a>
          </div>
          <div class="layout__contacts layout__contacts--phone">
            <a href="tel:+77074427740" class="text-[10px]">+7 707 442 77 40</a>
          </div>
        </div>
        <div class="layout__feedback" @click="toScroll">
          Обратная связь
        </div>
        <div class="md:hidden flex flex-col items-center gap-1.5 cursor-pointer hover:text-blue transition-all"
             @click="$emit('toggle')">
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
  methods: {
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
    @apply container mx-auto flex justify-between py-4 px-2.5 md:px-0;
  }
}
</style>
