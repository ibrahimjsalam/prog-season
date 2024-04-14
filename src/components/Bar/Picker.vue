<script setup lang="ts">
import { ref, computed } from 'vue';
import { useProgramStore } from '@/stores/program';

const store = useProgramStore();

const current = computed(() => store.currentTheme.borderColor)


</script>

<template>
    <div class="control flex-1 z-40">
        <div class="p-2 rounded  gap-3 backdrop-blur-md bg-slate-100 bg-opacity-40  flex justify-around items-center">

            <div class="colors" v-for="(theme, index) in store.themes" :key="index"
                :class="{ active: store.currentTheme.borderColor == theme.borderColor }" @click="store.setTheme(theme)"
                :style="{ color: theme.borderColor }">
                <i class="fa fa-2x fa-circle"></i>
            </div>

        </div>
    </div>
</template>
<style scoped>
.colors.active {
    text-shadow: 0px 0px 15px v-bind(current);
}
</style>
