<script setup lang="ts">
import type { SelectItem } from "@nuxt/ui";

const colorMode = useColorMode();

const isDarkMode = computed({
  get() {
    return colorMode.value === "dark";
  },
  set(value) {
    colorMode.preference = value ? "dark" : "light";
  },
});
const items = ref([
  {
    value: true,
    icon: "tabler:moon-filled",
  },
  {
    value: false,
    icon: "tabler:sun-high-filled",
  },
] satisfies SelectItem[]);

const icon = computed(() => items.value.find(item => item.value === isDarkMode.value)?.icon);
</script>

<template>
  <USelect
    v-model="isDarkMode"
    :items="items"
    :icon="icon"
    value-key="value"
    class="w-8"
  />
</template>
