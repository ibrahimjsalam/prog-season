<script setup lang="ts">
import HomeView from './views/HomeView.vue';

import ColorPlat from '@/components/ColorPlat.vue';
import { useColorMode } from '@vueuse/core'

const mode = useColorMode({
  attribute: 'class',
  modes: {
    blue: 'blue',
    pruple: 'purple',
    pink: 'pink',
    orange: 'orange',
    dark: "dark"

  },
}) 
</script>

<template>
  <div>
    <!-- <ColorPlat /> -->
    <HomeView />

    <div class="svgg">
      <img src="/logo.svg" alt="">
    </div>
  </div>
</template>

 