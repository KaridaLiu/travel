<template>
  <div id="login">
    <login-logo></login-logo>
    <login-type @change="handleTypeChange"></login-type>
    <login-swift :type="swiftType"></login-swift>
    <login-button></login-button>
  </div>
</template>

<script>
import loginLogo from './components/Logo'
import loginType from './components/Type'
import loginSwift from './components/Swift'
import loginButton from './components/Button'
export default {
  name: 'Login',
  components: {
    loginLogo,
    loginType,
    loginSwift,
    loginButton
  },
  data () {
    return {
      swiftType: 'normal'
    }
  },
  methods: {
    handleTypeChange (msg) {
      this.swiftType = msg
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
