import { computed, ref } from "vue";
import { defineStore } from "pinia";

export const useCounterSetupStore = defineStore("counterSetup", () => {
  // State
  const count = ref<number>(0);
  const lastChanged = ref<Date>();
  // Getters
  const squareCount = computed(() => count.value * count.value);
  // Actions
  const incrementBy = (value: number) => {
    count.value += value;
    lastChanged.value = new Date();
  };
  const increment = () => incrementBy(1);

  return { count, lastChanged, squareCount, incrementBy, increment };
});
