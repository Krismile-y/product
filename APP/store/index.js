import Vue from 'vue'

import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
		//公共的变量，这里的变量不能随便修改，只能通过触发mutations的方法才能改变
		one:true,
		two:false,
		three:false,
		four:false,
		x:"",
		y:"",
		kefu:"",
    // 底部导航栏样式改变控制，默认选中首页
    current: 0,
	},
    mutations: {
		//相当于同步的操作
		x(state,data){
			state.x=data
		},
		y(state,data){
			state.y=data
		},
		kefu(state,data){
			state.kefu=data
		},
	},
    actions: {
		//相当于异步的操作,不能直接改变state的值，只能通过触发mutations的方法才能改变
	}
})
export default store
