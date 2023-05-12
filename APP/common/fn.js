const baseUrl = 'https://api.lszgfreer.top/api/'
const baseUrl1 = 'https://www.api.com/api/'

import md5 from 'js-md5';
export default {
	// 请求函数  http://api.lszgfreer.top/
	request: (url, method, data, type = 1) => {
		// type用做请求地址判断
		let trueURL = ''
		if (type == 1) {
			trueURL = baseUrl
		} else {
			trueURL = baseUrl1
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
						uni.showToast({
							title: res.data.msg,
							icon: 'error'
						})
					}
					if(res.data.code == 204){
						uni.showToast({
							title: res.data.msg,
							icon:'error'				
						})
						setTimeout(()=>{
							uni.navigateTo({
								url:'/pages/login/login'
							})
							uni.removeStorageSync('token')
						},1000)
					}
				},
				err: (err) => {
					reject(err)
					if (err.data.code == '0') {
						uni.showToast({
							title: err.data.msg
						})
					}
				},
			})
		})
	}

	// 
}