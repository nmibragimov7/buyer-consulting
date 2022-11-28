<template>
  <div class="container mx-auto">
    <div class="grid gap-4 md:grid-cols-2 mb-10">
      <div class="flex flex-col items-center">
        <h3 class="text-xl md:text-3xl text-center font-semibold mb-8 px-2.5 md:px-0">
          Поможем заказать одежду из официальных интернет-магазинов
        </h3>
        <ul class="mb-8">
          <li class="list">Найти товар</li>
          <li class="list">Выбрать размер</li>
          <li class="list">Оформить весь заказ</li>
          <li class="list">Оплатить и организовать доставку в Казахстан</li>
        </ul>
        <a class="list__button" href="/">
          Позвоните нам
        </a>
      </div>
      <div class="flex justify-end p-10 md:p-0">
        <img src="/svg/call.svg" alt="call icon">
      </div>
    </div>
    <div class="bg-white rounded-[40px] grid gap-4 md:grid-cols-2 p-10 shadow-box-dark relative mx-2.5 md:mx-0">
      <div class="line"></div>
      <div class="flex flex-col gap-6">
        <div class="flex items-center gap-4">
          <img src="/svg/success.svg" alt="success icon">
          <p class="text-2xl font-bold">Сэкономьте на покупке</p>
        </div>
        <div class="flex items-center gap-4">
          <img src="/svg/success.svg" alt="success icon">
          <p class="text-2xl font-bold">Мониторим весь процесс от покупки до доставки</p>
        </div>
      </div>
      <div class="flex flex-col gap-6">
        <div class="flex items-center gap-4">
          <img src="/svg/error.svg" alt="error icon">
          <p class="text-2xl font-bold">Товар возврату и обмену не подлежит</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Call"
}
</script>

<style lang="scss" scoped>
.list {
  @apply list-none flex items-center;

  &:before {
    content: ' ';
    @apply w-4 h-4 inline-block rounded-[50%] bg-blue mr-2;
  }
  &__button {
    @apply w-full max-w-[300px] bg-red-500 hover:bg-white text-white hover:text-red border-0 rounded-3xl focus:outline-none py-3 px-4 cursor-pointer transition-all text-center;
  }
}
.line {
  left: 50%;
  transform: translateX(-50%);
  @apply hidden md:block w-0.5 absolute top-10 bottom-10 bg-light-gray-600;
}
</style>
