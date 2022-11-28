<script setup lang="ts"></script>

<template>
  <div>
    <ul>
      <li>
        <RouterLink
          :to="{
            name: 'client-by-id',
            params: { id: 1 },
          }"
        >
          Client name
        </RouterLink>
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
