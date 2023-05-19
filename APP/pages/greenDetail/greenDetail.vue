<template>
	<view class="greenDetail" style="">
		<airel-floatball  />
		<view style="width: 100%;height:30upx;"></view>
		
		<view class="box disc" >
			<view class="shang">
				<image :src="item.img_path"  ></image>
				<view class="shangRight disc">
					<view class="biaoti">
						<!-- <view class="gr dis">标签内容</view> -->
						<view class="gDetail">
						  {{item.title}}
						</view>
					</view>
					<!-- <view class="line"></view> -->
					
					<view class="detail">
						已经有{{item.people}}人参与了捐赠
					</view>
					
					<view class="address">
						<view>地址：海南</view>
						<view class="aixin dis" @tap="open">捐献爱心</view>
					</view>
					
				</view>
			</view>
			
			<view class="title">{{item.title}}</view>
			
			<view class="neirong" v-html="item.content">
				
			</view>
			
			<image :src="item.img_path"  mode="" class="bigImage"></image>
			
			<view class="time">{{item.record_no}}</view>
		</view>
		
		
		<!-- 下面小框框 -->
		<view class="last disc">
			<view class="lastItem">
				<view class="name">收款机构:</view>
				<view class="nameDetail">{{item.collection_agency}}</view>
			</view>
			<view class="lastItem">
				<view class="name">执行机构:</view>
				<view class="nameDetail">{{item.executing_agency}}</view>
			</view>
			<view class="lastItem">
				<view class="name">公益进展:</view>
				<view class="nameDetail" style="color: #02AE71;" @tap="chakanxiangqing">
					查看详情
				</view>
			</view>
			<view class="lastItem">
				<view class="name">已筹款人数:</view>
				<view class="nameDetail">{{item.people}}</view>
			</view>
			<view class="lastItem">
				<view class="name">已筹善款:</view>
				<view class="nameDetail">{{item.amount}}</view>
			</view>
		</view>
		
		<!-- 弹出层 -->
		<u-popup :show="show" mode="bottom" @close="close" :round="16" @open="open">
		  <view style="width: 100%;height: 800upx;">
			  
			  <view class="infoBox">
				  <view class="infoTitle dis">我要捐款</view>
				  <view class="shankuan">
					  <view class="sDetail">善款接收：{{item.executing_agency}}</view>
				  </view>
				  <view class="three">
					  <view class="threeItem dis" @tap="chooseMoney(set_amount[0],0)" :class="{color:currentIndex==0?true:false}">{{set_amount[0]}}元</view>
					  <view class="threeItem dis" @tap="chooseMoney(set_amount[1],1)" :class="{color:currentIndex==1?true:false}">{{set_amount[1]}}元</view>
					  <view class="threeItem dis"  @tap="chooseMoney(set_amount[2],2)" :class="{color:currentIndex==2?true:false}">{{set_amount[2]}}元</view>
					   
				  </view>
				  
				  <view class="zidingyi">
					  <view class="jine dis">自定义金额</view>
					  <input type="number" placeholder="请输入金额" v-model="zidingyijine" @input='change'>
					  <view class="font dis">元</view>
				  </view>
				  
				  <view class="line"></view>
				  
				  <view class="ketixian">可提现金额：{{info.money_approve}}</view>
				  
				  <view class="btnBox dis">
					  <view class="btn dis" @tap="agree">同意并捐赠</view>
				  </view>
			  </view>
			  
		  </view>
		</u-popup>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				show:false,
				id:"",
				item:{},
				amount:'',//金额
				wid:'',//文章id
				currentIndex:8888888,//当前选中状态
				info:"",//用户信息
				set_amount:[],//捐献金额
				zidingyijine:'',
				zhuangtai:99999,//0 是选择的三个金额，  1是自定义金额
			};
		},
		onLoad(options) {
			this.info = uni.getStorageSync('user_info')
			this.id=options.id
			this.wid=options.id
			
			this.$fn.request('welfare/details',"GET",{'id':this.id}).then(res=>{
				console.log(res.data.data,'产品详情')
				this.item=res.data.data
			})
			
			// 捐献金额接口
			this.$fn.request('set_amount',"GET",{}).then(res=>{
				console.log(res.data.data,'捐献金额')
				this.set_amount=res.data.data
			})
		},
		methods:{
			open(){
			
			 this.show=true
			},
			close() {
			 this.show=!true
			},
			chooseMoney(num,index){//选择金额
			    this.currentIndex=index
				this.amount=num
				this.zhuangtai=0
				this.zidingyijine=null
			},
			change(e){//输入框改变
				// console.log(e.detail.value)
				// console.log(this.amount)
				this.currentIndex='99999999'
				this.zhuangtai=1
			},
			agree(){//同意捐赠
			   let lastMoney;
			   if(this.zhuangtai==0){
				   lastMoney=this.amount  
			   }else if(this.zhuangtai=1){
				   lastMoney=this.zidingyijine
			   }
			
				let data={
					'amount':lastMoney,
					'wid':this.wid
				}
				this.$fn.request('welfare/donate','POST',data).then(res=>{
					console.log(res)
				})
			},
			chakanxiangqing(){//查看详情页面
			    uni.setStorageSync('gongyijinzhan',this.item.progress_content)
				uni.navigateTo({
					url:'/pages/greenPage/greenPage'
				})
			}
		}
	}
</script>

<style lang="less" scoped src='./greenDetail.less'>

</style>
