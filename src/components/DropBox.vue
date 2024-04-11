<script setup lang="ts">
import type { Time } from "@/types/index";

import { ref, onMounted } from 'vue';
import addicon from "@/assets/addicon.svg";

import { storeToRefs } from 'pinia';
import BoxZone from "./BoxZone.vue";
import { useProgramStore } from '../stores/program';

const store = useProgramStore();

const props = defineProps<{
  time: Time | null;
  id: number;
}>();
const box = ref<HTMLDivElement | null>(null)








</script>
<template>
  <div ref="box" class="h-[64px] relative overflow-hidden border " @drop="store.onDrop(id)" @dragenter.prevent
    @dragover.prevent>
    <BoxZone v-if="time" :time="time" :id="id" />
    <div v-else @click="store.onDrop(id)" class="flex justify-center items-center h-full w-100  group/plus ">
      <addicon class="fill-gray-400 opacity-0 group-hover/plus:opacity-100 transition-opacity duration-150" />
    </div>
  </div>
</template>
