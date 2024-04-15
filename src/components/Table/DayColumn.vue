<script setup lang="ts">
import type { Day, Time } from "@/types/index";
import { useProgramStore } from '@/stores/program';

const props = defineProps<{ day: Day }>();

</script>
<template>
    <div class="bg-color">
        <h3 class="border-r  bods  text-white p-2">
            {{ day.title }}</h3>


    </div>
</template>
