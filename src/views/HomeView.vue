<script setup lang="ts">
import BottomNavgation from '@/components/Bar/BottomNavgation.vue';
import ProgramTable from '@/components/ProgramTable.vue';
import Sidebar from '@/components/Bar/Sidebar.vue';
import Navbar from '@/components/Bar/Navbar.vue';


</script>

<template>
    <div class="grid sm:grid-cols-5 relative  h-screen text-center">
        <Navbar />
        <Sidebar class="sm:col-span-1 " />
        <ProgramTable class="sm:col-span-4" />
        <BottomNavgation />
    </div>
</template>
