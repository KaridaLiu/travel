<template>
  <div class="friends">
    <common-header></common-header>
    <friends-picture></friends-picture>
    <friends-content></friends-content>
    <friends-bottom @show="handleSortShow"></friends-bottom>
    <friends-sort v-show="sortShow"></friends-sort>
  </div>
</template>

<script>
import commonHeader from '../common/Header'
import friendsPicture from './components/Picture'
import friendsContent from './components/Content'
import friendsBottom from './components/Bottom'
import friendsSort from './components/Sort'
export default {
  name: 'Friends',
  components: {
    commonHeader,
    friendsPicture,
    friendsContent,
    friendsBottom,
    friendsSort
  },
  data () {
    return {
      sortShow: false
    }
  },
  methods: {
    handleSortShow () {
      this.sortShow = true
    }
  }
}
</script>

<style lang="stylus" scoped>
  .friends
    padding-bottom: 16%
</style>
