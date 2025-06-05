<script setup lang="ts">
const authStore = useAuthStore();
</script>

<template>
  <div class="w-md mx-auto py-12 md:p-20">
    <h1 class="text-3xl font-bold underline mb-3">
      Visit Trails
    </h1>
    <p>Keep track of your travels and adventures. Add</p>
    <ul class="*:list-disc ml-8">
      <li>locations</li>
      <li>photos</li>
      <li>notes</li>
      <li>...and much more</li>
    </ul>
    <div class="text-center my-4">
      <AppAuthButton v-if="!authStore.user" />
      <UiButton
        v-else
        as-child
        variant="link"
      >
        <NuxtLink to="/dashboard">
          Start Logging
        </NuxtLink>
      </UiButton>
    </div>
  </div>
</template>
