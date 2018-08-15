<template>
  <div id="recommand">
    <div class="recommand-header">
      <div class="recommand-header-content">
        <span class="iconfont title-raw">&#xe65f;</span>&nbsp;&nbsp;&nbsp;推荐攻略&nbsp;&nbsp;&nbsp;<span class="iconfont title-raw">&#xe660;</span>
      </div>
    </div>
    <div class="recommand-wrapper" v-for="item of recommandList" :key="item.id">
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
              <span class="author-name">{{item.message.authorName}}</span>
              <img class="author-pic" :src="item.message.authorImgUrl">
            </div>
            <div class="recommand-message" v-else>{{item.message.tagName}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'homeRecommand',
  data () {
    return {
      recommandList: [{
        id: '001',
        title: '旅居大理，生活在“理想生活”实验地',
        imgUrl: 'https://n2-q.mafengwo.net/s11/M00/2D/C8/wKgBEFty1OSAZRELAAMnog2DQ6M91.jpeg?imageMogr2%2Fthumbnail%2F%21288x218r%2Fgravity%2FCenter%2Fcrop%2F%21288x218%2Fquality%2F90',
        summary: '旅居半年 半年的旅居生活间，我陆陆续续写了一些 大理 的事情，丢在草稿箱里。我们总以为在一个地方呆了3、5天就足以写出洋洋洒洒的感想和评价，可我低头看看笔下的 大理 如此空无。 我想写写苍山洱海，而她们就像每日生活的背景幕布一样，无法用只言片语描述她们的美。 我想写写那些我每天混迹的餐厅，游荡的小店，逗留的农场。可我反问自己，我又能写出些什么跟攻略不同的事情呢？ 当你变得欲言又止时，或许是你对她认真了。 一个奇异世界的打开 生活了近半年，才开始了解 大理 。更准确的说，是生活在 大理 的人。 我所见到的 大理 属',
        watch: 17239,
        type: 'author',
        message: {
          authorName: '流浪的荷包蛋',
          authorImgUrl: 'https://p1-q.mafengwo.net/s11/M00/91/68/wKgBEFpx592AMeJsAAC3QhLbxWQ13.jpeg?imageMogr2%2Fthumbnail%2F%2148x48r%2Fgravity%2FCenter%2Fcrop%2F%2148x48%2Fquality%2F90'
        }
      }, {
        id: '002',
        title: '旅行中，朋友给你拍过哪些丑照？',
        imgUrl: 'https://b2-q.mafengwo.net/s10/M00/21/1B/wKgBZ1o7FjKAL1APAAG7EEjUl5I492.gif?imageMogr2%2Fthumbnail%2F%21288x218r%2Fgravity%2FCenter%2Fcrop%2F%21288x218%2Fquality%2F90',
        summary: '直男和塑料姐妹花，谁拍的更丑...',
        watch: 890090,
        type: 'tag',
        message: {
          tagName: '问答'
        }
      }, {
        id: '003',
        title: '在旅行中遇到另一半，是怎样的体验 ?',
        imgUrl: 'https://n1-q.mafengwo.net/s10/M00/F1/C8/wKgBZ1oCcKyAABjVAAGzlb7Rh0s27.jpeg?imageMogr2%2Fthumbnail%2F%21288x218r%2Fgravity%2FCenter%2Fcrop%2F%21288x218%2Fquality%2F90',
        summary: '我是在旅行中遇到另一半，并且成功收服他，拖进了婚姻的坟墓，正儿八经地从一个人的旅行变成两个人一辈子的旅行……',
        watch: 653775,
        type: 'tag',
        message: {
          tagName: '问答'
        }
      }, {
        id: '004',
        title: '#自驾#北戴河私藏了一座圣托里尼（网红打卡全搜罗-阿那亚、猫空、碧螺塔）',
        imgUrl: 'https://b4-q.mafengwo.net/s11/M00/F1/56/wKgBEFtYe3uADGIOABK_BYyM2BE73.jpeg?imageMogr2%2Fthumbnail%2F%21288x218r%2Fgravity%2FCenter%2Fcrop%2F%21288x218%2Fquality%2F90',
        summary: ' 写在之前 每年夏天，都习惯性与大海来一次亲密的接触。沙滩、热浪、比基尼，潜入海底像一尾鱼那样自由自在，躺在椰树下闭目养神，这才是夏天应有的样子。 而 北戴河 ，这座 北京 的后花园。因其地理方面的优越性，也成为首都人民赶海的首选地。 之前涉足 北戴河 应该有个五六次了吧，每次都是赶海玩沙吃海鲜，一成不变。 对我而言， 北戴河 一直都是这么表面化、粗糙化的存在，不曾把它与文艺沾上半丝联系。 直到最近突然发现了一些原来不曾到过的文艺景点，于是萌生了“重新认识 北戴河 ”的想法。 本次出行主基调为“ 北戴河 休闲游”',
        watch: 9536,
        type: 'author',
        message: {
          authorName: '行走的丁满',
          authorImgUrl: 'https://p3-q.mafengwo.net/s9/M00/10/E1/wKgBs1gHJ7CAPKQIAAKS9EWlXWg67.jpeg?imageMogr2%2Fthumbnail%2F%2148x48r%2Fgravity%2FCenter%2Fcrop%2F%2148x48%2Fquality%2F90'
        }
      }, {
        id: '005',
        title: '愿有人陪你颠沛流离，愿有人陪你看尽苍山洱海——6年之后二刷大理，洱海整治，却更加感受到海边宁静',
        imgUrl: 'https://b3-q.mafengwo.net/s11/M00/83/5F/wKgBEFsLkoGAHcbIAApoa_DSG0c85.jpeg?imageMogr2%2Fthumbnail%2F%21288x218r%2Fgravity%2FCenter%2Fcrop%2F%21288x218%2Fquality%2F90',
        summary: ' 这篇游记其实是带家人一起来玩的 但是由于一些因素就不发她们的照片了 先来个自我介绍吧😄 我是辣椒，喜欢玩，喜欢旅行，最理想的职业是旅行体验师，爱拍照，喜欢一切美的事物 💕关于大理 在我第一次12年游 大理 的时候，我觉得很美很舒服，特别适合带家人一起旅游都地方，特别适合放空心情，发呆，感受大自然，和当地文化。 当时是去了 大理 ， 丽江 和 香格里拉 ，相对来说 大理 更让我觉得舒服，那里都茶马古道，鱼鹰表演，海上泛舟，都让我记忆犹新，于是这一次，6年，再次去 大理 ，发现完全是不一样的感觉。很多地方，都快不认识了',
        watch: 4883,
        type: 'author',
        message: {
          authorName: '辣椒',
          authorImgUrl: 'https://n3-q.mafengwo.net/s11/M00/7E/0A/wKgBEFrDg8eATp36AADAOUNodrE95.jpeg?imageMogr2%2Fthumbnail%2F%2148x48r%2Fgravity%2FCenter%2Fcrop%2F%2148x48%2Fquality%2F90'
        }
      }, {
        id: '006',
        title: '整年都在旅行的人，经济来源是什么？',
        imgUrl: 'https://n3-q.mafengwo.net/s10/M00/B5/7F/wKgBZ1oLpouAB0nQAAKs5GcSBO864.jpeg?imageMogr2%2Fthumbnail%2F%21288x218r%2Fgravity%2FCenter%2Fcrop%2F%21288x218%2Fquality%2F90',
        summary: '上个周，我到达了人生中第37国——圣马力诺。',
        watch: 2173170,
        type: 'tag',
        message: {
          tagName: '问答'
        }
      }, {
        id: '007',
        title: '◇带着老爸去西藏◇人均6000搞定17天14晚◇',
        imgUrl: 'https://n3-q.mafengwo.net/s10/M00/45/C8/wKgBZ1k1KjuAT2PPAAOUDG71yq479.jpeg?imageMogr2%2Fthumbnail%2F%21288x218r%2Fgravity%2FCenter%2Fcrop%2F%21288x218%2Fquality%2F90',
        summary: '西藏一直是我爸退休后念念不忘、同时也是我很向往去的地方，自从参加工作后，除了公司旅游，法定国定假期之外，我已经没有超过5天的省外旅行过了。这次趁着我爸兴致高涨，也随便圆下自己的梦，就一同旅行了。我们决定5月之前去，因为淡季，各种出行住宿门票都还是便宜的，5月-10月是旺季，什么都贵，而且人也多起来了。我：是个不太爱运动的人，虽然是个办了健身卡的人，但也是三天打鱼两天收网那种，原以为花钱办卡会有动力，然并卵。。。。健身房老板今年开年就跑路了，没有运动场所，更没动力锻炼。...',
        watch: 61223,
        type: 'author',
        message: {
          authorName: '陈胖鱼发发发',
          authorImgUrl: 'https://p3-q.mafengwo.net/s11/M00/F0/E7/wKgBEFtddIqAQdO3AABD3NUeoss03.jpeg?imageMogr2%2Fthumbnail%2F%2148x48r%2Fgravity%2FCenter%2Fcrop%2F%2148x48%2Fquality%2F90'
        }
      }, {
        id: '008',
        title: '水陆空三栖玩转呼伦贝尔，乘坐低空飞机俯瞰草原',
        imgUrl: 'https://n1-q.mafengwo.net/s11/M00/5A/D5/wKgBEFtxSTGAIR7GAAI35tvF6jk74.jpeg?imageMogr2%2Fthumbnail%2F%21288x218r%2Fgravity%2FCenter%2Fcrop%2F%21288x218%2Fquality%2F90',
        summary: '一生一定要去一次的呼伦贝尔怎么玩？',
        watch: 1412,
        type: 'author',
        message: {
          authorName: '自由自在呼伦贝尔',
          authorImgUrl: 'https://n3-q.mafengwo.net/s11/M00/9C/02/wKgBEFrK1niAKrnWAAWP6MA2EqU06.jpeg?imageMogr2%2Fthumbnail%2F%2148x48r%2Fgravity%2FCenter%2Fcrop%2F%2148x48%2Fquality%2F90'
        }
      }, {
        id: '009',
        title: '大凉山系列之二    黄联土林',
        imgUrl: 'https://n2-q.mafengwo.net/s11/M00/5F/C4/wKgBEFrA2YOAGspRAAPSb_EENp826.jpeg?imageMogr2%2Fthumbnail%2F%21288x218r%2Fgravity%2FCenter%2Fcrop%2F%21288x218%2Fquality%2F90',
        summary: '黄联土林位于 四川 省 西昌 市南30公里的黄联关镇，土林分布面积约l.3平方公里。 土林是在特定的地质条件、气候环境条件下形成的一种特殊地貌景观，黄联土林拥有独特的观赏价值和地质科研价值。 进入土林景区，首先见到的是明镜般的金鸭塘，湖光山色甚美。 沿着金鸭塘边的卵石小径前行，一堵山墙迎面而立，穿过“山门”，再一个急转弯，眼前豁然开朗。 一片黄色土林，出现在山坳里。 黄联土林的质地是黄色沙砾岩。地质专家称，土林的形成最远可追溯到8千万年到1亿年前的冰河时期，冰水流动带来杂物，形成沙粒砾层。沙粒砾层成岩硬化后，受',
        watch: 1050,
        type: 'author',
        message: {
          authorName: 'clljy',
          authorImgUrl: 'https://p2-q.mafengwo.net/s11/M00/B4/4A/wKgBEFpHeHGADYLZAAYv41zDcxU52.jpeg?imageMogr2%2Fthumbnail%2F%2148x48r%2Fgravity%2FCenter%2Fcrop%2F%2148x48%2Fquality%2F90'
        }
      }, {
        id: '010',
        title: '笑妍日记之巴拉望——陪你化作鱼，潜入深海里】带着75岁外婆去潜水',
        imgUrl: 'https://n4-q.mafengwo.net/s11/M00/5D/D7/wKgBEFqVLXiATaQUAAuuLdFzzrw38.jpeg?imageMogr2%2Fthumbnail%2F%21288x218r%2Fgravity%2FCenter%2Fcrop%2F%21288x218%2Fquality%2F90',
        summary: '——你希望50年后的自己，是什么样子？ ——我希望，像我的外婆现在这样。 外婆出生在美丽的东钱湖畔； 但在那个封建守旧的年代，即使是长在湖边的女孩，依然不能肆意在湖中嬉戏，更别提学游泳了。 60多年过去，这个女孩长大了，脸上逐渐有了岁月的痕迹，也长出了花白的头发，成为了别人的长辈、我的外婆； 但她依然拥有一个健康的体魄，和无比年轻的心态，喜欢学习新鲜事物，尝试自己喜欢的事情。 出乎我们全家意料的是，在我读大学期间，有了比较多闲暇时间的她，竟然自学学会了游泳，圆了这个迟到的梦； 要知道那年外婆已经68岁了！！',
        watch: 19448,
        type: 'author',
        message: {
          authorName: '笑妍日记',
          authorImgUrl: 'https://n1-q.mafengwo.net/s11/M00/A8/A7/wKgBEFrBjBSAQ_AFAAC4GzBowrQ09.jpeg?imageMogr2%2Fthumbnail%2F%2148x48r%2Fgravity%2FCenter%2Fcrop%2F%2148x48%2Fquality%2F90'
        }
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
.recommand-header
  position: relative
  width: 100%
  height: 0
  padding-bottom: 9%
  line-height: 9%
  font-size: .28rem
  text-align: center
  background: #f8f8f8
  color: #999999
  .recommand-header-content
    position: absolute
    right: 0
    left: 0
    top: 50%
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
        font-size: .27rem
        display: -webkit-box
        -webkit-box-orient: vertical
        -webkit-line-clamp: 3
        line-height: .38rem
      .recommand-extra
        position: absolute
        height: .4rem
        width: 100%
        font-size: .25rem
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
