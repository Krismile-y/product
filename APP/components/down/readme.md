# 部分机型安装失败问题
检查manifest的配置，基本上都是因为手机上已经存在冲突包名的app，但版本或签名证书不对导致安装失败 如果还是存在这类问题，那大概是手机装的，摔一顿就好了（去社区提问，应该会有uniapp管理员来回答）

# 该插件是一个组件，并非不完整
下载插件，解压导入(import)项目，并不是直接导入到Hbuilderx

# 记得添加权限
## Android - 2.2+ (支持) :
### 安装apk需添加以下权限：
```xml
"<uses-permission android:name="android.permission.INSTALL_PACKAGES"/>"
"<uses-permission android:name="android.permission.REQUEST_INSTALL_PACKAGES"/>"
```
参考：https://ask.dcloud.net.cn/article/36982。
### iOS - 4.3+ (支持) :
不支持ipa包的安装，需跳转appsotre引导用户手动操作安装。

# 绝对路径问题

记得使用这个函数来转一下路径；

```js
const url =  plus.io.convertLocalFileSystemURL( url );
```