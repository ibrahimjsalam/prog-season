<script setup lang="ts">
import { ref } from "vue";

import type { Time } from "@/types";
import SubjectList from "./SubjectList.vue";


import { storeToRefs } from "pinia";
import { useProgramStore } from '@/stores/program';
import Picker from '@/components/Bar/Picker.vue';
import { onClickOutside } from "@vueuse/core";
const store = useProgramStore();
let { subjects, dragValue, showPicker } = storeToRefs(store);
// refs
const pick = ref<HTMLDivElement | null>(null)
let selectId = ref<string>("");

onClickOutside(pick, () => {

  if (showPicker) {
    showPicker.value = false;
  }

})





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
  <aside class=" w-[200px] gap-3 bg-color p-5 relative hidden sm:flex flex-col items-center justify-center overflow-auto">

    <div class=" grid gap-2 ">
      <SubjectList v-for="item in subjects" @click="selectSub(item)" @dragstart="store.startDrag(item)" draggable="true"
        :key="item.id" :time="item" />
    </div>
    <Picker class="grid grid-cols-3 gap-3" />

  </aside>
</template>
<style scoped>
.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.3s ease-out;
}

.slide-up-enter-from {
  opacity: 0;
  transform: translateX(-20px);
}

.slide-up-move {}

.slide-up-leave-to {
  opacity: 0;
  transform: translateX(20px);
}
</style>