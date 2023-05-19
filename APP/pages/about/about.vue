<template>
	<view class="about-page">
    <airel-floatball  />
    <backgroundPage :imgUrl="aboutBg" :title="title">
      <view class="about-content">
        《绿色中国》自2004年创建以来，以“弘扬生态文明，传播绿色理念，建设美丽中国”为宗旨，面向社会，贴近生活，积极宣传党和国家的大政、方针、政策，把握正确的舆论导向，在国内外政府机构、工商企业、教育科研、新闻出版、文化艺术、医药卫生等与“绿色”相关的行业和众多领域建立了良好的信息网络，及时反映我国环境保护动态和国内外重大绿色信息，突出展示引领绿色时尚倡导绿色消费的时代风貌。
      </view>
    </backgroundPage>
	</view>
</template>

<script>
  import aboutBg from '../../static/common/about.png';
  import backgroundPage from "../../components/background-page/background.vue";
	export default {
    components: {backgroundPage},
		data() {
			return {
				aboutBg:aboutBg,
        title: '关于我们',
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
image{
	width:100%;
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
