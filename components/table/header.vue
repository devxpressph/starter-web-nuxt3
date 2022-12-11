<script setup lang="ts">
  defineProps({
    data: Array<string>
  })
</script>

<template>
  <thead>
    <tr>
      <td v-for="item in data">{{ item }}</td>
    </tr>
  </thead>
</template>