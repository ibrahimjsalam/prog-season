<script setup lang="ts">
import { getTimes } from '@/composables/useTime';
import { useProgramStore } from '@/stores/program';
import { storeToRefs } from 'pinia';
const store = useProgramStore();

const times = getTimes()


</script>
<template>
    <div class=" text-white bg-color">
        <h3 class="  p-2 ">التوقيت</h3>


        <div v-for="(item, index) in times" :key="index"
            class="  border-inherit flex border-t   bods  items-center     h-[64px]  ">

            <div class=" flex-1">{{ item }}</div>

        </div>



    </div>
</template>
