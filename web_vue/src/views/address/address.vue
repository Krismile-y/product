<template>
  <zui-view animation-type="scale" :loading="false">
    <div class="address-page default-bg" id="toTopWrap">
      <Header :title="title"></Header>
      <mescroll-vue
        ref="mescroll"
        :down="mescrollDown"
        :up="mescrollUp"
        @init="mescrollInit"
      >
        <cube-swipe>
          <ul class="address-list" id="listWrap">
            <li
              class="address-item"
              v-for="(item, index) in dataList"
              :key="item.id"
            >
              <cube-swipe-item
                ref="swipeItem"
                :btns="item.btns"
                :index="index"
                @btn-click="onBtnClick"
              >
                <div class="address-right">
                  <div class="item__container">
                    <div class="item__header">
                      <div class="item__header__left">
                        <div class="header__name">{{ item.item.username }}</div>
                        <div class="header__phone">{{ item.item.phone }}</div>
                      </div>
                      <div>
                        <div class="item__content">
                          {{
                            item.item.address
                          }}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="item__footer">
                    <div class="footer__default">
                      <span class="tag" v-if="item.item.is_default === 2"
                        ><span class="default">(địa chỉ mặc định)</span>
                        {{
                          // item.item.province +
                          //   ' ' +
                          //   ' ' +
                          //   item.item.city +
                          //   ' ' +
                          //   item.item.county +
                          //   ' ' +
                            item.item.address
                        }}</span
                      >
                      <span class="tag" v-else>{{
                        // item.item.province +
                        //   ' ' +
                        //   ' ' +
                        //   item.item.city +
                        //   ' ' +
                        //   item.item.county +
                        //   ' ' +
                          item.item.address
                      }}</span>
                    </div>
                  </div>
                </div>
              </cube-swipe-item>
            </li>
          </ul>
          <!--          <div class="add-btn" @click="handleJumpUrl('add')">-->
          <!--            <i class="iconfont icontianjia"></i>-->
          <!--          </div>-->
        </cube-swipe>
      </mescroll-vue>
      <div class="add-btn" @click="handleJumpUrl('add')">
        <div class="btn">Địa chỉ giao hàng mới</div>
      </div>
    </div>
  </zui-view>
</template>

<script>
import { getAddressList_api, delAddress_api } from '_api/address';
import meScrollBase from '@/mixins/meScrollBase';
import { imgPath } from '@/libs/filters';
import Header from '_com/header/header';
import { Toast } from 'vant';

export default {
  name: 'Address',
  mixins: [meScrollBase],
  components: {
    Header,
    [Toast.name]: Toast,
  },
  provide() {
    return {
      refreshParentData: this.refreshData,
    };
  },
  data() {
    return {
      btns: [],
      params: {},
      isInit: true,
      getList_api: getAddressList_api,
      mescrollUp: {
        lazyLoad: {
          use: false,
        },
        toTop: {
          warpId: 'toTopWrap',
        },
      },
      title: 'quản lý địa chỉ',
    };
  },
  created() {
    this.params = this.$route.params;
  },
  methods: {
    _requestAfter(list) {
      list.forEach((goods, index) => {
        goods.thumb = imgPath(goods.thumb);
        goods.sell_price = Number(goods.sell_price);
        list[index] = {
          item: {
            ...goods,
            isChecked: false,
          },
          btns: [
            {
              id: goods.id,
              action: 'edit',
              text: 'biên tập',
              color: '#c8c7cd',
              item: {
                ...goods,
              },
            },
            {
              id: goods.id,
              action: 'delete',
              text: 'xóa bỏ',
              color: '#D53833',
            },
          ],
        };
      });
    },
    onBtnClick(btn) {
      if (btn.action === 'edit') {
        this.handleJumpUrl('edit', btn.item);
      } else if (btn.action === 'delete') {
        this.handleDelItem(btn.id);
      }
    },
    refreshData() {
      this.dataList = [];
      this.mescroll.hideTopBtn();
      this.mescroll.resetUpScroll();
    },
    handleJumpUrl(type, item) {
      let query = { type };
      if (type === 'edit') {
        query = { ...item, type };
        delete query.create_time;
        delete query.update_time;
        delete query.user_id;
      }
      this.$router.push({
        query,
        path: this.$route.fullPath + '/address-edit',
      });
    },
    handleDelItem(id) {
      this.$createDialog({
        type: 'confirm',
        maskClosable: true,
        title: 'gợi ý',
        content: 'Bạn có chắc chắn muốn xóa địa chỉ này?',
        onConfirm: async () => {
          Toast.loading({
            message: 'đang xóa...',
            forbidClick: true,
          });
          await delAddress_api({ id: id });
          this.refreshData();
          Toast('Đã xóa địa chỉ thành công');
        },
      }).show();
    },
  },
};
</script>
<style lang="stylus" scoped src="./address.styl"></style>
