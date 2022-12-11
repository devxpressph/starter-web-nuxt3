<script setup lang="ts">
  defineProps({
    data: Array<string>
  })
</script>

<template>
  <thead class="sticky top-0 z-10">
    <tr>
      <td
        v-for="item in data"
        :class="item === 'Action' ? 'text-right' : 'text-left'"
      >
        {{ item }}
      </td>
    </tr>
  </thead>
</template>