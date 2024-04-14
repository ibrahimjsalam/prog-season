<script setup lang="ts">
import { ref, computed } from 'vue';
import { useProgramStore } from '@/stores/program';
import { useColorMode } from '@vueuse/core'

const mode = useColorMode() // Ref<'dark' | 'light' | 'dim' | 'cafe'>




const setTheme = (color: any) => {
    mode.value = color;
}
</script>

<template>
    <div class="p-2 rounded  gap-5   backdrop-blur-md bg-slate-100 bg-opacity-40 justify-around items-center">


        <div @click="setTheme('blue')" class="text-c-blue-300">
            <i class="fa fa-2x fa-circle  "></i>
        </div>
        <div @click="setTheme('purple')" class="text-c-purple-300">
            <i class="fa fa-2x fa-circle"></i>
        </div>
        <div @click="setTheme('orange')" class="text-c-orange-300">
            <i class="fa fa-2x fa-circle"></i>
        </div>
        <div @click="setTheme('pink')" class="text-c-pink-300">
            <i class="fa fa-2x fa-circle"></i>
        </div>
        <div @click="setTheme('dark')" class="text-c-gray-300">
            <i class="fa fa-2x fa-circle"></i>
        </div>

    </div>
</template>
<style scoped></style>
