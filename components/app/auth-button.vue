<script setup lang="ts">
const authStore = useAuthStore();
</script>

<template>
  <UiButton
    v-if="!authStore.user"
    class="cursor-pointer"
    size="lg"
    :disabled="authStore.loading"
    @click="() => authStore.signIn('github')"
  >
    Sign In
    <Icon
      v-if="authStore.loading"
      name="tabler:loader"
      class="animate-spin"
      size="22"
    />
    <Icon
      v-else
      name="tabler:brand-github"
      size="22"
    />
  </UiButton>
  <UiButton
    v-else
    class="cursor-pointer"
    :disabled="authStore.loading"
    @click="authStore.signOut"
  >
    Sign Out <Icon name="tabler:logout-2" size="22" />
  </UiButton>
</template>
