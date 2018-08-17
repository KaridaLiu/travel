<template>
  <div id="swift">
    <div class="login-swift-wrapper" v-show="showNormal">
      <input type="text" class="login-input input-border" placeholder="您的邮箱/手机号"/>
      <input type="password" class="login-input" placeholder="您的密码"/>
    </div>
    <div class="login-swift-wrapper" v-show="showMessage">
      <input type="text" class="login-input input-border" placeholder="您的手机号"/>
      <input type="text" class="login-input input-border" placeholder="验证码"/>
      <input type="text" class="login-input" placeholder="手机验证码"/>
    </div>
    <span class="login-forgot">忘记密码？</span>
    <div class="login-error" v-show="showMessage">短信功能未开通</div>
  </div>
</template>

<script>
export default {
  name: 'loginSwift',
  props: {
    type: String
  },
  computed: {
    showNormal () {
      return this.type === 'normal'
    },
    showMessage () {
      return this.type === 'message'
    }
  },
  mounted () {
    console.log(this.type)
  }
}
</script>

<style lang="stylus" scoped>
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
.login-error
  width: 94%
  margin: .3rem auto
  line-height: .36rem
  color: red
  font-size: .3rem
  text-align: center
</style>
