<script setup lang="ts">
import { toRefs } from "vue";
import { RouterLink } from "vue-router";

import type { Client } from "@/clients/types/client";

const props = defineProps<{ clients: Client[] }>();
const { clients } = toRefs(props);
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
