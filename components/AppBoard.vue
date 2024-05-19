<script setup lang="ts">
export type Mark = "x" | "o" | null;
export type Turn = Exclude<Mark, null>;

const props = defineProps<{ turn: Turn }>();
const model = defineModel<Mark[]>({ default: Array(9).fill(null) });

function handleMove(index: number) {
  if (model.value[index] !== null) return;

  model.value[index] = props.turn;
  model.value = [...model.value];
}
</script>

<template>
  <div class="grid grid-cols-3 grid-rows-3 gap-4 w-full h-full">
    <div
      v-for="(move, index) in model"
      class="flex flex-1 justify-center items-center bg-sky-900 shadow-block shadow-sky-darker rounded-xl"
      @click="handleMove(index)"
    >
      <div v-if="move === 'x'" class="text-cyan-500">
        <AppX :size="48" />
      </div>
      <div v-else-if="move === 'o'" class="text-amber-500">
        <AppO :size="48" />
      </div>
    </div>
  </div>
</template>
