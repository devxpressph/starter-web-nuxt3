<script setup>
  defineProps({
    title: String,
    price: String,
    infos: [String],
    active: Boolean
  })
</script>

<template>
  <div class="w-full lg:w-74 p-4 bg-white shadow-lg rounded-2xl">
    <p class="mb-4 text-xl font-medium text-gray-800 text-center">{{ title }}</p>
    <p class="text-3xl font-bold text-gray-900 text-center">
      <span class="mr-2 text-sm text-gray-400">P</span>{{ price }}
      <span class="text-sm text-gray-400">/ month</span>
    </p>
    <ul class="w-full mt-6 mb-6 text-sm text-gray-600">
      <li v-for="info in infos" class="p-3 bg-gray-100 mb-1">
        {{ info }}
      </li>
    </ul>
    <ButtonPrimaryFilled v-if="active" :label="`Get started with ${title}`">
    </ButtonPrimaryFilled>
    <ButtonOutlined v-else :label="`Get started with ${title}`">
    </ButtonOutlined>
  </div>
</template>