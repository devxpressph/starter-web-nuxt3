<script setup>

 import ForgotPassword from "~/features/forgotPassword"

  definePageMeta({
    layout: false,
  })

</script>

<template>
  <NuxtLayout :name="auth">
    <LayoutAuth title="Reset password">
      <template v-slot:feature>
        <ForgotPassword />
      </template>
      <template v-slot:cta>
        <div class="grid gap-2">
          <AuthLink label="Login to your account." link="/login" question="Already have an account?" />
        </div>
      </template>
    </LayoutAuth>
  </NuxtLayout>
</template>