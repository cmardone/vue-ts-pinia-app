<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useCounterOptionsStore } from "@/store/counter-options";
import CounterOptionsValue from "@/counter/components/CounterOptionsValue.vue";

const counterOptions = useCounterOptionsStore();

const { count, squareCount } = storeToRefs(counterOptions);
const { increment, incrementBy, $patch } = counterOptions;
</script>

<template>
  <h1>Pinia Options</h1>
  <h4>Counter: {{ count }}</h4>
  <h4>Square counter: {{ squareCount }}</h4>

  <br />
  <button @click="increment">+1</button>
  <button @click="incrementBy(2)">+2</button>
  <button @click="incrementBy(5)">+5</button>
  <button @click="$patch({})">Reset</button>
  <CounterOptionsValue />
</template>

<style scoped></style>
