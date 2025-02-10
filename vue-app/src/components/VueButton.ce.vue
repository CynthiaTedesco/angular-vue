<script setup lang="ts">
import { ref } from "vue";

const count = ref(0);
const increment = () => count.value++;
</script>

<template>
  <button @click="increment">Clicked {{ count }} times</button>
</template>

<style scoped>
button {
  margin: 20px;
  margin-left: 0;
}
</style>
