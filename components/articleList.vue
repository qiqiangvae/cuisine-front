<template>
	<view>
		<view class="cu-card article no-card solid-bottom" v-for="article in articles" :key="article.id"
			@click="onClickArticle" :data-article="article">
			<view class="cu-item shadow">
				<view class="title">
					<view class="text-cut">{{ article.title }}</view>
				</view>
				<view class="content">
					<view class="desc">
						<view class="text-content"> {{ article.synopsis }}</view>
						<view>
							<view v-for="(tag, tagIdx) in article.tagList" :key="tagIdx" class="cu-tag light sm round"
								:class="tagIdx % 2 == 0 ? 'bg-red' : 'bg-green'">
								{{ tag }}
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'forest-article-list',
		data() {
			return {}
		},
		props: {
			articles: {
				
			}
		},
		methods: {
			onClickArticle(e) {
				this.$emit('clickArticle', e.currentTarget.dataset.article)
			}
		}
	}
</script>

<style>
</style>
