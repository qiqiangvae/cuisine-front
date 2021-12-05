<template>
	<view>
		<view class="bg-img bg-mask flex align-center" style="
		    background-image: url('https://www.qiqiang.online/medias/featureimages/17.jpg');
		    height: 414upx;
		  ">
			<view class="padding-xl text-white">
				<u-avatar :src="avatar" size="60"></u-avatar>
				<view class="padding-xs text-xxl text-bold">{{ username }}
				</view>
			</view>
		</view>
		<view>
			<u-grid border col="3" @click="click">
				<u-grid-item v-for="(listItem,listIndex) in list" :key="listIndex">
					<u-icon :customStyle="{paddingTop:20+'rpx'}" :name="listItem.name" :size="22"></u-icon>
					<text class="grid-text">{{listItem.title}}</text>
				</u-grid-item>
			</u-grid>
			<u-toast ref="uToast" />
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				avatar: 'https://www.qiqiang.online/resources/images/avatar-jianchun.jpg',
				username: '作草分茶',
				list: [{
						name: 'gift',
						title: '优惠券'
					},
					{
						name: 'integral',
						title: '会员'
					},
					{
						name: 'account',
						title: '账户'
					},
					{
						name: 'star',
						title: '收藏'
					},
					{
						name: 'rmb',
						title: '余额'
					},
					{
						name: 'setting',
						title: '设置'
					},
				],
			}
		},
		onLoad() {

		},
		methods: {
			click(name) {
				this.$refs.uToast.success(`点击了第${name}个`)
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
