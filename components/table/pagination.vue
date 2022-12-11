<script setup lang="ts">
  defineProps({
    page: String
  })
</script>

<template>
  <div class="flex gap-1">
    <button class="btn btn-outline rounded text-lg">«</button>
    <button class="btn btn-outline rounded">Page {{ page }}</button>
    <button class="btn btn-outline rounded text-lg">»</button>
  </div>
</template>