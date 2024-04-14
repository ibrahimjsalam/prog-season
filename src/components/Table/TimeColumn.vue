<script setup lang="ts">
import { getTimes } from '@/composables/useTime';
import { useProgramStore } from '@/stores/program';
import { storeToRefs } from 'pinia';
const store = useProgramStore();

const times = getTimes()


</script>
<template>
    <div
        class=" text-white  pink:bg-c-pink-300 dark:bg-c-gray-300 orange:bg-c-orange-300  purple:bg-c-purple-300  blue:bg-c-blue-300">
        <h3 class="  p-2 ">التوقيت</h3>


        <div v-for="(item, index) in times" :key="index"
            class="  border-inherit flex border-t  pink:border-c-pink-200 dark:border-c-gray-200 orange:border-c-orange-200  purple:border-c-purple-200  blue:border-c-blue-200  items-center     h-[64px]  ">

            <div class=" flex-1">{{ item }}</div>

        </div>



    </div>
</template>
