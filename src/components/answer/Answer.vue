<template>
  <div class="answer">
    <answer-header></answer-header>
    <answer-picture></answer-picture>
    <answer-search></answer-search>
    <answer-content></answer-content>
    <answer-ask></answer-ask>
  </div>
</template>

<script>
import answerHeader from './components/Header'
import answerPicture from './components/Picture'
import answerSearch from './components/Search'
import answerContent from './components/Content'
import answerAsk from './components/Ask'
export default {
  name: 'Answer',
  components: {
    answerHeader,
    answerPicture,
    answerSearch,
    answerContent,
    answerAsk
  }
}
</script>

<style lang="stylus" scoped>
.answer
  padding-bottom: 16%
</style>
