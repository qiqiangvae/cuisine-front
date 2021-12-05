<template>
	<view class="u-content">
		<u-parse :content="markdown2html(article.content)"></u-parse>
	</view>
</template>

<script>
	import {
		marked
	} from "marked"

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
				return marked.parse(md)
			},
			getById(id) {
				let url = `article/${id}`;
				this.$api(url)
					.then((res) => {
						console.log(res)
						this.article = res.data;
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
