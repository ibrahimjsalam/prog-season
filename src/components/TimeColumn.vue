<script setup lang="ts">
import { getTimes } from '../composables/useTime';

const times = getTimes()


</script>
<template>
    <div class="   bg-white  ">
        <h3 class=" border p-2 ">التوقيت</h3>


        <div v-for="(item, index) in times" :key="index" class="flex justify-center items-center border h-[64px] bg-white">

            <div>{{ item }}</div>

        </div>



    </div>
</template>
