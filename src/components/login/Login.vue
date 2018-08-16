<template>
  <div id="login">
    <div class="login-logo">嗡嗡嗡</div>
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
    <div class="login-swift">
      <div class="login-swift-wrapper" v-show="normalActivated">
        <input type="text" class="login-input input-border" placeholder="您的邮箱/手机号"/>
        <input type="password" class="login-input" placeholder="您的密码"/>
      </div>
      <div class="login-swift-wrapper" v-show="messageActivated">
        <input type="text" class="login-input input-border" placeholder="您的手机号"/>
        <input type="text" class="login-input input-border" placeholder="验证码"/>
        <input type="text" class="login-input" placeholder="手机验证码"/>
      </div>
      <span class="login-forgot">忘记密码？</span>
    </div>
    <div class="login-button-group">
      <div class="login-button">登录</div>
      <div class="signin-button">快速注册</div>
    </div>
    <div class="login-error" v-show="messageActivated">短信功能未开通</div>
  </div>
</template>

<script>
export default {
  name: 'Login',
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
    },
    handleMessageTypeClick () {
      this.normalActivated = false
      this.messageActivated = true
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.login-logo
    line-height: 1.5rem
    font-size: .45rem
    text-align: center
    color: $bgColor
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
  .login-swift
    .login-swift-wrapper
      width: 94%
      margin: 0 auto
      margin-top: .6rem
      border: .02rem solid #dadada
      border-radius: .12rem
      .login-input
        padding: 0 3%
        width: 94%
        line-height: .86rem
        font-family: '微软雅黑'
        font-size: .32rem
        color: #c7c7c7
      .input-border
        border-bottom: .02rem solid #dadada
    .login-forgot
      display: block
      margin: 0 auto
      width: 94%
      text-align: right
      font-size: .24rem
      color: #999999
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
  .login-error
    width: 94%
    margin: .3rem auto
    line-height: .36rem
    color: red
    font-size: .3rem
    text-align: center
</style>
