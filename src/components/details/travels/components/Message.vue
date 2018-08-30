<template>
  <div class="travelDetails-message">
    <div class="message-wrapper">
      <div class="message-title">我的出行信息</div>
      <div class="message-content">
        <p>
          <span class="message-content-left">
            <i class="iconfont time-icon">&#xe605;</i>
            出发时间&nbsp;2018-06-28
          </span>
          <span class="message-content-right">
            <i class="iconfont person-icon">&#xe6b2;</i>
            人物&nbsp;和朋友
          </span>
        </p>
        <p>
          <span class="message-content-left">
            <i class="iconfont money-icon">&#xe62b;</i>
            人均费用&nbsp;20000
          </span>
          <span class="message-content-right">
            <i class="iconfont day-icon">&#xe616;</i>
            出行天数&nbsp;10天
          </span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'travelDetailsMessage'
}
</script>

<style lang="stylus" scoped>
.travelDetails-message
  .message-wrapper
    width: 88%
    margin: .3rem auto
    border: .01rem solid #dadada
    .message-title
      position: relative
      display: inline-block
      top: -.15rem
      left: .3rem
      font-size: .2rem
      background: #fff
      padding: .02rem
      color: #999
    .message-content
      padding: .1rem .3rem
      font-size: .24rem
      color: #666
      p
        margin-bottom: .2rem
        .time-icon
          font-size: .28rem
        .person-icon
          font-size: .36rem
          vertical-align: middle
        .money-icon
          font-size: .28rem
        .day-icon
          font-size: .25rem
        .message-content-left
          display: inline-block
          width: 60%
</style>
