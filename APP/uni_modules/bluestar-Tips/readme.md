# bluestar-Tips

## 消息提示

## 引入

在 script 标签中引入组件

```typescript
//使用HBuilderX导入插件
import Tips from '@/uni_modules/bluestar-Tips/components/bluestar-Tips/bluestar-Tips.vue'
```

## 代码演示

```html
<template>
  <Tips ref="toast" position="top" backgroundColor="59bb73" color="#ffffff" size="30"></Tips>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const toast = ref()

const tipClick = () => {
  toast.value.showTips({
    msg: '成功消息提示',
    duration: 2000
  })
}
</script>
```

## API

#### Props

| 参数            | 说明                       | 类型              | 默认值  |
| :-------------- | :------------------------- | :---------------- | :------ |
| position        | 显示位置:top,bottom,center | `String`          | top     |
| backgroundColor | 提示框背景颜色             | `String`          | #4c4c4c |
| color           | 提示文本颜色               | `String`          | #ffffff |
| size            | 提示文本字体大小           | `Number` `String` | 30      |

#### Methods

| 方法名   | 说明         | 传入参数                                                                          |
| :------- | :----------- | :-------------------------------------------------------------------------------- |
| showTips | 显示提示消息 | 参数类型:Object { msg:"成功消息提示", //提示信息  duration: 3000  //显示时长 ms } |

## 作者

![](https://img.shields.io/static/v1?label=蓝星软件&message=@dingxueqiang&labelColor=0E75FC)
