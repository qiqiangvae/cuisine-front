<template>
	<view>
		<view v-if="showTitle" class="cu-bar bg-white solid-bottom margin-top">
			<view class="action"> <text class="cuIcon-title text-orange"></text> {{title}} </view>
		</view>
		<view class="cu-list grid" :class="['col-'+colNumber, 'no-border']">
			<view class="cu-item" v-for="(item, index) in cuIconList" :key="index">
				<view :class="['cuIcon-' + item.cuIcon, 'text-' + item.color]">
					<view class="cu-tag badge" v-if="item.badge != 0">
						<block v-if="item.badge != 1">{{
		          item.badge > 99 ? "99+" : item.badge
		        }}</block>
					</view>
				</view>
				<text>{{ item.name }}</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "gridView",
		props: {
			colNumber: {
				default: 3
			},
			showTitle: {
				default: false
			},
			title: {},
			cuIconList: {}
		},
		data() {
			return {

			};
		}
	}
</script>

<style>

</style>
