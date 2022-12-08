<script setup lang="ts">

import { LoginUser } from './api'

interface FormProps {
  email: string
  password: string
}

const submitHandler = async (formData: FormProps) => {
  const data = await LoginUser(formData)

  if (data?.user) {
    return navigateTo("/", { replace: true })
  }
}

</script>

<template>
  <div id="login">
    <FormKit
      type="form"
      :actions="false"
      @submit="submitHandler"
    >
      <FormKit
        id="email"
        type="email"
        placeholder="Email"
        name="email"
        validation="required"
      />

      <button
        class="w-full text-white btn btn-md rounded-default text-base capitalize bg-primary border-primary hover:bg-white hover:text-primary hover:border-main"
          on:click="submitHandler"
        >
        Submit
      </button>
    </FormKit>
  </div>
</template>