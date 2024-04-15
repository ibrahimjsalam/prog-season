<script setup lang="ts">
import type { Time } from '@/types/index';
import { useProgramStore } from '@/stores/program';

const store = useProgramStore();

const props = defineProps<{ time: Time }>();

</script>
<template>
  <button :class="[time.instructor == store.dragValue?.instructor ? 'bg-green-400' : 'bg-background']" type="button"
    class="rounded  select-none   p-2 mx-auto text-sm  w-full text-white ">
    {{ time.subject }}
  </button>
</template>