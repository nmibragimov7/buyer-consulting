<template>
  <div class="max-w-4xl mx-auto px-2.5 md:px-0">
    <h3 class="text-center text-xl md:text-3xl font-semibold text-dark-blue mb-8">Как происходит процесс заказа и доставки товара:</h3>
    <div class="hidden md:block mt-9 relative">
      <div class="decor-line w-1 flex flex-col justify-around">
        <div
          v-for="key of dots"
          :key="key.id"
          class="w-7 h-7 rounded-full bg-dark-blue decor-line__translate transition-all delay-300"
          :class="{ active: key.active }"
        ></div>
      </div>
      <div v-for="(step, idx) of steps" :key="step.number" class="flex" :class="[{'justify-end': idx % 2 !== 0}]">
        <div class="w-3/6">
          <div class="card" :class="[{'mr-16': idx % 2 === 0, 'ml-16': idx % 2 !== 0, 'opacity-60': idx > 0}]" :data-dot="idx + 1">
            <span class="flex items-center text-dark-blue text-6xl md:text-8xl font-bold">{{step.number}}</span>
            <div class="w-full">
              <p class="text-dark-blue text-xl mb-1">{{step.title}}</p>
              <p v-for="(description, idx) of step.description"
                 :key="idx"
                 class="text-medium-gray text-sm md:text-base"
                 v-html="description"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="md:hidden grid md:grid-cols-2 gap-4 md:gap-8 mb-8">
      <div v-for="step of steps" :key="step.number" class="card" >
        <span class="flex items-center text-dark-blue text-6xl md:text-8xl font-bold">{{step.number}}</span>
        <div class="w-full">
          <p class="text-dark-blue text-xl mb-1">{{step.title}}</p>
          <p v-for="(description, idx) of step.description"
             :key="idx"
             class="text-medium-gray text-sm md:text-base"
             v-html="description"></p>
        </div>
      </div>
    </div>
<!--    <p class="text-lg md:text-xl text-center font-semibold mt-9"><span class="text-red">Disclaimer:</span> товар возврату и обмену не подлежит!</p>-->
  </div>
</template>

<script>
export const dots = Array.from({ length: 6 }).map((_, id) => {
  return {
    id,
    active: id === 0,
  }
})

export default {
  name: "Steps",
  data() {
    return {
      observer: {},
      dots: dots.map((el) => ({ ...el })),
      steps: [
        {
          number: 1,
          title: "Выбор товара",
          description: ["Пройдите в один из официальных сайтов и выберите товар. Отправьте ссылку выбранного Вами товара."]
        },
        {
          number: 2,
          title: "Оплата за товар",
          description: [
            "Произведите оплату за стоимость товара + наши проценты.",
            "Товары на официальных сайтах указаны в долларах. Стоимость товара будет рассчитываться <b>от текущего курса банка</b>."
          ]
        },
        {
          number: 3,
          title: "Заказ товара",
          description: ["На официальном сайте производим заказ и оплату товара"]
        },
        {
          number: 4,
          title: "Оформление доставки",
          description: ["Производим доставку товара через международные логистические компании."]
        },
        {
          number: 5,
          title: "Доставка",
          description: ["Продолжительность доставки до Казахстана занимает <b>от 2 до 4 недель</b>."]
        },
        {
          number: 6,
          title: "Оплата за растаможивание",
          description: [
            "Произведите оплату за стоимость за растаможку.",
            "<b>Стоимость доставки 1кг - 13$.</b> Шаг округления +100г. Пример: Если посылка весит 1кг. 380г., то рассчитывается как 1кг. 400г."
          ]
        }
      ]
    }
  },
  mounted() {
    this.animatedHandler()
  },
  beforeDestroy() {
    this.observer.disconnect()
  },
  methods: {
    animatedHandler() {
      const blocks = document.querySelectorAll('.card')
      const _this = this
      this.dots = dots.map((el) => ({ ...el }))

      function handleIntersection(entries) {
        entries.map((entry) => {
          if (entry.isIntersecting) {
            const dotIdx = parseInt(entry.target.dataset.dot) - 1
            _this.dots[dotIdx].active = true
            entry.target.style.opacity = '1'
            entry.target.style.transform = 'translateY(0)'
            _this.observer.unobserve(entry.target)
          }
        })
      }

      this.observer = new IntersectionObserver(handleIntersection)
      blocks.forEach((block) => this.observer.observe(block))
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  @apply bg-white px-3 gap-4 flex items-center py-6 shadow rounded-md transition-all delay-300 ease-linear md:translate-y-24;
}
.decor-line {
  left: 50%;
  transform: translateX(-50%);
  background: linear-gradient(180deg, #001F7E 0%, #001F7E 100%);
  @apply absolute top-0 bottom-0;

  &__translate {
    transform: translateX(calc(-50% + 0.1rem));
    background: #f6f9fc;
    border: 3px solid #0083FF;
    @apply transition-colors;
    &.active {
      @apply bg-dark-blue;
      border: 3px solid #001F7E;
    }
  }
}
</style>
