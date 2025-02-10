<script setup lang="ts">
withDefaults(
  defineProps<{
    title: string;
  }>(),
  {
    title: "Angular + Vue Hybrid (set by Vue)",
  }
);
</script>

<template>
  <div>Header from Vue {{ title }}</div>
</template>

<style scoped>
div {
  min-height: 50px;
  display: flex;
  align-items: center;
  padding: 5px;
  width: fit-content;
  background-color: lightgreen;
}
</style>
