<script setup lang="ts">
const authClient = useAuthStore(); // vue-sonner v2 requires this import

await authClient.init();
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <AppNavBar />
    <main class="flex-1 flex flex-col px-8 max-w-6xl mx-auto w-full">
      <slot />
    </main>
  </div>
</template>
