<script setup lang="ts">
import useClients from "@/clients/composables/useClients";
const { currentPage, pageNumbers, setPage } = useClients();
</script>

<template>
  <div>
    <button :disabled="currentPage <= 1" @click="setPage(currentPage - 1)">
      Prev
    </button>
    <button
      v-for="page of pageNumbers"
      :key="`page-button-${page}`"
      :class="{ active: page === currentPage }"
      @click="setPage(page)"
    >
      {{ page }}
    </button>
    <button
      :disabled="currentPage >= pageNumbers.length"
      @click="setPage(currentPage + 1)"
    >
      Next
    </button>
  </div>
</template>

<style scoped>
div {
  margin-top: 10px;
}

button {
  background-color: transparent;
  border-radius: 5px;
  border: 1px solid var(--color-border);
  color: var(--color-text);
  cursor: pointer;
  margin-right: 5px;
  padding: 10px;
  transition: all 0.5s;
}

button:hover {
  background-color: hsla(160, 100%, 37%, 0.2);
  transition: all 0.5s;
}
button:disabled {
  cursor: not-allowed;
}
.active {
  background-color: hsla(160, 100%, 37%, 0.2);
}
</style>
