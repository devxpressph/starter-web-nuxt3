<script setup lang="ts">

interface FormProps {
  email: string
  password: string
}

const submitHandler = async (formData: FormProps) => {
  console.log(formData, `formData`)
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
        id="email"
        type="email"
        name="email"
        placeholder="Email"
        validation="required"
      />

      <FormKit
        id="password"
        type="password"
        name="password"
        placeholder="Password"
        validation="required"
        suffix-icon="eye"
        @suffix-icon-click="handleIconPasswordClick"
      />

      <button
        class="w-full text-white btn btn-md text-base rounded-default capitalize bg-primary border-primary hover:bg-white hover:text-primary hover:border-main"
          on:click="submitHandler"
        >
        Submit
      </button>
    </FormKit>
  </div>
</template>