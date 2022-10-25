<template>
  <div class="promo__wrap">
    <div class="promo__form shadow-box-dark">
      <p class="text-dark text-2xl mb-6">Оставьте свои контакты и мы обязательно свяжемся с Вами!</p>
      <label class="flex flex-col mb-4">
        <span class="promo__label">Имя</span>
        <span class="py-3 px-4 shadow-box-inset">
          <input
            v-model="name"
            class="promo__input"
            placeholder="Ваше имя"
          />
        </span>
      </label>
      <label class="flex flex-col mb-6">
        <span class="promo__label">Телефон</span>
        <span class="py-3 px-4 shadow-box-inset">
          <the-mask
            mask="+7(###)-###-##-##"
            v-model="phone"
            class="promo__input"
            placeholder="+7(___)-___-__-__"
          />
        </span>
      </label>
      <button class="promo__button" :class="[{'opacity-50': !name || this.phone.length !== 10}]" @click="sendMessage">
        Отправить
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Promo",
  data() {
    return {
      name: "",
      phone: "",
      token: "5538929647:AAFT7ljTP6e1q55BmanP39wQaFeaY1bq_sQ",
      chat: "159056896"
    }
  },
  methods: {
    async sendMessage() {
      if (!this.name || this.phone.length !== 10) return
      const message = "Вам оставили заявку:" + "\n" + `имя: ${this.name}` + "\n" + `телефон: ${this.phone}`
      const response = await this.$axios.$post(`https://api.telegram.org/bot${this.token}/sendMessage?chat_id=${this.chat}&parse_mode=html&text=${encodeURI(message)}\``)
      if (response && response.ok) {
        this.$toast.success("Ваша заявка принята!")
        this.name = ""
        this.phone = ""
        return
      }
      this.$toast.error("Упс, что-то пошло не так!=( Прошу напишите мне на мой номер!")
    }
  }
}
</script>

<style lang="scss" scoped>
.promo {

  &__wrap {
    @apply h-[50vh] container relative mx-auto bg-map bg-contain bg-center bg-no-repeat;
  }
  &__form {
    @apply absolute translate-x-[-50%] left-1/2 top-1/2 rounded-3xl bg-white p-10 text-center max-w-md;
  }
  &__label {
    @apply text-red text-sm text-left mb-1;
  }
  &__input {
    @apply w-full focus:outline-none border-b border-b-light-gray border-solid;
  }
  &__button {
    @apply w-full bg-red hover:bg-white text-white hover:text-red border-0 focus:outline-none py-2 cursor-pointer transition-all;
  }
}
</style>
