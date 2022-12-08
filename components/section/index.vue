<script setup>
  defineProps({
    content: String,
    title: String,
    details: String,
    subDetails: String,
    reverse: Boolean
  })
</script>

<template>
  <div
    class="flex flex-col-reverse lg:flex-row items-start"
    :class="{ [`lg:flex-row-reverse`]: reverse }"
  >
    <div class="flex-1 w-3/4 mx-auto pt-8 lg:pt-20">
      <div class="w-full md:w-3/4 mx-auto">
        <div class="pb-6">
          <small :v-show="subDetails">{{ subDetails }}</small>
          <h3 class="text-4xl font-bold text-black py-3">{{ title }}</h3>
          <p>{{ details }}</p>
          <slot name="cta"></slot>
        </div>
      </div>
    </div>
    <div class="flex-1">
      <slot name="graphic"></slot>
    </div>
  </div>
</template>