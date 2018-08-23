<template>
  <div class="answerHeader">
    <span class="iconfont answerHeader-icon">&#xe660;</span>
    嗡嗡嗡问答
  </div>
</template>

<script>
export default {
  name: 'answerHeader'
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.answerHeader
  overflow: hidden
  position: relative
  width: 100%
  height: 0
  padding-bottom: 16%
  line-height: 1.05rem
  text-align: center
  font-size: .3rem
  .answerHeader-icon
    position: absolute
    line-height: 1.05rem
    font-size: .4rem
    left: .3rem
    font-weight: bolder
    color: $bgColor
</style>
