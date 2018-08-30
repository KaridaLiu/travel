<template>
  <div>
    <div class="travels-picture">
      <div class="travels-picture-date">
        <span class="date-day">{{day}}</span>
        <div class="date">
          <p>2018</p>
          <p>AUG</p>
        </div>
        <span class="date-super">蜂首纪念</span>
      </div>
      <div class="travels-wrapper">
        <swiper :options="swiperOption" ref="mySwiper" @slideChange="handleSwiperSlide">
          <swiper-slide
            v-for="item of travelsList"
            :key="item.id"
          >
            <router-link tag="div" :to="'/travelDetails/' + item.id" class="picture-wrapper">
              <div class="picture-img">
                <img :src="item.imgUrl">
              </div>
              <div class="picture-desc">
                <p class="picture-desc-title">{{item.title}}</p>
                <p class="picture-desc-summary">
                  我是<span>{{item.author}}</span>我在<span>{{item.place}}</span>
                </p>
              </div>
            </router-link>
          </swiper-slide>
        </swiper>
      </div>
    </div>
    <div class="picture-icons-wrapper">
      <div
        class="picture-icon"
        v-for="(item, index) of travelsList"
        :key="item.id"
        @click="handleIconClick(index)"
      >
        <img :src="item.iconUrl">
      </div>
    </div>
    <div class="icon-bars">
      <span class="icon-bar-wrapper" v-for="(item, index) of travelsList" :key="item.id">
        <span :class="{'icon-bar-active': index === barIndex}"></span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'travelsPicture',
  data () {
    return {
      barIndex: 0,
      progressArr: [],
      day: 17,
      swiperOption: {
        watchSlidesProgress: true,
        autoplay: true
      },
      travelsList: [{
        id: '001',
        day: 17,
        imgUrl: 'https://p2-q.mafengwo.net/s11/M00/68/76/wKgBEFt0_2CAb0XLAAMmtcm6V-E92.jpeg?imageView2%2F2%2Fw%2F604%2Fh%2F604%2Fq%2F90%7CimageMogr2%2Fstrip%2Fquality%2F90',
        title: '我和秘鲁有个小鹿乱撞的故事 ..',
        author: '六小雪CherylL',
        place: '秘鲁',
        iconUrl: 'https://p2-q.mafengwo.net/s11/M00/68/76/wKgBEFt0_2CAb0XLAAMmtcm6V-E92.jpeg?imageMogr2%2Fthumbnail%2F%21100x100r%2Fstrip%2Fgravity%2FCenter%2Fcrop%2F%21100x100%2Fquality%2F90'
      }, {
        id: '002',
        day: 18,
        imgUrl: 'https://p1-q.mafengwo.net/s11/M00/75/93/wKgBEFt1By6AKzc7AASVvBCoikI13.jpeg?imageView2%2F2%2Fw%2F604%2Fh%2F604%2Fq%2F90%7CimageMogr2%2Fstrip%2Fquality%2F90',
        title: '杭州漫游 | 一份淋漓尽致的夏..',
        author: '冯克雷德宇斯',
        place: '杭州',
        iconUrl: 'https://p1-q.mafengwo.net/s11/M00/75/93/wKgBEFt1By6AKzc7AASVvBCoikI13.jpeg?imageMogr2%2Fthumbnail%2F%21100x100r%2Fstrip%2Fgravity%2FCenter%2Fcrop%2F%21100x100%2Fquality%2F90'
      }, {
        id: '003',
        day: 19,
        imgUrl: 'https://p4-q.mafengwo.net/s11/M00/7D/69/wKgBEFt4OhWAELeCAAWYjG3jD9Q57.jpeg?imageView2%2F2%2Fw%2F604%2Fh%2F604%2Fq%2F90%7CimageMogr2%2Fstrip%2Fquality%2F90',
        title: '挤个周末去韩国 一趟只为满足..',
        author: '苑赵颖',
        place: '釜山',
        iconUrl: 'https://p4-q.mafengwo.net/s11/M00/7D/69/wKgBEFt4OhWAELeCAAWYjG3jD9Q57.jpeg?imageMogr2%2Fthumbnail%2F%21100x100r%2Fstrip%2Fgravity%2FCenter%2Fcrop%2F%21100x100%2Fquality%2F90'
      }, {
        id: '004',
        day: 20,
        imgUrl: 'https://p1-q.mafengwo.net/s11/M00/75/1D/wKgBEFt1BuyAaSLLAAO4RAaO7lA00.jpeg?imageView2%2F2%2Fw%2F604%2Fh%2F604%2Fq%2F90%7CimageMogr2%2Fstrip%2Fquality%2F90',
        title: '拜拜，关于突尼斯的种种偏见！',
        author: '榛美去',
        place: '突尼斯',
        iconUrl: 'https://p1-q.mafengwo.net/s11/M00/75/1D/wKgBEFt1BuyAaSLLAAO4RAaO7lA00.jpeg?imageMogr2%2Fthumbnail%2F%21100x100r%2Fstrip%2Fgravity%2FCenter%2Fcrop%2F%21100x100%2Fquality%2F90'
      }, {
        id: '005',
        day: 21,
        imgUrl: 'https://n4-q.mafengwo.net/s11/M00/EF/44/wKgBEFt6hvSAW_aPAANBWH18MlQ87.jpeg?imageView2%2F2%2Fw%2F604%2Fh%2F604%2Fq%2F90%7CimageMogr2%2Fstrip%2Fquality%2F90',
        title: '【漫画斐济】属于海洋的, 相似..',
        author: '欢儿欢－Queenio',
        place: '斐济',
        iconUrl: 'https://n4-q.mafengwo.net/s11/M00/EF/44/wKgBEFt6hvSAW_aPAANBWH18MlQ87.jpeg?imageMogr2%2Fthumbnail%2F%21100x100r%2Fstrip%2Fgravity%2FCenter%2Fcrop%2F%21100x100%2Fquality%2F90'
      }]
    }
  },
  methods: {
    handleIconClick (index) {
      this.swiper.slideTo(index, 1000, false)
      this.barIndex = index
    },
    handleSwiperSlide () {
      this.barIndex = this.swiper.activeIndex
      this.day = this.travelsList[this.swiper.activeIndex].day
    }
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.swiper
    },
    watchProgress () {
      return this.$refs.mySwiper.swiper.progress
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.travels-picture
  overflow: hidden
  width: 95%
  height: 0
  padding-bottom: 113%
  background: linear-gradient(to bottom left, #a3c56b, #60ae96, #309296)
  margin: 0 auto
  .travels-picture-date
    width: 60%
    margin: .4rem 0
    margin-left: .15rem
    color: #fff
    font-size: 0
    .date-day
      display: inline-block
      width: .72rem
      text-align: center
      font-size: .5rem
      border-left: .03rem solid #fff
      border-right: .03rem solid #fff
      line-height: .4rem
    .date
      display: inline-block
      text-align: center
      font-size: .22rem
      border-right: .03rem solid #fff
      width: .6rem
    .date-super
      display: inline-block
      width: 1.78rem
      font-size: .41rem
      line-height: .4rem
      text-align: center
      vertical-align: top
      border-right: .03rem solid #fff
  .travels-wrapper
    .picture-wrapper
      overflow: hidden
      margin: 0 auto
      width: 95%
      height: 0
      padding-bottom: 82%
      background: #fff
      border-radius: .08rem
      border: .01rem solid #999999
      .picture-img
        overflow: hidden
        width: 100%
        height: 0
        padding-bottom: 62%
        img
          width: 100%
      .picture-desc
        .picture-desc-title
          width: 100%
          text-align: center
          font-size: .32rem
          margin-top: .3rem
        .picture-desc-summary
          width: 100%
          text-align: center
          font-size: .25rem
          line-height: .6rem
          span
            color: $bgColor
.picture-icons-wrapper
  position: absolute
  margin-top: -14%
  width: 100%
  text-align: center
  .picture-icon
    overflow: hidden
    display: inline-block
    width: 13%
    height: 0
    padding-bottom: 13%
    border-radius: .1rem
    margin: 0 .5%
    img
      width: 100%
.icon-bars
  width: 100%
  text-align: center
  .icon-bar-wrapper
    display: inline-block
    width: 14%
    text-align: center
    .icon-bar-active
      overflow: hidden
      display: inline-block
      height: 0
      width: 60%
      padding-bottom: .06rem
      background: $bgColor
      vertical-align: top
</style>
