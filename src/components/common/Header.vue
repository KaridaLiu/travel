<template>
  <div id="strategyHeader">
    <router-link to="/" class="strategy-logo">嗡嗡嗡</router-link>
    <div class="strategy-link-wrapper">
      <router-link class="link-home" to="/">官网首页</router-link>
      <router-link class="link-search iconfont" to="/search">&#xe651;</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'commonHeader'
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
#strategyHeader
  overflow: hidden
  .strategy-logo
    float: left
    line-height: .96rem
    width: 42%
    text-align: center
    font-size: .4rem
    color: $bgColor
  .strategy-link-wrapper
    float: right
    margin-top: .3rem
    text-align: center
    .link-home
      display: inline-block
      width: 1.8rem
      border-right: .01rem solid #dadada
      color: $bgColor
    .link-search
      display: inline-block
      width: .96rem
      line-height: .36rem
      font-size: .4rem
      vertical-align: middle
      color: $bgColor
</style>
