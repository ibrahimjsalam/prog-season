<script setup lang="ts">
import type { Time } from '@/types/index';
const props = defineProps<{ time: Time }>();

</script>
<template>
  <button type="button"
    class="rounded select-none pink:bg-p-pink-200 dark:bg-g-gray-200 orange:bg-o-orange-200  purple:bg-p-purple-200  blue:bg-b-blue-200 p-2 text-sm w-[140px] text-white ">
    {{ time.subject }}
  </button>
</template>