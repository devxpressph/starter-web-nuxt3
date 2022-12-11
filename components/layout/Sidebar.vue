<script setup lang="ts">import { RouteLocationRaw } from 'vue-router';

  const route = useRoute()
  console.log(route.path)

  interface iNavLink {
    label: String
    url: RouteLocationRaw
  }

  const navLinks: iNavLink[] = [
    {
      label: "Dashboard",
      url: "/dashboard"
    },
    {
      label: "Inventory",
      url: "/dashboard/inventory"
    },
    {
      label: "Users",
      url: "/dashboard/users"
    }
  ]
</script>

<template>
  <div class="grid gap-4">
    <div class="w-[100px] overflow-hidden rounded-lg">
      <img src="~/assets/img/devxpress.png" />
    </div>
    <div class="">
      <ul class="menu w-full text-base-content">
        <li v-for="link in navLinks">
          <NuxtLink
            class="hover:text-primary" 
            :to="link.url" 
            :class="route.path === link.url ? 'text-white font-bold' : 'text-gray-300'"
          >{{ link.label }}
        </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>
