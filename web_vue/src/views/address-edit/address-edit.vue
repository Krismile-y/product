<template>
  <div class="address-edit-page">
    <Header :title="title"></Header>
    <div class="form-list">
      <div class="form-item border-1px--bottom">
        <div class="form-item__label">tên (bắt buộc)</div>
        <cube-input
          clearable
          v-model="formData.username"
          placeholder="xin hãy nhập tên của bạn"
        ></cube-input>
      </div>
      <div class="form-item border-1px--bottom">
        <div class="form-item__label">Điện thoại (bắt buộc)</div>
        <cube-input
          clearable
          type="tel"
          :maxlength="11"
          v-model="formData.phone"
          placeholder="Xin vui lòng điền số điện thoại của bạn"
        ></cube-input>
      </div>
      <div class="form-item border-1px--bottom">
        <!-- <div class="form-item__label">Khu vực thành phố (bắt buộc)</div> -->
        <!-- <div class="form-item__area" @click="showAddressPicker">
          <div class="area">
            <span v-if="formData.province">
              {{ formData.province }} {{ formData.city }}
              {{ formData.county }}
            </span>
            <span v-else class="no-select">Vui lòng chọn thành phố của bạn</span>
          </div>
          <i class="iconfont iconxiaojiantou"></i>
        </div> -->
        <!-- <cube-input
          clearable
          placeholder="Vui lòng nhập địa chỉ"
        ></cube-input> -->
         
      </div>
      <div class="form-item border-1px--bottom">
        <div class="form-item__label">Địa chỉ chi tiết (bắt buộc)</div>
        <cube-input
          clearable
          v-model="formData.address"
          placeholder="Vui lòng nhập địa chỉ chi tiết của bạn"
        ></cube-input>
      </div>
      <div class="footer">
        <div class="default" :class="{ active: is_default }">
          <cube-checkbox v-model="is_default">địa chỉ mặc định</cube-checkbox>
        </div>
        <cube-button @click="handleSubmit" class="cube-button"
          >Đồng Ý</cube-button
        >
      </div>
    </div>
  </div>
</template>

<script>
import pcaData from '@/libs/pca-data.json';
import { addAddress_api, editAddress_api } from '_api/address';
import validator from '@/libs/validator';
import { Toast } from 'vant';
import Header from '_com/header/header';
export default {
  name: 'AddressEdit',
  inject: ['refreshParentData'],
  components: {
    [Toast.name]: Toast,
    Header,
  },
  data() {
    return {
      is_default: false,
      selectedIndex: [23, 0, 0],
      formData: {
        username: '',
        phone: '',
        // province: '',
        // city: '',
        // county: '',
        address: '',
      },
      title: 'Địa chỉ1111',
    };
  },
  created() {
    let params = this.$route.query;
    if (params.type === 'edit') {
      this.formData = params;
      // this._initAddressPicker();
      if (params.is_default == 2) {
        this.is_default = true;
      }
    }
    this.params = params;
  },
  methods: {
    async handleSubmit() {
      if (!this._validator()) return;
      Toast.loading({
        message: 'Đang tải...',
        forbidClick: true,
      });
      let { type } = this.params;
      let params = {
        ...this.formData,
        is_default: this.is_default ? 2 : 1,
      };
      if (type == 'add') {
        await addAddress_api(params);
        this.refreshParentData();
        Toast('Đã thêm địa chỉ thành công');
      } else {
        await editAddress_api(params);
        this.refreshParentData();
        Toast('Địa chỉ thay đổi thành công');
      }
      setTimeout(() => {
        this.$router.back();
      }, 1000);
    },
    showAddressPicker() {
      this.$createCascadePicker({
        alias: {
          value: 'code',
          text: 'name',
        },
        title: 'Lựa chọn thành phố',
        data: pcaData,
        selectedIndex: this.selectedIndex,
        onSelect: (value, index, text) => {
          this.formData = {
            ...this.formData,
            // province: text[0],
            // city: text[1],
            // county: text[2],
          };
          this.selectedIndex = index;
        },
      }).show();
    },
    // _initAddressPicker() {
    //   const { province, city, county } = this.formData;
    //   let tempIndex = [];
    //   pcaData.some((pItem, pIndex) => {
    //     if (pItem.name === province) {
    //       tempIndex.push(pIndex);
    //       pItem.children.some((cItem, cIndex) => {
    //         if (cItem.name === city) {
    //           tempIndex.push(cIndex);
    //           cItem.children.some((dItem, dIndex) => {
    //             if (dItem.name === county) {
    //               tempIndex.push(dIndex);
    //               return true;
    //             }
    //           });
    //           return true;
    //         }
    //       });
    //       return true;
    //     }
    //   });
    //   this.selectedIndex = tempIndex;
    // },
    // 校验参数
    _validator() {
      const { username, phone, address } = this.formData;
      if (!username) {
        this.$toastBounce('Vui lòng nhập tên của bạn');
        return;
      }
      if (!phone) {
        this.$toastBounce('Vui lòng nhập số điện thoại');
        return;
      }
      if (!validator.checkPhone(phone)) {
        // this.$toastBounce('Định dạng số điện thoại không chính xác');
        // return;
      }
      // if (!province) {
      //   this.$toastBounce('Vui lòng chọn thành phố của bạn');
      //   return;
      // }
      // if (!address) {
      //   this.$toastBounce('Vui lòng nhập địa chỉ chi tiết');
      //   return;
      // }
      return true;
    },
  },
};
</script>

<style lang="stylus" scoped>
.form-list
  overflow hidden
  padding 0 15px
  height 100%
  box-sizing border-box
  border-top 1px solid #E5E5E5
  .form-item__area
    display flex
    align-items center
    justify-content space-between
    .area
      flex 1
      min-height 40px
      line-height 1.4
      font-size 18px
      padding 7px 0
      box-sizing border-box
    .no-select
      color rgba(0, 0, 0, 0.4)
    .iconfont
      margin-left 6px
  .cube-input
    & >>> .cube-input-field
      height 40px
      color #000
      font-size 18px
    &::after
      display none
  .form-item__label
    font-size 16px
    line-height 22px
    padding-top 26px
    margin-bottom 2PX
  .iconxiaojiantou
    color #666
.footer
  display flex
  align-items center
  margin 40px 0
  .default
    display flex
    align-items center
    height 39px
    margin-right 10px
    padding 0 14px
    border-radius 5px
    border 1PX solid #ccc
    .cube-checkbox
      color #ccc
    & >>>
      .cube-checkbox-label
        padding-top 2PX
      .cube-checkbox_checked .cube-checkbox-ui i
        color #DF5959
    &.active
      border-color #DF5959
      .cube-checkbox
        color #DF5959
  .cube-btn
    flex 1
    border-radius 5px
  .cube-button
    background #DF5959
</style>
