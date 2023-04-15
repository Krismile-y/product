<template>
  <div class="default-bg">
    <Header :title="headerTitle"></Header>
    <div class="cell-group-box">
      <ul class="cell-group">
        <p class="cell_title" style="padding:15px">Thông tin cơ bản</p>
        <li class="cell-item border-bottom-1px" @click="headImgClick">
          <span class="cell__label">Ảnh đại diện</span>
          <img :src="avatar" v-if="avatar.length>0" />
          <img src="../../assets/images/headerImg.png" v-else>
          <i class="cubeic-arrow"></i>
        </li>
        <li
          class="cell-item border-bottom-1px"
          @click="changeMsg('tên nick', 'nickname')"
        >
          <span class="cell__label">Tên nick</span>
          <span class="cell__value">{{ userInfo.nickname }}</span>
          <i class="cubeic-arrow"></i>
        </li>
        <li
          class="cell-item border-bottom-1px"
          @click="changeMsg('mã giới thiệu', 'rec_code')"
          v-if="!userInfo.rec_code"
        >
          <span class="cell__label">Mã giới thiệu của tôi</span>
          <span class="cell__value">Mã giới thiệu</span>
          <i class="cubeic-arrow"></i>
        </li>
        <li class="cell-item border-bottom-1px" v-else>
          <span class="cell__label">Mã giới thiệu của tôi</span>
          <span class="cell__value">{{ userInfo.rec_code }}</span>
          <i class="cubeic-arrow"></i>
        </li>
<!--        <li-->
<!--          class="cell-item border-bottom-1px"-->
<!--          @click="changeMsg('真实姓名', 'card_name')"-->
<!--        >-->
<!--          <span class="cell__label">真实姓名</span>-->
<!--          <span class="cell__value">{{ userInfo.card_name }}</span>-->
<!--          <i class="cubeic-arrow"></i>-->
<!--        </li>-->
<!--        <li-->
<!--          class="cell-item border-bottom-1px"-->
<!--          @click="changeMsg('身份证号', 'id_card')"-->
<!--        >-->
<!--          <span class="cell__label">身份证号</span>-->
<!--          <span class="cell__value">{{ userInfo.id_card }}</span>-->
<!--          <i class="cubeic-arrow"></i>-->
<!--        </li>-->
      </ul>
      <ul class="cell-group">
        <p class="cell_title" style="padding:15px">Bảo mật tài khoản</p>
<!--        @click="$router.push('/changePhone')"-->
        <li
          class="cell-item border-bottom-1px"

        >
          <span class="cell__label">Xác minh số điện thoại di động</span>
          <span class="cell__value">{{ mobileFilter(userInfo.phone) }}</span>
          <i class="cubeic-arrow"></i>
        </li>
        <li
            class="cell-item border-bottom-1px"
            @click="$router.push('/updateTiXianPass')"
        >
          <span class="cell__label">Sửa đổi mật khẩu rút tiền</span>
          <i class="cubeic-arrow"></i>
        </li>
        <li
            class="cell-item border-bottom-1px"
            @click="$router.push('/updatePassword')"
        >
          <span class="cell__label">Thay đổi mật khẩu đăng nhập</span>
          <i class="cubeic-arrow"></i>
        </li>
      </ul>
      <p class="cell_title" style="padding:15px" v-if="isXsFlag.data != 1">tài khoản thẻ ngân hàng</p>
      <div class="bankCard" @click="yinhangkaClick" v-if="isXsFlag.data != 1">
        <button>thông tin thẻ ngân hàng</button>
        <i class="cubeic-arrow"></i>
      </div>
      <p class="cell_title" style="padding:15px">Rút</p>
      <div class="bankCard" @click="shenqingTixian">
        <button>Yêu cầu rút tiền</button>
        <i class="cubeic-arrow"></i>
      </div>

<!--      <ul class="cell-group">-->
<!--        <p class="cell_title" style="padding:15px">银行卡账户</p>-->
<!--        <li-->
<!--          class="cell-item border-bottom-1px"-->
<!--          @click="changeMsg('户名', 'bank_name')"-->
<!--        >-->
<!--          <span class="cell__label">户名</span>-->
<!--          <span class="cell__value">{{ userInfo.bank_name }}</span>-->
<!--          <i class="cubeic-arrow"></i>-->
<!--        </li>-->
<!--        <li-->
<!--          class="cell-item border-bottom-1px"-->
<!--          @click="changeMsg('开户行', 'bank_title')"-->
<!--        >-->
<!--          <span class="cell__label">开户行</span>-->
<!--          <span class="cell__value">{{ userInfo.bank_title }}</span>-->
<!--          <i class="cubeic-arrow"></i>-->
<!--        </li>-->
<!--        <li-->
<!--          class="cell-item border-bottom-1px"-->
<!--          @click="changeMsg('银行卡号', 'bank_code')"-->
<!--        >-->
<!--          <span class="cell__label">银行卡号</span>-->
<!--          <span class="cell__value">{{ userInfo.bank_code }}</span>-->
<!--          <i class="cubeic-arrow"></i>-->
<!--        </li>-->
<!--      </ul>-->

