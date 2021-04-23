<template>
  <div>
      <label>Username</label>
      <input @input="onUsernameChange" type="text" />
      <label>Password</label>
      <input @input="onPasswordChange" type="password" />
      <button @click="onLoginClick">Login</button>
      <button @click="onRegisterClick">Register</button>
  </div>
</template>

<script>

import{ mapActions, mapMutations, mapState } from 'vuex'

export default {
    name: 'Login',
    computed: {
      ...mapState([ 'error' ])
    },
    methods: {
      ...mapActions([ 'loginUser', 'registerUser' ]),
      ...mapMutations([ 'setUsername', 'setPassword' ]),
      onRegisterClick() {
          this.registerUser()
          if (!this.error) {
            this.$router.push('/movies')
          }
      },
      onLoginClick() {
       this.loginUser()
        if (!this.error) {
            this.$router.push('/movies')
          }
      },
      onPasswordChange(event) {
          this.setPassword(event.target.value.trim())
      },
      onUsernameChange(event) {
          this.setUsername(event.target.value.trim())
      }
    }
}
</script>

<style scoped>

</style>