<template>
  <div>
    <div class="max-w-4xl mx-auto text-center mb-8">
      <h1 class="text-3xl md:text-5xl mb-2 font-semibold">Хватит переплачивать за одежду!</h1>
      <h3 class="text-xl md:text-3xl text-gray">Заказывайте брендовые одежды напрямую из Америки и Европы!</h3>
    </div>
    <div class="mb-[100px] md:mb-[200px]">
      <Promo/>
    </div>
    <div class="mb-8">
      <Slider/>
    </div>
    <div class="bg-light-blue py-10 md:py-14 mb-8">
      <Steps/>
    </div>
    <div v-show="axisY > 300"
         class="fixed bottom-8 right-4 md:right-8 p-2 rounded-[50%] shadow-box-dark cursor-pointer bg-white"
         @click="toScroll">
      <img src="/svg/arrow.svg" alt="arrow">
    </div>
  </div>
</template>

<script>
import Promo from "../components/common/Promo";
import Slider from "../components/common/Slider";
import Steps from "../components/common/Steps";

export default {
  name: 'IndexPage',
  components: {Steps, Slider, Promo},
  data() {
    return {
      axisY: 0
    }
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll)
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll)
  },
  methods: {
    handleScroll() {
      this.axisY = window.scrollY
    },
    toScroll() {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }
  }
}
</script>
