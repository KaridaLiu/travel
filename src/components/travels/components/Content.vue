<template>
  <div class="travelsContent">
    <div class="content-wrapper">
      <div class="content-left">
        <p class="content-title">罗马余晖，从地中海心脏到绝美之城</p>
        <div class="content-msg">
          <div class="author-img">
            <img src="https://p3-q.mafengwo.net/s11/M00/A6/AE/wKgBEFsGqnCADMfqAACjA6-pWFw79.jpeg?imageMogr2%2Fthumbnail%2F%2148x48r%2Fgravity%2FCenter%2Fcrop%2F%2148x48%2Fquality%2F90">
          </div>
            NL30&nbsp;&nbsp;在<span class="author-place">意大利</span>
        </div>
        <div class="content-see">
          <span class="iconfont content-see-icon">&#xe6e4;</span>108051
        </div>
      </div>
      <div class="content-right">
        <img src="https://p1-q.mafengwo.net/s11/M00/27/E8/wKgBEFtdna6ALnGcABz5DFon05s85.jpeg?imageMogr2%2Fthumbnail%2F%21390x260r%2Fstrip%2Fgravity%2FCenter%2Fcrop%2F%21390x260%2Fquality%2F90">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'travelsContent'
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.content-wrapper
  width: 95%
  margin: 0 auto
  overflow: hidden
  .content-left
    float: left
    overflow: hidden
    width: 45%
    height: 0
    padding-bottom: 33.3%
    .content-title
      overflow: hidden
      width: 100%
      height: 0
      padding-bottom: 45%
      line-height: .38rem
      font-weight: bolder
      font-size: .3rem
      margin-top: .05rem
    .content-msg
      font-size: .25rem
      color: #999999
      .author-place
        color: $bgColor
      .author-img
        display: inline-block
        overflow: hidden
        width: .38rem
        height: 0
        padding-bottom: .38rem
        border-radius: 50%
        vertical-align: middle
        img
          width: 100%
    .content-see
      font-size: .25rem
      color: #999999
      .content-see-icon
        font-size: .3rem
        vertical-align: bottom
        color: #999999
  .content-right
    float: right
    width: 50%
    img
      width: 100%
</style>
