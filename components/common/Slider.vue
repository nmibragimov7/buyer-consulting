<template>
  <div>
    <h3 class="text-3xl text-center font-semibold mb-8">Заказывайте брендовые одежды без переплаты</h3>
    <div class="container mx-auto overflow-hidden mb-10">
      <client-only>
        <agile
          ref="slider"
          :dots="false"
          :autoplay="true"
          :autoplay-speed="3000"
          :nav-buttons="false"
          :slides-to-show="6"
        >
          <div v-for="(image, idx) of images"
               :key="idx"
               class="slider__block">
            <img :src="image.url"
                 :alt="image.title"
                 class="h-14 hover:fill-red">
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
          title: "michael-kors",
          url: '/svg/michael-kors.svg'
        },
        {
          title: "nike",
          url: '/svg/nike.svg'
        },
        {
          title: "calvin-klein",
          url: '/svg/calvin-klein.svg'
        },
        {
          title: "adidas",
          url: '/svg/adidas.svg'
        },
        {
          title: "michael-kors",
          url: '/svg/michael-kors.svg'
        },
        {
          title: "nike",
          url: '/svg/nike.svg'
        },
        {
          title: "calvin-klein",
          url: '/svg/calvin-klein.svg'
        },
        {
          title: "adidas",
          url: '/svg/adidas.svg'
        },
        {
          title: "michael-kors",
          url: '/svg/michael-kors.svg'
        },
        {
          title: "nike",
          url: '/svg/nike.svg'
        },
        {
          title: "calvin-klein",
          url: '/svg/calvin-klein.svg'
        },
        {
          title: "adidas",
          url: '/svg/adidas.svg'
        }
      ]
    }
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
