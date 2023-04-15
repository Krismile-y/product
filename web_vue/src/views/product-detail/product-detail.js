// import { getGoodsById_api, getWxJSSDK_api } from '_api/goods';
import { getGoodsById_api } from '_api/goods';
// import { addCart_api, getComments_api } from '_api/order';
import { addCart_api } from '_api/order';
import ZuiSlide from '_com/zui-slide/zui-slide';
import ZuiPopup from '_com/popup/popup';
import NumberControl from '_com/number-control/number-control';
import userLevel from '@/mixins/userLevel';
import LoadMore from '_com/load-more/load-more';
import ShopCartIcon from '_com/shop-cart-icon/shop-cart-icon';
import { imgPath } from '@/libs/filters';
import wx from 'weixin-js-sdk';
import { isIos } from '@/libs/utils';
import { shareURL } from '@/config';
import { mapGetters } from 'vuex';
import SKUMixin from '@/mixins/SKUMixin';
import { Icon } from 'vant';
import { getUserInfo_api } from '../../api/user';
import axios from '../../api/request_two';

export default {
  name: 'ProductDetail',
  mixins: [userLevel, SKUMixin],
  inject: {
    refreshParentData: {
      default: () => {},
    },
  },
  components: {
    ZuiSlide,
    ZuiPopup,
    NumberControl,
    LoadMore,
    ShopCartIcon,
    [Icon.name]: Icon,
  },
  data() {
    return {
      kefuUrl: '', // 点击客服的url
      tabIndex: 0,
      tabData: ['详情', '评论'],
      quantity: 1,
      product: {
        fx_profit: 0,
        buy_profit: 0,
        big_thumb: require('../../assets/images/default-img.png'),
        imglist: [],
      },
      buttonType: '', // 点击哪个按钮打开选择规格
      visiblePopup: false,
      comments: [],
      commentsBefore: [],
      isMore: true,
      queryList: {
        page: 1,
        page_size: 20,
      },
      isAddCart: true,
      isAni: true,
      cartActive: false,
      visibleShare: false,
      is_miaosha: '',
      tip: '',
	  
    };
  },
  beforeCreate() {
    this.$pageLoading();
  },
  created() {
    this.getKeFuUrl()
    let orderId = this.$route.params.id;
    this.orderId = orderId;
    console.log('orderId',orderId)
    setTimeout(async () => {
      this._loadData();
      // this._getComments();
      this.$refs.scroll.addEventListener('scroll', this._bindScrollEvent);
    }, 350);
    // console.log('product',product)
  },
  filters: {
    imgPath,
    vipDengji(value) {
      console.log(value);
      switch(value) {
        case 1:
          return ''
        case 2:
          return '多宝金'
        case 3:
          return '1'
        case 4:
          return '2'
        case 5:
          return '3'
        case 6:
          return '4'
        case 7:
          return '5'
      }
    },
  },
  computed: {
    ...mapGetters(['wechatUrl']),
  },
  directives:{trigger:{inserted(el,binging){el.click()}}},
  methods: {
    formaterMoney(money) {
      if (money && money != null) {
        money = String(money);
        var left = money.split('.')[0], right = money.split('.')[1];
        // right = right ? (right.length >= 2 ? '.' + right.substr(0, 2) : '.' + right + '0') : '.000';
        right =  '.000';

        var temp = left.split('').reverse().join('').match(/(\d{1,3})/g);
        return (Number(money) < 0 ? "-" : "") + temp.join('.').split('').reverse().join('') ;
      } else if (money === 0) {   //注意===在这里的使用，如果传入的money为0,if中会将其判定为boolean类型，故而要另外做===判断
        return '0.000';
      } else {
        return "";
      }
    },
    // 获取客服的url
    async getKeFuUrl() {
      let res = await axios.post('api/index/kf_url')
      if (res.data.code === 200) {
        this.kefuUrl = res.data.data
      } else {
        this.$toastBounce('获取客服信息失败!')
      }
    },
    async _loadData() {
      let product = await getGoodsById_api(this.orderId);
      console.log('product2',product)
      // 替换
      product.desc = product.desc.replaceAll('<strong>', '<strong style="font-weight: 800;">')
      product.desc = product.desc.replaceAll('<img', '<img  width="100%" ')
      product.thumb = 'https://' + imgPath(product.thumb).split('//')[1];
      product.big_thumb = 'https://' + imgPath(product.big_thumb).split('//')[1];
      console.log('product.big_thumb',product.big_thumb);
      console.log('product.desc',product.desc);
      this.is_miaosha = product.is_miaosha;
      this.tip = localStorage.getItem('tip');
      product.imglistall.forEach(item => {
        item.thumb = imgPath(item.thumb);
      });
      if (product.val.length) {
        this._haveSpec(product);
      } else {
        this._noSpec(product);
      }
      this.selectedImg = product.thumb;
      this.product = product;
	  console.log(this.product,'--------------------------------**************************')
      console.log('product',product)
      // this._getWxConfig();
      this.$pageLoading.hide();
      //评论
      this.commentsBefore = product.comment;
      console.log(this.commentsBefore);
      this.isLoading = true;
      let { page, page_size } = this.queryList;
      let list = this.commentsBefore;
      if (list.length < page_size) {
        console.log('没有下一页');
        // 没有下一页
        this.isMore = false;
      } else {
        console.log('还有下一页');
        // 还有下一页
        this.isMore = true;
      }
      // this.comments = this.comments.concat(list);
      this.comments = [...this.comments,...list];
	  console.log(this.comments,'pppppppppppppppppppppp')
      // 处理图片
      for (let item of this.comments) {
        item.user.head_img = 'https://api.btcexvip.top/' + item.user.head_img
      }
      console.log(this.comments);
      this.isLoading = false;
    },
    _bindScrollEvent() {
      if (this.tabIndex === 1 && this.isMore && !this.isLoading) {
        const windowH = window.innerHeight;
        const { top } = this.$refs.loadMore.$el.getBoundingClientRect();
        if (top < windowH) {
          this.queryList.page++;
          this._getComments();
        }
      }
    },
    // 增加数量
    onPlus() {
      if (this.quantity >= this.stock) {
        this.$toastBounce('Hết hàng');// 商品库存不足
        return;
      }
      this.quantity++;
    },
    
    handleSubmit() {
      // 拿到规格索引
      const ggIndex = parseInt(sessionStorage.getItem('guigeIndex'))
      
      if (!this._validate()) return;
      if (this.buttonType == 'cart') {
        // 加入购物车
        if (this.isAddCart && this.isAni) {
          this._addShopCart(ggIndex);
        }
      } else {
        this._placeOrder(ggIndex);
      }
    },
    // 加入购物车
    async _addShopCart(ggIndex) {
      this.isAddCart = false;
      try {
        if (this.quantity > this.stock) {
          this.$toastBounce('Hết hàng'); // 商品库存不足
          return;
        }
        let { id } = this.product;

        // console.log('let { id }',id)
        let sku_id = this.selectedIds.join();
        console.log('sku_id',sku_id);
        var tip = localStorage.getItem('tip');
        // 根据规格索引拿到改规格数据
        const guigeData = this.product.val[ggIndex]
        console.log('guigeData',guigeData);
        const userId = JSON.parse(sessionStorage.getItem('userInfo')).id;
        let params = {
          spec_id: guigeData.id
          , // 规格id
          user_id: userId,
          goods_id: id,
          number: this.quantity,
        };
        console.log('params',params)
        let res = await axios.post('api/addShoppingCar', params);
        console.log('res',res)
        if (res.data.code !== 200) {
          this.$toastBounce(res.data.msg);
          return false
        }
        this.$store.commit('setShopCartCount', res.data.data);
        this.isAddCart = true;
        console.log('count', res.data.data);
      } catch (error) {
        this.isAddCart = true;
      }
      this._addCartAni();
    },
    // 直接购买
    async _placeOrder(ggIndex) {
      if (this.quantity > this.stock) {
        this.$toastBounce('Hết hàng'); // 商品库存不足
        return;
      }
      const {
        id,
        thumb,
        goods_name,
        buy_profit,
        postage_money,
        sell_price,
        exchange_score,
        pf_price,
        pf_switch,
        is_exchange,
      } = this.product;
      let sku_id = this.selectedIds.join();
      let paymentGoods = [
        {
          sku_id,
          goods_id: id,
          thumb,
          goods_name,
          price: sell_price,
          buy_profit,
          number: this.quantity,
          postage_money,
          pf_switch: pf_switch,
          exchange_score: exchange_score,
          pf_price: sell_price,
          tip: localStorage.getItem('tip'),
          nowPrice: sell_price,
        },
      ];
      console.log(paymentGoods);
      // 根据规格索引拿到规格数据
      const guigeData = this.product.val[ggIndex]
      console.log(guigeData);
      sessionStorage.setItem('paymentGoods', JSON.stringify(paymentGoods));
      console.log(this.product);
      // 点击确定之后调用接口zhijie_goumai_toorder
      let res = await axios.post('api/pay/zhijie_goumai_toorder', {
        user_id: JSON.parse(sessionStorage.getItem('userInfo')).id,
        goods_id: guigeData.goods_id,
        sum: paymentGoods[0].number,
        spec_id: guigeData.id
      })
      if (res.data.code === 200) {
        res.data.data.list[0].goods_id = guigeData.goods_id
        res.data.data.list[0].spec_id = guigeData.id
      } else {
        this.$toastBounce(res.data.msg)
        return
      }
      console.log(res.data);

      let payData = []
      if (res.data.data.pay_type === 1) {
        payData = [
          {
            id: 4,
            content: 'Thanh toán số dư',
          },
          {
            id: 1,
            content: 'Thanh toán qua Momo',
          },
          {
            id: 2,
            content: 'Thanh toán bằng Zalopay',
          },
          {
            id: 3,
            content: 'Thanh toán bằng thẻ ngân hàng',
          },
        ]
      } else if (res.data.data.pay_type === 2) {
        payData = [
          {
            id: 5,
            content: 'Thanh toán bằng DOBO GOLD',
          },
        ]
      }
      this.$router.push({
        path: '/place-order',
        query: {
          payData: JSON.stringify(payData),
          guigeData: JSON.stringify(res.data.data.list),
          zhijiegoumaiFlag: '1'
        }
      });
    },
    // 购物车动画
    _addCartAni() {
      this.isAni = false;
      const { selectGoods, cartIcon, inner } = this.$refs;
      let endPoint = cartIcon.$el
        .querySelector('#cartIcon')
        .getBoundingClientRect();
      let startPoint = selectGoods.getBoundingClientRect();
      let x =
        endPoint.left -
        startPoint.left -
        startPoint.width / 2 +
        endPoint.width / 2;
      let y =
        endPoint.top -
        startPoint.top -
        startPoint.height / 2 +
        endPoint.height / 2;

      inner.style.transition = 'all 0.4s linear';
      selectGoods.style.transition =
        'transform 0.4s cubic-bezier(0,.88,.86,1.39)';
      selectGoods.style.transform = `translate3d(0,${y}px,0)`;
      inner.style.borderRadius = '50%';
      inner.style.transform = `translate3d(${x}px,0,0) scale(0.1) rotate(360deg)`;
      setTimeout(() => {
        this.cartActive = true;
        inner.style.transition = 'none';
        selectGoods.style.transition = 'none';
        selectGoods.style.transform = 'translate3d(0,0,0)';
        inner.style.borderRadius = '10px';
        inner.style.transform = 'translate3d(0px,0,0) scale(1) rotate(0deg)';
        this.isAni = true;
        setTimeout(() => {
          this.cartActive = false;
        }, 300);
      }, 400);
    },
    // 显示选择规格
    handleShowSpec(type) {
     
      if(sessionStorage.getItem('token')){
        this.visiblePopup = true;
        this.buttonType = type;
      }else{
       this.$router.push('/login')
      }
     
    },
    // 分享
    async _getWxConfig() {
      let _this = this;
      let path = '';
      let { id } = await this.$store.dispatch('getUserInfo');
      let { user_id } = this.$route.params;
      let fullPath = this.$route.fullPath;
      let { big_thumb } = this.product;
      if (user_id) {
        // 去掉 user_id 参数
        // 拼接上当前的用户 id
        path =
          fullPath
            .split('/')
            .slice(0, -1)
            .join('/') +
          '/' +
          id;
      } else {
        path = fullPath + '/' + id;
      }
      // 自定义“分享给朋友”及“分享到QQ”按钮的分享内容
      wx.updateAppMessageShareData({
        title: '商品分享', // 分享标题
        desc: this.product.goods_name, // 分享描述
        link: shareURL + '/?#' + path, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
        imgUrl: big_thumb, // 分享图标
        success: function() {
          // 设置成功
          console.log('updateAppMessageShareData');
        },
      });
      // 自定义“分享到朋友圈”及“分享到QQ空间”按钮的分享内容
      wx.updateTimelineShareData({
        title: '商品分享', // 分享标题
        link: shareURL + '/?#' + path, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
        imgUrl: big_thumb, // 分享图标
        success: function() {
          // 设置成功
          console.log('updateTimelineShareData');
        },
      });
      wx.error(function(res) {
        console.log(res);
        // _this.$toastBounce('wx:config注入失败');
      });
    },
    service() {
      // window.location.href = 'tel:' + this.product.phone;
      window.location.href = this.kefuUrl;
    },
  },
  beforeRouteLeave(to, from, next) {
    if (this.visiblePopup && to.path !== '/place-order') {
      this.visiblePopup = false;
      next(false);
    } else {
      next();
    }
  },
};

