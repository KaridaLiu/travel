<template>
  <div class="strategy-details-header">
    <img src="https://n4-q.mafengwo.net/s11/M00/FF/96/wKgBEFtGxVCAC46mAANYM_6HY1M85.jpeg?imageMogr2%2Fthumbnail%2F%21750x690r%2Fgravity%2FCenter%2Fcrop%2F%21750x690%2Fquality%2F90">
    <div class="strategy-details-author">
      <div class="author-img">
        <img src="https://b3-q.mafengwo.net/s10/M00/7D/EF/wKgBZ1lDjJyABCyzAABJdWmGqoQ80.jpeg?imageMogr2%2Fthumbnail%2F%21120x120r%2Fgravity%2FCenter%2Fcrop%2F%21120x120%2Fquality%2F90"/>
      </div>
      <div class="author-name-wrapper">
        <p class="author-name">海豚哆哆旅游</p>
        <p class="author-desc">攻略作者</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'strategyDetailsHeader'
}
</script>

<style lang="stylus" scoped>
  .strategy-details-header
    position: relative
    box-sizing: border-box
    width: 100%
    height: 0
    padding-bottom: 90.6%
    border-right: .1rem solid yellow
    img
      width: 100%
    .strategy-details-author
      position: absolute
      width: 100%
      box-sizing: border-box
      padding: .6rem .45rem
      background: linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))
      bottom: 0
      left: 0
      color: #fff
      .author-img
        overflow: hidden
        display: inline-block
        width: .62rem
        height: .62rem
        border-radius: 50%
        vertical-align: top
        img
          width: 100%
      .author-name-wrapper
        display: inline-block
        .author-name
          line-height: .4rem
        .author-desc
          font-size: .2rem
</style>
