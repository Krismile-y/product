<template>
  <div class="poster">
    <Header :title="title"></Header>
    <div class="preview-box" ref="imageWrapper" id="preview-box">
      <div class="position-box">
        <div class="result" id="result" v-if="isShow">
          <div>
            <img :src="info.bgImg" alt="" />
            <div class="user-box">
              <div class="content">
                <div class="user-info">
                  <div class="user-name">{{ info.nickname }}</div>
                  <div class="user-code">Mã mời：{{ info.id_code }}</div>
                </div>
                <img class="qrcode" :src="info.qrcode | imgPath" />
              </div>
            </div>
          </div>
        </div>
        <div class="result" v-if="isShowpop">
          <div class="protocol">
            <img :src="imgUrl" />
          </div>
        </div>
      </div>
    </div>

    <div id="stockpile" style="height: 0px; overflow: hidden"></div>
  </div>
</template>

<script>
import { myExtension_api, getAds_api } from '_api/user';
import Header from '_com/header/header';
import { imgPath } from '@/libs/filters';
import { Icon, Overlay, Popup, Toast } from 'vant';
import { mapGetters } from 'vuex';
import html2canvas from 'html2canvas';

export default {
  name: 'Share',
  components: {
    [Icon.name]: Icon,
    [Overlay.name]: Overlay,
    [Popup.name]: Popup,
    [Toast.name]: Toast,
    Header,
  },
  data() {
    return {
      info: {},
      title: 'Nhấn và giữ để lưu ảnh',
      isShow: true,
      copyDom: '',
      imgUrl: '',
    };
  },
  filters: {
    imgPath,
  },
  created() {
    this.info = this.$route.query;
  },
  mounted() {
    setTimeout(() => {
      this.toImage();
    }, 100);
  },
  computed: {
    ...mapGetters(['wechatUrl']),
  },
  methods: {
    toImage() {
      this.imgUrl = '';
      var targetDom = document.getElementById('result');
      this.copyDom = targetDom.cloneNode(true);
      this.copyDom.style.width = targetDom.offsetWidth + 'px';
      this.copyDom.style.height = targetDom.offsetHeight + 'px';
      document.getElementById('stockpile').append(this.copyDom);
      let a = document.getElementById('stockpile').childNodes[0];
      html2canvas(a, {
        useCORS: true,
      }).then(canvas => {
        let dataURL = canvas.toDataURL('image/png');
        this.imgUrl = dataURL;
        if (this.imgUrl !== '') {
          this.isShow = false;
        }
        this.isShowpop = true;
      });
    },
  },
};
</script>

<style lang="stylus" scoped>
.poster
    height 100%
    width 100%
    background #F7F7F7
    display flex
    flex-direction column
.preview-box
    flex 1
    overflow-y scroll
/*.preview-box img*/
/*    width 325px*/
/*    height 520px*/

.position-box
    display flex
    align-items center
    flex-direction column
    justify-content center
.result
    position relative
    background-size 100% 100%
    width 325px
    height 100%
    flex-shrink 0
    /*margin-top 15px*/
    overflow hidden
.result img
    width 100%
    height 100%
.user-box
    position absolute
    top 275px
    left 0
    width 100%
.user-info img
    width 40px
    height 40px
    border-radius 50%
.content
    display flex
    align-items flex-end
    padding 0 20px
    justify-content space-between
.content img
    width 130px
    height 130px
.left-box
    color #ffffff
    font-size 12px
.user-info
    display flex
    flex-direction column
    color #DF5959
    font-size 18px
    font-weight bold
.code
    margin-top 6px
.user-code
    margin-top 20px
.text-box
    margin-top 14px
    font-size 10px
    margin-right 30px
.text-box div:nth-child(2)
    margin-top 10px
.text
    margin-top 10px
    font-size 10px
    color #ffffff
.poster-item img
    width 50px
    height 80px
    object-fit cover
.list
    display flex
    align-items center
    margin 7px 0 18px 23px
.bottom-box
    background #ffffff
    margin-top 10px

.title
    height 30px
    display flex
    align-items center
    padding-left 15px
    color #999999
    font-size 12px
    border-bottom 1px solid #E5E5E5

.poster-item
    width 50px
    display flex
    flex-direction column
    align-items center
    overflow hidden
    margin-right calc((100% - 50px * 5) / 4)
.poster-name
    font-size 12px
    margin-top 10px
    width 100%
    text-align center
    overflow hidden
    white-space nowrap
    text-overflow ellipsis

.save
    height 50px
    display flex
    align-items center
    justify-content center
    border-top 1px solid #E5E5E5
    padding 0 15px
.save-btn
    width 100%
    background #DF5959
    color #ffffff
    font-size 16px
    height 40px
    border-radius 5px
    display flex
    align-items center
    justify-content center

.active
    position relative
.active:before
    content: ''
    position absolute
    top 0
    left 0
    background:rgba(0,0,0,0.4)
    width 100%
    height 100%
.passed
    position absolute
    top 50%
    left 50%
    transform: translate(-50%, -50%);
    color #DC0000
.details
    width 325px
    height 100%
.protocol
    width 325px
    height 100%
.protocol img
    width 100%
    height 100%
.op-bnt
    display flex
    align-items center
    justify-content center
    height 40px
//width 100px
//height 30px
.op-bnt span
    width 100px
    height 100%
    display flex
    align-items center
    justify-content center
    border-radius 30px
    color #DF5959
</style>
