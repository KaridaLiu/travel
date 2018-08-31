<template>
  <div class="FriendDetails-bottom">
    <div class="bottom-wrapper">
      <button class="bottom-focus">关注</button>
    </div>
    <div class="bottom-wrapper">
      <button class="bottom-add">我要报名</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FriendDetailsBottom'
}
</script>

<style lang="stylus" scoped>
.FriendDetails-bottom
  overflow: hidden
  position: fixed
  display: flex
  width: 100%
  height: 0
  padding-bottom: 16%
  background: #fff
  bottom: 0
  left: 0
  right: 0
  .bottom-wrapper
    flex: 1
    .bottom-focus, .bottom-add
      width: 84%
      border-radius: .05rem
      height: .62rem
      margin: 6% 8%
      font-family: '微软雅黑'
      background: none
    .bottom-focus
      border: .02rem solid #f39f19
      color: #f39f19
    .bottom-add
      background: #f39f19
      color: #fff
</style>
