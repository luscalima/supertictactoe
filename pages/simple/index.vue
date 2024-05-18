<script setup lang="ts">
import AppX from "~/components/AppX.vue";
import AppO from "~/components/AppO.vue";
</script>

<template>
  <div class="flex justify-center items-center w-full h-screen p-4 bg-sky-950">
    <div class="flex flex-col gap-8 w-full md:w-96">
      <div class="p-4 bg-sky-900 shadow-block shadow-sky-darker rounded-xl">
        <div class="mb-4 uppercase text-center text-sm text-gray-50">
          <strong> pick player 1's mark </strong>
        </div>
        <div>
          <AppSelectButton
            :options="[
              { label: AppX, value: 'x' },
              { label: AppO, value: 'o' },
            ]"
            default-value="x"
          />
        </div>
        <div class="mt-4 uppercase text-center text-xs text-gray-300">
          <small>remember: X goes first</small>
        </div>
      </div>
      <footer class="flex flex-col gap-4">
        <AppButton>new game (vs cpu)</AppButton>
        <AppButton variant="secondary">new game (vs player)</AppButton>
      </footer>
    </div>
  </div>
</template>
