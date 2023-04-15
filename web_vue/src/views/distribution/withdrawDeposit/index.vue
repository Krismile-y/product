<template>
  <div class="withdraw-deposit">
    <Header :title="title"></Header>
    <div class="content">
      <div class="details-box">
        <div class="top-choice">
          <div class="balance">Số tiền có thể rút（{{ params.balance }}）</div>
          <div class="choice-tip" @click="isShowPicker = true">
            <div>{{ tipTitle }}rút</div>
            <i class="iconfont iconxiaojiantou"></i>
          </div>
        </div>
        <div class="withdraw-deposit-box">
          <input
            class="withdraw-deposit-input"
            @input="inputMoney"
            v-focus="true"
            v-model.number="money"
            type="number"
          />
          <div class="withdraw-deposit-btn" @click="selectAll">Rút tất cả</div>
        </div>
        <div class="hint" v-if="hint">Số tiền đã nhập vượt quá số dư</div>
      </div>
      <div class="details-box">
        <div class="cell">
          <div class="label">Phương thức rút tiền</div>
          <div
            :class="[isRadio ? 'value-active' : 'value']"
            style="display: flex; align-items: flex-end"
            @click="isRadio = !isRadio"
          >
            <div>{{ isRadio ? 'Vui lòng chọn phương thức rút tiền' : wayName }}</div>
            <div>
              <i class="iconfont iconxiaojiantou" v-if="!isRadio"></i>
              <i class="iconfont iconxiaojiantou-copy1" v-else></i>
            </div>
          </div>
        </div>
        <div class="verify-box">
          <div class="way" v-if="isRadio">
            <van-radio-group
              v-model="radio"
              class="radio-box"
              @change="onchange"
            >
              <van-radio
                name="1"
                label-position="left"
                class="radio-item"
                checked-color="#1ab5b1"
                >Rút về thẻ ngân hàng
              </van-radio>
              <van-radio
                name="2"
                label-position="left"
                class="radio-item"
                checked-color="#1ab5b1"
                >Rút tiền về Alipay
              </van-radio>
            </van-radio-group>
          </div>
        </div>
      </div>

      <div class="account-info">
        <div class="cell-box-list" v-if="radio === '1'">
          <div class="bank-card">
            <div class="cell-box">
              <div>Tên chủ hộ</div>
              <div>{{ params.truename }}</div>
            </div>
            <div class="cell-box">
              <div>ngân hàng</div>
              <div>{{ params.title }}</div>
            </div>
            <div class="cell-box">
              <div>số thẻ ngân hàng</div>
              <div>{{ params.bank_bumber }}</div>
            </div>
          </div>
          <div class="changeInfo" @click="$router.push('/personal/user-info')">
            <div>{{ full ? '去修改' : 'Vui lòng điền đầy đủ thông tin thẻ ngân hàng' }}</div>
            <i class="iconfont iconxiaojiantou"></i>
          </div>
        </div>

        <div class="cell-box-list" v-else>
          <div class="bank-card">
            <div class="cell-box">
              <div>Tài khoản tên thật</div>
              <div>{{ params.alipay_name }}</div>
            </div>
            <div class="cell-box">
              <div>tài khoản alipay</div>
              <div>{{ params.alipay_code }}</div>
            </div>
          </div>
          <div class="changeInfo" @click="$router.push('/personal/user-info')">
            <div>{{ alipay_full ? '去修改' : 'Vui lòng điền thông tin Alipay' }}</div>
            <i class="iconfont iconxiaojiantou"></i>
          </div>
        </div>
      </div>
      <van-popup v-model="isShowPicker" position="bottom">
        <van-picker
          show-toolbar
          :columns="columns"
          @cancel="isShowPicker = false"
          @confirm="onConfirm"
        />
      </van-popup>
      <div class="attention">
        <div class="attention-text">gợi ý:</div>
        <div class="attention-lists">
          <div
            class="attention-item"
            v-for="(item, index) in agreement"
            :key="index"
          >
            {{ item }}
          </div>
        </div>
      </div>
    </div>

    <div class="affirm-box">
      <div class="affirm-btn" @click="affirmBtn">nộp</div>
    </div>
  </div>
