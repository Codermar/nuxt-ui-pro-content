<script setup lang="ts">
definePageMeta({
  layout: 'content-browser',
})
</script>

<template>
  <article>
    <ContentDoc v-slot="{ doc }">
      <h1 class="mt-0 text-xl heading-1">
        {{ doc.title }}
      </h1>
      <ContentRenderer
        :value="doc"
      />
    </ContentDoc>
  </article>
</template>
