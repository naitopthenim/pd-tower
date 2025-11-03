<script setup lang="ts">
interface Props {
  label?: string;
  required?: boolean;
  modelValue?: string;
  type?: 'text' | 'password' | 'email';
  placeholder?: string;
}

interface Emits {
  (e: 'update:modelValue', value: string): void;
  (e: 'input', value: string): void;
  (e: 'blur', event: FocusEvent): void;
}

const props = defineProps<Props>();
const emits = defineEmits<Emits>();
const modelValue = defineModel<string>();
const inputId = useId();
</script>
<template>
  <div class="input-text-wrapper">
    <div class="mb-2 flex gap-2" v-if="props.label">
      <label
        :for="inputId"
        class="text-sm font-semibold tracking-wide uppercase"
        >{{ props.label }}</label
      >
      <span v-if="props.required" class="text-red-500">*</span>
    </div>

    <input
      :id="inputId"
      :type="props.type || 'text'"
      :placeholder="props.placeholder || ''"
      :model-value="modelValue"
      @input="
        ($event: any) => {
          emits('input', $event.target.value);
        }
      "
      @blur="emits('blur', $event)"
      class="input-text w-full"
    />
  </div>
</template>
