import { ref } from "vue";
import { defineStore } from "pinia";
import type { Client } from "@/clients/types/client";

export const useClientsStore = defineStore("clients", () => {
  // State
  const currentPage = ref<number>(1);
  const totalPages = ref<number>(5);
  const clients = ref<Client[]>([]);
  // Getters

  // Actions
  const setClients = (newClients: Client[]) => (clients.value = newClients);
  const setPage = (page: number) => {
    if (currentPage.value === page) return;
    currentPage.value = page;
  };

  return {
    // State
    currentPage,
    totalPages,
    clients,
    // Getters
    // Actions
    setClients,
    setPage,
  };
});
