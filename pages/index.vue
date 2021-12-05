<template>
	<view class="wrap">
		<u-swiper :list="banners" keyName="image" previousMargin="30" nextMargin="30" circular :autoplay="false"
			height="200" radius="5" indicator bgColor="#ffffff">
		</u-swiper>
		<u-divider color="#fa3534" half-width="200" border-color="#6d6d6d">姑苏城外寒山寺</u-divider>
		<u-sticky bgColor="#fff">
			<u-tabs :list="tags" @click="change" sticky></u-tabs>
		</u-sticky>
		<article-list :articles="articles" @clickArticle="onClickArticle" />
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
				articles: [{
					title: 'docker 基本使用',
					synopsis: 'Docker 是一个开源的应用容器引擎，基于 Go 语言 并遵从Apache2.0协议开源。Docker 可以让开发者打包他们的应用以及依赖包到一个轻量级、可移植的容器中，然后发布到任何流行的 Linux 机器上，也可以实现虚拟化。'
				}, {
					title: 'docker 基本使用',
					synopsis: 'Docker 是一个开源的应用容器引擎，基于 Go 语言 并遵从Apache2.0协议开源。Docker 可以让开发者打包他们的应用以及依赖包到一个轻量级、可移植的容器中，然后发布到任何流行的 Linux 机器上，也可以实现虚拟化。'
				}, {
					title: 'docker 基本使用',
					synopsis: 'Docker 是一个开源的应用容器引擎，基于 Go 语言 并遵从Apache2.0协议开源。Docker 可以让开发者打包他们的应用以及依赖包到一个轻量级、可移植的容器中，然后发布到任何流行的 Linux 机器上，也可以实现虚拟化。'
				}, {
					title: 'docker 基本使用',
					synopsis: 'Docker 是一个开源的应用容器引擎，基于 Go 语言 并遵从Apache2.0协议开源。Docker 可以让开发者打包他们的应用以及依赖包到一个轻量级、可移植的容器中，然后发布到任何流行的 Linux 机器上，也可以实现虚拟化。'
				}, {
					title: 'docker 基本使用',
					synopsis: 'Docker 是一个开源的应用容器引擎，基于 Go 语言 并遵从Apache2.0协议开源。Docker 可以让开发者打包他们的应用以及依赖包到一个轻量级、可移植的容器中，然后发布到任何流行的 Linux 机器上，也可以实现虚拟化。'
				}, {
					title: 'docker 基本使用',
					synopsis: 'Docker 是一个开源的应用容器引擎，基于 Go 语言 并遵从Apache2.0协议开源。Docker 可以让开发者打包他们的应用以及依赖包到一个轻量级、可移植的容器中，然后发布到任何流行的 Linux 机器上，也可以实现虚拟化。'
				}, {
					title: 'docker 基本使用',
					synopsis: 'Docker 是一个开源的应用容器引擎，基于 Go 语言 并遵从Apache2.0协议开源。Docker 可以让开发者打包他们的应用以及依赖包到一个轻量级、可移植的容器中，然后发布到任何流行的 Linux 机器上，也可以实现虚拟化。'
				}, ],
				banners: [{
					image: 'https://www.qiqiang.online/medias/featureimages/0.jpg',
					title: '标题1'
				}, {
					image: 'https://www.qiqiang.online/medias/featureimages/1.jpg',
					title: '标题2'
				}, {
					image: 'https://www.qiqiang.online/medias/featureimages/2.jpg',
					title: '标题3'
				}],
				current: 0,
				tags: [{
					name: '关注',
				}, {
					name: '推荐',
				}, {
					name: '电影'
				}, {
					name: '科技'
				}, {
					name: '音乐'
				}, {
					name: '美食'
				}, {
					name: '文化'
				}, {
					name: '财经'
				}, {
					name: '手工'
				}]
			}
		},
		onLoad() {
			this.articlePage()
		},
		methods: {
			change(item) {
				console.log('item', item);
			},
			onClickArticle(article) {
				console.log(article)
			},
			articlePage() {
				let url = "articlePage";
				this.$api(url)
					.then((res) => {
						console.log(res)
						this.articles = res.data.context;
					})
					.catch((err) => {
						this.articles = [];
					});
			}
		}
	}
</script>
