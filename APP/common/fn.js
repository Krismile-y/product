const baseUrl = 'http://api.tzhreefvg.top/api/'
import md5 from 'js-md5';
export default{
	// 请求函数
	request:(url,method,data,sign)=>{
		return new Promise((reslove,reject)=>{		
			let tokens = uni.getStorageSync('token')?uni.getStorageSync('token'):'';
			let times = Math.round(new Date().getTime()/1000).toString();
			let keys = '2zn7s4m0uctu';
			
			uni.request({
				url:baseUrl+url,
				method,
				data,
				header:{
						// 	'Content-Type':'multipart/form-data',
						'token':tokens,
						 'sign':md5(tokens+'&'+keys+'&'+times),
						 'time':times
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