const baseUrl = 'http://api.tzhreefvg.top/api/'
export default{
	// 请求函数
	request:(url,method,data,sign)=>{
		return new Promise((reslove,reject)=>{		
			uni.request({
				url:baseUrl+url,
				method,
				data,
				header:{
						// 	'Content-Type':'multipart/form-data',
						'token':uni.getStorageSync('token')?uni.getStorageSync('token'):'',
						 'sign':"sasadsadasdsasa"
					},
				success: (res) => {
					reslove(res)
					
				},
				err: (err) => {
					reject(err)
					
				},
			})
		})
	}
	
	// 
}