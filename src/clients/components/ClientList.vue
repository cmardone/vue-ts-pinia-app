<script setup lang="ts">
import useClients from "@/clients/composables/useClients";
const { clients } = useClients();
</script>

<template>
  <div>
    <ul>
      <li v-for="client in clients" :key="`client-${client.id}`">
        <RouterLink
          :to="{
            name: 'client-by-id',
            params: { id: client.id },
          }"
        >
          {{ client.name }}
        </RouterLink>
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
