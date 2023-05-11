<template>
	<view>
		<image src="../../static/index/senlin.jpg" v-show="id==0?true:false"></image>
		<image src="../../static/common/ocean.jpg" v-show="id==1?true:false"></image>
		<view v-show="id==0?true:false" style="width: 90%;margin: 30upx auto;">
			
			
			1. 环保产品推荐：我们根据您的消费习惯和需求，为您推荐符合环保要求的产品。这些产品具有环保认证，确保环境友好且无害。
			<br>
			2. 智能对比：您可以使用我们的智能对比功能比较不同品牌和型号的环保产品，对比内容包括环保认证情况、环保需求等。
			<br>
			3. 产品评价：您可以查看其他用户对环保产品的评价和反馈，了解他们的使用体验和建议，帮助您做出更明智的购买决策。
			<br>
			4. 定制服务：如果您需要定制符合您的需求的环保产品，我们可以为您提供专业的定制服务，满足您特定的环保需求。
			<br>
			5. 产品解析：我们为您提供详细的环保产品解析，包括原材料、制造工艺等，帮助您对产品的环保性能有更深入的了解。
			
			
		</view>
		
		<view  v-show="id==1?true:false" style="width: 90%;margin: 30upx auto;">
			
			
			1. 环境监测服务：我们提供一站式的环境监测服务，包括水质、空气、土壤等多种监测指标。我们的检测项目准确、专业、高效。
			<br>
			2. 智能检测：您可以使用我们的智能检测功能，通过在网站上上传数据或测量值，我们可以为您提供更准确的监测结果。同时我们也提供周期性监测，帮助您了解污染情况的变化。
			<br>
			3. 专业报告：我们提供专业的监测报告，包括监测指标、监测结果、评价建议等内容，帮助您及时了解环境污染状况，采取相应措施。
			<br>
			4. 定制服务：如果您有特殊的监测需求，我们可以为您定制专属的监测服务方案，确保您的监测需求得到最佳满足。
			<br>
			5. 专家咨询：我们提供专业的环保专家咨询服务，帮助您解决遇到的问题和疑虑。
			
			
		</view>
		
	</view>
</template>

<script>
	export default {
		onLoad(options){
			this.id=options.id
		},	
		data() {
			return {
				id:''
			};
		}
	}
</script>

<style lang="less">
image{
	width: 100%;
}
</style>
