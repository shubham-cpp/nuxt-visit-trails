<script setup lang="ts">
import { Toaster } from "@/components/ui/sonner";
import "vue-sonner/style.css";

const authClient = useAuthStore(); // vue-sonner v2 requires this import

authClient.init();
</script>

<template>
  <Toaster />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
