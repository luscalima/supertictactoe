<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    variant?: "primary" | "secondary" | "neutral";
    size?: "small" | "medium" | "large";
  }>(),
  {
    variant: "primary",
    size: "medium",
  }
);

const variants = computed(() => {
  return {
    primary:
      "bg-amber-500 text-sky-950 shadow-amber-600 hover:bg-amber-600 hover:shadow-amber-700",
    secondary:
      "bg-cyan-500 text-sky-950 shadow-cyan-600 hover:bg-cyan-600 hover:shadow-cyan-700",
    neutral:
      "bg-gray-300 text-sky-950 shadow-gray-400 hover:bg-gray-400 hover:shadow-gray-500",
  }[props.variant];
});
const sizes = computed(() => {
  return {
    small: "h-9 px-9 rounded-lg",
    medium: "h-12 px-12 rounded-xl",
    large: "h-[3.75rem] px-[3.75rem] rounded-2xl",
  }[props.size];
});
</script>

<template>
  <button
    class="uppercase font-bold shadow-block select-none transition-all duration-300"
    :class="[variants, sizes]"
  >
    <slot />
  </button>
</template>
