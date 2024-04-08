<script setup lang="ts">
import type{ Time } from '@/types/index';
const props = defineProps<{ time: Time } >();

</script>
<template>
    <button type="button" class="rounded select-none p-2 text-sm w-[140px] hover:ring-4 hover:ring-gray-100    bg-white">
      {{  time.subject }}
    </button>
</template>