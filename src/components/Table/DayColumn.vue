<script setup lang="ts">
import type { Day, Time } from "@/types/index";
import { useProgramStore } from '@/stores/program';

const props = defineProps<{ day: Day }>();

</script>
<template>
    <div class=" pink:bg-c-pink-300 dark:bg-c-gray-300 orange:bg-c-orange-300  purple:bg-c-purple-300  blue:bg-c-blue-300">
        <h3
            class="border-r  pink:border-c-pink-200 dark:border-c-gray-200 orange:border-c-orange-200  purple:border-c-purple-200  blue:border-c-blue-200   text-white p-2">
            {{ day.title }}</h3>


    </div>
</template>
