<template>
  <div>
    <h3 class="text-xl md:text-3xl text-center font-semibold mb-8 px-2.5 md:px-0">Заказывайте брендовые одежды без переплаты</h3>
    <div class="container mx-auto overflow-hidden mb-10">
      <client-only>
        <agile
          ref="slider"
          :dots="false"
          :autoplay="true"
          :autoplay-speed="3000"
          :nav-buttons="false"
          :slides-to-show="innerWidth < 768 ? 2 : 6"
        >
          <div v-for="(image, idx) of images"
               :key="idx"
               class="slider__block">
            <a target="_blank"
               :href="image.url"
               class="w-full select-none">
              <img :src="image.src"
                   :alt="image.title"
                   class="w-full h-14 hover:fill-red">
            </a>
          </div>
        </agile>
      </client-only>
    </div>
  </div>
</template>

<script>
export default {
  name: "Slider",
  data() {
    return {
      images: [
        {
          title: "nike",
          src: '/svg/nike.svg',
          url: 'https://www.nike.com/'
        },
        {
          title: "calvin-klein",
          src: '/svg/calvin-klein.svg',
          url: 'https://www.calvinklein.us/en'
        },
        {
          title: "adidas",
          src: '/svg/adidas.svg',
          url: 'https://www.adidas.com/us'
        },
        {
          title: "gap",
          src: '/svg/gap.svg',
          url: 'https://www.gap.com/'
        },
        {
          title: "lacoste",
          src: '/svg/lacoste.svg',
          url: 'https://global.lacoste.com/'
        },
        {
          title: "reebok",
          src: '/svg/reebok.svg',
          url: 'https://www.reebok.com/us'
        },
        {
          title: "timberland",
          src: '/svg/timberland.svg',
          url: 'https://www.timberland.com/homepage.html'
        },
        {
          title: "coach",
          src: '/svg/coach.svg',
          url: 'https://www.coachoutlet.com/'
        },
        {
          title: "victoriassecret",
          src: '/svg/victoriassecret.svg',
          url: 'https://www.victoriassecret.com/us/'
        }
      ],
      innerWidth: 420
    }
  },
  mounted() {
    this.innerWidth = window.innerWidth
  }
}
</script>

<style lang="scss" scoped>
.slider {

  &__block {
    @apply flex
    justify-center
    items-center
    w-[200px]
    border-t
    border-b
    border-l
    border-light-gray
    border-solid
    px-6
    py-6
    cursor-pointer;
  }
}
</style>
