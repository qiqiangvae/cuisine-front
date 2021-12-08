<template>
	<view class="u-content">
		<u-parse :content="markdown2html(article.content)"></u-parse>
	</view>
</template>

<script>
	import mdUtil from '../../utils/mdUtil.js'

	export default {
		data() {
			return {
				article: {
					content: ''
				}
			}
		},
		onLoad(option) {
			this.getById(option.id)
		},
		methods: {
			markdown2html(md) {
				return mdUtil.parse(md)
			},
			getById(id) {
				let url = `article/${id}`;
				uni.$u.http.get(url)
					.then((res) => {
						this.article = res;
						uni.setNavigationBarTitle({
							title: this.article.title
						});
					})
					.catch((err) => {
						this.article = {
							content: ''
						};
					});
			}
		}
	}
</script>

<style lang="scss" scoped>
	.u-content {
		padding: 24rpx;
	}
</style>
