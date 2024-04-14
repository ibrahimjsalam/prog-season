<script setup lang="ts">
import { ref } from "vue";

import type { Time } from "@/types";
import SubjectList from "./SubjectList.vue";


import { storeToRefs } from "pinia";
import { useProgramStore } from '@/stores/program';

const store = useProgramStore();
const { subjects, dragValue, currentTheme } = storeToRefs(store);
// refs
let selectId = ref<string>("");







const selectSub = (item: Time) => {
  if (selectId.value == item.id) {
    selectId.value = "";
    dragValue.value = null
  } else {
    selectId.value = item.id;
    store.startDrag(item);
  }
};



</script>

<template>
  <aside :style="{ background: currentTheme.borderColor }"
    class="  p-5 relative hidden sm:flex items-center justify-center overflow-auto">
    <div class="text-sm space-y-2">
      <SubjectList v-for="item in subjects" @click="selectSub(item)" :style="{ background: currentTheme.background }"
        :class="{ 'text-green-500 bg-green-400  ': selectId == item.id }" @dragstart="store.startDrag(item)"
        draggable="true" :key="item.id" :time="item" />
    </div>
  </aside>
</template>
