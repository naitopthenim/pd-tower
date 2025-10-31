<script setup lang="ts">
// Auto-imported from Vue (no import needed!)
const count = ref(0);

const increment = () => {
  count.value++;
};

const decrement = () => {
  count.value--;
};

const reset = () => {
  count.value = 0;
};

// Also auto-imported!
onMounted(() => {
  console.log('TailwindDemo component mounted!');
});
</script>

<template>
  <div
    class="mx-auto max-w-md overflow-hidden rounded-xl bg-white p-6 shadow-md"
  >
    <h2 class="mb-4 text-2xl font-bold text-gray-800">Tailwind + Vue Demo</h2>
    <div class="space-y-4">
      <div class="flex items-center space-x-3">
        <span class="text-gray-600">Count:</span>
        <span class="text-2xl font-semibold text-blue-600">{{ count }}</span>
      </div>
      <div class="flex space-x-2">
        <button
          @click="decrement"
          class="rounded-lg bg-red-500 px-4 py-2 text-white transition-colors hover:bg-red-600"
        >
          -
        </button>
        <button
          @click="increment"
          class="rounded-lg bg-green-500 px-4 py-2 text-white transition-colors hover:bg-green-600"
        >
          +
        </button>
        <button
          @click="reset"
          class="rounded-lg bg-gray-500 px-4 py-2 text-white transition-colors hover:bg-gray-600"
        >
          Reset
        </button>
      </div>
      <div class="mt-4 rounded-lg bg-blue-50 p-3">
        <p class="text-sm text-blue-700">
          This component uses Tailwind CSS classes and Vue 3 Composition API
          with auto-imports!
        </p>
      </div>
    </div>
  </div>
</template>
