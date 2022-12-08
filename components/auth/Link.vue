<script setup>
  defineProps({
    question: String,
    link: String,
    label: String
  })
</script>

<template>
  <div>
    <span class="text-sm font-light text-slate-400 pr-1">{{ question }}</span>
    <NuxtLink :to="link" class="text-sm"><span class="text-primary">{{ label }}</span></NuxtLink>
  </div>
</template>