</template>

<script>
import { getUserInfo_api } from '@/api/user';
import { addCash_api, getAgreement_api } from '@/api/user';
import Header from '_com/header/header';
import {
  RadioGroup,
  Radio,
  Cell,
  CellGroup,
  Picker,
  Popup,
  Toast,
  Dialog,
} from 'vant';

export default {
  components: {
    Header,
    [RadioGroup.name]: RadioGroup,
    [Radio.name]: Radio,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [Picker.name]: Picker,
    [Popup.name]: Popup,
    [Toast.name]: Toast,
    [Dialog.name]: Dialog,
  },
  data() {
    return {
      money: '',
      balance: 0,
      hint: false,
      userInfo: '',
      title: 'rút',
      isRadio: false,
      wayName: 'Rút về thẻ ngân hàng',
      radio: '1',
      full: true,
      alipay_full: true,
      tip: 1,
      params: {},
      isShowPicker: false,
      tipTitle: 'đậu Qian',
      columns: [
        { text: 'đậu Qian', tip: 1 },
        { text: 'THĂNG BẰNG', tip: 3 },

        { text: 'cổ tức có trọng số', tip: 2 },
      ],
      agreement: [],
      isClick: true,
    };
  },
  directives: {
    focus: {
      inserted(el, { value }) {
        if (value) {
          el.focus();
        }
      },
    },
  },
  async created() {
    this.getBalance();
    let res = await getAgreement_api();
    this.agreement = res.cash_out_tip;
  },
  methods: {
    onchange(e) {
      this.isRadio = false;
      if (e === '1') {
        this.wayName = 'Rút về thẻ ngân hàng';
      } else {
        this.wayName = 'Rút tiền về Alipay';
      }
    },
    async affirmBtn() {
      if (this.radio === '1') {
        if (!this.money) {
          Toast('Vui lòng nhập số tiền');
          return false;
        } else if (this.money > this.params.balance) {
          return false;
        } else if (
          !this.params.truename ||
          !this.params.title ||
          !this.params.bank_bumber
        ) {
          Toast('Vui lòng điền đầy đủ thông tin thẻ ngân hàng');
          return false;
        }
      } else {
        if (!this.money) {
          Toast('Vui lòng nhập số tiền');
          return false;
        } else if (!this.params.alipay_name || !this.params.alipay_code) {
          Toast('Vui lòng điền thông tin Alipay');
          return false;
        }
      }
      if (this.tip === 3) {
        Dialog.confirm({
          title: 'gợi ý',
          message: 'Bạn đã chọn không tham gia các tiêu chuẩn của chuỗi cửa hàng và không còn được hưởng bất kỳ phần thưởng nào nữa?',
        }).then(async () => {
          this.params = {
            ...this.params,
            tip: this.tip,
            money: this.money,
            type: this.radio,
          };
          let res = await addCash_api(this.params);
          Toast(res.msg);
        });
        return false;
      }
      Toast.loading({
        message: 'Đang tải...',
        forbidClick: true,
        overlay: true,
      });
      this.params = {
        ...this.params,
        tip: this.tip,
        money: this.money,
        type: this.radio,
      };
      let res = await addCash_api(this.params);
      console.log(res);
      setTimeout(() => {
        Toast(res.msg);
      }, 2000);
    },
    async getBalance() {
      let res = await getUserInfo_api();
      this.userInfo = res;
      this.params = {
        balance: res.qiandou,
        truename: res.bank_name,
        title: res.bank_title,
        bank_bumber: res.bank_code,
        alipay_name: res.alipay_name,
        alipay_code: res.alipay_code,
      };
      if (!res.bank_name || !res.bank_title || !res.bank_code) {
        this.full = false;
      } else {
        this.full = true;
      }
      if (!res.alipay_name || !res.alipay_code) {
        this.alipay_full = false;
      } else {
        this.alipay_full = true;
      }
    },
    inputMoney() {
      if (this.money > this.params.balance) {
        this.hint = true;
        return false;
      } else {
        this.hint = false;
      }
    },
    selectAll() {
      this.money = this.params.balance;
      this.inputMoney();
    },
    onConfirm(e) {
      if (e.tip === 1) {
        this.tipTitle = 'đậu Qian';
        this.params.balance = this.userInfo.qiandou;
        this.tip = 1;
      } else if (e.tip === 2) {
        this.tipTitle = 'cổ tức có trọng số';
        this.params.balance = this.userInfo.yj_money;
        this.tip = 2;
      } else if (e.tip === 3) {
        this.tipTitle = 'THĂNG BẰNG';
        this.params.balance = this.userInfo.balance;
        this.tip = 3;
      }
      this.inputMoney();
      this.isShowPicker = false;
    },
  },
};
</script>

