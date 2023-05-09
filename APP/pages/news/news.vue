<template>
	<view class="news-page">
    <!-- 新闻详情页 -->
		<view class="title">
			{{article.title}}
		</view>
    <view class="author">
    	{{article.author}}
    </view>
    <image :src="article.thumb_url" mode="widthFix" class="new-img" v-show="article.thumb_url!=''"></image>
		<view class="detail" v-html="article.content">
			<!-- {{article.content}} -->
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				index: '', 
        article: {
          title: '',
          author: '',
          content: ''
        },
			};
		},
    onLoad(option) {
      this.index = option.id
      // 新闻接口
      this.$fn.request('article',"GET",{}).then(res=>{
      	console.log(res.data.data,'新闻')
      	this.article=res.data.data[this.index]
        console.log(this.article);
      })
    }
	}
</script>

<style lang="less">
.title{
	margin-top: 30upx;
	width: 100%;
	font-weight: 600;
	text-align: center;
	font-size: 34upx;
	color: #000;
}
.author {
  margin-top: 30upx;
  width: 100%;
  text-align: center;
  font-weight: 500;
  color: #000;
}
.detail{
	margin-top: 30upx;
	text-indent: 60upx;
	color: #000;
	font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.news-page {
  box-sizing: border-box;
  padding: 0 20upx;
  .new-img {
    width: 100%;
  }
}
</style>
