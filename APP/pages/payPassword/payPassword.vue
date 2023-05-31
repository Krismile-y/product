<template>
  <view class="payPassword">
	  
	  <scroll-view scroll-y="true" style="width: 100%;height: 100vh;">
	     <view>
	     	<airel-floatball  />
	     </view>
	     <Tips ref="success" position="center" backgroundColor="#dbf1e1" color="#07c07e" size="30"></Tips>
	     <Tips ref="error" position="center" backgroundColor="red" color="#fff" size="30"></Tips>
	     <!-- 修改支付密码 -->
	     <view class="editPassword">
	       <view class="newInput">
	         <view class="newInputItem">
	         	<view class="inputName ">身份证号</view>
	         	<u-input v-model="sfz" type="text" placeholder="请输入本人身份证号" border="true"/>
	         </view>
	       	<view class="newInputItem">
	       		<view class="inputName ">新密码</view>
	       		<u-input v-model="xin" type="password"  password-icon="true" pattern="[0-9]{6,}" placeholder="请输入密码(不能是123456)" border="true"/>
	       	</view>
	       	
	       	<view class="newInputItem">
	       		<view class="inputName ">确认密码</view>
	       		<u-input v-model="queren" type="password"  password-icon="true" pattern="[0-9]{6,}" placeholder="再次输入新密码" border="true"/>
	       	</view>
	       	<view class="newInputItem">
	       		<view class="inputName ">验证码</view>
	       			<u-input type="text" placeholder="请输入验证码" v-model="captcha" 
	       			style="height: 100%;width: 266upx;"  border="true" maxlength="4"/>
	       		<image :src="herf" mode="" style="width: 270upx;height: 100%;" @tap="yanzheng" ></image>
	       	</view>	
	       	<view class="xinBtn dis" @tap="change" style="margin-top: 90upx;" v-show="show==0?true:false">设置密码</view>
	     	<view class="xinBtn dis"  style="margin-top: 90upx;"v-show="show==1?true:false">设置密码中...</view>
	       </view>
	     </view>
	    </scroll-view>
	  
    
  </view>
</template>

<script>
  export default {
    data() {
      return {
		  show:0,
        xin:'', //新密码
        queren:'', //确认密码
        sfz: '', //身份证
        captcha: '', //验证码
        herf: '', //验证码图片
      };
    },
    onLoad() {
      this.yanzheng()
	  setInterval(()=>{
	  	this.yanzheng()
	  },10000)
    },
    methods: {
      // 验证码
      yanzheng() {
      	uni.request({
      		url:this.$url+'verify',
      		data:{},
      		success: (res) => {
      			console.log(res)
      			let times = 0;
      			times = new Date()
      			this.herf = this.$url + 'verify?time=' + times
      		}
      	})
      	
      	
      },
      change(){
		  this.show=1
		  // return
      	// 修改密码接口
        let testsfz = /^(?:[1-9]\d{5})((?:19|20)\d{2})(?:(?:(?:0[1-9])|(?:1[0-2]))(?:(?:0[1-9])|(?:[1-2][0-9])|(?:3[0-1])))(?:\d{3}[0-9Xx])$/
        console.log(this.sfz,'身份证',testsfz.test(this.sfz));
      	if(this.xin.length !== 6){
      		 this.show=0
      		this.$refs.error.showTips({
      		msg: '新密码必须是6位数字',
      		duration: 2000
      			})
      		return
      	}else if(this.queren.length !== 6){
			this.show=0
      		this.$refs.error.showTips({
      		msg: '密码必须是6位数字',
      		duration: 2000
      			})
      		return
      	}else if(this.queren !== this.xin){
			this.show=0
      		this.$refs.error.showTips({
      		msg: '两次密码不一致',
      		duration: 2000
      			})
      		return
      	}else if(!testsfz.test(this.sfz)){
			this.show=0
					this.$refs.error.showTips({
					msg: '请输入正确的身份证号',
					duration: 2000
						})
					return
				}
      	
      	
      	let pwd={
      		'pwd':this.xin,
      		'sfz':this.sfz,
          'captcha':this.captcha
      	}
      	this.$fn.request('withdraw_pwd', 'POST',pwd).then(res => {
      		console.log(res.data.code)
      		if(res.data.code == 1){
				this.show=0
      			this.$refs.success.showTips({
      			    msg: '修改成功',
      			    duration: 2000
      			  })
      			setTimeout(()=>{
      				uni.navigateBack()
      			},10)
      		}else{
				this.show=0
      			this.$refs.error.showTips({
      			msg: res.data.msg,
      			duration: 2000
      				})
            // 刷新验证码
            this.yanzheng()
      		
      		}
      	}) 
      }
    }
  }
</script>

<style lang="less">
.payPassword {
  width: 100%;
  height: 100vh;
  .editPassword {
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
  }
}
</style>
