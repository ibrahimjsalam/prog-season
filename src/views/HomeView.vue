<script setup lang="ts">
import  BottomNavgation  from '@/components/BottomNavgation.vue';
import ProgramTable from '@/components/ProgramTable.vue';
import Sidebar from '@/components/Sidebar.vue';


</script>

<template>
    <div class="grid sm:grid-cols-5 relative  h-screen text-center">
        <Sidebar class="sm:col-span-1 " />
        <ProgramTable class="sm:col-span-4" />
        <BottomNavgation/>
    </div>
</template>
