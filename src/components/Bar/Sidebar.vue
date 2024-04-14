<script setup lang="ts">
import { ref } from "vue";

import type { Time } from "@/types";
import SubjectList from "./SubjectList.vue";


import { storeToRefs } from "pinia";
import { useProgramStore } from '@/stores/program';
import Picker from '@/components/Bar/Picker.vue';

const store = useProgramStore();
const { subjects, dragValue } = storeToRefs(store);
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
  <aside
    class=" w-[200px] pink:bg-c-pink-300 dark:bg-c-gray-300 orange:bg-c-orange-300  purple:bg-c-purple-300  blue:bg-c-blue-300  p-5 relative hidden sm:flex items-center justify-center overflow-auto">
    <div class="text-sm space-y-2">
      <SubjectList v-for="item in subjects" @click="selectSub(item)" @dragstart="store.startDrag(item)" draggable="true"
        :key="item.id" :time="item" />
    </div>
    <Picker />
  </aside>
</template>
