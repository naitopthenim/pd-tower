<script setup lang="ts">
import { onClickOutside } from '@vueuse/core';

interface Props {
  label?: string;
  required?: boolean;
  type?: 'text' | 'password' | 'email';
  placeholder?: string;
}

interface Emits {
  (e: 'change', value: string): void;
}

const props = defineProps<Props>();
const emits = defineEmits<Emits>();
const modelValue = defineModel<string>();
const inputId = useId();

const isOpen = ref(false);
const selectRef = ref<HTMLElement | null>(null);

const selectedLabel = computed(() => {
  const selected = options.value.find(
    (opt: any) => opt.value === modelValue.value
  );
  return selected ? selected.label : '';
});

const selectOption = (option: any) => {
  modelValue.value = option.value;
  isOpen.value = false;
  emits('change', option.value);
};

// Close dropdown when clicking outside
onClickOutside(selectRef, () => {
  if (isOpen.value) {
    isOpen.value = false;
  }
});

const options = ref<any>([
  { value: 'US', label: 'United States' },
  { value: 'CA', label: 'Canada' },
  { value: 'GB', label: 'United Kingdom' },
  { value: 'AU', label: 'Australia' },
  { value: 'FR', label: 'France' },
  { value: 'DE', label: 'Germany' },
  { value: 'JP', label: 'Japan' },
  { value: 'CN', label: 'China' },
  { value: 'IN', label: 'India' },
  { value: 'BR', label: 'Brazil' },
  { value: 'MX', label: 'Mexico' },
  { value: 'IT', label: 'Italy' },
  { value: 'ES', label: 'Spain' },
  { value: 'KR', label: 'South Korea' },
  { value: 'NL', label: 'Netherlands' },
  { value: 'SE', label: 'Sweden' },
  { value: 'CH', label: 'Switzerland' },
  { value: 'SG', label: 'Singapore' },
  { value: 'NZ', label: 'New Zealand' },
  { value: 'NO', label: 'Norway' },
]);

function toggleOpen() {
  isOpen.value = !isOpen.value;
}
</script>
<template>
  <div>
    <div class="mb-2 flex gap-2" v-if="props.label">
      <label
        :for="inputId"
        class="text-sm font-semibold tracking-wide uppercase"
        >{{ props.label }}</label
      >
      <span v-if="props.required" class="text-red-500">*</span>
    </div>

    <div class="select relative" ref="selectRef">
      <button
        type="button"
        variant="outlined"
        :id="inputId"
        @click="toggleOpen"
        class="input-text flex w-full cursor-pointer items-center justify-between text-left"
      >
        <span :class="{ 'text-gray-400': !modelValue }">
          {{ selectedLabel || props.placeholder || 'Select a country' }}
        </span>
        <svg
          class="h-5 w-5 transition-transform"
          :class="{ 'rotate-180': isOpen }"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      <div
        v-show="isOpen"
        class="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-lg border border-gray-300 bg-white shadow-lg"
      >
        <div
          v-for="option in options"
          :key="option.value"
          @click="selectOption(option)"
          class="cursor-pointer px-4 py-2 transition-colors hover:bg-gray-100"
          :class="{ 'bg-blue-50 text-blue-600': modelValue === option.value }"
        >
          {{ option.label }}
        </div>
      </div>
    </div>
  </div>
</template>
