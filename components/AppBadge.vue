<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    title?: string;
    variant?: "primary" | "secondary" | "neutral";
    block?: boolean;
  }>(),
  { variant: "primary", block: false }
);

const variants = computed(() => {
  return {
    primary: "bg-amber-500",
    secondary: "bg-cyan-500",
    neutral: "bg-gray-300",
  }[props.variant];
});
const block = computed(() => (props.block ? "w-full" : ""));
</script>

<template>
  <div
    class="flex flex-col justify-center items-center h-12 px-4 font-bold uppercase rounded-xl text-sky-950"
    :class="[variants, block]"
  >
    <div v-if="title" class="text-center text-xs -mb-1.5">
      {{ title }}
    </div>
    <div class="text-lg">
      <slot />
    </div>
  </div>
</template>
