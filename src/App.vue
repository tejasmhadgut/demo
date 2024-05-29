<template>
  <div>
    <app-menu></app-menu>
    <footer-menu></footer-menu>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import AppMenu from "./components/AppMenu.vue";
import FooterMenu from "./components/FooterMenu.vue";

export default defineComponent({
  name: "App",
  components: {
    AppMenu,
    FooterMenu,
  },
});
</script>

<style scoped>
/* Add your scoped styles here */
</style>
