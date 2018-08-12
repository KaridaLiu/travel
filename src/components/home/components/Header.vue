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
  #header
    display: flex
    font-size: .15rem
    width: 100%
    height: .64rem
    background-color: #fff
    .header-logo
      float: left
      margin: .22rem .1rem
      color: #ffa800
    .header-login
      float: right
      margin: .22rem .1rem
      color: #ffa800
    .header-search
      position: relative
      flex: 1
      height: .2rem
      background-color: #f3f3f3
      border-radius: .18rem
      margin: .17rem .1rem
      color: #d1d1d1
      padding: .05rem .15rem
      line-height: .2rem
      .search-icon
        position: absolute
        right: .15rem
        top: .05rem
        font-weight: bord
        font-size: .18rem
</style>
