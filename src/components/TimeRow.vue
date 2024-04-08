<script setup lang="ts">
import type { Time } from '@/types/index';
 
 defineProps<{ time: Time }>();


</script>
<template>
    <div class="border bg-white  ">
        <ul :class="time.subject===''?'':'divide-y'">
            <li class="py-1 px-1.5">{{ time.subject }}</li>
            <li class="py-1 px-1.5">{{ time.instructor }}</li>
            <li class="py-1 px-1.5">{{ time.place }}</li>

        </ul>

    </div>
</template>
<style></style>