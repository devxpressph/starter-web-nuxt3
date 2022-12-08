<template>
  <div class="grid gap-4">
    <div class="w-[100px] overflow-hidden rounded-lg">
      <img src="~/assets/img/devxpress.png" />
    </div>
    <div class="">
      <ul class="menu w-full text-base-content">
        <li class="rounded-lg hover:bg-gray-100">
          <NuxtLink to="/dashboard" class="text-gray-300 hover:text-primary">Dashboard</NuxtLink>
        </li>
        <li class="rounded-lg hover:bg-gray-100">
          <NuxtLink to="/dashboard/inventory" class="text-gray-300 hover:text-primary">Inventory</NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>
