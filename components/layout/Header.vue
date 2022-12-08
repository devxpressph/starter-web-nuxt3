<script setup lang="ts">
  const isMenuShown = ref(false)
  const menuElement = ref()

  function toggleMenu (value = false) {
    isMenuShown.value = value
  }

  onClickOutside(menuElement, () => toggleMenu(false))

</script>

<template>
  <div class="navbar rounded-lg bg-base-100">
    <label for="main-drawer" class="btn btn-ghost btn-circle lg:hidden">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
    </label>
    <div class="flex-1">
      <span class="normal-case font-bold text-xl px-2">DevXpress</span>
    </div>
    <div class="flex-none">
      <div class="dropdown dropdown-end">
        <label  class="btn btn-ghost btn-circle avatar" @click="toggleMenu(!isMenuShown)">
          <div class="w-10 rounded-full">
            <img src="https://placeimg.com/80/80/people" />
          </div>
        </label>
        <ul
          ref="menuElement"
          v-show="isMenuShown"
          class="menu menu-compact mt-3 p-2 shadow bg-base-100 rounded-box w-52 absolute right-0"
        >
          <li @click="toggleMenu(!isMenuShown)">
            <NuxtLink to="/dashboard/profile" class="justify-between">
              Profile
            </NuxtLink>
          </li>
          <li @click="toggleMenu(!isMenuShown)">
            <NuxtLink to="/login" class="justify-between" >
              Logout
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>