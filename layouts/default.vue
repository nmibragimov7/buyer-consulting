<template>
  <div class="min-h-screen flex flex-col">
    <Header />
    <div class="mt-28">
      <Nuxt />
    </div>
<!--    <Footer />-->
  </div>
</template>

<script>
import Header from "../components/layout/Header";

export default {
  components: {Header}
}
</script>

<style scoped>

</style>
