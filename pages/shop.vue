<template>
	<view>
		<u-search placeholder="日照香炉生紫烟" shape="round" :clearabled="true" v-model="searchWord"></u-search>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				searchWord: '',
				goodsList: [{
					name: '商品名1',
					title: '商品名'
				}, {
					name: '商品名2',
					title: '商品名'
				}, {
					name: '商品名3',
					title: '商品名'
				}, {
					name: '商品名4',
					title: '商品名'
				}, {
					name: '商品名5',
					title: '商品名'
				}]
			}
		},
		methods: {
			selectGoods() {
				this.$refs.uToast.success(`点击了第${name}个`);
			}
		}
	}
</script>
<style lang="scss">
	.grid-text {
		font-size: 14px;
		color: #909399;
		padding: 10rpx 0 20rpx 0rpx;
		/* #ifndef APP-PLUS */
		box-sizing: border-box;
		/* #endif */
	}
</style>
