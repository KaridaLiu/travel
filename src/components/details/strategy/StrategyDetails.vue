<template>
  <div class="strategy-details">
    <strategy-details-header></strategy-details-header>
    <strategy-details-title></strategy-details-title>
    <strategy-details-content></strategy-details-content>
  </div>
</template>

<script>
import strategyDetailsHeader from './components/Header'
import strategyDetailsTitle from './components/Title'
import strategyDetailsContent from './components/Content'
export default {
  name: 'strategyDetails',
  components: {
    strategyDetailsHeader,
    strategyDetailsTitle,
    strategyDetailsContent
  }
}
</script>

<style></style>
