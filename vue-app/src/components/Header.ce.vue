<script setup lang="ts">
withDefaults(
  defineProps<{
    title: string;
  }>(),
  {
    title: "title set by Vue",
  }
);
</script>

<template>
  <div>Header from Vue {{ title }}</div>
</template>
