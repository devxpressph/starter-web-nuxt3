<script setup>
  import Login from "~/features/login"

  definePageMeta({
    layout: false,
  })
</script>

<template>
  <NuxtLayout :name="layout">
    <LayoutAuth title="Login">
      <template v-slot:feature>
        <Login />
      </template>
      <template v-slot:cta>
        <div class="grid gap-2">
          <AuthLink label="Reset Password" link="/forgot-password" question="Forgot Password?" />
          <AuthLink label="Create Account" link="/register" question="Don't have an account yet?" />
        </div>
      </template>
    </LayoutAuth>
  </NuxtLayout>
</template>
