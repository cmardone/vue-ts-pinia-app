import { useQuery } from "@tanstack/vue-query";

import type { Client } from "@/clients/types/client";
import clientsApi from "@/api/clients-api";
import { useClientsStore } from "@/store/clients";
import { storeToRefs } from "pinia";
import { watch, computed } from "vue";

const getClients = async (page: number = 1): Promise<Client[]> => {
  const { data } = await clientsApi.get<Client[]>(`/clients?_page=${page}`);
  return data;
};

const useClients = () => {
  const store = useClientsStore();
  const { clients, currentPage, totalPages } = storeToRefs(store);

  const { isLoading, data } = useQuery(["clients?page=", currentPage], () =>
    getClients(currentPage.value)
  );

  watch(data, (clients) => {
    if (clients) store.setClients(clients);
  });

  return {
    isLoading,
    clients,
    currentPage,
    setPage: (page: number) => store.setPage(page),
    pageNumbers: computed(() =>
      [...new Array(totalPages.value)].map((_, index) => index + 1)
    ),
  };
};

export default useClients;
