<template>
  <div id="recommand">
    <div class="recommand-header">
      <span class="iconfont title-raw">&#xe65f;</span>&nbsp;&nbsp;&nbsp;推荐攻略&nbsp;&nbsp;&nbsp;<span class="iconfont title-raw">&#xe660;</span>
    </div>
    <div class="recommand-wrapper" v-for="item of this.recList" :key="item.id">
      <div class="recommand-title-wrapper">
        <div class="recommand-title">{{item.title}}</div>
        <img v-if="item.id === '001'" class="recommand-title-img" src="https://n1-q.mafengwo.net/s9/M00/FB/0C/wKgBs1diFRKAMMptAAAIpExA3RM367.png">
      </div>
      <div class="recommand-content-wrapper">
        <div class="recommand-img">
          <img class="recommand-img-content" :src="item.imgUrl">
        </div>
        <div class="recommand-summary-wrapper">
          <div class="recommand-summary">
            {{item.summary}}
          </div>
          <div class="recommand-extra">{{item.watch}}浏览
            <div class="recommand-message" v-if="item.type === 'author'">
              <span class="author-name">{{item.message.name}}</span>
              <img class="author-pic" :src="item.message.imgUrl">
            </div>
            <div class="recommand-message" v-else>{{item.message.name}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'homeRecommand',
  props: {
    recList: Array
  },
  mounted () {
    console.log(this.recList)
  }
}
</script>

<style lang="stylus" scoped>
.recommand-header
  line-height: .66rem
  font-size: .28rem
  text-align: center
  background: #f8f8f8
  color: #999999
  .title-raw
    font-size: .25rem
.recommand-wrapper
  .recommand-title-wrapper
    position: relative
    overflow: hidden
    width: 100%
    .recommand-title
      font-size: .36rem
      padding: .2rem 1.3rem 0 .3rem
      line-height: .48rem
      overflow: hidden
      display: -webkit-box
      -webkit-box-orient: vertical
      -webkit-line-clamp: 2
    .recommand-title-img
      position: absolute
      display: inline-block
      width: .8rem
      height: .42rem
      right: 0
      top: .2rem
  .recommand-content-wrapper
    overflow: hidden
    width: 100%
    height: 0
    padding-bottom: 31%
    .recommand-img
      overflow: hidden
      float: left
      width: 35%
      height: 0
      padding-bottom: 24%
      margin: .2rem 0 .25rem .3rem
      .recommand-img-content
        width: 100%
    .recommand-summary-wrapper
      position: relative
      overflow: hidden
      float: right
      width: 53%
      height: 0
      padding-bottom: 24%
      color: #999999
      margin: .2rem .3rem .25rem .1rem
      .recommand-summary
        overflow: hidden
        font-size: .25rem
        display: -webkit-box
        -webkit-box-orient: vertical
        -webkit-line-clamp: 3
        line-height: .33rem
      .recommand-extra
        position: absolute
        height: .4rem
        width: 100%
        font-size: .2rem
        line-height: .4rem
        bottom: .05rem
        .recommand-message
          float: right
          .author-pic
            display: inline-block
            border-radius: 50%
            height: .4rem
            width: .4rem
            vertical-align: middle
</style>
