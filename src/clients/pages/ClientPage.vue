<script setup lang="ts">
import { watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import useClient from "@/clients/composables/useClient";
import LoadingModal from "@/shared/components/LoadingModal.vue";

const route = useRoute();
const router = useRouter();

const { client, isLoading, isError, updateClient, isSaved, isSaving } =
  useClient(+route.params.id);

watch(isError, () => {
  if (isError.value) router.replace("/clients");
});
</script>

<template>
  <h3 v-if="isSaving">Saving...</h3>
  <h3 v-if="isSaved">Saved</h3>
  <LoadingModal v-if="isLoading" />
  <div v-if="client">
    <h1>{{ client.name }}</h1>
    <form @submit.prevent="updateClient(client!)">
      <input type="text" placeholder="Name" v-model="client.name" />
      <br />
      <input type="text" placeholder="Address" v-model="client.address" />
      <br />
      <button type="submit" :disabled="isSaving">Save</button>
    </form>
  </div>
  <code> {{ client }} </code>
</template>

<style scoped>
input {
  width: 100%;
  padding: 5px 10px;
  margin-bottom: 10px;
}
button {
  margin-bottom: 10px;
}
.error {
  color: red;
  font-weight: bold;
}
</style>
