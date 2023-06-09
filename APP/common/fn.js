// const baseUrl = 
// 'https://api.lszgfreer.top/api/'
// const baseUrl1 = 'https://www.api.com/api/'

import md5 from 'js-md5';
export default {
	// 请求函数  http://api.lszgfreer.top/
	request: (url, method, data, type = 1) => {
		
	
		// type用做请求地址判断
		let trueURL = ''
		if (type == 1) {
			trueURL = getApp().globalData.baseUrl
		} else {
			trueURL = getApp().globalData.baseUrl
		}
		return new Promise((reslove, reject) => {
			let tokens = uni.getStorageSync('token') ? uni.getStorageSync('token') : '';
			let times = Math.round(new Date().getTime() / 1000).toString();
			let keys = '2zn7s4m0uctu';

			uni.request({
				url: trueURL + url,
				method,
				data,
				header: {
					// 	'Content-Type':'multipart/form-data',
					'token': tokens,
					'sign': md5(tokens + '&' + keys + '&' + times),
					'time': times
				},
				success: (res) => {
					reslove(res)
							
					if (res.data.code == 0) {
						// uni.showToast({
						// 	title: res.data.msg,
						// 	icon: 'none'
						// })
						// this.$refs.error.showTips({
						// msg: res.data.msg,
						// duration: 2000
						// 	})
					}
					if(res.data.code == 204 || res.data.code == 205){
						uni.showToast({
							title: res.data.msg,
							icon: 'none'
						})
						// this.$refs.error.showTips({
						// msg: res.data.msg,
						// duration: 2000
						// 	})
						setTimeout(()=>{
							uni.navigateTo({
								url:'/pages/login/login'
							})
							uni.removeStorageSync('token')
							this.$store.state.current = ''
							    uni.removeStorageSync('token');
							    uni.removeStorageSync('address');
							    uni.removeStorageSync('current');
							    uni.setStorageSync('gengxin', false)
						},1000)
					}else if(res.data.code == 1){
						
					}
					
					
				},
				err: (err) => {
					reject(err)
					if (err.data.code == '0') {
						// uni.showToast({
						// 	title: err.data.msg,
						// 	icon:'none'
						// })
						// this.$refs.error.showTips({
						// msg: err.data.msg,
						// duration: 2000
						// 	})
					}
				},
			})
		})
	},
	user:()=>{
		let tokens = uni.getStorageSync('token') ? uni.getStorageSync('token') : '';
		let times = Math.round(new Date().getTime() / 1000).toString();
		let keys = '2zn7s4m0uctu';
		
		return new Promise((reslove,reject)=>{
			let last = {
				"is_whole":"1"
			}
			uni.request({
				url:getApp().globalData.baseUrl+'user',
				method:"GET",
				data:last,
				header: {
					// 	'Content-Type':'multipart/form-data',
					'token': tokens,
					'sign': md5(tokens + '&' + keys + '&' + times),
					'time': times
				},
				success(r) {
					console.log(uni.getStorageSync('user_info',r.data.data),'用户信息')
					uni.setStorageSync('user_info',r.data.data)	
					reslove(r.data.data)
											
				}
			})
		})
		
		
	}

	// 
}