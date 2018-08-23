<template>
  <div class="answerAsk">
    <div class="answerAsk-btn">+&nbsp;&nbsp;&nbsp;我要提问</div>
  </div>
</template>

<script>
export default {
  name: 'answerAsk'
}
</script>

<style lang="stylus" scoped>
.answerAsk
  position: fixed
  overflow: hidden
  bottom: 0
  width: 100%
  height: 0
  padding-bottom: 16%
  background: #fff
  .answerAsk-btn
    width: 91%
    line-height: .6rem
    background: #ffa800
    margin: 3.3% auto
    text-align: center
    font-size: .3rem
    color: #fff
    border-radius: .08rem
</style>
