<template>
  <div id="home">
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-icon></home-icon>
  </div>
</template>

<script>
import homeHeader from './components/Header'
import homeSwiper from './components/Swiper'
import homeIcon from './components/Icon'
export default{
  name: 'Home',
  components: {
    homeHeader,
    homeSwiper,
    homeIcon
  }
}
</script>

<style></style>
