<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useCounterSetupStore } from "@/store/counter-setup";

const counterSetup = useCounterSetupStore();
const { count, lastChanged } = storeToRefs(counterSetup);
</script>

<template>
  <h1>The counter value is {{ count }}</h1>
  <h4>Last changed time {{ lastChanged }}</h4>
</template>

<style scoped></style>
