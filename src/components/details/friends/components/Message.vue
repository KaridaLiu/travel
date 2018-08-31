<template>
  <div class="FriendDetails-message">
    <div class="message-left">
      <p>
        <i class="iconfont time-icon">&#xe605;</i>
        <span class="message-title">出行时间</span>
        <span class="message-content">2018-10-13</span>
      </p>
      <p>
        <i class="iconfont person-icon">&#xe6b2;</i>
        <span class="message-title">联系方式</span>
        <span class="message-content">报名后可见</span>
      </p>
    </div>
    <div class="message-right">
      <p>
        <i class="iconfont day-icon">&#xe616;</i>
        <span class="message-title">出行天数</span>
        <span class="message-content">8天</span>
      </p>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FriendDetailsMessage'
}
</script>

<style lang="stylus" scoped>
  .FriendDetails-message
    padding: 0 .33rem
    padding-top: .33rem
    background: #f8f8f8
    border-bottom: .03rem solid #e5e5e5
    .message-left, .message-right
      display: inline-block
      vertical-align: top
      font-size: .25rem
    .message-left
      margin-right: .5rem
      p
        margin-bottom: .15rem
        .time-icon
          color: #9edef3
          vertical-align: middle
        .person-icon
          font-size: .4rem
          color: #9edfc3
          vertical-align: middle
        .message-title
          color: #a4a4a4
          margin-right: .12rem
    .message-right
      .day-icon
        color: #f5bd8b
        vertical-align: middle
      .message-title
        color: #a4a4a4
        margin-right: .12rem
</style>
