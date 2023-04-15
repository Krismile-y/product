import config from '@/common/config.js'

export default {
	common: {
		header:{
			"Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
			// "Content-Type": "multipart/form-data;charset=utf-8",
		},
		method: 'GET',
		data: {}
	},
	request(options = {}) {
		options.url =  config.baseUrl + options.url
		options.method = options.method || this.common.method
		options.data = options.data || {}
		
		options.header = options.header || this.common.header
		if(options.url.includes('login') || options.url.includes('/upload')) {
			// console.log('111111111')
			// options.data.token = uni.getStorageSync('token')
		}else{
			options.header['x-csrf-token'] = uni.getStorageSync('token')
		}
		
		return new Promise((resolve, reject ) => {
			uni.request({
				...options,
				success: (result) => {
					// 请求失败
					if (result.statusCode !== 200) {
						// uni.showToast({
						// 	title: result.data.msg || '请求失败',
						// 	icon: 'none'
						// });
						return reject(result.data)
					}
					if(result.data.code == 255) {
						uni.navigateTo({
							url: '/pages/login/login'
						})
						return
					}
					// 请求成功
					return resolve(result.data)
				},
				fail: (error) => {
					// uni.showToast({
					// 	title:  '请求失败',
					// 	icon: 'none'
					// }); 
					return reject(error)
				}
			})
		})
		
	},
	get(url, data = {}, options = {}) {
		options.url = url
		options.data = data
		options.method = 'GET'
		return this.request(options)
	},
	post(url, data = {}, options = {}) {
		options.url = url
		options.data = data 
		options.method = 'POST'
		return this.request(options)
	},
    upload(url,data = {}, options = {}) {
		options.url = config.baseUrl + url
		options.filePath = data.image.path || ''
		// options.data = data
		options.method = 'POST'
		options.header = options.header || {}
		console.log('options:',data.image.path)
		options.name = options.name || 'image'
		
		return new Promise((resolve, reject ) => {
			uni.uploadFile({
				header: {
					// "Content-Type": "multipart/form-data;charset=utf-8",
					// "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
				},
				url: config.baseUrl + url, //仅为示例，非真实的接口地址
				filePath: data.image.path,
				name: 'image',
				formData: {
					'user': 'test'
				},
				success: (uploadFileRes) => {
					if (uploadFileRes.statusCode !== 200) {
						return 
						// uni.showToast({
						// 	title: '上传失败',
						// 	icon: 'none'
						// });
					}
					return resolve(JSON.parse(uploadFileRes.data))
					
				}
			});
		})
	}
}