<template>
	<view class="greenDetail" style="">
		
		<view style="width: 100%;height:30upx;"></view>
		
		<view class="box disc" >
			<view class="shang">
				<image src="../../static/common/gou.png"  ></image>
				<view class="shangRight disc">
					<view class="biaoti">
						<!-- <view class="gr dis">标签内容</view> -->
						<view class="gDetail">
							撒就代扣代缴睡觉睡觉代理商
						</view>
					</view>
					<!-- <view class="line"></view> -->
					
					<view class="detail">
						已经有888人参与了捐赠
					</view>
					
					<view class="address">
						<view>地址：海南</view>
						<view class="aixin dis" @tap="open">捐献爱心</view>
					</view>
					
				</view>
			</view>
			
			<view class="title">正文标题</view>
			
			<view class="neirong">
				啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊
			</view>
			
			<image src="../../common/zuixinzhengce.png" mode="" class="bigImage"></image>
			
			<view class="time">备案号：12312312314124124</view>
		</view>
		
		
		<!-- 下面小框框 -->
		<view class="last disc">
			<view class="lastItem">
				<view class="name">收款机构:</view>
				<view class="nameDetail">内容内容内容内容内容内容</view>
			</view>
			<view class="lastItem">
				<view class="name">执行机构:</view>
				<view class="nameDetail">内容内容内容内容内容内容</view>
			</view>
			<view class="lastItem">
				<view class="name">公益进展:</view>
				<view class="nameDetail" style="color: #02AE71;">内容内容内容内容内容内容</view>
			</view>
			<view class="lastItem">
				<view class="name">已筹款人数:</view>
				<view class="nameDetail">内容内容内容内容内容内容</view>
			</view>
			<view class="lastItem">
				<view class="name">已筹善款:</view>
				<view class="nameDetail">内容内容内容内容内容内容</view>
			</view>
		</view>
		
		<!-- 弹出层 -->
		<u-popup :show="show" mode="bottom" @close="close" :round="16" @open="open">
		  <view style="width: 100%;height: 800upx;">
			  
			  <view class="infoBox">
				  <view class="infoTitle dis">我要捐款</view>
				  <view class="shankuan">
					  <view class="sDetail">善款接收：阿阿阿阿阿阿</view>
				  </view>
				  <view class="three">
					  <view class="threeItem dis">100元</view>
					  <view class="threeItem dis">200元</view>
					  <view class="threeItem dis">500元</view>
					   
				  </view>
				  
				  <view class="zidingyi">
					  <view class="jine dis">自定义金额</view>
					  <input type="number" placeholder="请输入金额">
					  <view class="font dis">元</view>
				  </view>
				  
				  <view class="line"></view>
				  
				  <view class="ketixian">可提现金额：200000</view>
				  
			  </view>
			  
		  </view>
		</u-popup>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				show:false
			};
		},
		methods:{
			open(){
			  // 通过组件定义的ref调用uni-popup方法 ,如果传入参数 ，type 属性将失效 ，仅支持 ['top','left','bottom','right','center']
			 this.show=true
			},
			close() {
			 this.show=!true
			}
		}
	}
</script>

<style lang="less" scoped src='./greenDetail.less'>

</style>
