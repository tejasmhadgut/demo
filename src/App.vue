<template>
  <div>
    <app-menu></app-menu>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import AppMenu from "./components/AppMenu.vue";

export default defineComponent({
  name: "App",
  components: {
    AppMenu,
  },
});
</script>

<style scoped>
/* Add your scoped styles here */
</style>
