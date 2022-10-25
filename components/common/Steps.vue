<template>
  <div class="max-w-4xl mx-auto px-2.5 md:px-0">
    <h3 class="text-center text-xl md:text-3xl font-semibold text-gray mb-8">Как происходит процесс заказа и доставки товара:</h3>
    <div class="grid md:grid-cols-2 gap-4 md:gap-8 mb-8">
      <div v-for="step of steps" :key="step.number" class="steps__block">
          <span class="flex items-center text-blue text-6xl md:text-8xl font-bold">{{step.number}}</span>
        <div class="w-full">
          <p class="text-blue text-xl mb-1">{{step.title}}</p>
          <p v-for="(description, idx) of step.description"
               :key="idx"
               class="text-medium-gray text-sm md:text-base"
               v-html="description"></p>
        </div>
      </div>
    </div>
    <p class="text-lg md:text-xl text-center font-semibold"><span class="text-red">Disclaimer:</span> товар возврату и обмену не подлежит!</p>
  </div>
</template>

<script>
export default {
  name: "Steps",
  data() {
    return {
      steps: [
        {
          number: 1,
          title: "Выбор товара",
          description: ["Пройдите в один из официальных сайтов и выберите товар. Отправьте ссылку выбранного Вами товара."]
        },
        {
          number: 2,
          title: "Оплата",
          description: ["Произведите оплату за стоимость товара и услугу международной доставки."]
        },
        {
          number: 3,
          title: "Оценка",
          description: [
            "Стоимость доставки - <b>13$ за килограмм.</b>",
            "Товары на официальных сайтах указаны в долларах. Стоимость товара будет рассчитываться <b>от текущего курса банка</b>."
          ]
        },
        {
          number: 4,
          title: "Заказ товара",
          description: ["На официальном сайте производим заказ и оплату товара"]
        },
        {
          number: 5,
          title: "Оформление доставки",
          description: ["Производим доставку товара через международные логистические компании."]
        },
        {
          number: 6,
          title: "Доставка",
          description: ["Продолжительность доставки занимает <b>от 1 до 4 недель</b>."]
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.steps {

  &__block {
    @apply flex gap-4 md:gap-8 shadow-box-gray p-5 md:p-10 bg-white rounded-3xl hover:scale-105 transition-all;
  }
}
</style>
