<template>
	<view class="about-page">
		<view> <airel-floatball /></view>
		<Tips ref="success" position="center" backgroundColor="#dbf1e1" color="#07c07e" size="30"></Tips>
		<Tips ref="error" position="center" backgroundColor="red" color="#fff" size="30"></Tips>
		<backgroundPage :imgUrl="aboutBg" :title="title" v-show="false">
			<view class="about-content">
				《绿色中国》自2004年创建以来，以“弘扬生态文明，传播绿色理念，建设美丽中国”为宗旨，面向社会，贴近生活，积极宣传党和国家的大政、方针、政策，把握正确的舆论导向，在国内外政府机构、工商企业、教育科研、新闻出版、文化艺术、医药卫生等与“绿色”相关的行业和众多领域建立了良好的信息网络，及时反映我国环境保护动态和国内外重大绿色信息，突出展示引领绿色时尚倡导绿色消费的时代风貌。
			</view>
		</backgroundPage>

		<view>
			<scroll-view scroll-y="true" style="width: 100%;height: 100vh;">
				<image src="./about/0.png" mode=""></image>
				<image src="./about/1.png" mode=""></image>
				<image src="./about/2.png" mode=""></image>
				<image src="./about/3.png" mode=""></image>
				<image src="./about/4.png" mode=""></image>
				<image src="./about/5.png" mode=""></image>
				<image src="./about/6.png" mode=""></image>
				<image src="./about/7.png" mode=""></image>
				<image src="./about/8.png" mode=""></image>
				<image src="./about/9.png" mode=""></image>
				<image src="./about/10.png" mode=""></image>
				<image src="./about/11.png" mode=""></image>
				<image src="./about/12.png" mode=""></image>
				<image src="./about/13.png" mode=""></image>
				<image src="./about/14.png" mode=""></image>
				<image src="./about/15.png" mode=""></image>
				<image src="./about/16.png" mode=""></image>
				<image src="./about/17.png" mode=""></image>
				<image src="./about/18.png" mode=""></image>
				<image src="./about/19.png" mode=""></image>
				<image src="./about/20.png" mode=""></image>
			</scroll-view>
		</view>


	</view>
</template>

<script>
	import aboutBg from '../../static/common/about.png';
	import backgroundPage from "../../components/background-page/background.vue";
	export default {
		components: {
			backgroundPage
		},
		data() {
			return {
				aboutBg: aboutBg,
				title: '关于我们',
				list: [
					'./about/0.png',

				]
			};
		}
	}
</script>

<style lang="less">
	.about-page {
		/deep/ .help-title {
			top: 15%;
		}
	}

	image {
		width: 100%;
		height: 500upx;
	}

	.about-content {
		margin-top: 40upx;
		font-size: 16px;
		text-indent: 2em;
		text-align: justify;
		box-sizing: border-box;
		line-height: 80upx;
		padding: 8upx 16upx;
	}
</style>