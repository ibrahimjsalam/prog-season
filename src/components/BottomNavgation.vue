<script setup lang="ts">
import { useSubjectStore } from "../stores/subjects";
import { storeToRefs } from "pinia";

import SubjectList from "./SubjectList.vue";
import type { Time } from '../types/index';
const store = useSubjectStore();
const { subjects } = storeToRefs(store);

const startDrag = (item: Time) => {
    store.dragValue = item;
    console.log(999);

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
    const touchX = event.touches[0].clientX;
    const touchY = event.touches[0].clientY;
    console.log("onTouchMove", event);
    // Handle touch move
    // ...
};
const onTouchEnd = (event) => {
    // Handle touch end
    // ...
    console.log("onTouchEndSide");
};
</script>
<template>
    <div
        class="fixed sm:hidden bottom-0 left-0 z-50 w-full h-16 bg-slate-500 border-t border-gray-200  ">
        <div class="flex h-full gap-3 justify-start px-2 items-center max-w-lg w-full  mx-auto overflow-x-auto  ">
            <SubjectList
       
         class="flex-shrink-0"
            v-for="item in subjects"
            :key="item.id"
            :time="item"
            @touchstart="onTouchStart($event, item)"
               @touchmove="onTouchMove($event)"
          />
        </div>
       
    </div>
</template>