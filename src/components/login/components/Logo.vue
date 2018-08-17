<template>
  <div id="logo">
    <div class="login-logo">嗡嗡嗡</div>
  </div>
</template>

<script>
export default {
  name: 'loginLogo'
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.login-logo
  line-height: 1.5rem
  font-size: .45rem
  text-align: center
  color: $bgColor
</style>
