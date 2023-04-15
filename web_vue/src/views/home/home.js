import {
  getHomeGoods_api,
  getHomeBanner_api,
  // getHomeModule_api,
  getHomeNotice_api,
  getHeatGoodsList_api
} from '_api/goods';

import IconList from '_com/icon-list/icon-list';
import TopSearch from '_com/top-search/top-search';
import ZuiSlide from '_com/zui-slide/zui-slide';
import productListMixin from '@/mixins/productListMixin';
import { imgPath } from '@/libs/filters';
import { NoticeBar, Dialog } from 'vant';
import { getVersion_api } from '_api/goods';
import mui from 'vue-awesome-mui';
export default {
  name: 'Home',
  mixins: [productListMixin],
  components: {
    IconList,
    TopSearch,
    ZuiSlide,
    NoticeBar,
    [Dialog.name]: Dialog,
  },
  data() {
    return {
      hotList: [],
      bannerList: [],
      getList_api: getHomeGoods_api,
      notice: '',
      //公告内容
      textArr: [],
      animate: false,
      mescrollUp: {
        toTop: {
          warpId: 'homeToTopWrap',
        },
      },
      categoryList: [
        {
          cate_name: '云店入驻',
          sort: 0,
          path: '/storeCheckIn',
          thumb: '../../views/home/images/qian.png',
        },
        {
          cate_name: '云店批发',
          sort: 1,
          path: '/storeWholesale',
          thumb: '../../views/home/images/huo.png',
        },
        {
          cate_name: '黔宝专区',
          sort: 2,
          path: '/good-list/1',
          thumb: '../../views/home/images/chu.png',
        },
        {
          cate_name: '每日签到',
          sort: 3,
          path: '/signIn',
          thumb: './images/shan.png',
        },
      ],
      //批发 4
      PF: '{"plate_id":5,"name":"Cửa hàng bán buôn","is_exchange":"","tip":4}',
      QB: '{"is_exchange":1,"name":"Khu vực Đa Bảo","plate_id":"","tip":2}',
      LY: '{"is_exchange":4,"name":"Đổi tour","plate_id":"","tip":2}',
      TG: '{"is_exchange":5,"name":"Khu vực thành viên","plate_id":"","tip":5}',
      JF: '{"is_exchange":6,"name":"Điểm Đổi","plate_id":"","tip":5}',
    };
  },
  async created() {
    
    this._loadData();
    setInterval(this.scroll, 5000);
    localStorage.setItem('tip', 1);
    let that = this;
    this.hotList =await getHeatGoodsList_api()
     
     console.log('hotList111111',this.hotList)
    if (!this.isWeixinBrowser()) {
      if (/(Android)/i.test(navigator.userAgent)) {
        mui.plusReady(() => {
          // 获取当前版本号，在和服务器的版本号相比较
          let wgtVer;
          plus.runtime.getProperty(plus.runtime.appid, function(inf) {
            wgtVer = inf.version;
            that.getVersion(wgtVer);
          });
        });
      }
    }
     

  },
  methods: {
    formaterMoney(money) {
      if (money && money != null) {
        money = String(money);
        var left = money.split('.')[0], right = money.split('.')[1];
        // right = right ? (right.length >= 2 ? '.' + right.substr(0, 2) : '.' + right + '0') : '.000';
        right =  '.000';

        var temp = left.split('').reverse().join('').match(/(\d{1,3})/g);
        return (Number(money) < 0 ? "-" : "") + temp.join('.').split('').reverse().join('');
      } else if (money === 0) {   //注意===在这里的使用，如果传入的money为0,if中会将其判定为boolean类型，故而要另外做===判断
        return '0.000';
      } else {
        return "";
      }
    },
    handleClick() {
      console.log(mui);
      this.$toastBounce('暂无开放');
    },
    async _loadData() {
      let bannerPromise = getHomeBanner_api();
      let noticeRes = await getHomeNotice_api();
      let bannerList = await bannerPromise;
      bannerList.data.forEach(item => {
        item.thumb = imgPath(item.thumb);
      });
      for (let item of bannerList.data) {
        item.thumb = 'https://' + item.thumb.split('//')[1]
      }
      this.bannerList = bannerList.data;
      // 公告
      // this.notice = noticeRes.data[0].title;
      // this.categoryList = categoryList;
      // 多个公告
      console.log(noticeRes);
      for (let item of noticeRes) {
        this.notice += `${item.title}\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0`
      }
      console.log(this.notice);
    },
    // 检测运行环境
    isWeixinBrowser() {
      let ua = navigator.userAgent.toLowerCase();
      return /micromessenger/.test(ua) ? true : false;
    },
    // app更新
    async getVersion(wgtVer) {
      let res = await getVersion_api();
      console.log('更新res', res.data);
      if (this.compareVersion(wgtVer, res.data.version_code)) {
        Dialog.confirm({
          title: '提示',
          message: '发现新版本，是否更新？',
        })
          .then(() => {
            plus.nativeUI.showWaiting('下载新版本...');
            let dtask = plus.downloader.createDownload(
              res.data.apk_url,
              {},
              (d, status) => {
                console.log('status=>>>>', status);
                if (status === 200) {
                  // 下载成功
                  let path = d.filename;
                  plus.runtime.install(path); // 安装下载的apk文件
                } else {
                  // 下载失败
                  this.$toast({
                    type: 'text',
                    content: '下载失败',
                    time: 2000,
                  });
                }
                plus.nativeUI.closeWaiting();
              },
            );
            dtask.start();
          })
          .catch(() => {});
      }
    },

    compareVersion(ov, nv) {
      // ov为本地历史版本,nv为当前线上版本
      console.log('旧版本' + ov);
      console.log('新版本' + nv);
      if (!ov || !nv || ov == '' || nv == '') {
        return false;
      }
      let ova = ov.split('.');
      let nva = nv.split('.');
      for (let i = 0; i < ova.length && i < nva.length; i++) {
        let so = ova[i];
        let no = parseInt(so);
        let sn = nva[i];
        let nn = parseInt(sn);
        if (nn > no || sn.length > so.length) {
          return true;
        } else if (nn < no) {
          return false;
        }
      }
      if (nva.length > ova.length && 0 == nv.indexOf(ov)) {
        return true;
      }
    },
  },
};
