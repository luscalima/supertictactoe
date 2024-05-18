<script setup lang="ts">
withDefaults(
  defineProps<{
    size?: number;
  }>(),
  { size: 16 }
);
</script>

<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 256 256"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M120 240C186.274 240 240 186.274 240 120C240 53.7258 186.274 0 120 0C53.7258 0 0 53.7258 0 120C0 186.274 53.7258 240 120 240ZM120 180C153.137 180 180 153.137 180 120C180 86.8629 153.137 60 120 60C86.8629 60 60 86.8629 60 120C60 153.137 86.8629 180 120 180Z"
      fill="currentColor"
    />
  </svg>
</template>
