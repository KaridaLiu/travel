<template>
  <div class="travelDetails-author">
    <div class="author-left">
      <div class="author-img">
        <img src="https://p4-q.mafengwo.net/s10/M00/45/6A/wKgBZ1iu7tiAAFiKABa7xdscMbE61.jpeg?imageMogr2%2Fthumbnail%2F%21120x120r%2Fgravity%2FCenter%2Fcrop%2F%21120x120%2Fquality%2F90">
      </div>
      <div class="author-message-wrapper">
        <span class="author-name">荒梁</span>
        <span class="author-level">Lv18</span>
        <div class="author-message">13篇游记，546粉丝</div>
      </div>
    </div>
    <div class="author-right">法罗群岛</div>
  </div>
</template>

<script>
export default {
  name: 'travelDetailsAuthor'
}
</script>

<style lang="stylus" scoped>
.travelDetails-author
  overflow: hidden
  width: 88%
  margin: 0 auto
  margin-top: .3rem
  margin-bottom: .5rem
  .author-left
    float: left
    width: 70%
    .author-img
      display: inline-block
      overflow: hidden
      width: 26%
      height: 0
      padding-bottom: 26%
      border-radius: 50%
      vertical-align: top
      img
        width: 100%
    .author-message-wrapper
      display: inline-block
      width: 65%
      box-sizing: border-box
      margin-left: .1rem
      margin-top: .1rem
      border-right: .02rem solid #dadada
      .author-name
        line-height: .55rem
        font-size: .28rem
        vertical-align: middle
        margin-right: .05rem
      .author-message
        font-size: .22rem
      .author-level
        border: .01rem solid #000
        background: yellow
        padding: 0 .05rem
        font-size: .22rem
        line-height: .55rem
  .author-right
    float: right
    width: 30%
    line-height: 1.02rem
    text-align: center
    font-size: .42rem
</style>
