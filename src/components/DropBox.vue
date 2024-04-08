<script setup lang="ts">
import type { Time } from "@/types/index";
import { useSubjectStore } from "../stores/subjects";
import { ref, onMounted } from 'vue';
import addicon from "@/assets/addicon.svg";
import closeicon from "@/assets/closeicon.svg";
import { storeToRefs } from 'pinia';

const store = useSubjectStore();
const { boxs, dragValue } = storeToRefs(store);
const props = defineProps<{
  time: Time | null;
  id: number;
}>();
const box = ref<HTMLDivElement | null>(null)

let isPP = ref<boolean>(true);
// getDrop(id: number) {
//   this.boxs[id] = this.dragValue;
// },
// deleteTime(id: number) {
//   this.boxs[id] = null;
// },
const onDrop = () => {
  let id: number = props.id;
  boxs.value[id] = dragValue.value;
};
const startDrag = (item: Time) => {
  store.dragValue = item;
};
const dragEnd = () => {
  let id: number = props.id;
  boxs.value[id] = null;
};
const isP = () => {
  isPP.value = !isPP.value;
};


const onTouchStart = () => {

}


</script>
<template>
  <div ref="box" class="h-[64px] relative overflow-hidden border " @drop="onDrop" @dragend="dragEnd" @dragenter.prevent
    @dragover.prevent>
    <ul :class="{ 'divide-y': isPP }" class="flex-1 group/item" v-if="time" @dragstart="startDrag(time)"
      @touchstart="onTouchStart(time)" draggable="true">
      <button type="button" @click="dragEnd"
        class="group-hover/item:left-1 flex items-center justify-center -left-6 transition-all absolute top-0 text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-1.5 py-1 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
        <i class="fal fa-times"></i>
      </button>
      <button type="button" @click="isP"
        class="group-hover/item:left-1 -left-6 transition-all absolute top-6 text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-1.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-900">
        <i class="fal fa-check"></i>
      </button>
      <li class="py-1 px-1.5">{{ time.subject }}</li>
      <li class="py-1 px-1.5" v-if="isPP">{{ time.instructor }}</li>
      <li class="py-1 px-1.5" v-if="isPP">{{ time.place }}</li>
    </ul>

    <div v-else @click="onDrop" class="flex justify-center items-center h-full w-100  group/plus ">
      <addicon class="fill-gray-400 opacity-0 group-hover/plus:opacity-100 transition-opacity duration-150" />
    </div>
  </div>
</template>
