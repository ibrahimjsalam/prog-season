<script setup lang="ts">
import { getTimes } from '@/composables/useTime';
import { useProgramStore } from '@/stores/program';
import { storeToRefs } from 'pinia';
const store = useProgramStore();
let { currentTheme } = storeToRefs(store);
const times = getTimes()


</script>
<template>
    <div class=" text-white " :style="{ borderColor: currentTheme.background, background: currentTheme.borderColor }">
        <h3 class="  p-2 ">التوقيت</h3>


        <div v-for="(item, index) in times" :key="index"
            class="  border-inherit flex border-y   items-center     h-[64px]  ">

            <div class=" flex-1">{{ item }}</div>

        </div>



    </div>
</template>
