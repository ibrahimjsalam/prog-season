<script setup lang="ts">

import { storeToRefs } from "pinia";
import Picker from "./Picker.vue";
import SubjectList from "./SubjectList.vue";
import type { Time } from '@/types/index';
import { ref } from 'vue';
import { useProgramStore } from '@/stores/program';
import { onClickOutside } from '@vueuse/core';
const store = useProgramStore();
const { subjects, showPicker } = storeToRefs(store);
const pick = ref<HTMLDivElement | null>(null)
let selectId = ref<string>("");

onClickOutside(pick, () => {

    if (showPicker) {
        showPicker.value = false;
    }

})


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
    <div class="fixed sm:hidden p-2 bottom-0 bg-color left-0 z-50 w-full h-18">
        <Transition name="slide-up" mode="out-in">
            <Picker ref="pick" class="flex" v-if="showPicker" />


            <div v-else
                class="flex h-full gap-3 justify-start px-2 items-center max-w-lg w-full  mx-auto overflow-x-auto  ">
                <SubjectList v-for="item in subjects" :key="item.id" :time="item" class="flex-shrink-0 "
                    @click="selectSub(item)" />
            </div>
        </Transition>

    </div>
</template>


<style scoped>
.slide-up-enter-active,
.slide-up-leave-active {
    transition: all 0.3s ease-out;
}

.slide-up-enter-from {
    opacity: 0;
    transform: translateY(-20px);
}


.slide-up-leave-to {
    opacity: 0;
    transform: translateY(20px);
}
</style>