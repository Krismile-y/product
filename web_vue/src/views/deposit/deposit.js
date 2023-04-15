import Header from '_com/header/header';
import { Tab, Tabs } from 'vant';
import meScrollTab from '@/mixins/meScrollTab';
import { imgPath } from '@/libs/filters';
import { jishouList_api } from '_api/order';

export default {
  mixins: [meScrollTab],
  components: {
    Header,
    [Tab.name]: Tab,
    [Tabs.name]: Tabs,
  },
  data() {
    return {
      title: 'Gửi hàng của tôi',
      active: 0,
      tabs: ['Đang bán', 'Gửi hàng', 'Gửi hàng thành công'],
      getList_api: jishouList_api,
      now_time: '',
    };
  },
  created() {},
  filters: {
    imgPath,
  },
  methods: {
    _endTime(date) {
      console.log(date);
      let newDate = date.replace(/\-/g, '/');
      let d = new Date(newDate);
      let t = d.getTime();
      let time = Number(this.now_time * 1000);
      let endTime = Number(t);
      let lag = (time - endTime) / 1000;
      let second = Math.floor(lag % 60);
      let minute = Math.floor((lag / 60) % 60);
      let hour = Math.floor((lag / 3600) % 24);
      let day = Math.floor(lag / 3600 / 24);
      if (minute <= 9) minute = '0' + minute;
      if (second <= 9) second = '0' + second;
      let temp = day + '天 ' + '：' + hour + ' ：' + minute + ' ：' + second;
      return temp;
    },
    _requestAfter(list, res) {
      this.now_time = res.now_time;
    },
    _requestBefore() {
      this.queryList = {
        js_status: this.active + 1,
      };
    },
    changeTab() {
      this.mescroll.resetUpScroll();
      this.mescroll.hideTopBtn();
    },
  },
};
