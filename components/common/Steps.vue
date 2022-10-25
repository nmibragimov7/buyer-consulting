<template>
  <div class="max-w-4xl mx-auto">
    <h3 class="text-center text-3xl font-semibold text-gray mb-8">Как происходит процесс заказа и доставки товара:</h3>
    <div class="grid grid-cols-2 gap-8 mb-8">
      <div class="steps__block">
        <div class="flex gap-8 h-full">
          <span class="flex items-center text-blue text-8xl font-bold">1</span>
          <div class="w-full">
            <p class="text-blue text-xl mb-1">Выбор товара</p>
            <p class="text-medium-gray">Пройдите в один из официальных сайтов и выберите товар. Отправьте ссылку выбранного Вами товара.</p>
          </div>
        </div>
      </div>
      <div class="steps__block">
        <div class="flex gap-8 h-full">
          <span class="flex items-center text-blue text-8xl font-bold">2</span>
          <div class="w-full">
            <p class="text-blue text-xl mb-1">Оплата</p>
            <p class="text-medium-gray">Произведите оплату за стоимость товара и услугу международной доставки.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="steps__block max-w-[70%] mx-auto mb-8">
      <div class="flex gap-8 h-full">
        <span class="flex items-center text-blue text-8xl font-bold">3</span>
        <div class="w-full">
          <p class="text-blue text-xl mb-1">Оценка</p>
          <p class="text-medium-gray">Стоимость доставки - <b>13$ за килограмм</b>.</p>
          <p class="text-medium-gray">Товары на официальных сайтах указаны в долларах. <b>Стоимость товара будет рассчитываться от текущего курса банка</b>.</p>
        </div>
      </div>
    </div>
    <div class="grid grid-cols-2 gap-8 mb-8">
      <div class="steps__block">
        <div class="flex gap-8 h-full">
          <span class="flex items-center text-blue text-8xl font-bold">4</span>
          <div class="w-full">
            <p class="text-blue text-xl mb-1">Заказ товара</p>
            <p class="text-medium-gray">На официальном сайте производим заказ и оплату товара</p>
            <br>
          </div>
        </div>
      </div>
      <div class="steps__block">
        <div class="flex gap-8 h-full">
          <span class="flex items-center text-blue text-8xl font-bold">5</span>
          <div class="w-full">
            <p class="text-blue text-xl mb-1">Оформление доставки</p>
            <p class="text-medium-gray">Производим доставку товара через международные логистические компании.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="steps__block max-w-[70%] mx-auto mb-8">
      <div class="flex gap-8 h-full">
        <span class="flex items-center text-blue text-8xl font-bold">6</span>
        <div class="w-full">
          <p class="text-blue text-xl mb-1">Доставка</p>
          <p class="text-medium-gray">Продолжительность доставки занимает <b>от 1 до 4 недель</b>.</p>
          <br>
          <br>
        </div>
      </div>
    </div>
    <p class="text-xl text-center font-semibold"><span class="text-red">Disclaimer:</span> товар возврату и обмену не подлежит!</p>
  </div>
</template>

<script>
export default {
  name: "Steps"
}
</script>

<style lang="scss" scoped>
.steps {

  &__block {
    @apply shadow-box-gray p-10 bg-white rounded-3xl hover:scale-105 transition-all;
  }
}
</style>
