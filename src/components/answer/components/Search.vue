<template>
  <div class="answerSearch border-bottom">
    <div class="answerSearch-wrapper">
      <span class="iconfont answerSearch-icon">&#xe651;</span>
      <input class="answerSearch-input" type="text">
    </div>
  </div>
</template>

<script>
export default {
  name: 'answerSearch'
}
</script>

<style lang="stylus" scoped>
.answerSearch
  overflow: hidden
  .answerSearch-wrapper
    overflow: hidden
    width: 91%
    height: 0
    padding-bottom: 10%
    background: #f0f0f0
    margin: .2rem auto
    border-radius: .1rem
    .answerSearch-input
      width: 85%
      line-height: .62rem
      background: none
      border: none
    .answerSearch-icon
      float: left
      line-height: .62rem
      margin: 0 .15rem
      font-size: .38rem
      color: #9b9b9b
</style>
