<template>
  <div class="min-h-screen flex flex-col">
    <Header @toggle="toggle"/>
    <div class="mt-28">
      <Nuxt />
    </div>
    <Sidebar :toggled="toggled" @toggle="toggle"/>
    <Footer />
  </div>
</template>

<script>
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Sidebar from "../components/layout/Sidebar";

export default {
  components: {Sidebar, Footer, Header},
  data() {
    return {
      toggled: false
    }
  },
  methods: {
    toggle() {
      this.toggled = !this.toggled
    }
  }
}
</script>

<style scoped>

</style>
