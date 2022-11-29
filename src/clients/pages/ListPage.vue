<script setup lang="ts">
import ClientList from "@/clients/components/ClientList.vue";
import PaginationBar from "@/clients/components/PaginationBar.vue";
</script>

<template>
  <div>
    <h1>Clients List</h1>
    <!-- Client List -->
    <ClientList />
    <!-- Pagination bar -->
    <PaginationBar />
    <!-- Loading -->
  </div>
</template>

<style scoped></style>
