<template>
  <div class="poster">
    <Header :title="title"></Header>
    <div class="preview-box" ref="imageWrapper" id="preview-box">
      <div class="position-box">
        <div class="result" id="result">
          <img :src="bgImg" alt="" />
          <div class="user-box">
            <div class="content">
              <div class="user-info">
                <div class="user-name">{{ info.nickname }}</div>
                <div class="user-code">Mã mời：{{ info.id_code }}</div>
              </div>
              <img class="qrcode" :src="info.qrcode | imgPath" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bottom-box">
      <div class="poster-list">
        <div class="title">Chọn một nền áp phích</div>
        <div class="list">
          <div class="poster-item" v-for="(item, index) in poster" :key="index">
            <div
              :class="['img-box', index === idx ? 'active' : '']"
              @click="changBg(index)"
            >
              <img :src="item.thumb" />
              <van-icon
                name="checked"
                class="passed"
                size="25px"
                v-if="index === idx"
              />
            </div>
            <div class="poster-name">áp phích{{ index + 1 }}</div>
          </div>
        </div>
      </div>
      <div class="save" @click="toImage" v-if="isWeixinBrowser()">
        <div class="save-btn">lưu áp phích</div>
      </div>
      <div class="save" @click="shareImg" v-else>
        <div class="save-btn">chia sẻ áp phích</div>
      </div>
    </div>

    <van-popup
      v-model="isShowpop"
      :close-on-click-overlay="false"
      class="mask"
      @close="close"
      :closeable="true"
    >
      <div class="details">
        <div v-if="isWeixinBrowser()" class="op-bnt">
          <span>Nhấn và giữ hình ảnh để lưu</span>
        </div>
        <!--                <a :href="imgUrl" download v-else class="op-bnt">-->
        <!--                    <span>保存至相册</span>-->
        <!--                </a>-->

        <a
          ref="download"
          v-else
          :href="downloadUrl"
          :download="downloadfilename"
          >lưu vào album ảnh..</a
        >

        <!--                <div class="op-bnt" v-else @click="download">-->
        <!--                    <span>保存至相册</span>-->
        <!--                </div>-->
        <div class="protocol">
          <img :src="imgUrl" />
        </div>
      </div>
    </van-popup>

    <div id="stockpile" style="height: 0px; overflow: hidden"></div>
  </div>
</template>

<script>
import { myExtension_api, getAds_api } from '_api/user';
import Header from '_com/header/header';
import { imgPath } from '@/libs/filters';
import { Icon, Overlay, Popup, Toast } from 'vant';
import { mapGetters } from 'vuex';
import html2canvas from 'html2canvas';

