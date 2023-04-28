const baseUrl = 'http://api.tzhreefvg.top/api/'
const baseUrl1 = 'http://www.api.com/api/'
import md5 from 'js-md5';
export default{
	// 请求函数
	request:(url,method,data,type = 1)=>{
    // type用做请求地址判断
    let trueURL = ''
    if(type == 1) {
      trueURL = baseUrl
    }else {
      trueURL = baseUrl1
    }
		return new Promise((reslove,reject)=>{		
			let tokens = uni.getStorageSync('token')?uni.getStorageSync('token'):'';
			let times = Math.round(new Date().getTime()/1000).toString();
			let keys = '2zn7s4m0uctu';
			
			uni.request({
				url:trueURL+url,
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