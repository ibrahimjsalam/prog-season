<script setup lang="ts">
import { useColorMode } from "@vueuse/core";

const mode = useColorMode(); // Ref<'dark' | 'light' | 'dim' | 'cafe'>

const themeList = [
  { name: "blue", class: "text-c-blue-300" },
  { name: "purple", class: "text-c-purple-300" },
  { name: "orange", class: "text-c-orange-300" },
  { name: "pink", class: "text-c-pink-300" },
  { name: "teal", class: "text-teal-500" },
  { name: "dark", class: "text-c-gray-300" },
];

const setTheme = (color: any) => {
  mode.value = color;
};
</script>

<template>
  <div
    class="p-2 rounded backdrop-blur-md bg-background bg-opacity-20 justify-around items-center"
  >
    <div
      v-for="theme in themeList"
      :key="theme.name"
      @click="setTheme(theme.name)"
      :class="theme.class"
    >
      <i class="fa fa-2x fa-circle"></i>
    </div>
  </div>
</template>
<style scoped></style>
