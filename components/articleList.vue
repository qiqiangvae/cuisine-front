<template>
	<view>
		<u-list @scrolltolower="scrolltolower" :lowerThreshold="20">
			<u-list-item v-for="(article, index) in articles" :key="index">
				<view class="cu-card article no-card solid-bottom" @click="onClickArticle" :data-article="article">
					<view class="cu-item shadow">
						<view class="title">
							<view class="text-cut">{{ article.title }}</view>
						</view>
						<view class="content">
							<view class="desc">
								<view class="text-content"> {{ article.synopsis }}</view>
								<view>
									<view v-for="(tag, tagIdx) in tagList" :key="tagIdx" class="cu-tag light sm round"
										:class="tagIdx % 2 == 0 ? 'bg-red' : 'bg-green'">
										{{ tag }}
									</view>
								</view>
							</view>
						</view>
					</view>
				</view>
			</u-list-item>
		</u-list>
	</view>
</template>

<script>
	export default {
		name: 'forest-article-list',
		data() {
			return {
				tagList: [
					"大神", "牛逼"
				]
			}
		},
		props: {
			articles: {

			}
		},
		methods: {
			onClickArticle(e) {
				this.$emit('clickArticle', e.currentTarget.dataset.article)
			},
			scrolltolower() {
				this.loadmore()
			},
			loadmore() {
				console.log("加载更多")
				this.$emit('loadmoreArticle')
			}
		}
	}
</script>

<style>
</style>
