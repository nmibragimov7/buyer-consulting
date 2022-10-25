<template>
  <div>
    <div class="max-w-4xl mx-auto text-center mb-8">
      <h1 class="text-5xl mb-2 font-semibold">Хватит переплачивать за одежду!</h1>
      <h3 class="text-3xl	text-gray">Заказывайте брендовые одежды напрямую из Америки, Европы!</h3>
    </div>
    <div class="mb-64">
      <Promo/>
    </div>
    <div class="mb-8">
      <Slider/>
    </div>
    <div class="bg-light-blue py-14 mb-8">
      <Steps/>
    </div>
  </div>
</template>

<script>
import Promo from "../components/common/Promo";
import Slider from "../components/common/Slider";
import Steps from "../components/common/Steps";

export default {
  name: 'IndexPage',
  components: {Steps, Slider, Promo}
}
</script>
