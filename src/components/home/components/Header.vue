<template>
  <div id="header">
    <div class="header-logo">嗡嗡嗡</div>
    <div class="header-search">
      搜索目的地/攻略/游记
      <span class="search-icon iconfont">&#xe651;</span>
    </div>
    <div class="header-login">登录</div>
  </div>
</template>

<script>
export default{
  name: 'homeHeader'
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  #header
    display: flex
    font-size: .28rem
    width: 100%
    height: 1rem
    background-color: #fff
    .header-logo
      float: left
      width: 1.8rem
      margin: .35rem .1rem
      color: $bgColor
      text-align: center
    .header-login
      float: right
      margin: .35rem .1rem
      color: $bgColor
    .header-search
      position: relative
      flex: 1
      height: .5rem
      background-color: #f3f3f3
      border-radius: .18rem
      margin: .25rem .1rem
      color: #757575
      padding: 0 .15rem
      line-height: .5rem
      font-size: .23rem
      .search-icon
        position: absolute
        right: .15rem
        font-weight: bold
        color: #b8b8b8
</style>
