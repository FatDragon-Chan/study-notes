<template>
  <view class="input-wrap">
    <input type="text" v-model="inputName">
  </view>
</template>

<script>
export default {
  name: "Search",
  data() {
    return {
      inputName: ''
    }
  }
}
</script>

<style scoped>
.input-wrap {
  background-color: skyblue;
}
</style>
