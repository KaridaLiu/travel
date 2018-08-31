<template>
  <div class="FriendDetails">
    <common-header></common-header>
    <friend-details-banner></friend-details-banner>
    <friend-details-message></friend-details-message>
    <friend-details-content></friend-details-content>
    <friend-details-bottom></friend-details-bottom>
  </div>
</template>

<script>
import commonHeader from '../../common/Header'
import FriendDetailsBanner from './components/Banner'
import FriendDetailsMessage from './components/Message'
import FriendDetailsContent from './components/Content'
import FriendDetailsBottom from './components/Bottom'
export default {
  name: 'FriendDetails',
  components: {
    commonHeader,
    FriendDetailsBanner,
    FriendDetailsMessage,
    FriendDetailsContent,
    FriendDetailsBottom
  }
}
</script>

<style lang="stylus" scoped>
  .FriendDetails
    padding-bottom: 16%
</style>
