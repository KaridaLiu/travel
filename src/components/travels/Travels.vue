<template>
  <div class="travels">
    <common-header></common-header>
    <travels-picture></travels-picture>
    <travels-content></travels-content>
  </div>
</template>

<script>
import commonHeader from '../common/Header'
import travelsPicture from './components/Picture'
import travelsContent from './components/Content'
export default {
  name: 'Travels',
  components: {
    commonHeader,
    travelsPicture,
    travelsContent
  }
}
</script>

<style></style>
