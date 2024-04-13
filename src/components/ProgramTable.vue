<script setup lang="ts">
import DayColumn from "./DayColumn.vue";
import TimeColumn from "./TimeColumn.vue";
import { storeToRefs } from "pinia";

import DropBox from "./DropBox.vue";
import { ref, onMounted } from "vue";
import { useProgramStore } from "../stores/program";
import html2canvas from "html2canvas";
import { nanoid } from "nanoid";

const minScale = 0.1;
const maxScale = 1.2;
const programTable = ref<HTMLDivElement | null>(null);
const photo = ref<HTMLDivElement | null>(null);

const store = useProgramStore();
const { days, boxs } = storeToRefs(store);

const scaleUp = () => {
  const windowWidth = window.innerWidth;
  let scale = 1;
  if (windowWidth < 700) {
    scale = Math.max(minScale, Math.min(maxScale, windowWidth / 520));
  } else {
    scale = 1;
  }

  programTable.value!.style.transform = `scale(${scale})`;
};

const clearCache = () => {
  store.boxs = new Array(25).fill(null);
};

const getImg = () => {
  html2canvas(photo.value as HTMLDivElement, {
    scale: 2,
  }).then(function (canvas) {
    let u = canvas.toDataURL();
    var link = document.createElement("a");
    link.download = `prog${nanoid()}.png`;
    link.href = u;
    link.click();
  });

};
onMounted(() => {
  scaleUp();

  window.addEventListener("resize", scaleUp);
});
</script>
<template>
  <main class="w-100 overflow-hidden bg-gray-200 relative grid place-items-center">
    <div class="fixed sm:left-6 left-1 top-2">


      <button @click="clearCache" type="button" class=" rounded p-3 hover:bg-red-200 hover:text-red-600  ">
        <i class="fal fa-eraser"></i>
      </button>
      <button @click="getImg" type="button" class="ms-2 rounded p-3 hover:bg-purple-200 hover:text-purple-600  ">
        <i class="fal fa-save"></i>
      </button>
    </div>
    <div ref="programTable" class="px-1 origin-right">
      <div ref="photo" class=" text-[8px] w-[510px] bg-white h-fit grid grid-cols-6">
        <TimeColumn class="row-span-7 col-span-1" />
        <DayColumn v-for="(day, index) in days" :day="day" :key="index" />
        <DropBox v-for="(item, index) in boxs" :time="item" :id="index" :key="index" />
      </div>
    </div>
  </main>
</template>
