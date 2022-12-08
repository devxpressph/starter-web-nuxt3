<template>
  <div class="container mx-auto px-6 xl:px-0">
    <div class="w-full flex flex-col md:flex-row gap-4 justify-between py-6">
      <div>
        <h2 class="font-bold text-4xl text-black">AHub</h2>
        <h4>KSF Tech Solutions Opc.</h4>
        <span>Copyright @ 2022. All rights reserved.</span>
      </div>
      <div>
        <ul class="menu menu-compact">
          <li>
            <NuxtLink to="/" class="text-base hover:text-primary hover:bg-white">Home</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/pricing" class="text-base hover:text-primary hover:bg-white">Pricing</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/about" class="text-base hover:text-primary hover:bg-white">About us</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/contact" class="text-base hover:text-primary hover:bg-white">Contact</NuxtLink>
          </li>
        </ul>
      </div>
      <div>
        <ul class="menu menu-compact">
          <li>
            <NuxtLink to="#" class="text-base hover:text-primary hover:bg-white">Privacy Policy</NuxtLink>
          </li>
          <li>
            <NuxtLink to="#" class="text-base hover:text-primary hover:bg-white">Terms of Service</NuxtLink>
          </li>
        </ul>
      </div>
      <div>
        <ul class="menu menu-compact">
          <li>
            <NuxtLink to="/#" class="text-base hover:text-primary hover:bg-white">Facebook</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/#" class="text-base hover:text-primary hover:bg-white">Instagram</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/#" class="text-base hover:text-primary hover:bg-white">LinkedIn</NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>