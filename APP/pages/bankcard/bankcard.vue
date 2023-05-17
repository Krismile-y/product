<template>
  <view class="bankCard">
    <view class="card-item" v-for="(item,index) in cardList" :key="index">
      <view class="card-name">
        {{item.name}}
      </view>
      <view class="username">
        {{item.account_name}}
      </view>
      <view class="card-number">
        {{item.card}}
      </view>
      <image class="editImg" src="../../static/newIndex/edit.png" mode=""></image>
      <image class="deleteImg" src="../../static/newIndex/delete_light.png" mode=""></image>
      <view class="defaultText">
        默认
      </view>
    </view>
    <view class="addCard" @tap="open()">
      <image src="../../static/newIndex/add.png" mode=""></image>
      <view class="addtext">
        添加银行卡
      </view>
    </view>
    <u-popup :show="show" mode="bottom" @close="close" @open="open">
      <view class="popupBox">
        <uni-forms ref="valiForm" :rules="rules" :modelValue="valiFormData" labelPosition="top">
          <uni-forms-item label="银行卡号" name="u_back_card" required>
            <uni-easyinput type="text" v-model="valiFormData.u_back_card" placeholder="请输入银行卡号(只能输入数字)" />
          </uni-forms-item>
          <uni-forms-item required name="u_bank_name" label="开户行">
            <uni-easyinput type="text" v-model="valiFormData.u_bank_name" placeholder="请输入开户行" />
          </uni-forms-item>
          <uni-forms-item required name="u_back_user_name" label="卡用户名">
            <uni-easyinput type="text" v-model="valiFormData.u_back_user_name" placeholder="请输入卡用户名" />
          </uni-forms-item>
        </uni-forms>
        <button @tap="submitForm('valiForm')" type="primary">填写完成</button>
        <button @tap="close">取消</button>
      </view>
    </u-popup>
  </view>
</template>

<script>
import index from '../index';
  export default {
    data() {
      return {
        cardList: [],
        show: false, //添加银行卡弹框
        // 校验表单数据
        valiFormData: {
          u_back_card: '',
          u_bank_name: '',
          u_back_user_name: '',
        },
        // 校验规则
        rules: {
          u_back_card: {
            rules: [{
              required: true,
              errorMessage: '请输入正确的银行卡号'
            }, {
              pattern: '\\d+',
              errorMessage: '银行卡号只能输入数字'
            }]
          },
          u_bank_name: {
            rules: [{
              required: true,
              errorMessage: '开户行不能为空'
            }]
          },
          u_back_user_name: {
            rules: [{
              required: true,
              errorMessage: '卡用户名不能为空'
            }]
          }
        },
      };
    },
    methods: {
      init() {
        // 获取用户已绑定的银行卡
        let params = {
          
        }
        const that = this
        this.$fn.request('my_bank', "POST", params).then(res => {
          console.log(res,'我的银行卡');
          res.data.data.forEach((item,index) => {
            item.card = that.newCardNum(item.card)
            that.cardList.push(item)
          })
        })
      },
      addCard(params) {
        // 新增银行卡
        this.$fn.request('bank', "POST", params).then(res => {
          uni.showToast({
            title:"添加银行卡成功",
            icon:'success'
          })
          this.init()
          this.close()
        })
      },
      // 删除银行卡
      deleteCard(bid) {
        this.$fn.request('bank', "POST", params).then(res => {
          console.log(res,'删除我的银行卡');
          uni.showToast({
            title:"删除银行卡成功",
            icon:'success'
          })
          this.init()
        })
      },
      // 每四位数用空格隔开
      newCardNum(stringNum) {
        if (stringNum == undefined || stringNum == '') {
          return
        }
        let numArr = stringNum.toString().split('')
        for (let i = 0; i < numArr.length; i++) {
          if (i % 5 == 0) {
            numArr.splice(i, 0, ' ')
          }
        }
        let newStr = numArr.join('')
        return newStr
      },
      bian(index) {
        this.currentIndex = index
      },
      open() {
        this.show = true
      },
      close() {
        this.show = false
      },
      submitForm(ref) {
        // 非中文字符的正则表达式
        const reg = /[^\u4e00-\u9fa5]/g
        this.$refs[ref].validate().then(res => {
          console.log('success', );
          if(res.u_back_card.length <= 15 || res.u_back_card.length >19 ) {
            uni.showToast({
              title: "请检查银行卡号输入是否正确",
              icon:"error"
            })
          }else if (reg.test(res.u_bank_name) || reg.test(res.u_back_user_name)) {
            uni.showToast({
              title: "请检查开户行或卡用户名",
              icon:"error"
            })
          }
          else {
            let params = {
              name: '',
              card: '',
              account_name: ''
            }
            params.name = res.u_bank_name
            params.card = res.u_back_card
            params.account_name = res.u_back_user_name
            this.addCard(params)
          }
        }).catch(err => {
          console.log('err', err);
        })
        // this.close()
      },
    },
    onLoad() {
      this.init()
    }
  }
</script>

<style lang="less">
.bankCard {
  width: 100%;
  box-sizing: border-box;
  padding: 24upx;
  .card-item {
    background: linear-gradient(to bottom, #34D099 0%, #07c07e 100%);
    margin-bottom: 20upx;
    border-radius: 25upx;
    width: 100%;
    height: 200upx;
    box-sizing: border-box;
    padding: 20upx 40upx;
    color: #fff;
    position: relative;
    .card-name {
      font-size: 16px;
      margin-bottom: 10upx;
    }
    
    .username {
      font-size: 14px;
      margin-bottom: 10upx;
    }
    .card-number {
      font-size: 18px;
      margin-bottom: 10upx;
    }
    .defaultText {
      border: 1upx solid #fff;
      border-radius: 12upx;
      box-sizing: border-box;
      padding: 2upx 8upx 6upx;
      color: #fff;
      position: absolute;
      font-size: 20rpx;
      bottom: 12rpx;
      right: 12rpx;
    }
    .editImg {
      width: 50upx;
      height: 50upx;
      position: absolute;
      top: 15upx;
      right: 80upx;
    }
    .deleteImg {
      width: 50upx;
      height: 50upx;
      position: absolute;
      top: 15upx;
      right: 20upx;
    }
  }
  .addCard {
    width: 100%;
    height: 160rpx;
    background-color: #fff;
    box-sizing: border-box;
    padding: 10rpx 20rpx;
    display: flex;
    align-items: center;
    border-radius: 25rpx;
    image {
      width: 80rpx;
      height: 80rpx;
    }
    .addtext {
      flex: 1;
      line-height: 160rpx;
      color: #5e6570;
      font-size: 16px;
      margin-left: 20rpx;
    }
  }
}
</style>
