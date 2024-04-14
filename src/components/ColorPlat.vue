
<script setup lang="ts">
import { useProgramStore } from "@/stores/program";
const store = useProgramStore();



</script>
<template>
    <div class="">
        <!-- <div v-for="theme in store.themes" :key="theme.background" class="grid grid-cols-5 w-full">

            <div class="p-7" v-for="(color, key) in theme" :key="color" :style="{ background: color }">
                {{ color }}
            </div>
        </div> -->
    </div>
</template>