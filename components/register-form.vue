<template>
  <div class="bg-white w-full flex flex-col rounded-xl overflow-hidden shadow-xl">
    <div class="my-2 w-full h-full flex flex-col items-center">
      <h2 class="text-xl">Create an account</h2>
      <form class="my-4">
        <div>
          <p class="text-xs mb-1">Email</p>
          <input placeholder="Email..." class="w-72 mb-5 rounded-md border border-gray-500 border-opacity-75 px-3 py-1" required />
          <p class="text-xs mb-1">Password</p>
          <input placeholder="Password..." class="w-72 mb-5 rounded-md border border-gray-500 border-opacity-75 px-3 py-1" required />
          <p class="text-xs mb-1">Repeat password</p>
          <input placeholder="Password..." class="w-72 mb-5 rounded-md border border-gray-500 border-opacity-75 px-3 py-1" required />
        </div>
        <div class="flex flex-row justify-center items-center">
          <button
            type="submit"
            class="w-56 px-3 py-1 max-w-xs h-8 rounded-xl transition duration-250 ease-in-out bg-primary-green hover:bg-gecko-green transform hover:scale-105 border-black border-opacity-20"
          >
            Create Account
          </button>
        </div>
      </form>
      <p class="text-sm">
        Already have an account?
        <a class="hover:no-underline underline text-primary-green cursor-pointer" @click="emitLoginForm">Log in</a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    emitLoginForm() {
      this.$emit('loginForm')
    },
  },
}
</script>

<style></style>
