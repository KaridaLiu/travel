<template>
  <div id="type">
    <div class="login-type">
      <div class="login-normal">
        <div
          :class="['login-normal-content', {'login-active': normalActivated}]"
          @click="handleNormalTypeClick"
          >
          普通登录
          </div>
      </div>
      <div class="login-normal">
        <div
          :class="['login-normal-content', {'login-active': messageActivated}]"
          @click="handleMessageTypeClick"
          >
          短信验证登录
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'loginType',
  data () {
    return {
      normalActivated: true,
      messageActivated: false
    }
  },
  methods: {
    handleNormalTypeClick () {
      this.normalActivated = true
      this.messageActivated = false
      this.$emit('change', 'normal')
    },
    handleMessageTypeClick () {
      this.normalActivated = false
      this.messageActivated = true
      this.$emit('change', 'message')
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.login-type
  display: flex
  width: 94%
  margin: 0 auto
  background: #fafafa
  .login-normal
    flex: 1
    .login-normal-content
      font-size: .32rem
      width: 100%
      line-height: .84rem
      text-align: center
      color: #999999
      border-top: .04rem solid #dadada
    .login-active
      border-top: .04rem solid $bgColor
      background: #fff
      color: $bgColor
</style>
