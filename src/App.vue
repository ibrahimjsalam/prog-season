<script setup lang="ts">
import HomeView from './views/HomeView.vue';


import { useColorMode } from '@vueuse/core'
import BottomNavgation from './components/Bar/BottomNavgation.vue';

const mode = useColorMode({
  attribute: 'class',
  modes: {
    blue: 'blue',
    pruple: 'purple',
    pink: 'pink',
    orange: 'orange',
    teal: 'teal',
    dark: "dark"

  },
}) 
</script>

<template>
  <div>
    <!-- <ColorPlat /> -->
    <HomeView />

    <BottomNavgation />
  </div>
</template>

 