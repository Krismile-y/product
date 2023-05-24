<template>
	<view class="revisePassword" style="width: 100%;height: 100vh;background-color: #fff;">
		<view>
			<airel-floatball  />
		</view>
		<Tips ref="success" position="center" backgroundColor="#dbf1e1" color="#07c07e" size="30"></Tips>
		<Tips ref="error" position="center" backgroundColor="red" color="#fff" size="30"></Tips>
		<view  v-show="type==1?true:false">
			<view class="item">
				<view class="shimingLeft">状态</view>
				<view class="shimingRight">{{shiming}}</view>
			</view>
		</view>
		
		<!-- 修改密码 -->
		<view v-show="type==2?true:false">
			<view class="newInput">
				<view class="newInputItem">
					<view class="inputName ">旧密码</view>
					<u-input v-model="jiu" type="password"  password-icon="true" pattern="[0-9]{8,}" placeholder="请输入密码" border="true"/>
				</view>
				
				<view class="newInputItem">
					<view class="inputName ">新密码</view>
					<u-input v-model="xin" type="password"  password-icon="true" pattern="[0-9]{8,}" placeholder="请输入密码" border="true"/>
				</view>
				
				<view class="newInputItem">
					<view class="inputName ">确认密码</view>
					<u-input v-model="queren" type="password"  password-icon="true" pattern="[0-9]{8,}" placeholder="确认密码" border="true"/>
				</view>
				
				<view class="xinBtn dis" @tap="change" style="margin-top: 90upx;">修改密码</view>
			</view>
			
			
		</view>
		
	</view>
</template>

<script>
	export default {
		onLoad(options) {
			console.log(options.type)
			this.type=options.type
			
			this.info=uni.getStorageSync('user_info')
      let z = this.info.is_real_name
      if(z == 0){
      	this.shiming='未实名'
      }else if( z == 1){
      	this.shiming='提交申请'
      }else if( z == 2){
      	this.shiming='已实名'
      }else if( z == 3){
      	this.shiming='拒绝申请'
      }
			// if(this.info.is_real_name==0){
			// 	this.shiming='未实名'
			// }else{
			// 	this.shiming='已实名'
			// } 
		},
		data() {
			return {
				  type:'',
				  xin:'',
				  jiu:"",
				  queren:''	 ,
				   shiming:""
			};
		},
		methods:{
			change(){
				// 修改密码接口
				if(this.jiu.length <8){
					
					this.$refs.error.showTips({
					msg: '密码必须最少8位',
					duration: 2000
						})
					return
				}else if(this.xin.length <8){
					
					this.$refs.error.showTips({
					msg: '新密码必须最少8位',
					duration: 2000
						})
					return
				}else if(this.queren.length <8){
					this.$refs.error.showTips({
					msg: '密码必须最少8位',
					duration: 2000
						})
					return
				}
				
				
				let pwd={
					'past_pwd':this.jiu,
					'pwd':this.xin,
					'upwd':this.queren
				}
				this.$fn.request('pwd', 'POST',pwd).then(res => {
					console.log(res.data.code)
					if(res.data.code == 1){
						uni.removeStorageSync('pwd')
						uni.removeStorageSync('token')
						this.$refs.success.showTips({
						    msg: '修改成功',
						    duration: 2000
						  })
						setTimeout(()=>{
							uni.navigateTo({
								url:'/pages/login/login'
							})
						},2100)
					}else{
						this.$refs.error.showTips({
						msg: res.data.msg,
						duration: 2000
							})
		
					}
				}) 
			}
		}
	}
</script>

<style lang="less">
.newInput{
	margin: 0 auto;
	width: 686rpx;
	.newInputItem{
		width: 100%;
		height: 90upx;
		border-bottom: 1rpx solid #E5E5E5;
		display: flex;
		align-items: center;
		.inputName{
			font-family: PingFangSC-Regular, PingFang SC;
			width: 160upx;
			height: 100%;
			display: flex;
			align-items: center;
			justify-content: left;
		}
		input{
			height:100% ;
			width: 506upx;
		}
	}
	.two{
		width: 100%;
		height: 90upx;
		display: flex;
		align-items: center;
		position: relative;
		.jizhu{
			display: flex;
			align-items: center;
		}
		.wangji{
			position: absolute;
			width: 160upx;
			height: 100%;
			right: 0;
			top: 0;
		}
	}
}

.xinBtn{
	width: 686rpx;
	height: 80rpx;
	background: #02AE71;
	border-radius: 100rpx;
	margin: 0 auto;
	margin-top: 30upx;
	color: #fff;
}	
	
	
.revisePassword{
	
}

.item{
	width: 100%;
	display: flex;
	height: 90upx;
	border-bottom: 1upx solid #e5e5e5;
	.shimingLeft{
		width: 50%;
		height: 100%;
		display: flex;
		align-items: center;
		padding-left: 25upx;
	}
	.shimingRight{
		width: 50%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: right;
		color: #999;
		padding-right: 25upx;
		
	}
	.left{
		width: 30%;
		height: 100%;
		display: flex;
		align-items: center;
		padding-left: 25upx;
	}
	.right{
		width: 70%;
		height: 100%;
		input{
			width: 100%;
			height: 100%;
		}
	}
}
.btn{
	width: 90%;
	height: 90upx;
	background-color: red;
    color: #fff;
	margin: 30upx auto;
	border-radius: 10upx;
}
</style>
