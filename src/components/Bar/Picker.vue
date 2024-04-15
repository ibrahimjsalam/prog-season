<script setup lang="ts">

import { useColorMode } from '@vueuse/core'

const mode = useColorMode() // Ref<'dark' | 'light' | 'dim' | 'cafe'>




const setTheme = (color: any) => {
    mode.value = color;
}
</script>

<template>
    <div class="p-2 rounded backdrop-blur-md bg-background bg-opacity-20 justify-around items-center">


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
        <div @click="setTheme('teal')" class="text-teal-500">
            <i class="fa fa-2x fa-circle"></i>
        </div>
        <div @click="setTheme('dark')" class="text-c-gray-300">
            <i class="fa fa-2x fa-circle"></i>
        </div>

    </div>
</template>
<style scoped></style>