<style scoped lang="stylus">
.withdraw-deposit {
    width: 100%;
    min-height: 100%;
    background: #f7f7f7;
    display flex
    flex-direction column
}

.content
    flex 1
    overflow-y scroll
    padding-bottom 100px

.details-box {
    background: #fff;
    margin-top: 10px;
}

.balance {
    font-size: 14px;
    color: #E89222;
    padding-left: 15px;
}

.withdraw-deposit-input {
    /*background: red;*/
    font-size: 20px;
    color: #E89222;
}

.withdraw-deposit-box {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 15px;
    height: 88px;
}

.withdraw-deposit-btn {
    font-size: 14px;
    font-weight: 400;
    color: #DC0000;
}

.hint {
    font-size: 12px;
    padding: 0 15px 20px 15px;
    color: red;
    /*padding-bottom: .4rem;*/
}

.item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 15px;
    font-size: 14px;
    border-bottom: 1px solid rgba(229, 229, 229, 1);
    height: 71px;
}

.text {
    color: #666666;
    display: flex;
    align-items: center;
}

.affirm-box {
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    background: #fff;
    flex-shrink 0
}

.affirm-btn {
    font-size: 16px;
    background: #df5959;
    border-radius: 5px;
    text-align: center;
    line-height: 40px;
    color: #fff;
    margin: 0 15px;
    width: 100%;
}

.verify-box {
    padding: 0 15px 25px 15px;
}
.way {
    margin-top 20px
}
.verify-item {
    /*height: 87px;*/
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 25px;
}

.verify-item input {
    margin-top: 15px;
    border-bottom: 1px solid #e5e5e5;
    font-size: 14px;
}

.cell {
    padding: 23px 15px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
}

.value-active {
    color: #666666;
}

.value {
    color: #666666;
}

.radio-item
    display flex
    align-items center
    justify-content space-between
    margin-top 24px

.radio-box
    /*padding 0 30px 24px 15px*/
    background #Fff
    height 100%
    flex-shrink 0
    border-top 1px solid #E5E5E5
.attention
    padding  20px 15px

.attention-text
    font-size 12px

.attention-lists
    margin-top 12px
    font-size 12px
    color #DF5959

.attention-item
    margin-top 10px
    line-height 17px

.account-info
    background #ffffff
    padding-bottom 20px

.bank-card
    margin 0 15px

.cell-box
    height 50px
    margin 0 15px
    border-bottom 1px solid #E5E5E5
    display: flex
    align-items center
    justify-content space-between
    font-size 12px

.changeInfo
    display flex
    align-items center
    justify-content flex-end
    margin 0 15px
    height 50px
    padding-right 15px

.cell-box-list
    margin 0 15px
    background #F7F7F7
    border-radius 3px

.changeInfo div
    color #DC0000
    font-size 12px
.type
    margin-top 20px
    background #ffffff

.type-title
    height 40px
    display flex
    align-items center
    padding-left 15px
    font-size 14px
.top-choice
    height 41px
    border-bottom 1px solid #E5E5E5
    display flex
    align-items center
    justify-content space-between
    padding-right 15px
.choice-tip
    display flex
    align-items flex-end
    font-size 14px
    color #666666
</style>
