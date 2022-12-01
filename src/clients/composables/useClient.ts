import { watch, ref, computed } from "vue";
import { useMutation, useQuery } from "@tanstack/vue-query";
import type { Client } from "@/clients/types/client";
import clientsApi from "@/api/clients-api";

const useClient = (id: number) => {
  const client = ref<Client>();

  // Functions
  const getClient = async (id: number): Promise<Client> => {
    const { data } = await clientsApi.get<Client>(`/clients/${id}`);
    return data;
  };

  const updateClient = async (client: Client): Promise<Client> => {
    // await new Promise((resolve) => {
    //   setTimeout(() => resolve(true), 2000);
    // });
    const { data } = await clientsApi.patch<Client>(
      `/clients/${client.id}`,
      client
    );
    /*   const queries = queryClient
    .getQueryCache()
    .findAll(["clients?page="], { exact: false });

  queries.forEach((query) => query.fetch()); */

    return data;
  };

  // Get
  const { isLoading, data, isError } = useQuery(
    ["client", id],
    () => getClient(id),
    {
      retry: false,
    }
  );

  watch(
    data,
    () => {
      if (data.value) client.value = { ...data.value };
    },
    { immediate: true }
  );

  // Update
  const clientMutation = useMutation(updateClient);

  watch(clientMutation.isSuccess, () =>
    setTimeout(() => clientMutation.reset(), 3000)
  );

  return {
    isLoading,
    client,
    isError,
    clientMutation,
    updateClient: clientMutation.mutate,
    isSaving: computed(() => clientMutation.isLoading.value),
    isSaved: computed(() => clientMutation.isSuccess.value),
  };
};

export default useClient;
