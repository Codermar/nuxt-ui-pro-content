<template>
  <div class="flex">
    <!-- Left Navigation -->
    <nav class="min-h-screen w-64 bg-gray-100 px-4">
      <h2 class="py-0 text-base heading-2">
        Content
      </h2>
      <ContentNavigation v-slot="{ navigation }">
        <UAside>
          <UNavigationTree
            :links="mapContentNavigation(navigation)"
          />
        </UAside>
        <!-- <ul>
          <li v-for="link of navigation" :key="link._path">
            <NuxtLink :to="link._path" class="block py-2">
              {{ link.title }}
            </NuxtLink>
          </li>
        </ul> -->
      </ContentNavigation>
    </nav>

    <!-- Main Content -->
    <main class="flex-grow p-4">
      <slot />
    </main>
  </div>
</template>