export default {
  name: 'Share',
  components: {
    [Icon.name]: Icon,
    [Overlay.name]: Overlay,
    [Popup.name]: Popup,
    [Toast.name]: Toast,
    Header,
  },
  data() {
    return {
      showImage: false,
      qrcode: '',
      imgUrl: '',
      isShow: false,
      title: 'áp phích',
      info: {},
      avatar: '',
      logo: require('../../assets/images/login.png'),
      poster: [],
      bgImg: '',
      idx: 0,
      isShowpop: false,
      copyDom: '',
      downloadUrl: null,
      downloadfilename: null,
    };
  },
  filters: {
    imgPath,
  },
  async created() {
    let res = await getAds_api(2);
    this.poster = res.data;
    this.bgImg = res.data[this.idx].thumb;
  },
  async mounted() {
    let res = await myExtension_api();
    this.info = res.info;
    this.qrcode = res.info.qrcode_url;

    if (!this.isWeixinBrowser()) {
      plus.share.getServices(
        s => {
          this.shares = {};
          for (let i in s) {
            let t = s[i];
            this.shares[t.id] = t;
          }
          this.sweixin = this.shares['weixin'];
        },
        e => {
          Toast('Không thể lấy danh sách các dịch vụ chia sẻ：' + e.message);
        },
      );
    }
  },
  computed: {
    ...mapGetters(['wechatUrl']),
  },
  methods: {
    shareImg() {
      let that = this;
      var ids = [
          {
            id: 'weixin',
            ex: 'WXSceneSession' /*微信好友*/,
          },
          {
            id: 'weixin',
            ex: 'WXSceneTimeline' /*微信朋友圈*/,
          },
        ],
        bts = [
          {
            title: 'Gửi cho bạn bè trên WeChat',
          },
          {
            title: 'Chia sẻ với vòng kết nối bạn bè trên WeChat',
          },
        ];
      plus.nativeUI.actionSheet(
        {
          cancel: 'Hủy bỏ',
          buttons: bts,
        },
        function(e) {
          var i = e.index;
          if (i > 0) {
            that.shareAction(ids[i - 1].id, ids[i - 1].ex);
          }
        },
      );
    },
    shareAction(id, ex) {
      let that = this;
      var s = null;
      if (!id || !(s = this.shares[id])) {
        console.log('无效的分享服务');
        Toast('Môi trường hiện tại không hỗ trợ chia sẻ');
        return;
      }
      if (s.authenticated) {
        console.log('---已授权---');
        this.shareMessage(s, ex);
      } else {
        console.log('---未授权---');
        s.authorize(
          function() {
            that.shareMessage(s, ex);
          },
          function(e) {
            console.log('认证授权失败');
          },
        );
      }
    },
    shareMessage(s, ex) {
      let that = this;
      var msg = {
        content: 'https://api.btcexvip.top/#/posterShare',
        href:
          'https://api.btcexvip.top/#/posterShare?nickname=' +
          this.info.nickname +
          '&id_code=' +
          this.info.id_code +
          '&qrcode=' +
          this.info.qrcode +
          '&bgImg=' +
          this.bgImg,
        title: 'chia sẻ áp phích',
        thumbs: [this.logo],
        pictures: [this.logo],
        extra: {
          scene: ex,
        },
      };
      console.log('分享s', s);
      s.send(
        msg,
        function() {
          Toast('chia sẻ thành công!');
        },
        function(e) {
          Toast('chia sẻ không thành công!');
        },
      );
    },
    toImage() {
      location.href =
        'https://api.btcexvip.top/#/posterShare?nickname=' +
        this.info.nickname +
        '&id_code=' +
        this.info.id_code +
        '&qrcode=' +
        this.info.qrcode +
        '&bgImg=' +
        this.bgImg;
      // this.imgUrl = '';
      // var targetDom = document.getElementById("result");
      // this.copyDom = targetDom.cloneNode(true);
      // this.copyDom.style.width = targetDom.offsetWidth + "px";
      // this.copyDom.style.height = targetDom.offsetHeight + "px";
      // document.getElementById('stockpile').append(this.copyDom);
      // // document.body.append(this.copyDom);
      // // let a = document.getElementsByTagName('body')[0].childNodes[10];
      // let a = document.getElementById('stockpile').childNodes[0];
      // // this.$toast('生成图片中...');
      // html2canvas(a, {
      //     useCORS: true,
      // }).then(canvas => {
      //     let dataURL = canvas.toDataURL("image/png");
      //     this.imgUrl = dataURL;
      //     if (this.imgUrl !== "") {
      //         this.isShow = true;
      //     }
      //     this.isShowpop = true;
      //     // this.$toast.hide();
      // });
    },
    isWeixinBrowser() {
      let ua = navigator.userAgent.toLowerCase();
      return /micromessenger/.test(ua) ? true : false;
    },
    changBg(index) {
      this.bgImg = this.poster[index].thumb;
      this.idx = index;
    },
    close() {
      // document.body.removeChild(this.copyDom);
      document.getElementById('stockpile').removeChild(this.copyDom);
    },
  },
};
</script>

<style lang="stylus" scoped src="./poster.styl"></style>
