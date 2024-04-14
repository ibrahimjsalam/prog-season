<script setup lang="ts">
import DayColumn from "./Table/DayColumn.vue";
import TimeColumn from "./Table/TimeColumn.vue";
import { storeToRefs } from "pinia";

import DropBox from "./Box/DropBox.vue";
import { ref, onMounted } from "vue";
import { useProgramStore } from "@/stores/program";


const minScale = 0.1;
const maxScale = 1.2;
const programTable = ref<HTMLDivElement | null>(null);


const store = useProgramStore();
const { days, boxs, currentTheme } = storeToRefs(store);

const scaleUp = () => {
  const windowWidth = window.innerWidth;

  let scale = Math.max(minScale, Math.min(maxScale, windowWidth / 520));
  let fontSize = Math.max(minScale, Math.min(maxScale, windowWidth / 6));

  programTable.value!.style.transform = `scale(${scale})`;
  programTable.value!.style.fontSize = `${fontSize}px`;
};


onMounted(() => {
  scaleUp();

  window.addEventListener("resize", scaleUp);
});
</script>
<template>
  <main :style="{ background: currentTheme.background }" class="w-full  overflow-hidden    grid place-items-center">

    <div ref="programTable" class="origin-right ps-1">
      <div :style="{ background: currentTheme.foreground, color: currentTheme.fontColor }"
        class="photo  w-[510px] text-[8px] text-center    grid grid-cols-6">
        <TimeColumn class="row-span-7 col-span-1" />
        <DayColumn v-for="(day, index) in days" :day="day" :key="index" />
        <DropBox v-for="(item, index) in boxs" :time="item" :id="index" :key="index" />
      </div>
    </div>
  </main>
</template>
