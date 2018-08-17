<template>
  <div id="button">
    <div class="login-button-group">
      <div class="login-button">登录</div>
      <div class="signin-button">快速注册</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'loginButton'
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.login-button-group
  width: 94%
  margin: .5rem auto
  .login-button,.signin-button
    width: 100%
    line-height: .7rem
    margin-bottom: .2rem
    text-align: center
    font-size: .36rem
    border-radius: .1rem
  .login-button
    background: $bgColor
    color: #fff
    border: .01rem solid #dadada
  .signin-button
    background: #fff
    color: $bgColor
    border: .01rem solid $bgColor
</style>
