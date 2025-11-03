<script setup lang="ts">
// ✨ NO IMPORTS NEEDED! Everything is auto-imported:
// - ref, computed, onMounted from 'vue'
// - TailwindDemo component from components folder
// - useCounter composable from composables folder

// ✨ Using auto-imported composable!
const { count, increment, decrement, reset } = useCounter(0);

// computed is auto-imported!
const doubled = computed(() => count.value * 2);
const isEven = computed(() => count.value % 2 === 0);

// onMounted is auto-imported!
onMounted(() => {
  console.log('AutoImportShowcase mounted with TRUE auto-imports!');
  console.log('Using auto-imported useCounter composable!');
});
</script>

<template>
  <div
    class="auto-import-demo rounded-lg bg-gradient-to-r from-blue-50 to-purple-50 p-6"
  >
    <h2 class="mb-4 text-2xl font-bold text-gray-800">
      🚀 TRUE Auto-Import Demo (Vue Component)
    </h2>

    <div class="space-y-4">
      <!-- ✨ These Vue components are AUTO-IMPORTED! No import statements needed! -->
      <div class="rounded-lg bg-white p-4 shadow-sm">
        <h3 class="mb-2 text-lg font-semibold">Auto-Imported Components:</h3>
        <!-- <TailwindDemo /> -->
      </div>

      <!-- ✨ Vue composables are also AUTO-IMPORTED! -->
      <div class="rounded-lg bg-white p-4 shadow-sm">
        <h3 class="mb-2 text-lg font-semibold">Auto-Imported Composables:</h3>
        <p class="text-gray-600">Count: {{ count }}</p>
        <p class="text-gray-600">Computed Double: {{ doubled }}</p>
        <p class="text-gray-600">Is Even: {{ isEven }}</p>

        <div class="mt-3 space-x-2">
          <button
            @click="increment"
            class="rounded bg-blue-500 px-3 py-1 text-white hover:bg-blue-600"
          >
            +1
          </button>
          <button
            @click="decrement"
            class="rounded bg-red-500 px-3 py-1 text-white hover:bg-red-600"
          >
            -1
          </button>
          <button
            @click="reset"
            class="rounded bg-gray-500 px-3 py-1 text-white hover:bg-gray-600"
          >
            Reset
          </button>
        </div>
      </div>

      <div class="text-sm text-gray-500 italic">
        💡 All Vue composables (ref, computed, watch, onMounted) and components
        are auto-imported - no import statements needed in this .vue file!
      </div>
    </div>
  </div>
</template>
