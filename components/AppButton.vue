<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    variant?: "primary" | "secondary" | "danger";
  }>(),
  { variant: "primary" }
);

const classes = computed(() => {
  return {
    primary:
      "bg-amber-500 text-sky-950 shadow-amber-600 hover:bg-amber-600 hover:shadow-amber-700",
    secondary:
      "bg-cyan-500 text-sky-950 shadow-cyan-600 hover:bg-cyan-600 hover:shadow-cyan-700",
    danger: "bg-red-500 text-white",
  }[props.variant];
});
</script>

<template>
  <button
    class="h-12 px-12 rounded-xl uppercase font-bold shadow-block select-none transition-all duration-300"
    :class="classes"
  >
    <slot />
  </button>
</template>
