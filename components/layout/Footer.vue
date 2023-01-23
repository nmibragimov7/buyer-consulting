<template>
  <div class="container mx-auto flex justify-center md:justify-between py-10">
    <div>
      <div class="layout__logo mb-4">
        BUYER CONSULTING
      </div>
      <p class="text-center md:text-start text-medium-gray text-sm mb-2">Социальные сети</p>
      <div class="flex justify-center md:justify-start gap-2">
        <a
          v-for="social of socials"
          :key="social.title"
          :href="social.url"
          target="_blank"
        >
          <img class="layout__socials" width="26" height="26" :src="social.src" :alt="social.title">
        </a>
      </div>
    </div>
    <div class="hidden md:flex items-start gap-8">
      <div class="flex flex-col gap-2">
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
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      socials: [
        {
          title: "whatsapp",
          src: "/svg/whatsapp.svg",
          url: "https://wa.me/77074427740"
        },
        {
          title: "instagram",
          src: "/svg/instagram.svg",
          url: "https://instagram.com/buyer_consulting?igshid=Yzg5MTU1MDY="
        },
        {
          title: "telegram",
          src: "/svg/telegram.svg",
          url: "https://web.telegram.org/z/#1050666787"
        },
        {
          title: "facebook",
          src: "/svg/facebook.svg",
          url: ""
        }
      ]
    }
  },
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

<style scoped>

</style>
