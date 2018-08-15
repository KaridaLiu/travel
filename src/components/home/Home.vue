<template>
  <div id="home">
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-icon></home-icon>
    <home-recommand></home-recommand>
    <home-footer></home-footer>
  </div>
</template>

<script>
import homeHeader from './components/Header'
import homeSwiper from './components/Swiper'
import homeIcon from './components/Icon'
import homeRecommand from './components/Recommand'
import homeFooter from './components/Footer'
export default{
  name: 'Home',
  components: {
    homeHeader,
    homeSwiper,
    homeIcon,
    homeRecommand,
    homeFooter
  }
}
</script>

<style></style>
