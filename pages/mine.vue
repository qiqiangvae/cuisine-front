<template>
	<view>
		<view class="bg-img bg-mask flex align-center" style="
		    background-image: url('https://www.qiqiang.online/medias/featureimages/17.jpg');
		    height: 414upx;
		  ">
			<view class="padding-xl text-white">
				<u-avatar :src="avatar" size="80"></u-avatar>
				<view class="padding-xs text-xxl text-bold">{{ username }}
				</view>
			</view>
		</view>
		<grid-view :cuIconList="orderMenus" :showTitle="true" title="订单" colNumber="4"></grid-view>
		<grid-view :cuIconList="cuIconList"></grid-view>
	</view>
</template>

<script>
	import gridView from '../components/gridView.vue'
	export default {
		components: {
			gridView
		},
		data() {
			return {
				avatar: 'https://www.qiqiang.online/resources/images/avatar-jianchun.jpg',
				username: '作草分茶',
				orderMenus: [{
					cuIcon: "picfill",
					badge: 10,
					name: "待付款",
				}, {
					cuIcon: "picfill",
					badge: 5,
					name: "待收获",
				},{
					cuIcon: "picfill",
					badge: 30,
					name: "待评价",
				},{
					cuIcon: "picfill",
					badge: 99,
					name: "我的订单",
				},],
				cuIconList: [{
						cuIcon: "recordfill",
						color: "orange",
						badge: 0,
						name: "会员",
					},
					{
						cuIcon: "picfill",
						color: "yellow",
						badge: 22,
						name: "优惠券",
					},
					{
						cuIcon: "noticefill",
						color: "olive",
						badge: 0,
						name: "账户",
					},
					{
						cuIcon: "upstagefill",
						color: "cyan",
						badge: 0,
						name: "收藏",
					},
					{
						cuIcon: "questionfill",
						color: "mauve",
						badge: 20,
						name: "客服",
					},
					{
						cuIcon: "settingsfill",
						color: "purple",
						badge: 0,
						name: "设置",
					}
				]
			}
		},
		onLoad() {

		},
		methods: {
			click(idx) {
				this.$refs.uToast.success(`点击了${this.list[idx].title}`)
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
