<script lang="ts" setup>
const localNav = ref([
  {
    title: 'Home',
    path: '/',
  },
  {
    title: 'content browser',
    link: '/content-browser',
  },
])
</script>

<template>
  <div class="flex">
    <!-- Left Navigation -->
    <nav class="min-h-screen w-64 bg-gray-100 px-4">
      <h2 class="py-0 text-base heading-2">
        Content
      </h2>
      <ContentNavigation v-slot="{ navigation }">
        <UAside class="min-w-60">
          <UNavigationTree
            :links="mapContentNavigation(navigation)"
          />
        </UAside>
      </ContentNavigation>
    </nav>

    <!-- Main Content -->
    <main class="flex-grow p-4">
      <div class="min-h-[calc(100vh-4rem)]">
        <nav>
          <ul class="mb-4 flex justify-start gap-x-1">
            <li v-for="link of localNav" :key="link.path">
              <NuxtLink :to="link.path" class="block bdb p-1">
                {{ link.title }}
              </NuxtLink>
            </li>
          </ul>
        </nav>
        <slot />
      </div>

      <Footer />
    </main>
  </div>
</template>
