<script setup lang="ts">

import { storeToRefs } from "pinia";

import SubjectList from "./SubjectList.vue";
import type { Time } from '@/types/index';
import { ref } from 'vue';
import { useProgramStore } from '@/stores/program';
const store = useProgramStore();
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



</script>
<template>
    <div class="fixed sm:hidden bottom-0 left-0 z-50 w-full h-16">
        <div class="flex h-full gap-3 justify-start px-2 items-center max-w-lg w-full  mx-auto overflow-x-auto  ">
            <SubjectList v-for="item in subjects" :key="item.id" :time="item"
                :class="{ 'text-green-100 bg-green-300': selectId == item.id }" class="flex-shrink-0"
                @click="selectSub(item)" />
        </div>

    </div>
</template>