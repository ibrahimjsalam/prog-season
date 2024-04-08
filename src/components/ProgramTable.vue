<script setup lang="ts">
import DayColumn from "./DayColumn.vue";
import TimeColumn from "./TimeColumn.vue";
import { storeToRefs } from 'pinia';
import { useSubjectStore } from "../stores/subjects";
import DropBox from "./DropBox.vue";
import { ref, onMounted } from 'vue';

const minScale = 0.1;
const maxScale = 1.3;
const programTable = ref<HTMLDivElement | null>(null);
const conTable = ref<HTMLDivElement | null>(null);
const store = useSubjectStore();
const { days, boxs } = storeToRefs(store);

const scaleUp = () => {
  // Get the current window width
  const windowWidth = window.innerWidth;
  let scale = 1;
  if (windowWidth < 550) {

    scale = Math.max(minScale, Math.min(maxScale, windowWidth / 520));

  } else {
    scale = 1;
  }



  programTable.value!.style.transform = `scale(${scale})`;



};

onMounted(() => {


  scaleUp();

  window.addEventListener("resize", scaleUp);
});
</script>
<template>
  <main class="w-100 overflow-hidden bg-gray-200  grid place-items-center   ">

    <div ref="programTable" class="px-1 origin-right">
      <div class="photo text-[8px] w-[510px] bg-white  h-fit grid grid-cols-6">
        <TimeColumn class="row-span-7  col-span-1" />
        <DayColumn v-for="(day, index) in days" :day="day" :key="index" />
        <DropBox v-for="(item, index) in boxs" :time="item" :id="index" :key="index" />


      </div>
    </div>
  </main>
</template>
