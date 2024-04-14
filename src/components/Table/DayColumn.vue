<script setup lang="ts">
import type { Day, Time } from "@/types/index";
import { useProgramStore } from '@/stores/program';
import { storeToRefs } from 'pinia';
const store = useProgramStore();
let { currentTheme } = storeToRefs(store);

const props = defineProps<{ day: Day }>();

</script>
<template>
    <div :style="{ background: currentTheme.borderColor, borderColor: currentTheme.background }">
        <h3 class="border-r border-inherit  text-white p-2">{{ day.title }}</h3>


    </div>
</template>
