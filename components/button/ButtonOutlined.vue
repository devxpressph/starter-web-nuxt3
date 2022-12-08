<script setup>
  defineProps({
    label: String,
    action: Function
  })
</script>

<template>
  <button :click="action" class="w-full mt-3 text-ink-400 btn btn-md text-base capitalize bg-white border-ink-400 hover:bg-ink-400 hover:text-white hover:border-ink-400">
    {{ label }}
  </button>
</template>