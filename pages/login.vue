<template>
  <div class="flex flex-grow flex-row justify-evenly items-center">
    <div class="">
      <img src="/img/gecko.png" class="object-contain" />
    </div>
    <div class="flex items-center w-1/4">
      <Login-form v-show="loginForm" @registerForm="changeToRegister"></Login-form>
      <Register-form v-show="registerForm" @loginForm="changeToLogin"></Register-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      registerForm: false,
      loginForm: true,
    }
  },
  methods: {
    changeToRegister() {
      this.loginForm = false
      this.registerForm = true
    },
    changeToLogin() {
      this.registerForm = false
      this.loginForm = true
    },
  },
}
</script>

<style></style>
