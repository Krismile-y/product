import SKU from '@/libs/SKU';
import { getUserInfo_api } from '../api/user';

export default {
  data() {
    return {
      nowPrice: 0,
      stock: 0,
      cacheData: {
        nowPrice: 0,
        stock: 0,
      },
      SKUResult: {},
      selectedIds: [],
      selectedSpec: [],
      lastClickSpec: {}, // 最后一次点击的规格
      selectedImg: '', // 选中的规格图片
      userInfo: {},
    };
  },
  async created() {
    // let res = await getUserInfo_api();
    // this.userInfo = res;
  },
  watch: {
    // selectedSpec(newVal) {
    //   console.log(newVal);
    //   if (newVal.length === 0) {
    //     this.selectedImg = this.product.thumb;
    //     return;
    //   }
    //   let currentId = this.lastClickSpec.id;
    //   console.log(this.selectedSpec);
    //   let bool = this.selectedSpec.find(item => item.id == currentId);
    //   if (bool) {
    //     console.log('有');
    //     console.log(this.product);
    //     let curImg = this.product.imglist.find(
    //       item => item.spec_item_id == currentId,
    //     );
    //     if (curImg) {
    //       this.selectedImg = curImg.thumb;
    //     } else {
    //       console.log('没有规格图片');
    //       this.selectedImg = this.product.thumb;
    //     }
    //   } else {
    //     console.log('没有');
    //     if (this.selectedSpec.length > 0) {
    //       let curImg = this.product.imglist.find(
    //         item => item.spec_item_id == this.selectedSpec[0].id,
    //       );
    //       if (curImg) {
    //         this.selectedImg = curImg.thumb;
    //       } else {
    //         console.log('没有规格图片');
    //         this.selectedImg = this.product.thumb;
    //       }
    //     }
    //   }
    // },
  },
  computed: {
    // 是否有规格
    isSpec() {
      let { val } = this.product;
      if (val && val.length > 0) {
        return true;
      } else {
        return false;
      }
    },
    // 选中的规格索引
    selectedIndex() {
      let temp = [];
      this.selectedSpec.forEach(item => {
        temp.push(item.index);
      });
      return temp;
    },
  },
  methods: {
    // 有规格
    _haveSpec(product) {
      let maxPrice = 0;
      let minPrice = 0;
      let totalStock = 0;
      product.SKU = {};
      product.val.forEach((item, index) => {
        let tip = localStorage.getItem('tip');
        let { key_id, price, stock } = item;
        product.SKU[key_id] = {
          price: price,
          stock,
        };
        if (index == 0) {
          if (
            (this.userInfo.group_id === 1 || this.userInfo.group_id === 2) &&
            Number(price)
          ) {
            minPrice = price;
          } else {
            minPrice = price;
          }
        }
        if (
          (this.userInfo.group_id === 1 || this.userInfo.group_id === 2) &&
          Number(price)
        ) {
          if (price > maxPrice) maxPrice = price
          if (price < minPrice) minPrice = price
        } else {
          if (price > maxPrice) maxPrice = price;
          if (price < minPrice) minPrice = price;
        }
        totalStock += stock;
      });
      let SKUResult = new SKU(product.SKU).SKU;
      product.arrt = product.arrt.filter(item => {
        item.pid.forEach(val => {
          // val.img = imgPath(val.img);
          val.isActive = false;
          if (SKUResult[val.id]) {
            val.notClick = false;
          } else {
            val.notClick = true;
          }
        });
        if (item.pid.length > 0) {
          return true;
        } else {
          return false;
        }
      });
      let nowPrice;
      if (product.arrt.length) {
        nowPrice = Number(minPrice) + ' - ' + Number(maxPrice);
      } else {
        nowPrice = Number(maxPrice);
      }
      this.stock = totalStock;
      this.nowPrice = nowPrice;
      this.SKUResult = SKUResult;
      this.product = product;
      this.cacheData = { nowPrice, totalStock };
    },

    // 没有规格
    _noSpec(product) {
      let tip = localStorage.getItem('tip');
      let { number, sell_price, price, exchange_score } = product;
      this.stock = number;
      if (this.userInfo.group_id === 1 || this.userInfo.group_id === 2) {
        this.nowPrice =
          tip == 4
            ? Number(price)
            : tip == 2
            ? Number(exchange_score)
            : Number(price);
      } else {
        this.nowPrice =
          tip == 4
            ? Number(price)
            : tip == 2
            ? Number(exchange_score)
            : Number(sell_price);
      }
    },
    // 点击规格
    handleClickSpecItem(index, cindex) {
      sessionStorage.setItem('guigeIndex', cindex)
      console.log('index, cindex',index, cindex);
      let { arrt } = this.product;
      let currentSpecs = arrt[index].pid; /*当前点击的规格列表*/
      let currentSpec = currentSpecs[cindex]; /*当前点击的规格*/
      console.log(currentSpec);
      if (currentSpec.notClick) return;
      this.lastClickSpec = currentSpec;
      // //选中自己，兄弟节点Hủy bỏ选中
      if (currentSpec.isActive) {
        currentSpec.isActive = false;
      } else {
        currentSpecs.forEach(item => (item.isActive = false));
        currentSpec.isActive = true;
      }
      let selectedSpec = []; //已经选择的规格
      let selectedIds = []; //已经选择的规格ID
      //未被选中的规格（待测试节点）
      // let unselected = [];
      //已经选择的节点
      arrt.forEach((item, index) => {
        item.pid.forEach(val => {
          let { id, isActive } = val;
          if (isActive) {
            selectedSpec.push({
              ...val,
              index,
            });
            selectedIds.push(id);
          }
        });
      });
      this.selectedIds = selectedIds;
      this.selectedSpec = selectedSpec;
      if (selectedIds.length) {
        //获得组合key价格
        selectedIds.sort((v1, v2) => parseInt(v1) - parseInt(v2));
        let len = selectedIds.length;
        let prices = '';
        if (
          (this.userInfo.group_id === 1 || this.userInfo.group_id === 2) &&
          Number(this.SKUResult[selectedIds.join(',')].vipPrice[0])
        ) {
          console.log(
            '344=>',
            Number(this.SKUResult[selectedIds.join(',')].vipPrice[0]),
          );

          prices = this.SKUResult[selectedIds.join(',')].vipPrice;
        } else {
          prices = this.SKUResult[selectedIds.join(',')].prices;
        }

        this.stock = this.SKUResult[selectedIds.join(',')].stock;
        let maxPrice = Math.max.apply(Math, prices);
        let minPrice = Math.min.apply(Math, prices);
        this.nowPrice =
          maxPrice > minPrice
            ? minPrice + ' - ' + maxPrice
            : maxPrice; /*筛选价格*/
        //用已选中的节点验证待测试节点
        let daiceshi = []; //待测试节点
        let daiceshiId = [];

        for (let i = 0; i < arrt.length; i++) {
          for (let j = 0; j < arrt[i].pid.length; j++) {
            if (
              arrt[index].pid[cindex].id != arrt[i].pid[j].id &&
              !arrt[i].pid[j].isActive
            ) {
              daiceshi.push({
                index: i,
                cindex: j,
                id: arrt[i].pid[j].id,
              });
              daiceshiId.push(arrt[i].pid[j].id);
            }
          }
        }

        for (let i = 0; i < selectedIds.length; i++) {
          var indexs = daiceshiId.indexOf(selectedIds[i]);
          if (indexs > -1) {
            daiceshi.splice(indexs, 1);
          }
        }
        for (let i = 0; i < daiceshi.length; i++) {
          let testAttrIds = []; //从选中节点中去掉选中的兄弟节点
          let siblingsId = '';
          for (let m = 0; m < arrt[daiceshi[i].index].pid.length; m++) {
            if (arrt[daiceshi[i].index].pid[m].isActive == true) {
              siblingsId = arrt[daiceshi[i].index].pid[m].id;
            }
          }

          if (siblingsId != '') {
            for (let j = 0; j < len; j++) {
              selectedIds[j] != siblingsId && testAttrIds.push(selectedIds[j]);
            }
          } else {
            testAttrIds = selectedIds.concat();
          }
          testAttrIds = testAttrIds.concat(
            arrt[daiceshi[i].index].pid[daiceshi[i].cindex].id,
          );
          testAttrIds.sort(function(value1, value2) {
            return parseInt(value1) - parseInt(value2);
          });

          if (!this.SKUResult[testAttrIds.join(',')]) {
            arrt[daiceshi[i].index].pid[daiceshi[i].cindex].notClick = true;
            arrt[daiceshi[i].index].pid[daiceshi[i].cindex].isActive = false;
          } else {
            arrt[daiceshi[i].index].pid[daiceshi[i].cindex].notClick = false;
          }
        }
      } else {
        //设置默认价格
        let { nowPrice, totalStock } = this.cacheData;
        this.stock = totalStock;
        this.nowPrice = nowPrice;
        //设置属性状态
        arrt.forEach(item => {
          item.pid.forEach(val => {
            val.isActive = false;
            if (this.SKUResult[val.id]) {
              val.notClick = false;
            } else {
              val.notClick = true;
            }
          });
        });
      }
    },
    // 验证是否选中规格
    _validate() {
      let { arrt, val } = this.product;
      if (val.length == 0) {
        return true;
      }
      if (this.selectedSpec.length === arrt.length) {
        return true;
      } else {
        let titles = [];
        arrt.forEach((item, index) => {
          if (!this.selectedIndex.includes(index)) {
            titles.push(item.name);
          }
        });
        this.$toastBounce('Vui lòng chọn ' + titles[0]);
        return false;
      }
    },
  },
};
