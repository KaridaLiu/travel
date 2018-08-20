<template>
  <div id="home">
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-icon></home-icon>
    <home-recommand :recList="this.recommandList"></home-recommand>
    <home-footer></home-footer>
  </div>
</template>

<script>
import homeHeader from './components/Header'
import homeSwiper from './components/Swiper'
import homeIcon from './components/Icon'
import homeRecommand from './components/Recommand'
import homeFooter from './components/Footer'
import axios from 'axios'
export default{
  name: 'Home',
  components: {
    homeHeader,
    homeSwiper,
    homeIcon,
    homeRecommand,
    homeFooter
  },
  data () {
    return {
      recommandList: []
    }
  },
  methods: {
    getHomeInfoSucc (res) {
      this.recommandList = res.data.recommandList
    },
    getHomeInfo () {
      axios.get('/api/index.json').then(this.getHomeInfoSucc)
    }
  },
  mounted () {
    this.getHomeInfo()
  }
}
</script>

<style></style>
