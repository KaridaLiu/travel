<template>
  <div class="strategy-recommand">
    <div class="strategy-title-wrapper">
      <div class="strategy-title">热门目的地</div>
      <div class="strategy-desc">最受大家喜欢的目的地推荐</div>
    </div>
    <div class="strategy-type-wrapper border-top">
      <ul class="strategy-types" @click="handleStrTypeClick">
        <li
          v-for="(item, index) of List"
          :class="['strategy-type', {'right-border': index !== (List.length-1)}]"
          :key="item.id"
        >
          <span :class="{'type-active': type === item.type}" v-html="item.type"></span>
        </li>
      </ul>
    </div>
    <div
      class='strategy-items'
      v-for="list of List"
      v-show="list.type === type"
      :key="list.id"
    >
      <div
        class='strategy-item-wrapper'
        v-for='item of list.content'
        :key="item.id"
      >
        <div class='strategy-item-img'>
          <img :src='item.imgUrl'>
        </div>
        <div class='strategy-item-text'>{{item.city}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'strategyRecommand',
  props: {
    List: Array
  },
  data () {
    return {
      type: ''
    }
  },
  methods: {
    handleStrTypeClick (el) {
      this.type = el.srcElement.innerHTML
    }
  },
  watch: {
    List () {
      this.type = this.List[0].type
    }
  }
}
</script>

<style lang='stylus' scoped>
@import '~styles/varibles.styl'
.strategy-title-wrapper
  padding: .4rem 0
  .strategy-title
    line-height: .7rem
    font-size: .33rem
    text-align: center
  .strategy-desc
    font-size: .22rem
    text-align: center
    color: #999999
.strategy-type-wrapper
  overflow: scroll
  width: 100%
  .strategy-types
    white-space: nowrap
    .strategy-type
      display: inline-block
      text-align: center
      margin: .3rem 0
      padding: 0 .2rem
      .type-active
        color: $bgColor
        border-bottom: .05rem solid $bgColor
    .right-border
      border-right: .01rem solid #dadada
.strategy-items
  overflow: hidden
  height: 0
  padding-bottom: 4.4rem
  font-size: 0
  margin-bottom: .4rem
  .strategy-item-wrapper
    overflow: hidden
    display: inline-block
    width: 33.3%
    height: 0
    padding-bottom: 2.2rem
    .strategy-item-img
      overflow: hidden
      margin: .15rem auto
      width: 1.76rem
      padding-bottom: 1.46rem
      height: 0
      img
        width: 100%
    .strategy-item-text
      text-align: center
      font-size: .25rem
</style>
