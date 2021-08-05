<template>
	<view class="content">
    <view>
      <Search />
    </view>
    <view>
      <button @click="gotoContent">点我进入内容页</button>
    </view>
	</view>
</template>

<script lang="ts">
import Vue from 'vue';
import Search from '@/components/search/search.vue'
export default Vue.extend({
  components: {
    Search
  },
  data() {
    return {
      title: 'Index'
    }
  },
  onLoad() {},
  methods: {
    gotoContent() {
      uni.navigateTo({
        url: '/pages/content/index'
      })
    }
  }
});
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
    min-height: 100vh;
	}
</style>
