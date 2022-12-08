<script setup lang="ts">

import { LoginUser } from './api'

interface FormProps {
  email: string
  password: string
}

const submitHandler = async (formData: FormProps) => {
  // const data = await LoginUser(formData)

  // if (data?.user) {
  //   return navigateTo("/", { replace: true })
  // }
  console.log(formData)
}

const handleIconPasswordClick = (node: { props: { suffixIcon: string; type: string; }; }) => {
  node.props.suffixIcon = node.props.suffixIcon === 'eye' ? 'eyeClosed' : 'eye'
  node.props.type = node.props.type === 'password' ? 'text' : 'password'
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
        id="name"
        type="text"
        placeholder="Name"
        name="name"
        validation="required"
      />

      <FormKit
        id="email"
        type="email"
        placeholder="Email"
        name="email"
        validation="required"
      />

      <FormKit
        id="password"
        type="password"
        name="password"
        placeholder="Password"
        validation="required"
        suffix-icon="eyeClosed"
        @suffix-icon-click="handleIconPasswordClick"
      />

      <FormKit
        id="confirmPassword"
        type="password"
        name="confirmPassword"
        placeholder="Confirm Password"
        validation="required"
        suffix-icon="eyeClosed"
        @suffix-icon-click="handleIconPasswordClick"
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