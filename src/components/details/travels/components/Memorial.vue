<template>
  <div class="travelDetails-memorial">
    <div class="memorial-time">
      <div class="memorial-day">29</div>
      <div class="memorial-date">
        <p>2018</p>
        <p>AUG</p>
      </div>
    </div>
    <div class="memorial-title">蜂首纪念</div>
  </div>
</template>

<script>
export default {
  name: 'travelDetailsMemorial'
}
</script>

<style lang="stylus" scoped>
  .travelDetails-memorial
    color: #008489
    margin: .3rem 0
    .memorial-time
      overflow: hidden
      width: 46%
      margin: .2rem auto
      .memorial-day
        display: inline-block
        float: left
        width: 45%
        font-size: 1rem
        line-height: .8rem
        text-align: center
        font-weight: bolder
        border-left: .06rem solid green
        border-right: .06rem solid green
      .memorial-date
        display: inline-block
        float: right
        font-size: .45rem
        border-right: .06rem solid green
        padding-right: .12rem
        line-height: .4rem
    .memorial-title
      width: 46%
      margin: .2rem auto
      text-align: center
      font-size: .66rem
      font-weight: bolder
</style>
