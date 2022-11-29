<script setup lang="ts">
import ClientList from "@/clients/components/ClientList.vue";
import PaginationBar from "@/clients/components/PaginationBar.vue";
import LoadingModal from "@/shared/components/LoadingModal.vue";
import useClients from "@/clients/composables/useClients";

const { isLoading, clients, currentPage, pageNumbers, setPage } = useClients();
</script>

<template>
  <div>
    <h1>Clients List</h1>
    <!-- Client List -->
    <ClientList :clients="clients" />
    <!-- Pagination bar -->
    <PaginationBar
      :current-page="currentPage"
      :page-numbers="pageNumbers"
      @change="setPage"
    />
    <!-- Loading -->
    <LoadingModal v-if="isLoading" />
  </div>
</template>

<style scoped></style>
