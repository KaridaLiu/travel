<template>
  <router-link tag="div" class="strategy-mainpic" to="/strategyDetails/0001">
    <img class="mainpic-img" src="https://p1-q.mafengwo.net/s11/M00/95/0B/wKgBEFtYNMyAVyioAAuytLNi7n462.jpeg?imageMogr2%2Fthumbnail%2F%21750x300r%2Fgravity%2FCenter%2Fcrop%2F%21750x300%2Fquality%2F100">
    <div class="mainpic-title-wrapper">
      <p class="mainpic-title">泸沽湖写真旅拍攻略 | 10次环湖经验独立摄影师教你拍</p>
      <span class="iconfont mainpic-icon">&#xe65f;</span>
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'strategyMainpic'
}
</script>

<style lang="stylus" scoped>
.strategy-mainpic
  overflow: hidden
  position: relative
  width: 100%
  height: 0
  padding-bottom: 40%
  .mainpic-img
    width: 100%
  .mainpic-title-wrapper
    position: absolute
    overflow: hidden
    width: 100%
    bottom: 0
    color: #fff
    background: linear-gradient(to top, rgba(0, 0, 0, .8), rgba(0, 0, 0, 0))
    .mainpic-title
      float: left
      overflow: hidden
      line-height: .46rem
      width: 85%
      text-overflow: ellipsis
      white-space: nowrap
      line-height: .92rem
      font-size: .3rem
      text-indent: .25rem
    .mainpic-icon
      float: right
      line-height: .92rem
      font-size: .35rem
      width: 10%
      font-weight: bolder
</style>
