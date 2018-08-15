<template>
  <div id="icons">
    <div class="icon" v-for="item of iconList" :key="item.id">
      <div class="icon-img">
        <img class="icon-content" :src="item.iconUrl">
      </div>
      <div class="icon-desc" :style="{color: item.iconColor}">{{item.iconDesc}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'homeIcon',
  data: function () {
    return {
      iconList: [{
        id: 'img001',
        iconUrl: '../../../../static/img/zhaogonglue.png',
        iconDesc: '找攻略',
        iconColor: '#ff9d00'
      }, {
        id: 'img002',
        iconUrl: '../../../../static/img/kanyouji.png',
        iconDesc: '看游记',
        iconColor: '#ffca2b'
      }, {
        id: 'img003',
        iconUrl: '../../../../static/img/wendaren.png',
        iconDesc: '问达人',
        iconColor: '#52dac0'
      }, {
        id: 'img004',
        iconUrl: '../../../../static/img/jieban.png',
        iconDesc: '结伴',
        iconColor: '#f94a87'
      }, {
        id: 'img005',
        iconUrl: '../../../../static/img/jiudian.png',
        iconDesc: '酒店',
        iconColor: '#32a2f1'
      }, {
        id: 'img006',
        iconUrl: '../../../../static/img/lvxingshangcheng.png',
        iconDesc: '旅行商城',
        iconColor: '#fd4e4e'
      }, {
        id: 'img007',
        iconUrl: '../../../../static/img/jipiao.png',
        iconDesc: '机票',
        iconColor: '#99d02e'
      }, {
        id: 'img008',
        iconUrl: '../../../../static/img/dangdiwanle.png',
        iconDesc: '当地玩乐',
        iconColor: '#d174f0'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
#icons
  overflow: hidden
  width: 96%
  height: 0
  padding-bottom: 50%
  margin: 4% 2%
  .icon
    overflow: hidden
    position: relative
    display: inline-block
    width: 25%
    height: 0
    padding-bottom: 23%
    margin-bottom: 1%
    .icon-img
      position: absolute
      top: 13%
      right: 0
      left: 0
      .icon-content
        display: block
        margin: 0 auto
        width: 50%
    .icon-desc
      position: absolute
      width: 100%
      bottom: 0
      right: 0
      left: 0
      font-size: .3rem
      text-align: center
</style>
