<template>
  <div class="share-page">
    <div class="img">
      <img v-show="showImage" :src="qrcode" @load="onImgLoaded()" />
    </div>
    <p class="text">Sau khi quét mã QR để theo dõi tài khoản chính thức, mối quan hệ có thể bị ràng buộc</p>
    <cube-loading v-show="!showImage"></cube-loading>
  </div>
</template>

<script>
import { getShareImg_api } from '_api/user';
import { imgPath } from '@/libs/filters';
import { getWxJSSDK_api } from '_api/goods';
import { mapGetters } from 'vuex';
import wx from 'weixin-js-sdk';
import { isIos } from '@/libs/utils';
import { shareURL } from '@/config';

export default {
  name: 'Share',
  data() {
    return {
      showImage: false,
      qrcode: '',
    };
  },
  created() {
    setTimeout(async () => {
      let res = await getShareImg_api();
      this.qrcode = imgPath(res);
    }, 300);
  },
  mounted() {
    this._getWxConfig();
  },
  computed: {
    ...mapGetters(['userInfo', 'wechatUrl']),
  },
  methods: {
    onImgLoaded() {
      this.showImage = true;
    },
    async _getWxConfig() {
      let url;
      let _this = this;
      if (isIos()) {
        url = this.wechatUrl || location.href;
      } else {
        url = location.href;
      }
      let { id } = await this.$store.dispatch('getUserInfo');
      // let path = location.href.split('#')[0];
      let data = await getWxJSSDK_api(url);
      let { appId, timestamp, nonceStr, signature } = data;
      wx.config({
        appId,
        timestamp,
        nonceStr,
        signature,
        debug: false,
        jsApiList: ['updateAppMessageShareData', 'updateTimelineShareData'],
      });
      wx.ready(function() {
        // _this.$toastBounce('wx:config注入成功');
        // 自定义“分享给朋友”及“分享到QQ”按钮的分享内容
        wx.updateAppMessageShareData({
          title: '华腾云品', // 分享标题
          desc: '你的好友邀请你关注黔山刺梨商城！', // 分享描述
          link: shareURL + '?#/home/' + id, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
          imgUrl:
            'https://img14.360buyimg.com/n2/s240x240_jfs/t1/38376/31/12243/397999/5d36c0b0E4fe67576/ad031fec5819110f.jpg!q70.jpg', // 分享图标
          success: function() {
            // 设置成功
            console.log('updateAppMessageShareData');
          },
        });
        // 自定义“分享到朋友圈”及“分享到QQ空间”按钮的分享内容
        wx.updateTimelineShareData({
          title: '华腾云品', // 分享标题
          link: shareURL + '?#/home/' + id, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
          imgUrl:
            'https://img14.360buyimg.com/n2/s240x240_jfs/t1/38376/31/12243/397999/5d36c0b0E4fe67576/ad031fec5819110f.jpg!q70.jpg', // 分享图标
          success: function() {
            // 设置成功
            console.log('updateTimelineShareData');
          },
        });
      });
      wx.error(function(res) {
        console.log(res);
        // _this.$toastBounce('wx:config注入失败');
      });
    },
  },
};
</script>

<style lang="stylus" scoped>
.share-page
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
img
  width 200px
  height 200px
  box-shadow: 0 0 3px #6859C7;
.cube-loading
  position absolute
  left 50%
  top 50%
  transform translate(-50%, -50%)
  color #fff
.text
  font-size: 15px
  color: #000
  margin-top: 50px
</style>
