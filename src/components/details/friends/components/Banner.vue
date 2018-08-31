<template>
  <div class="FriendDetails-banner">
    <div class="banner-left">
      <div class="FriendDetails-title">川西之旅</div>
      <div class="FriendDetails-author">
        <div class="FriendDetails-author-img">
          <img src="https://p3-q.mafengwo.net/s7/M00/71/90/wKgB6lS6aoaAQDQhAAE53sZ2cgc47.jpeg?imageMogr2%2Fthumbnail%2F%21120x120r%2Fgravity%2FCenter%2Fcrop%2F%21120x120%2Fquality%2F90">
        </div>
        <div class="FriendDetails-author-wrapper">
          <p class="FriendDetails-author-name">遊魂 <span class="FriendDetails-author-level">Lv.18</span></p>
          <p class="FriendDetails-time"><i class="iconfont time-icon">&#xe605;</i>2018-07-19 17:20:25</p>
        </div>
      </div>
    </div>
    <div class="banner-right">
      <p>关注<span class="banner-right-number">11</span></p>
      <p>报名<span class="banner-right-number">10</span></p>
      <p>回复<span class="banner-right-number">30</span></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FriendDetailsBanner'
}
</script>

<style lang="stylus" scoped>
.FriendDetails-banner
  overflow: hidden
  width: 100%
  height: 0
  padding-bottom: 34.3%
  background: url('https://images.mafengwo.net/mobile/images/together/topNum-bg.jpg')
  background-size: cover
  color: #fff
  .banner-left
    float: left
    width: 70%
    padding: .4rem
    box-sizing: border-box
    .FriendDetails-title
      font-size: .4rem
      margin-bottom: .3rem
    .FriendDetails-author
      .FriendDetails-author-img
        overflow: hidden
        display: inline-block
        width: .6rem
        height: 0
        padding-bottom: .6rem
        border-radius: 50%
        border: .02rem solid #fff
        vertical-align: top
        img
          width: 100%
      .FriendDetails-author-wrapper
        display: inline-block
        margin-left: .05rem
        .FriendDetails-author-name
          font-size: .24rem
          margin-bottom: .15rem
          .FriendDetails-author-level
            color: #f39c11
        .FriendDetails-time
          font-size: .2rem
          color: #acb59b
          .time-icon
            font-size: .25rem
            margin-right: .05rem
  .banner-right
    float: right
    width: 30%
    padding: .4rem
    box-sizing: border-box
    p
      margin-bottom: .15rem
      font-size: .22rem
      .banner-right-number
        font-style: oblique
        font-size: .33rem
</style>
