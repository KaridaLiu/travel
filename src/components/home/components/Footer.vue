<template>
  <div id="footer">
    <div class="btn-group">
      <div class="footer-btn">
        <div class="footer-btn-content"><span class="btn-text">PC版</span></div>
      </div>
      <div class="footer-btn">
        <div class="footer-btn-content"><span class="btn-text">用户反馈</span></div>
      </div>
      <div class="footer-btn">
        <div class="footer-btn-content"><span class="btn-text" style="color: #ff912b">加入我们</span></div>
      </div>
      <div class="footer-btn">
        <div class="footer-btn-content"><span class="btn-text">登录</span></div>
      </div>
    </div>
    <div class="web-message">HelloWorld!</div>
  </div>
</template>

<script>
export default {
  name: 'homeFooter'
}
</script>

<style lang="stylus" scoped>
#footer
  overflow: hidden
  width: 100%
  height: 0
  padding-bottom: 33%
  background: #2a282c
  .btn-group
    display: flex
    overflow: hidden
    width: 100%
    height: 0
    padding-bottom: 18%
    .footer-btn
      flex: 1
      padding-bottom: 18%
      .footer-btn-content
        position: relative
        width: 81%
        height: 0
        padding-bottom: 27%
        background: #403e42
        margin: 25% 10%
        color: #7d7b7e
        border-radius: .1rem
        font-size: .2rem
        .btn-text
          position: absolute
          display: block
          width: 100%
          top: 27%
          text-align: center
  .web-message
    width: 100%
    font-size: .4rem
    color: #ff912b
    text-align: center
</style>
