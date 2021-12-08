<template>
	<view class="wrap">
		<u-swiper :list="banners" keyName="value" previousMargin="30" nextMargin="30" circular :autoplay="false"
			height="200" radius="5" showTitle bgColor="#ffffff" @change="e => current = e.current">
			<view slot="indicator" class="indicator">
				<view class="indicator__dot" v-for="(item, index) in banners" :key="index"
					:class="[index === current && 'indicator__dot--active']">
				</view>
			</view>
		</u-swiper>
		<u-divider color="#fa3534" half-width="200" border-color="#6d6d6d">姑苏城外寒山寺</u-divider>
		<u-sticky bgColor="#fff">
			<u-tabs :list="tags" keyName="key" @click="change" sticky></u-tabs>
		</u-sticky>
		<article-list :articles="articles" @loadmoreArticle="articlePage(true)" @clickArticle="onClickArticle" />
	</view>
</template>
<script>
	import articleList from '../components/articleList';
	export default {
		components: {
			articleList
		},
		data() {
			return {
				articles: [],
				banners: [],
				tags: [],
				current: 0,
				currentTag: '',
				currentPage: 0,
				hasMoreArticle: true
			}
		},
		onLoad() {
			this.initPageData()
		},
		onPullDownRefresh() {
			this.initPageData()
			uni.stopPullDownRefresh();
		},
		methods: {
			// 初始化数据
			initPageData() {
				this.bannerList()
				this.categoryList()
				this.articlePage(false)
			},
			// 切换分类
			change(item) {
				this.currentTag = item.value
				this.articlePage(false)
			},
			// 获取banner图
			bannerList() {
				uni.$u.http.post(`configList?group=banner`).then(res => {
					this.banners = res;
				}).catch(err => {
					this.banners = [];
				})
			},
			// 获取分类列表
			categoryList() {
				uni.$u.http.post(`configList?group=category`).then(res => {
					res.unshift({
						key: '全部',
						value: ''
					})
					this.tags = res;
				})
			},
			// 跳转文章详情
			onClickArticle(article) {
				uni.navigateTo({
					url: `article/articleView?id=${article.id}`
				});
				console.log(article)
			},
			// 获取文章列表
			articlePage(append) {
				if (!append) {
					this.hasMoreArticle = true
				}
				if (this.hasMoreArticle) {
					uni.$u.http.post('articlePage', {
						category: this.currentTag,
						current: this.currentPage + 1
					}).then(res => {
						if (append) {
							res.content.forEach(item => this.articles.push(item))
							this.currentPage++;
						} else {
							this.articles = res.content;
							this.currentPage = 0
						}
						this.hasMoreArticle = res.current < res.pages
					}).catch(err => {
						console.log(err)
						this.articles = [];
						this.currentPage = 0
					})
				}
			}
		}
	}
</script>
<style lang="scss">
	.indicator {
		@include flex(row);
		justify-content: center;

		&__dot {
			height: 6px;
			width: 6px;
			border-radius: 100px;
			background-color: rgba(255, 255, 255, 0.35);
			margin: 0 5px;
			transition: background-color 0.3s;

			&--active {
				background-color: #ffffff;
			}
		}
	}
</style>
