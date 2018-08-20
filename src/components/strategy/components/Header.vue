<template>
  <div id="strategyHeader">
    <div class="strategy-logo">嗡嗡嗡</div>
    <div class="strategy-link-wrapper">
      <div class="link-home">官网首页</div>
      <div class="link-search iconfont">&#xe651;</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'strategyHeader'
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
#strategyHeader
  color: $bgColor
  overflow: hidden
  .strategy-logo
    float: left
    line-height: .96rem
    width: 42%
    text-align: center
    font-size: .4rem
  .strategy-link-wrapper
    float: right
    margin-top: .3rem
    text-align: center
    .link-home
      display: inline-block
      width: 1.8rem
      border-right: .01rem solid #dadada
    .link-search
      display: inline-block
      width: .96rem
      line-height: .36rem
      font-size: .4rem
      vertical-align: middle
</style>
