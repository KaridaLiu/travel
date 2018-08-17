<template>
  <div id="search">
    <div class="search-header">
      <div class="search-left">
        <span class="iconfont search-left-icon">&#xe651;</span>
        <input class="search-left-input" type="text" placeholder="搜索目的地/攻略/游记/问答"/>
      </div>
      <div class="search-right">取消</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Search'
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.search-header
  overflow: hidden
  width: 96%
  margin: .1rem auto
  line-height: .6rem
  .search-left
    float: left
    width: 88%
    background: #ececec
    border-radius: .1rem
    .search-left-icon
      display: inline-block
      width: 9%
      height: .6rem
      text-align: center
      vertical-align: middle
    .search-left-input
      width: 87%
      background: none
      border: none
      autofocus: autofocus
  .search-right
    float: right
    width: 12%
    font-size: .28rem
    color: $bgColor
    text-align: center
</style>
