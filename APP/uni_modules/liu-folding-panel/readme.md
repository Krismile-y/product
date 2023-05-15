### liu-folding-panel适用于uni-app项目的二级树形折叠面板组件
### 本组件目前兼容微信小程序、H5
### 本组件支持自定义二级树形折叠面板，可以折叠/展开的内容区域
### 如使用过程中有问题或有一些好的建议，欢迎qq联系：2364518038

### 使用方式
``` html
<liu-folding-panel :dataList="dataList" @tapChildItem="change"></liu-folding-panel>
```
``` javascript
export default {
	data() {
		return {
			dataList: [{
				name: '一级标题',
				childs: [{
					name: '二级标题'
				}, {
					name: '二级标题'
				}, {
					name: '二级标题'
				}]
			}, {
				name: '一级标题',
				childs: [{
					name: '二级标题'
				}, {
					name: '二级标题'
				}, {
					name: '二级标题'
				}]
			}],
		};
	},
	methods: {
		//点击二级列表
		change(e) {
			console.log('------:' + JSON.stringify(e))
		}
	}
}
```

### 属性说明
| 名称                         | 类型           | 默认值                  | 描述             |
| ----------------------------|--------------- | ---------------------- | ---------------|
| dataList                    | Array          | []                     | 列表信息
| img1                    	  | String         | ''                     | 一级列表图标
| img2                        | String         | ''                     | 二级列表图标



