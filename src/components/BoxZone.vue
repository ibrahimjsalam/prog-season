<script lang="ts">
import { defineComponent } from "vue";
import type { Time } from "@/types/index";

import { mapState, mapActions } from "pinia";
import { useProgramStore } from '../stores/program';


export default defineComponent({

    name: "BoxZone",
    data() {
        return {
            enableEdit: false
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
        }

    },
});
</script>

<template>
    <ul class="flex-1 group/item" @dragstart="moveBox(time)" @dragend="dragEnd(id)" draggable="true">
        <button type="button" @click="endMove(id)"
            class="group-hover/item:left-1  px-1  -left-6 transition-all absolute top-0 text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm    text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
            -
        </button>

        <input :disabled="enableEdit" class="py-1 border-b px-1.5 text-center" type="text" v-model="time.subject" />
        <input :disabled="enableEdit" class="py-1 border-b px-1.5 text-center" type="text" v-model="time.instructor" />
        <input :disabled="enableEdit" class="py-1 px-1.5 text-center" type="text" v-model="time.place" />

    </ul>
</template>
