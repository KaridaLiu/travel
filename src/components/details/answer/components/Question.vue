<template>
  <div class="answerDetails-question">
    <span class="title-icon">问</span>
    <div class="question-title">国内有哪些冷门但有特色的旅游地点？</div>
    <p class="question-desc">
      其实我是刚从香港回来的，满打满算只有3天，然而令我没想到的是，没有去迪士尼和海洋公园，没有过多的买买买，竟然感觉1天已经把香港感知的差不多了。
      太平山顶，缆车排队的好多，燥热的环境让人没什么过多的感觉了。
      天星小轮，相比于香港还比较贵的交通，小轮的价钱竟然觉得是再便宜。
      海港城，大到逛不完，晕头转向的全是姑娘们扫货的身影。
      维港的夜景确实是美不胜收，然而霓虹之下也是寂寞...
      所以，想看看大家有没有什么不同角度的诠释，让我考虑下是否有生之年还想再去一次。
    </p>
    <div class="question-account"><b>1695000</b>浏览 · <b>425</b>回答 · <b>390</b>评论</div>
    <div class="question-message">
      <span class="question-message-left">
        <span class="iconfont icon-left">&#xe624;</span>中国
      </span>
      <span class="question-message-right">
        <div class="question-author-img">
          <img src="https://p1-q.mafengwo.net/s5/M00/D3/DD/wKgB3FICDKGAXveFAACvp4rBQP835.jpeg?imageMogr2%2Fthumbnail%2F%2190x90r%2Fgravity%2FCenter%2Fcrop%2F%2190x90%2Fquality%2F90">
        </div>
        <span class="question-author-name">shimeng</span>
        问于
        <span class="question-date">2016-06-03</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'answerDetailsQuestion'
}
</script>

<style lang="stylus" scoped>
.answerDetails-question
  position: relative
  padding: .3rem .4rem
  border-bottom: .02rem solid #dadada
  .question-title
    overflow: hidden
    margin-bottom: .25rem
    font-size: .38rem
    font-weight: bolder
  .title-icon
    position: absolute
    left: 0
    top: .3rem
    font-size: .2rem
    color: #fff
    background: #49d2ba
    padding: .06rem
    border-radius: 0 20% 50% 0
  .question-desc
    font-size: .25rem
    line-height: .36rem
  .question-account
    font-size: .25rem
    margin: .25rem 0
    b
      font-weight: bolder
  .question-message
    overflow: hidden
    .question-message-left
      float: left
      color: #49d2ba
      font-weight: bolder
      .icon-left
        vertical-align: middle
    .question-message-right
      float: right
      font-size: .25rem
      .question-author-img
        display: inline-block
        overflow: hidden
        width: .28rem
        height: 0
        padding-bottom: .28rem
        border-radius: 50%
        vertical-align: middle
        img
          width: 100%
      .question-author-name, .question-date
        font-size: .2rem
</style>
