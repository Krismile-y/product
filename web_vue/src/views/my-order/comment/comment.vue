<template>
  <div class="comment-box">
    <Header :title="headerTitle"></Header>
    <div class="top-box">
      <div class="goods-info">
        <img :src="'https://api.btcexvip.top/' + goods.goods_img | imgPath" />
        <div class="right-box">
          <div class="goods-name">{{ goods.goods_name }}</div>
          <div class="price">₫{{ goods.total_price }}</div>
        </div>
      </div>

      <div class="text">
        <van-field
          v-model="message"
          type="textarea"
          maxlength="100"
          placeholder="Vui lòng nhập nhận xét"
          show-word-limit
        />
      </div>

<!--      <div class="title">添加图片</div>-->
<!--      <div class="img-list">-->
<!--        <div class="img-item" v-for="(item, index) in imgArr" :key="index">-->
<!--          <img :src="item.content" />-->
<!--          <van-icon-->
<!--            name="close"-->
<!--            class="close-btn"-->
<!--            @click="closeImg(item, index)"-->
<!--            size="23px"-->
<!--          />-->
<!--        </div>-->
<!--      </div>-->
<!--      <van-uploader-->
<!--        :after-read="imgAfterRead"-->
<!--        :before-read="beforeRead"-->
<!--        accept="image/*"-->
<!--        class="uploader"-->
<!--        multiple-->
<!--      >-->
<!--        <div class="choiceImg">-->
<!--          <van-icon name="plus" size="30px" />-->
<!--        </div>-->
<!--      </van-uploader>-->
    </div>

    <div class="comment-btn" @click="onComment">
      <div class="btn">đánh giá</div>
    </div>
  </div>
</template>

<script>
import Header from '_com/header/header';
import { Field, Uploader, Icon, Toast } from 'vant';
import { imgPath } from '@/libs/filters';
import { addComments_api } from '_api/order';
import axios from '../../../api/request_two';
export default {
  components: {
    Header,
    [Field.name]: Field,
    [Uploader.name]: Uploader,
    [Icon.name]: Icon,
    [Toast.name]: Toast,
  },
  data() {
    return {
      headerTitle: '评论',
      message: '',
      fileLists: [],
      imgArr: [],
      goods: {},
    };
  },
  filters: {
    imgPath,
  },
  created() {
    this.goods = this.$route.query;
    console.log(this.goods);
  },
  methods: {
    async onComment() {
      if (!this.message) {
        Toast('Vui lòng nhập nội dung đánh giá');
        return false;
      }
      // let params = {
      //   content: this.message,
      //   order_id: this.goods.order_id,
      //   suborder_id: this.goods.id,
      //   goods_id: this.goods.goods_id,
      //   imglist: this.imgArr,
      // };
      const userId = JSON.parse(sessionStorage.getItem('userInfo')).id;
      let res = await axios.post('api/order/addComment', {
        user_id: userId,
        goods_id: this.goods.goods_id,
        order_id: this.goods.id,
        content: this.message,
      })
      if (res.data.code === 200) {
        Toast('Đánh giá thành công!');
        setTimeout(() => {
          this.$router.go(-1);
        }, 2000);
      } else {
        Toast(res.data.msg);
      }
      // let formData = new FormData();
      // for (let val in params) {
      //   if (val === 'imglist') {
      //     params[val].forEach(item => {
      //       formData.append('imgList[]', item.file);
      //     });
      //   } else {
      //     formData.append(val, params[val]);
      //   }
      // }

      // let res = await addComments_api(formData);
      // if (res.code === 200) {
      //   Toast(res.msg);
      //   setTimeout(() => {
      //     this.$router.go(-1);
      //   }, 2000);
      // } else {
      //   Toast(res.msg);
      // }
    },
    imgAfterRead(file) {
      if (!file.length) {
        let img = new Image();
        img.src = file.content;
        img.onload = () => {
          this.fileLists = [];
          this.fileLists.push(file);
          this.imgArr = this.imgArr.concat(this.fileLists);
          this.exceed(this.imgArr);
        };
      } else {
        let img = [];
        file.forEach((item, i) => {
          img[i] = new Image();
          img[i].src = item.content;
          img[i].onload = () => {
            this.fileLists = [];
            this.fileLists.push(item);
            this.imgArr = this.imgArr.concat(this.fileLists);
            this.exceed(this.imgArr);
          };
        });
      }
    },
    exceed(list) {
      if (list.length > 9) {
        Toast('Lên đến 9 hình ảnh');
        this.imgArr = list.slice(0, 9);
      }
    },

    closeImg(item, index) {
      this.imgArr.splice(index, 1);
    },
  },
};
</script>

<style scoped lang="stylus">
.comment-box
    height 100%
    width 100%
    display flex
    flex-direction column
.top-box
    width: 100%;
    flex 1
    //overflow-y scroll
.goods-info
    display flex
    align-items center
    margin 15px 15px
.goods-info img
    width 40px
    height 40px
.right-box
    height: 50px;
    display: flex;
    justify-content space-evenly
    flex-direction column

    margin-left 10px
.goods-name
    min-width: 290px;
    width: 80%;
    font-size 12px
    font-weight bold
    margin-bottom 10px
    height 30px
    line-height: 30px;
    overflow:hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
    //display:-webkit-box;
    //-webkit-box-orient:vertical;
    //-webkit-line-clamp:1;
.price
    opacity 0.6
    font-size 12px

.text
    overflow hidden
    height 100px
    margin 15px 15px 0
    border 1px solid #E5E5E5;
    border-radius 5px

.img-list
    display flex
    align-items center
    flex-wrap wrap
    margin-left 10px
.choiceImg
    width 110px
    height 110px
    border-radius 5px
    background #F7F7F7
    display flex
    align-items center
    justify-content center
    margin-top 15px
    margin-left 15px

.title
    margin 15px 15px 0
    opacity 0.6
    font-size 12px
.img-item img
    width 110px
    height 110px
    /*margin-bottom 15px*/
.img-item
    width 110px
    height 110px
    position relative
    margin-right calc((100% - 3 * 110px) / 3)
    margin-bottom 20px
.img-list
    margin-top 15px
.close-btn
    position absolute
    top:-7px
    right -4px
    font-size 18px
    color #DF5959
.comment-btn
    height 50px
    border-top 1px solid #E5E5E5
    flex-shrink 0
    padding  0 15px
    display flex
    align-items center
    justify-content center

.btn
    width 100%
    height 40px
    background #DF5959
    border-radius 5px
    display flex
    align-items center
    justify-content center
    color #ffffff
    font-size 16px
</style>
