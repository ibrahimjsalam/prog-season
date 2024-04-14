<script setup lang="ts">
import Sidebar from "@/components/Bar/Sidebar.vue";
import Navbar from "@/components/Bar/Navbar.vue";
</script>

<template>
  <!-- ===== Page Wrapper Start ===== -->
  <div
    class="flex h-screen overflow-hidden  pink:bg-c-pink-200 dark:bg-c-gray-200 orange:bg-c-orange-200  purple:bg-c-purple-200  blue:bg-c-blue-200">
    <!-- ===== Sidebar Start ===== -->
    <Sidebar />
    <!-- ===== Sidebar End ===== -->

    <!-- ===== Content Area Start ===== -->
    <div class="relative flex flex-1 flex-col gap-3 overflow-y-auto overflow-x-hidden">
      <!-- ===== Header Start ===== -->
      <Navbar />
      <!-- ===== Header End ===== -->

      <!-- ===== Main Content Start ===== -->
      <main class="grid h-full place-items-center">
        <div class="ps-1">
          <slot></slot>
        </div>
      </main>
      <!-- ===== Main Content End ===== -->
    </div>
  </div>
  <!-- ===== Page Wrapper End ===== -->
</template>
