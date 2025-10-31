// Composable ตัวอย่าง
export function useCounter(initialValue = 0) {
  const count = ref(initialValue);

  const increment = () => {
    count.value++;
  };

  const decrement = () => {
    count.value--;
  };

  const reset = () => {
    count.value = initialValue;
  };

  return {
    count: readonly(count),
    increment,
    decrement,
    reset,
  };
}

export function useToggle(initialState = false) {
  const state = ref(initialState);

  const toggle = () => {
    state.value = !state.value;
  };

  return {
    state: readonly(state),
    toggle,
  };
}
