<script setup>

  import Signup from "~/features/signup"

  definePageMeta({
    layout: false,
  })
</script>

<template>
  <NuxtLayout :name="auth">
    <LayoutAuth title="Get Started">
      <template v-slot:feature>
        <Signup />
      </template>
      <template v-slot:cta>
        <div class="grid gap-2">
          <AuthLink label="Login to your account." link="/login" question="Already have an account?" />
        </div>
      </template>
    </LayoutAuth>
  </NuxtLayout>
</template>