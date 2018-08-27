<template>
  <div class="friendsBottom">
    <div class="friendsBottom-sort" @click="handleSortClick">排序</div>
    <div class="friendsBottom-team">发起结伴</div>
  </div>
</template>

<script>
export default {
  name: 'friendsBottom',
  methods: {
    handleSortClick () {
      this.$emit('show')
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.friendsBottom
  overflow: hidden
  position: fixed
  bottom: 0
  height: 0
  width: 100%
  padding-bottom: 16%
  background: #fff
  z-index: 999
  .friendsBottom-sort
    float: left
    width: 20%
    border: .01rem solid #999999
    line-height: .62rem
    margin: .19rem .2rem
    text-align: center
    color: #999999
  .friendsBottom-team
    float: right
    width: 70%
    line-height: .62rem
    background: $bgColor
    margin: .19rem 0
    margin-right: .2rem
    text-align: center
    color: #fff
    border-radius: .28rem
</style>
