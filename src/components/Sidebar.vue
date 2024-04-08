<script setup lang="ts">
import { ref, watch } from "vue";
import { nanoid } from "nanoid";

import html2canvas from "html2canvas";
import type { Time } from "@/types";
import SubjectList from "./SubjectList.vue";

import { useSubjectStore } from "../stores/subjects";
import { storeToRefs } from "pinia";

const store = useSubjectStore();
const { subjects } = storeToRefs(store);
let selectId = ref<string>("");
const startDrag = (item: Time | null) => {
  store.dragValue = item;
};
const selectSub = (item: Time) => {
  if (selectId.value == item.id) {
    selectId.value = "";
    startDrag(null);
  } else {
    selectId.value = item.id;
    startDrag(item);
  }
};

function getImg(): void {
  html2canvas(document.querySelector(".photo") as HTMLDivElement, {
    scale: 3,
  }).then(function (canvas) {
    let u = canvas.toDataURL();
    var link = document.createElement("a");
    link.download = `prog.${nanoid()}.png`;
    link.href = u;
    link.click();
  });
}
const onTouchStart = (event: any, item: Time) => {
  // Get touch coordinates
  event.target.classList.add("bg-red-500");
  startDrag(item);
  console.log(77);

  // Handle touch start
  // ...
};
const onTouchMove = (event: any) => {
  // // Get touch coordinates
  // const touchX = event.touches[0].clientX;
  // const touchY = event.touches[0].clientY;
  // console.log("onTouchMove", event);
  // Handle touch move
  // ...
};
const onTouchEnd = (event: any) => {
  // Handle touch end
  // ...
  console.log("onTouchEndSide");
};
</script>

<template>
  <aside class="bg-slate-300 p-5 relative hidden sm:flex items-center justify-center overflow-auto">
    <div class="text-sm space-y-2">
      <SubjectList v-for="item in subjects" @click="selectSub(item)"
        :class="{ 'text-green-500 bg-green-200  ': selectId == item.id }" @dragstart="startDrag(item)" draggable="true"
        :key="item.id" :time="item" />
    </div>
    <button @click="getImg" class="bg-purple-700 rounded absolute bottom-2 right-4 px-3 py-2 text-white">
      حفظ الصورة
    </button>
  </aside>
</template>
