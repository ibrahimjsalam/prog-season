<script lang="ts">
import { defineComponent } from "vue";
import type { Time } from "@/types/index";

import { mapState, mapActions } from "pinia";
import { useProgramStore } from '@/stores/program';


export default defineComponent({

    name: "BoxZone",
    data() {
        return {
            enableEdit: true,
            isPrac: false
        }
    },
    computed: {

        ...mapState(useProgramStore, ["dragValue", "boxs"])
    },

    props: {
        time: {
            type: Object,
            required: true,
        },
        id: {
            type: Number,
            required: true,
        }
    },
    methods: {
        ...mapActions(useProgramStore, ["startDrag", "dragEnd"]),
        moveBox(time: any) {
            this.enableEdit = true;
            this.startDrag(time as Time)
        },
        endMove(id: any) {
            this.enableEdit = false;
            this.dragEnd(id)
        }, isPracHandle() {
            console.log(99);

            this.isPrac = !this.isPrac;
        }

    },
});
</script>

<template>
    <ul :class="{ 'flex justify-center items-center': isPrac }" class="flex-1 text-box  relative h-full group/item   "
        @dragstart="moveBox(time)" @dragend="dragEnd(id)" draggable="true">
        <div v-if="isPrac" class="absolute bg-color z-30 blur-md -top-1 -left-1 w-4 h-4 rotate-45 "></div>
        <div v-if="isPrac" class="absolute bg-color z-30 blur-md -bottom-1 -right-1 w-4 h-4 rotate-45 "></div>
        <div
            class="absolute flex justify-center items-center gap-1 -translate-x-full group-hover/item:translate-x-0   transition-all duration-300  inset-0 bg-slate-400 z-10 bg-opacity-35">
            <button type="button" @click="endMove(id)"
                class="group-hover/item:left-1  px-2 py-1  transition-all  text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300  font-medium rounded  text-sm    text-center ">
                <i class="fal fa-trash-alt"></i>
            </button>
            <button type="button" @click="isPracHandle"
                class="group-hover/item:left-1   px-2 py-1  transition-all   text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded  text-sm    text-center ">
                <i class="fal fa-head-vr"></i>
            </button>
        </div>
        <li class="py-1  px-1.5 ">{{ time.subject }}</li>
        <li v-if="!isPrac" class="py-1 border-y bods  px-1.5 ">{{ time.instructor }}</li>
        <li v-if="!isPrac" class="py-1  px-1.5 ">{{ time.place }}</li>


    </ul>
</template>
