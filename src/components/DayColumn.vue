<script setup lang="ts">
import type { Day, Time } from "@/types/index";

 
const props = defineProps<{ day: Day }>();
 
</script>
<template>
    <div class="  bg-white ">
        <h3 class="border p-2">{{ day.title }}</h3>

       
    </div>
</template>
