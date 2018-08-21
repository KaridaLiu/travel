<template>
  <div id="strategy">
    <common-header></common-header>
    <strategy-search></strategy-search>
    <strategy-mainpic></strategy-mainpic>
    <strategy-recommand :List="cityList"></strategy-recommand>
  </div>
</template>

<script>
import commonHeader from '../common/Header'
import strategySearch from './components/Search'
import strategyMainpic from './components/MainPic'
import strategyRecommand from './components/Recommand'
import axios from 'axios'
export default {
  name: 'Strategy',
  components: {
    commonHeader,
    strategySearch,
    strategyMainpic,
    strategyRecommand
  },
  data () {
    return {
      cityList: []
    }
  },
  methods: {
    getStrategyInfo () {
      axios.get('/api/cityList.json').then(this.getStrategyInfoSucc)
    },
    getStrategyInfoSucc (rec) {
      this.cityList = rec.data.cityList
    }
  },
  mounted () {
    this.getStrategyInfo()
  }
}
</script>

<style></style>
