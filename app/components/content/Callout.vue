<script lang="ts" setup>
defineProps({
  icon: String,
  alt: String,
})
</script>

<template>
  <div class="mb-4 flex items-center rounded p-3 ring-1 ring-green-4 dark:ring-green-7">
    <div class="mr-4 rounded-full bg-green-4 p-2">
      <img :src="icon" :alt="alt">
    </div>
    <ContentSlot :use="$slots.default" />
  </div>
</template>
