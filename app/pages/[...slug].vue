<template>
  <article>
    <ContentDoc v-slot="{ doc }">
      <h1 class="text-xl heading-1">
        {{ doc.title }}
      </h1>
      <ContentRenderer
        :value="doc"
      />
    </ContentDoc>
  </article>
</template>
