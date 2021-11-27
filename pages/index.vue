<template>
  <div class="flex flex-grow flex-col-reverse lg:flex-row justify-evenly items-center">
    <div class="flex justify-center items-center">
      <img src="/img/gecko.png" class="object-contain w-1/2 lg:w-full" />
    </div>
    <div class="flex items-center w-10/12 lg:w-1/4">
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
  /* computed: {
    firebaseAuth() {
      return this.$fire.auth
    },
  }, */
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
