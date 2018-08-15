<template>
  <div id="recommand">
    <div class="recommand-header">
      <div class="recommand-header-content">
        <span class="iconfont title-raw">&#xe65f;</span>&nbsp;&nbsp;&nbsp;推荐攻略&nbsp;&nbsp;&nbsp;<span class="iconfont title-raw">&#xe660;</span>
      </div>
    </div>
    <div class="recommand-wrapper">
      <div class="recommand-title-wrapper">
        <div class="recommand-title">泰拳、潜水、冲浪…这是我去过N次的普吉岛</div>
        <img class="recommand-title-img" src="https://n1-q.mafengwo.net/s9/M00/FB/0C/wKgBs1diFRKAMMptAAAIpExA3RM367.png" alt="">
      </div>
      <div class="recommand-content-wrapper">
        <div class="recommand-img">
          <img class="recommand-img-content" src="https://p3-q.mafengwo.net/s11/M00/62/41/wKgBEFttbseAI1HeAANRrxezwjM19.jpeg?imageMogr2%2Fthumbnail%2F%21288x218r%2Fgravity%2FCenter%2Fcrop%2F%21288x218%2Fquality%2F90">
        </div>
        <div class="recommand-summary-wrapper">
          <div class="recommand-summary">
            PHUKET的艳 阳高 照、大雨倾盆、日出东方、余晖西下我一个也没有错过， 打过拳也跳过海， 吃过载人的海鲜大餐也发现了 当地最美味的地道米粉， 骑着摩托从大雨走到晴天再走到大雨，也为躲避警察罚款东躲 西藏 ， 这个城市我熟悉每一个海滩，却只钟爱其中一个， 我有很多很多故事， 你听吗？ 这次我要打破以往，不做流水账 这次LZ不再是记录和叙述的讲经过，因为那可能要讲上几天几夜，你们听来也无趣，我只告诉你我想告诉你的部分，如果喜欢请点右上方的“顶”支持一下LZ ，如果不喜欢就请留下“你除了美，写的是什么玩意”然后仙仙的离去
          </div>
          <div class="recommand-extra">22859浏览
            <div class="recommand-message">
              <span class="author-name">helloKitty</span>
              <img class="author-pic" src="https://p2-q.mafengwo.net/s11/M00/40/EA/wKgBEFtNWB-AF782AACBCz57XQw23.jpeg?imageMogr2%2Fthumbnail%2F%2148x48r%2Fgravity%2FCenter%2Fcrop%2F%2148x48%2Fquality%2F90" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'homeRecommand'
}
</script>

<style lang="stylus" scoped>
.recommand-header
  position: relative
  width: 100%
  height: 0
  padding-bottom: 9%
  line-height: 9%
  font-size: .28rem
  text-align: center
  background: #f8f8f8
  color: #999999
  .recommand-header-content
    position: absolute
    right: 0
    left: 0
    top: 50%
  .title-raw
    font-size: .25rem
.recommand-wrapper
  .recommand-title-wrapper
    position: relative
    overflow: hidden
    width: 100%
    .recommand-title
      font-size: .4rem
      padding: .2rem 1.3rem 0 .3rem
      line-height: .48rem
      overflow: hidden
      display: -webkit-box
      -webkit-box-orient: vertical
      -webkit-line-clamp: 2
    .recommand-title-img
      position: absolute
      display: inline-block
      width: .8rem
      height: .42rem
      right: 0
      top: .2rem
  .recommand-content-wrapper
    overflow: hidden
    width: 100%
    height: 0
    padding-bottom: 31%
    .recommand-img
      overflow: hidden
      float: left
      width: 35%
      height: 0
      padding-bottom: 24%
      margin: .25rem 0 .25rem .3rem
      .recommand-img-content
        width: 100%
    .recommand-summary-wrapper
      position: relative
      overflow: hidden
      float: right
      width: 53%
      height: 0
      padding-bottom: 24%
      color: #999999
      margin: .25rem .3rem .25rem .1rem
      .recommand-summary
        overflow: hidden
        font-size: .27rem
        display: -webkit-box
        -webkit-box-orient: vertical
        -webkit-line-clamp: 3
        line-height: .38rem
      .recommand-extra
        position: absolute
        height: .4rem
        width: 100%
        font-size: .25rem
        line-height: .4rem
        bottom: .05rem
        .recommand-message
          float: right
          .author-pic
            display: inline-block
            border-radius: 50%
            height: .4rem
            width: .4rem
            vertical-align: middle
</style>
