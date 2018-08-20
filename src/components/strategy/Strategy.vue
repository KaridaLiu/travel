<template>
  <div id="strategy">
    <strategy-header></strategy-header>
    <strategy-search></strategy-search>
  </div>
</template>

<script>
import strategyHeader from './components/Header'
import strategySearch from './components/Search'
export default {
  name: 'Strategy',
  components: {
    strategyHeader,
    strategySearch
  }
}
</script>

<style></style>
