import $http from '@/common/request.js'


const request = {
	login(params) {
		return $http.post('/login/index', params)
	},
	//忘记密码
	forgetPassword(params) {
		return $http.post('/login/forget', params)
	},
	//退出
	logout(params) {
		return $http.post('/login/out', params)
	},
	//注册
	register(params) {
		return $http.post('/login/register', params)
	},
	//测试账号
	registerTest(params) {
		return $http.post('/login/register_test', params)
	},
	//更新账号
	updatePhone(params) {
		return $http.post('/login/update_phone', params)
	},
	
	
}

export default request