<template>
  <div class="travelDetails">
    <common-header></common-header>
    <travel-details-memorial></travel-details-memorial>
    <travel-details-banner></travel-details-banner>
    <travel-details-title></travel-details-title>
    <travel-details-author></travel-details-author>
    <travel-details-message></travel-details-message>
    <travel-details-content></travel-details-content>
  </div>
</template>

<script>
import commonHeader from '../../common/Header'
import travelDetailsMemorial from './components/Memorial'
import travelDetailsBanner from './components/Banner'
import travelDetailsTitle from './components/Title'
import travelDetailsMessage from './components/Message'
import travelDetailsAuthor from './components/Author'
import travelDetailsContent from './components/Content'
export default {
  name: 'travelDetails',
  components: {
    commonHeader,
    travelDetailsMemorial,
    travelDetailsBanner,
    travelDetailsTitle,
    travelDetailsMessage,
    travelDetailsAuthor,
    travelDetailsContent
  }
}
</script>

<style></style>
