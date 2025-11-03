<script setup lang="ts"></script>
<template>
  <div class="wrapper gallery flex flex-col gap-4">
    <div class="grid grid-cols-12 gap-4">
      <div class="heig col-span-9 grid grid-cols-9 gap-4">
        <div class="gallery-img col-span-6 h-[259px] bg-blue-300"></div>
        <div class="gallery-img col-span-3 h-[259px] bg-blue-300"></div>
        <div class="gallery-img col-span-9 h-[604px] bg-blue-300"></div>
      </div>
      <div class="gallery-img col-span-3 h-full bg-blue-300"></div>
    </div>
    <div class="col-span-12 grid grid-cols-2 gap-4">
      <div class="gallery-img col-span-1 h-[348px] bg-blue-300"></div>
      <div class="gallery-img col-span-1 h-[348px] bg-blue-300"></div>
    </div>
  </div>
</template>

<style scoped lang="postcss">
@import 'tailwindcss' reference;

.gallery .gallery-img {
  @apply cursor-pointer transition-all duration-300 ease-in-out;
  &:hover {
    /* @apply opacity-50 shadow-[0_0_20.7px_rgba(255,255,255,0.5)]; */
    box-shadow: 0 0 15.7px rgba(255, 255, 255, 0.7);
    opacity: 0.9;
  }
}
</style>
