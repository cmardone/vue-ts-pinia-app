import { watch, computed } from "vue";
import { storeToRefs } from "pinia";
import { useQuery } from "@tanstack/vue-query";

import type { Client } from "@/clients/types/client";
import clientsApi from "@/api/clients-api";
import { useClientsStore } from "@/store/clients";

const getClients = async (page: number = 1): Promise<Client[]> => {
  /*   await new Promise((resolve) => {
    setTimeout(() => resolve(true), 3000);
  }); */
  const { data } = await clientsApi.get<Client[]>(`/clients?_page=${page}`);
  return data;
};

const useClients = () => {
  const store = useClientsStore();
  const { clients, currentPage, totalPages } = storeToRefs(store);

  const { isLoading, data } = useQuery(
    ["clients?page=", currentPage],
    () => getClients(currentPage.value),
    {
      staleTime: 60 * 1000,
    }
  );

  watch(
    data,
    (clients) => {
      if (clients) store.setClients(clients);
    },
    { immediate: true }
  );

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
