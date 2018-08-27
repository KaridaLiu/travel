<template>
  <div class="friendsContent">
    <div
      class="friendsContent-wrapper"
      v-for="item of friendsList"
      :key="item.id"
    >
      <div class="friendsContent-top">
        <img :src="item.imgUrl">
        <div class="friendsContent-title">
          <p>{{item.titlePlace}}</p>
          <p>{{item.titleDays}}</p>
        </div>
        <div class="friendsContent-time">{{item.time}}&nbsp;出发</div>
      </div>
      <div class="friendsContent-middle">
        <img :src="item.authorImg">
      </div>
      <div class="friendsContent-bottom">
        <div class="friendsContent-author">{{item.authorName}}</div>
        <div class="friendsContent-item">
          <span class="friendsContent-item-lv">lv{{item.level}}</span>&nbsp;
          {{item.authorPlace}}
        </div>
        <div class="friendsContent-summary">
          {{item.summary}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'friendsContent',
  data () {
    return {
      friendsList: [{
        id: '001',
        titlePlace: '马来西亚',
        titleDays: '3-7天',
        time: '10月01日',
        imgUrl: 'https://p4-q.mafengwo.net/s5/M00/3C/9C/wKgB3FHX5YSAeAFcAAPO1pT8C8Y58.jpeg?imageMogr2%2Fthumbnail%2F%21200x130r%2Fgravity%2FCenter%2Fcrop%2F%21200x130%2Fquality%2F100',
        authorName: '饶饶饶饶你最花',
        authorImg: 'https://b2-q.mafengwo.net/s9/M00/CC/A0/wKgBs1aVx1OAVtPkAABkOeuOQfw78.jpeg?imageMogr2%2Fthumbnail%2F%21120x120r%2Fgravity%2FCenter%2Fcrop%2F%21120x120%2Fquality%2F90',
        authorPlace: '上海',
        level: '12',
        summary: '国庆假期玩转马来西亚，1号上海飞吉隆坡 逛吃两天，3号去仙本...'
      }, {
        id: '002',
        titlePlace: '乞力马扎罗',
        titleDays: '7-15天',
        time: '02月05日',
        imgUrl: 'https://b4-q.mafengwo.net/s6/M00/A6/E6/wKgB4lMXAWyAcFnwAAFPH7Z1rX486.jpeg?imageMogr2%2Fthumbnail%2F%21200x130r%2Fgravity%2FCenter%2Fcrop%2F%21200x130%2Fquality%2F100',
        authorName: 'adviser',
        authorImg: 'https://b2-q.mafengwo.net/s7/M00/C1/7D/wKgB6lSJRG6AYSQmAACx5Lu0-zQ75.jpeg?imageMogr2%2Fthumbnail%2F%21120x120r%2Fgravity%2FCenter%2Fcrop%2F%21120x120%2Fquality%2F90',
        authorPlace: '上海',
        level: '18',
        summary: '2019年春节 坦桑尼亚11日游，纯玩9天乞力马扎罗+塔兰吉雷+曼...'
      }, {
        id: '003',
        titlePlace: '拉萨|香格里拉|亚丁|色达',
        titleDays: '7-15天',
        time: '08月25日',
        imgUrl: 'https://p3-q.mafengwo.net/s7/M00/9D/13/wKgB6lSosqaAWed_AAYcHZfMZD0122.png?imageMogr2%2Fthumbnail%2F%21200x130r%2Fgravity%2FCenter%2Fcrop%2F%21200x130%2Fquality%2F100',
        authorName: '半侧阳光,半缕悠然',
        authorImg: 'https://p4-q.mafengwo.net/s8/M00/26/FC/wKgBpVU8i_qAFn3cAABUUE3NXCI12.jpeg?imageMogr2%2Fthumbnail%2F%21120x120r%2Fgravity%2FCenter%2Fcrop%2F%21120x120%2Fquality%2F90',
        authorPlace: '山水甲天下',
        level: '12',
        summary: '一直有一个西藏梦，今年终于有了机会可以一路走走停停进藏，...'
      }, {
        id: '004',
        titlePlace: '奥地利|匈牙利|捷克',
        titleDays: '7-15天',
        time: '09月30日',
        imgUrl: 'https://p4-q.mafengwo.net/s9/M00/06/2F/wKgBs1hCkESAFWfbACOsb6XXHm830.jpeg?imageMogr2%2Fthumbnail%2F%21200x130r%2Fgravity%2FCenter%2Fcrop%2F%21200x130%2Fquality%2F100',
        authorName: '北斗星云_XM',
        authorImg: 'https://p4-q.mafengwo.net/s9/M00/2E/D9/wKgBs1gQbLKAIEhCAABvUr2tz5474.jpeg?imageMogr2%2Fthumbnail%2F%21120x120r%2Fgravity%2FCenter%2Fcrop%2F%21120x120%2Fquality%2F90',
        authorPlace: '30',
        level: '上海',
        summary: '你可曾在黎明是走过那14世纪的查理大桥，你可曾聆听过李斯特...'
      }, {
        id: '005',
        titlePlace: '冲绳',
        titleDays: '3-7天',
        time: '09月16日',
        imgUrl: 'https://b4-q.mafengwo.net/s7/M00/23/9D/wKgB6lP0VhKAWe8wAAPJ4R3N9Zc89.jpeg?imageMogr2%2Fthumbnail%2F%21200x130r%2Fgravity%2FCenter%2Fcrop%2F%21200x130%2Fquality%2F100',
        authorName: 'Cochin_gu',
        authorImg: 'https://b3-q.mafengwo.net/s10/M00/8B/8E/wKgBZ1nwtI2ACzoSAANOMldZkaY18.jpeg?imageMogr2%2Fthumbnail%2F%21120x120r%2Fgravity%2FCenter%2Fcrop%2F%21120x120%2Fquality%2F90',
        authorPlace: '上海',
        level: '14',
        summary: '上海小白领一枚，热爱旅行，海外自由行经验丰富日语2级，之...'
      }, {
        id: '006',
        titlePlace: '阿根廷|南极洲|南极半岛',
        titleDays: '7-15天',
        time: '01月28日',
        imgUrl: 'https://p2-q.mafengwo.net/s9/M00/10/90/wKgBs1g1z_uAcMalAAdPuLHfk5o88.jpeg?imageMogr2%2Fthumbnail%2F%21200x130r%2Fgravity%2FCenter%2Fcrop%2F%21200x130%2Fquality%2F100',
        authorName: '神仙',
        authorImg: 'https://n3-q.mafengwo.net/s1/M00/00/BC/wKgBm02Ob0_zmV_kAAAjsokxJ3Q51.jpeg?imageMogr2%2Fthumbnail%2F%21120x120r%2Fgravity%2FCenter%2Fcrop%2F%21120x120%2Fquality%2F90',
        authorPlace: '北京',
        level: '23',
        summary: '【情况说明】预订了2019年春节期间的南极半岛11天行期的行程...'
      }, {
        id: '007',
        titlePlace: '捷克|奥地利|慕尼黑',
        titleDays: '7-15天',
        time: '10月01日',
        imgUrl: 'https://n3-q.mafengwo.net/s7/M00/9E/4E/wKgB6lTJ7ZiANWlWAARS81EK1-072.jpeg?imageMogr2%2Fthumbnail%2F%21200x130r%2Fgravity%2FCenter%2Fcrop%2F%21200x130%2Fquality%2F100',
        authorName: '铃铛',
        authorImg: 'https://p2-q.mafengwo.net/s8/M00/BF/75/wKgBpVW3fBmABdZzAAMZZKC7Yc849.jpeg?imageMogr2%2Fthumbnail%2F%21120x120r%2Fgravity%2FCenter%2Fcrop%2F%21120x120%2Fquality%2F90',
        authorPlace: '北京',
        level: '18',
        summary: '90后北京女孩，2个妹子，北京出发，性格开朗随和，比较喜欢外...'
      }, {
        id: '008',
        titlePlace: '圣彼得堡',
        titleDays: '3-7天',
        time: '09月29日',
        imgUrl: 'https://n2-q.mafengwo.net/s5/M00/45/8C/wKgB3FHCt4-AciesAAEOm5a7_5Q66.jpeg?imageMogr2%2Fthumbnail%2F%21200x130r%2Fgravity%2FCenter%2Fcrop%2F%21200x130%2Fquality%2F100',
        authorName: 'Dobby',
        authorImg: 'https://n1-q.mafengwo.net/s9/M00/22/3E/wKgBs1g7-LCAE00YAAO4XGUyVXE06.jpeg?imageMogr2%2Fthumbnail%2F%21120x120r%2Fgravity%2FCenter%2Fcrop%2F%21120x120%2Fquality%2F90',
        authorPlace: '广州',
        level: '8',
        summary: '换了新公司没有年假，只能蹭着十一假期出去溜达溜达~去圣彼...'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
.friendsContent-wrapper
  position: relative
  display: inline-block
  width: 45%
  margin-top: .2rem
  margin-left: .2rem
  .friendsContent-top, .friendsContent-bottom
    overflow: hidden
    position: relative
    width: 100%
    height: 0
    padding-bottom: 65%
    img
      width: 100%
    .friendsContent-title
      position: absolute
      top: 0
      left: 0
      padding: .15rem
      color: #fff
      line-height: .6rem
      font-size: .33rem
      p
        text-overflow: ellipsis
        white-space: nowrap
        overflow: hidden
        width: 2.6rem
        text-shadow: 0 .04rem .08rem rgba(0, 0, 0, 0.5)
    .friendsContent-time
      position: absolute
      width: 66%
      padding: 0 3%
      right: 0
      bottom: .15rem
      color: #fff
      background: #41c6ad
      text-align: center
      line-height: .52rem
      font-size: .26rem
      border-radius: .26rem 0 0 .26rem
  .friendsContent-middle
    overflow: hidden
    position: absolute
    width: 21%
    height: 0
    padding-bottom: 21%
    border-radius: 50%
    top: 43%
    z-index: 999
    left: .3rem
    border: .01rem solid #fff
    img
      width: 100%
  .friendsContent-bottom
    border-right: .01rem solid #e6e5e5
    border-bottom: .01rem solid #e6e5e5
    border-left: .01rem solid #e6e5e5
    .friendsContent-author
      font-size: .28rem
      margin: 0 .2rem
      margin-top: .5rem
    .friendsContent-item
      font-size: .23rem
      margin: .1rem .2rem
      .friendsContent-item-lv
        color: #fa9f00
    .friendsContent-summary
      overflow: hidden
      font-size: .22rem
      margin: .1rem .2rem
      line-height: .26rem
      height: 0
      padding-bottom: 17%
      color: #a4a4a4
</style>
