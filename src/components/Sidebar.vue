<script setup lang="ts">
import { ref, watch } from "vue";
import { nanoid } from "nanoid";

import html2canvas from "html2canvas";
import type { Time } from "@/types";
import SubjectList from "./SubjectList.vue";
import type TimeRow from "./TimeRow.vue";
import { useSubjectStore } from "../stores/subjects";
import { storeToRefs } from "pinia";


const store = useSubjectStore();
const { subjects } = storeToRefs(store);

const startDrag = (item: Time) => {
  store.dragValue = item;
  console.log(999);

};

function getImg(): void {
  html2canvas(document.querySelector(".photo") as HTMLDivElement, { scale: 3 }).then(
    function (canvas) {
      let u = canvas.toDataURL();
      var link = document.createElement("a");
      link.download = `prog.${nanoid()}.png`;
      link.href = u;
      link.click();
    }
  );
};
const onTouchStart = (event: any, item: Time) => {
  // Get touch coordinates
  event.target.classList.add("bg-red-500")
  startDrag(item)
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
const onTouchEnd = (event) => {
  // Handle touch end
  // ...
  console.log("onTouchEndSide");
};
var drg: any, drgT: any, drgL: any, drgB: any, drgR: any;

var el: any, avail: any;
function dragStart(event: any) {
  el = event.target;
  if (el.getAttribute("draggable") == "true") {
    avail = "available";
  } else {
    avail = "";
  }
}

function drag(evt) {
  if (avail == "available") {
    el.style.position = "absolute";
    el.style.left = evt.touches[0].clientX - el.clientWidth / 2;
    el.style.top = evt.touches[0].clientY - el.clientHeight / 2;

    drg = el.getBoundingClientRect();
    drgT = drg.top;
    drgB = drg.bottom;
    drgL = drg.left;
    drgR = drg.right;
  }
  evt.preventDefault();
}

function drop() {
  // update on drop

  var drp = dropbox.getBoundingClientRect();

  var drpT = drp.top,
    drpL = drp.left,
    drpB = drp.bottom,
    drpR = drp.right;

  if (avail == "available") {
    if (drpT < drgT && drpL < drgL && drpB > drgB && drpR > drgR) {
      dropbox.appendChild(el);

      el.style.position = "";
      el.setAttribute("draggable", "false");
    }
  } else {
  }
}
</script>

<template>
  <aside class="bg-gray-300 p-5 relative hidden sm:flex  items-center justify-center overflow-auto">
    <div class="  text-sm space-y-2">
      <SubjectList  v-for="item in subjects" @dragstart="startDrag(item)" draggable="true"
         :key="item.id" :time="item" />
    </div>
    <button @click="getImg" class="bg-purple-700 rounded absolute bottom-2 right-4 px-3 py-2 text-white">
      حفظ الصورة
    </button>
  </aside>
</template>
