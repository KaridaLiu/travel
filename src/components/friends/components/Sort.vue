<template>
  <div class="friendsSort">
    <div class="friendsSort-wrapper">
      <div
        :class="['friendsSort-item', {'friendsSort-item-active': index === activeShow}]"
        v-for="(item, index) of itemList"
        @click="handleItemClick(index)"
        :key="index"
      >
        {{item}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'friendsSort',
  data () {
    return {
      itemList: ['热门结伴', '最新发表', '即将出发'],
      activeShow: 0
    }
  },
  methods: {
    handleItemClick (i) {
      this.activeShow = i
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
  .friendsSort
    position: absolute
    overflow: hidden
    top: 0
    left: 0
    right: 0
    bottom: 0
    background: rgba(0, 0, 0, .7)
    z-index: 1000
    .friendsSort-wrapper
      position: absolute
      width: 100%
      bottom: 0
      .friendsSort-item
        width: 100%
        line-height: .98rem
        background: #fff
        text-indent: .4rem
        border-bottom: .01rem solid #ccc
      .friendsSort-item-active
        color: $bgColor
</style>
