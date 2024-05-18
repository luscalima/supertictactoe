<template>
  <div class="flex justify-center items-center w-full h-screen bg-sky-950">
    <div class="flex gap-8">
      <NuxtLink to="/simple" custom v-slot="{ navigate }">
        <AppButton @click="navigate">Play simple</AppButton>
      </NuxtLink>
    </div>
  </div>
</template>
