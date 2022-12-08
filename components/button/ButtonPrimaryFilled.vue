<script setup>
  defineProps({
    label: String,
    action: Function
  })
</script>

<template>
  <button :click="action" class="w-full mt-3 text-white btn btn-md text-base capitalize bg-primary border-primary hover:bg-white hover:text-primary hover:border-main">
    {{ label }}
  </button>
</template>