<template>
  <div class="transition-all fixed top-0 right-0 bottom-0 bg-light-gray-500 w-9/12 shadow-box-gray z-50 p-10"
       :class="[{'translate-x-full': !toggled}]">
    <img width="16"
         height="16"
         src="/svg/close.svg"
         alt="close"
         class="absolute top-5 left-5 cursor-pointer"
         @click="$emit('toggle')">
    <p class="text-center text-medium-gray text-sm mb-2">Контакты</p>
    <div class="flex flex-col items-center gap-2 mb-10">
      <div class="layout__contacts layout__contacts--mail">
        <span class="text-xs">kundyz.saparbay@gmail.com</span>
      </div>
      <div class="layout__contacts layout__contacts--phone">
        <span class="text-xs">+7 707 442 77 40</span>
      </div>
    </div>
    <p class="text-center text-medium-gray text-sm mb-2">Социальные сети</p>
    <div class="flex justify-center gap-2">
      <nuxt-link v-for="social of socials" :key="social.title" :to="social.url">
        <img class="layout__socials" width="26" height="26" :src="social.src" :alt="social.title">
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
  props: {
    toggled: Boolean
  },
  data() {
    return {
      socials: [
        {
          title: "whatsapp",
          src: "/svg/whatsapp.svg",
          url: ""
        },
        {
          title: "instagram",
          src: "/svg/instagram.svg",
          url: ""
        },
        {
          title: "telegram",
          src: "/svg/telegram.svg",
          url: ""
        },
        {
          title: "facebook",
          src: "/svg/facebook.svg",
          url: ""
        }
      ]
    }
  },
}
</script>

<style scoped>

</style>
