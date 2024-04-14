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

        ...mapState(useProgramStore, ["dragValue", "currentTheme", "boxs"])
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

            this.isPrac = !this.isPrac;
        }

    },
});
</script>

<template>
    <ul :style="{ color: currentTheme.fontColor }" class="flex-1   border-inherit bg-inherit  group/item "
        @dragstart="moveBox(time)" @dragend="dragEnd(id)" draggable="true">
        <div v-if="!isPrac" :style="{ background: currentTheme.background }"
            class="absolute blur-md -top-1 -left-1 w-6 h-6 rotate-45 "></div>
        <div v-if="!isPrac" :style="{ background: currentTheme.background }"
            class="absolute blur-md -bottom-1 -right-1 w-6 h-6 rotate-45 "></div>
        <div
            class="absolute flex justify-center items-center gap-1 scale-0 group-hover/item:scale-100  transition-all duration-300  inset-0 bg-slate-400 z-10 bg-opacity-35">
            <button type="button" @click="endMove(id)"
                class="group-hover/item:left-1  px-2  transition-all  text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm    text-center ">
                -
            </button>
            <button type="button" @click="isPracHandle"
                class="group-hover/item:left-1  px-2  transition-all   text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm    text-center ">
                +
            </button>
        </div>

        <input :disabled="enableEdit" class="py-1 bg-inherit   px-1.5 text-center" type="text" v-model="time.subject" />
        <input v-if="isPrac" :disabled="enableEdit" class="py-1 px-1.5 border-inherit bg-inherit border-t text-center"
            type="text" v-model="time.instructor" />
        <input v-if="isPrac" :disabled="enableEdit" class="py-1  border-inherit bg-inherit border-t   px-1.5 text-center"
            type="text" v-model="time.place" />

    </ul>
</template>
