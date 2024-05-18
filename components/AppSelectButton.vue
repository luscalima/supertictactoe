<script setup lang="ts">
import { type Component } from "vue";

export type SelectButtonOption = {
  label: string | Component;
  value: string;
};

const props = defineProps<{
  options: SelectButtonOption[];
  defaultValue?: string;
}>();
const model = defineModel();
const opts = ref<HTMLButtonElement[]>([]);

function handleModel(value: string) {
  model.value = value;
}

onMounted(() => {
  model.value = props.defaultValue;
});

// TODO: implement keyboard navigation
</script>

<template>
  <div
    class="flex h-12 p-2 rounded-lg bg-sky-950"
    role="radiogroup"
    tabindex="0"
  >
    <button
      v-for="option in options"
      type="button"
      role="radio"
      ref="opts"
      :value="option.value"
      :aria-checked="model === option.value"
      :tabindex="model === option.value ? 0 : -1"
      @click="handleModel(option.value)"
      class="flex flex-1 justify-center items-center text-gray-50 rounded-md"
      :class="{
        'text-sky-950 bg-gray-300': model === option.value,
      }"
      @keydown.space.enter="() => console.log('1')"
    >
      <component :is="option.label">
        {{ option.label }}
      </component>
    </button>
  </div>
</template>
