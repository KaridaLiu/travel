<template>
  <div class="answerDetails">
    <common-header></common-header>
    <answer-details-question></answer-details-question>
    <answer-details-answer></answer-details-answer>
  </div>
</template>

<script>
import commonHeader from '../../common/Header'
import answerDetailsQuestion from './components/Question'
import answerDetailsAnswer from './components/Answer'
export default {
  name: 'answerDetails',
  components: {
    commonHeader,
    answerDetailsQuestion,
    answerDetailsAnswer
  }
}
</script>

<style lang="stylus" scoped>
</style>
