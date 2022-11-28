<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useCounterOptionsStore } from "@/store/counter-options";

const counterOptions = useCounterOptionsStore();
const { count, lastChanged } = storeToRefs(counterOptions);
</script>

<template>
  <h1>The counter value is {{ count }}</h1>
  <h4>Last changed time {{ lastChanged }}</h4>
</template>

<style scoped></style>
