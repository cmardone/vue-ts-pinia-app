<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useCounterSetupStore } from "@/store/counter-setup";
import CounterSetupValue from "@/counter/components/CounterSetupValue.vue";

const counterSetup = useCounterSetupStore();

const { count, squareCount } = storeToRefs(counterSetup);
const { increment, incrementBy, $patch } = counterSetup;
</script>

<template>
  <section>
    <h1>Pinia Setup</h1>
    <h4>Counter: {{ count }}</h4>
    <h4>Square counter: {{ squareCount }}</h4>

    <br />
    <button @click="increment">+1</button>
    <button @click="incrementBy(2)">+2</button>
    <button @click="incrementBy(5)">+5</button>
    <button @click="$patch({})">Reset</button>
    <CounterSetupValue />
  </section>
</template>

<style scoped></style>
