import axios from 'axios';
import axios2 from '../api/request_two'
// import MescrollVue from 'mescroll.js/mescroll.vue';
export default {
  // components: {
  //   MescrollVue,
  // },
  data() {
    return {
      params: {},
      isInit: false, // 是否延迟 350s 获取数据
      requestInit: true,
      queryList: {},
      dataList: [],
      mescrollDown: {
        auto: false,
        offset: 60,
        callback: this.downCallback,
        inited: this._inited,
        afterLoading: this._onAfterLoading,
        htmlContent:
          '<div class="down-loading"><p class="downwarp-progress"></p><p class="downwarp-tip"></p></div><p class="down-success">đã được làm mới</p>', // 布局内容
      },
      mescrollUp: {
        // 上拉加载的配置.
        callback: (page, mescroll) => {
          if (this.isInit) {
            setTimeout(() => {
              console.log('init');
              this.upCallback(page, mescroll);
              this.isInit = false;
            }, 350);
          } else {
            this.upCallback(page, mescroll);
          }
        },
        page: {
          num: 0,
          size: 10,
        },
        isBounce: false,
        // htmlNodata: '<p class="upwarp-nodata">-- 没有更多数据了 --</p>',
        lazyLoad: {
          use: true,
        },
        toTop: {
          src: require('../assets/images/mescroll-topTop.png'),
        },
        empty: {
          warpId: 'listWrap',
          icon: require('../assets/images/mescroll-empty.png'),
          tip: 'Không có dữ liệu liên quan ~', //提示
          btntext: 'Làm mới thử xem >', //按钮,默认""
          btnClick: () => {
            this.mescroll.resetUpScroll();
          },
        },
      },
    };
  },
  created() {
    const userId = JSON.parse(sessionStorage.getItem('userInfo')).id;
    axios2.post('api/shoppingCarList', {
      user_id: userId,
      page: 0,
      limit: 10,
      type: 0,
      ...this.queryList,
    }).then(res => {
      console.log(res);
    })
  },
  beforeRouteEnter(to, from, next) {
    // 如果没有配置回到顶部按钮或isBounce,则beforeRouteEnter不用写
    next(vm => {
      // 找到当前mescroll的ref,调用子组件mescroll-vue的beforeRouteEnter方法
      vm.$refs.mescroll && vm.$refs.mescroll.beforeRouteEnter(); // 进入路由时,滚动到原来的列表位置,恢复回到顶部按钮和isBounce的配置
    });
  },
  beforeRouteLeave(to, from, next) {
    // 如果没有配置回到顶部按钮或isBounce,则beforeRouteLeave不用写
    // 找到当前mescroll的ref,调用子组件mescroll-vue的beforeRouteLeave方法
    this.$refs.mescroll && this.$refs.mescroll.beforeRouteLeave(); // 退出路由时,记录列表滚动的位置,隐藏回到顶部按钮和isBounce的配置
    next();
  },
  methods: {
    mescrollInit(mescroll) {
      this.mescroll = mescroll;
    },
    async upCallback({ num, size }, mescroll) {
      try {
        if (this.requestInit && this._requestBeforeOnceInit) {
          await this._requestBeforeOnceInit();
          this.requestInit = false;
        }

        try {
          this._requestBefore && this._requestBefore();
        } catch (error) {
          console.log(error);
        }
        const userId = JSON.parse(sessionStorage.getItem('userInfo')).id;
        let params = {
          user_id: userId,
          page: num + '',
          limit: size,
          type: 0,
          ...this.queryList,
        };
        console.log(this.queryList);
        console.log(this.queryList.status)
        // 判断全部订单还是待付款待发货还是待收货还是评价
        switch(this.queryList.status) {
          case 5:
            params.type = null;
            this.params.type = null;
            break;
          case 1:
            params.type = 99;
            this.params.type = 0;
            break;
          case 2:
            params.type = 1;
            this.params.type = 1;
            break;
          case 3:
            params.type = 2;
            this.params.type = 2;
            break;
          case 4:
            params.type = 3;
            this.params.type = 3;
            break;
          default:
            console.log('没有类型了!')
        }

        this.params = params;

        let CancelToken = axios.CancelToken;
        let res = await this.getList_api(
          params,
          new CancelToken(c => (this.cancel = c))
        );
        console.log(res);

        let list = res.list ? res.list : res.data.list ? res.data.list : res.data.data;
        if (num === 1) this.dataList = [];

        try {
          this._requestAfter && this._requestAfter(list, res);
        } catch (error) {
          console.log(error);
        }
        this.dataList = this.dataList.concat(list);
        console.log(this.dataList);
        await this.$nextTick();
        mescroll.endSuccess(list.length);
      } catch (error) {
        if (error !== 'cancel') {
          mescroll.endErr();
        }
      }
    },
    // 下拉刷新
    downCallback(mescroll) {
      setTimeout(() => {
        this.onDownPullRefresh && this.onDownPullRefresh();
        mescroll.resetUpScroll();
      }, 300);
    },
    _inited(mescroll, downwarp) {
      mescroll.downTipDom = downwarp.getElementsByClassName('downwarp-tip')[0];
      mescroll.downProgressDom = downwarp.getElementsByClassName(
        'downwarp-progress',
      )[0];
      mescroll.downLoading = downwarp.getElementsByClassName('down-loading')[0];
      mescroll.downSuccess = downwarp.getElementsByClassName('down-success')[0];
    },
    _onAfterLoading(mescroll) {
      mescroll.downLoading.style.display = 'none';
      mescroll.downSuccess.style.display = 'block';
      setTimeout(() => {
        setTimeout(() => {
          mescroll.downSuccess.style.display = 'none';
          mescroll.downLoading.style.display = 'block';
        }, 300);
      }, 600);
      return 600;
    },
  },
};
