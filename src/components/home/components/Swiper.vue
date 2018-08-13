<template>
  <div class="wrapper">
    <swiper :options="swiperOption" ref="mySwiper">
        <!-- slides -->
        <swiper-slide v-for="item of swiperList" :key="item.id">
          <img class="swiper-img" :src="item.imgUrl">
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
  </div>
</template>

<script>
export default{
  name: 'homeSwiper',
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        },
        loop: true,
        autoplay: true
      },
      swiperList: [
        {
          id: '0001',
          imgUrl: 'https://n2-q.mafengwo.net/s11/M00/62/1D/wKgBEFttbsGAUUz7AAcM-Itw0BA78.jpeg?imageMogr2%2Fthumbnail%2F%21750x422r%2Fgravity%2FCenter%2Fcrop%2F%21750x422%2Fquality%2F90'
        }, {
          id: '0002',
          imgUrl: 'https://b3-q.mafengwo.net/s11/M00/12/FE/wKgBEFtsJ1eAOSQXAAjtZ7dPhTE19.jpeg?imageMogr2%2Fthumbnail%2F%21750x422r%2Fgravity%2FCenter%2Fcrop%2F%21750x422%2Fquality%2F90'
        }, {
          id: '0003',
          imgUrl: 'https://b3-q.mafengwo.net/s11/M00/11/DE/wKgBEFtsJnqAU2FsAAZVyso_u5g52.jpeg?imageMogr2%2Fthumbnail%2F%21750x422r%2Fgravity%2FCenter%2Fcrop%2F%21750x422%2Fquality%2F90'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.wrapper >>> .swiper-pagination-bullet
  width: .62rem
  height: .08rem
  border-radius: 0
  margin: 0
  background: #fff
  opacity: .6
.wrapper >>> .swiper-pagination-bullets
  bottom: 5px
.wrapper >>> .swiper-pagination-bullet-active
  background: $bgColor
  opacity: 1
.wrapper
  overflow: hidden
  width: 100%
  height: 0
  padding-bottom: 56%
  .swiper-img
    overflow: hidden
    width: 100%
</style>
