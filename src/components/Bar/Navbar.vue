<script setup lang="ts">
import Picker from "./Picker.vue";
import { ref } from 'vue';

import { nanoid } from "nanoid";


import domtoimage from 'dom-to-image';
import { useProgramStore } from '../../stores/program';
let showPick = ref(false);
const store = useProgramStore();

const clearCache = () => {
    store.boxs = new Array(25).fill(null);
};

const getImg = () => {
    let scale = 2;
    const node = document.querySelector("") as HTMLDivElement;
    domtoimage
        .toPng(node, {
            //quality: 0.99,
            width: node.clientWidth * scale,
            height: node.clientHeight * scale,
            style: {
                transform: "scale(" + scale + ")",
                transformOrigin: "top right",
            },
        })
        .then(function (dataUrl: any) {
            var link = document.createElement("a");
            link.download = `prog${nanoid()}.png`;
            link.href = dataUrl;
            link.click();
        });
};
</script>
<template>
    <nav class="absolute px-4  inset-x-0   w-full top-2 flex   gap-2 justify-end items-center">

        <Picker v-if="showPick" />
        <div class="flex">
            <button @click="showPick = !showPick" type="button" :class="{ 'bg-red-200': showPick }"
                class="mx-2 rounded p-3 hover:bg-orange-200 hover:text-orange-600">
                <i v-if="showPick" class="fal fa-times"></i>
                <i v-else class="fal fa-brush"></i>
            </button>

            <button v-if="!showPick" @click="clearCache" type="button"
                class="mx-2 sm:flex rounded p-3 hover:bg-red-200 hover:text-red-600">
                <i class="fal fa-eraser"></i>
            </button>
            <button v-if="!showPick" @click="getImg" type="button"
                class="rounded sm:flex p-3 hover:bg-purple-200 hover:text-purple-600">
                <i class="fal fa-save"></i>
            </button>
        </div>

    </nav>
</template>