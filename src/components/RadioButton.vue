<script setup lang="ts">
interface Props {
  label?: string;
  required?: boolean;
  value?: string;
  type?: 'text' | 'password' | 'email';
  placeholder?: string;
  binary?: boolean;
  disabled?: boolean;
}

interface Emits {
  (e: 'input', value: string): void;
  (e: 'blur', event: FocusEvent): void;
}

const props = defineProps<Props>();
const emits = defineEmits<Emits>();
const modelValue = defineModel<string | boolean>();
const inputId = useId();

const forwardedProps = computed(() => {
  const attrs = getCurrentInstance()!.attrs;
  const { class: _, ...forwarded } = attrs;

  // Forward relevant props that should be passed to PInputText
  const relevantProps = {
    disabled: props.disabled,
    value: props.value,
    placeholder: props.placeholder,
    binary: props.binary,
  };
  return { ...forwarded, ...relevantProps };
});
</script>
<template>
  <div class="radio-button flex items-start">
    <input
      :id="inputId"
      type="radio"
      v-model="modelValue"
      @input="emits('input', ($event.target as HTMLInputElement).value)"
      v-bind="forwardedProps"
      class="radio-input"
    />
    <label
      :for="inputId"
      class="flex-1 cursor-pointer pl-4"
      v-html="props.label"
    >
    </label>
  </div>
</template>
