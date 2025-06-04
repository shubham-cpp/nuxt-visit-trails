<script setup lang="ts">
const colorMode = useColorMode();
</script>

<template>
  <UiDropdownMenu>
    <UiDropdownMenuTrigger as-child>
      <UiButton variant="outline">
        <Icon name="tabler:moon" class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Icon name="tabler:sun" class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        <span class="sr-only">Toggle theme</span>
      </UiButton>
    </UiDropdownMenuTrigger>
    <UiDropdownMenuContent align="end">
      <UiDropdownMenuItem @click="colorMode.preference = 'light'">
        Light
      </UiDropdownMenuItem>
      <UiDropdownMenuItem @click="colorMode.preference = 'dark'">
        Dark
      </UiDropdownMenuItem>
      <UiDropdownMenuItem @click="colorMode.preference = 'system'">
        System
      </UiDropdownMenuItem>
    </UiDropdownMenuContent>
  </UiDropdownMenu>
</template>