<!--      <ul class="cell-group">-->
<!--        <p class="cell_title" style="padding:15px">支付宝账户</p>-->
<!--        <li-->
<!--          class="cell-item border-bottom-1px"-->
<!--          @click="changeMsg('账户名', 'alipay_name')"-->
<!--        >-->
<!--          <span class="cell__label">账户名</span>-->
<!--          <span class="cell__value">{{ userInfo.alipay_name }}</span>-->
<!--          <i class="cubeic-arrow"></i>-->
<!--        </li>-->
<!--        <li-->
<!--          class="cell-item border-bottom-1px"-->
<!--          @click="changeMsg('账号', 'alipay_code')"-->
<!--        >-->
<!--          <span class="cell__label">账号</span>-->
<!--          <span class="cell__value">{{ userInfo.alipay_code }}</span>-->
<!--          <i class="cubeic-arrow"></i>-->
<!--        </li>-->
<!--      </ul>-->
    </div>
    <!-- 修改昵称 -->
    <popup :visible.sync="visiblePopup" @closed="onClosed">
      <div class="popup-container">
        <div class="popup-title">Ôn lại{{ popTitle }}</div>
        <div class="popup-sub-title">Vui lòng điền nội dung vào ô nhập liệu</div>
        <div class="popup-input">
          <cube-input
            v-model="user_msg"
            clearable
            placeholder="Vui lòng nhập nội dung"
          ></cube-input>
        </div>
        <div class="popup-btns border-1px--top">
          <div class="btn border-1px--right" @click="visiblePopup = false">
            Hủy bỏ
          </div>
          <div class="btn" @click="handleUpdateName">cứu</div>
        </div>
      </div>
    </popup>

    <!--    选择开户行-->
    <van-popup v-model="isShowPicker" position="bottom">
      <van-picker
        show-toolbar
        :columns="columns"
        @cancel="isShowPicker = false"
        @confirm="onConfirm"
      />
    </van-popup>
  </div>
</template>

<script>
import popup from '_com/popup/popup.vue';
import { updateUser_api, getUserInfo_api } from '_api/user';
import { imgPath } from '@/libs/filters';
import { Picker, Popup } from 'vant';
import store from '@/store';
import Header from '_com/header/header';
import axios from "../../api/request_two";
export default {
  name: 'UserInfo',
  components: {
    popup,
    [Picker.name]: Picker,
    [Popup.name]: Popup,
    Header,
  },
  data() {
    return {
      user_msg: '',
      headerTitle: 'Trung tâm cá nhân',
      visiblePopup: false,
      isShowPicker: false,
      selectedIndex: [23, 0, 0],
      uploadOptions: {
        width: 150,
        height: 150,
        quality: 0.9,
      },
      headerImg: require('../../assets/images/headerImg.png'),
      popTitle: '',
      columns: [{ text: '杭州', id: 0 }, { text: '杭州', id: 1 }],
      params: '',
      avatar: "",
      userInfo: {},
      isXsFlag: {}
    };
  },
  filters: {
    imgPath,
  },
  created() {
    this.getData();
    // 调用是否显示接口
    axios.post('api/index/is_sx').then(res2 => {
      console.log(res2);
      if (res2.data.data) {
        this.isXsFlag = res2.data
      }
    })
  },
  methods: {
    // 个人头像点击事件
    headImgClick () {
      this.$router.push({
        path: '/uploadHeadImg'
      })
    },
    async getData() {
      let userInfo = await getUserInfo_api();
      this.userInfo = userInfo;
      let { head_img } = userInfo;
      if (head_img) {
        this.avatar = 'https://' + imgPath(head_img).split('//')[1];
        console.log(this.avatar);
      } else {
        this.avatar = this.headerImg;
      }
    },
    // 修改信息
    changeMsg(data, params) {
      this.visiblePopup = true;
      this.popTitle = data;
      this.params = params;
    },
    onConfirm(e) {
      console.log(e);
    },
    async complete(fileData) {
      this.$toast('tải lên...');
      let { key, file } = fileData;
      let formData = new FormData();
      formData.append('file', file, key);
      let res = await updateUser_api(formData);
      if (res.code === 200) {
        await this.$store.dispatch('getUserInfo');
        this.$toast({ type: 'success', content: 'Avatar đã sửa đổi thành công', time: 1000 });
        this.getData();
      } else {
        this.$toast({ type: 'error', content: 'không thể chỉnh sửa', time: 1000 });
      }
    },
    async handleUpdateName() {
      if (!this.user_msg.trim().length) {
        this.$toastBounce(this.popTitle + 'Không thể để trống');
        return false;
      } else {
        this.$toast('sửa lại...');
        // const userId = JSON.parse(sessionStorage.getItem('userInfo')).id;
        let params = {
          // user_id: userId,
          [this.params]: this.user_msg,
        };
        let res = await updateUser_api(params);
        if (res.code === 200) {
          this.visiblePopup = false;
          this.user_msg = '';
          this.$toast({
            type: 'success',
            content: this.popTitle + 'sửa đổi thành công',
            time: 1000,
          });
          this.getData();
        } else {
          this.visiblePopup = false;
          this.user_msg = '';
          this.$toast({ type: 'error', content: res.msg, time: 1000 });
        }
      }
    },
    onClosed() {
      this.nickname = '';
    },
    mobileFilter(val) {
      if (val) {
        let reg = /^(.{3}).*(.{4})$/;
        let phone = val.replace(reg, '$1****$2');
        return phone;
      }
    },
    // 银行卡信息点击事件
    yinhangkaClick() {
      this.$router.push('/bankCard');
    },
    // 申请提现点击事件
    shenqingTixian() {
      this.$router.push('/tixian')
    },
  },
};
</script>
<style lang="stylus" scoped src="./user-info.styl"></style>
