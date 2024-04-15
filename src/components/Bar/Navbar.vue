<script setup lang="ts">
import Picker from "./Picker.vue";
import { ref } from "vue";

import { nanoid } from "nanoid";

import domtoimage from "dom-to-image";
import { useProgramStore } from "../../stores/program";
import { storeToRefs } from 'pinia';

const store = useProgramStore();
let { showPicker } = storeToRefs(store);


const getImg = () => {
    let scale = 2;
    const node = document.querySelector(".photo") as HTMLDivElement;
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
    <nav class="px-4 py-2 w-full flex gap-2 justify-end items-center">

        <div class="flex">
            <button @click="showPicker = true" type="button" class="mx-2 sm:hidden rounded p-3 text-nav">

                <i class="fal fa-brush"></i>
            </button>

            <button @click="store.clearCache" type="button" class="mx-2 sm:flex rounded p-3 text-nav">
                <i class="fal fa-eraser"></i>
            </button>
            <button @click="getImg" type="button" class="rounded sm:flex p-3 text-nav">
                <i class="fal fa-save"></i>
            </button>
        </div>
    </nav>
</template>
