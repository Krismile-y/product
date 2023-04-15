<template>
    <div class="default-bg" style=";">
        <Header :title="headerTitle"></Header>
        <div class="cell-group-box" style="">
            <p class="cell_title" style="padding:15px">Liên hệ Hỗ trợ</p>
            <img src="https://img1.fr-trading.com/0/5_267_1831068_760_414.jpg" alt="" style="width: 100%;">
            <div class="new" style="padding:40px">
                <div style="display: flex;position: relative;" >
                    <p >Điện thoại hỗ trợ： <a :href="`tel:${kefuMessag.kf_phone}`" rel="external nofollow">{{kefuMessag.kf_phone}}</a></p>
                    <!-- <button class="copy" v-clipboard:copy="kefuMessag.kf_phone" @click="copy1">点击复制</button> -->
                </div>
                <div style="display: flex;position: relative;">
                    <p>Số điện thoại： <a :href="`tel:${kefuMessag.phone}`" rel="external nofollow">{{kefuMessag.phone}}</a></p> 
                    <!-- <button v-clipboard:copy="kefuMessag.phone" class="copy" @click="copy1">点击复制</button> -->
                </div>
                <!-- <a href="#" download="Promise.png">点击下载</a> -->

                <div class="lianjie" @click="down">Lưu mã QR</div>
          </div>
          <img src="./kefu.png" alt="" style="width: 60%;margin-left: 90px;" id="picurl">
          <!-- <iframe
                class="hidden"
                id="copyFrame"
                ref="copyFrame"
                name="copyFrame"
                frameborder="0"
                scrolling="no"
                src="../../../public/stantic/copy/copy.html"
              ></iframe> -->

        </div>
    </div>
</template>
  
<script>
import { webSetDetail_api } from '_api/order';
import Clipboard from 'clipboard'
import Header from '_com/header/header';
export default {
    
    components: {

        Header,
    },
    data() {
        return {
            kefuMessag:[],
            user_msg: '',
            headerTitle: 'Liên hệ Hỗ trợ',
            headerImg: require('../../assets/images/headerImg.png'),
            popTitle: '',
            params: '',
            avatar: "",
            row: {
                 url: "../../assets/images/kefu.png",
             }
        };
    },
    
    async created() {
        this.kefuMessag = await webSetDetail_api()

    },
    methods: {
        down(){
            
          window.location.href = 'https://api.btcexvip.top/index.php/api/Login/Download'
          

        },
        copy1(){
            alert('复制成功')
            
        },
        // 调用拨号功能
        callphone (phonenumber) {
         window.location.href = 'tel://' + phonenumber
        },
        
  }
};
</script>
<style  scoped>
    .new p{
        /* margin-bottom: 10px; */
		
    }
    .lianjie{
        width: 200px;
        height: 40px;
        margin: 10px 60px;
        line-height: 40px;
        background-color: bisque;
        border: 1px solid #fff;
        text-align: center;
        border-radius: 5px;
    }
    .copy{
        width: 80px;
        height: 25px;
        line-height: 20px;
        margin-left: 10px;
        background-color: bisque;
        border: 1px solid #fff;
        text-align: center;
        border-radius: 5px;
    }
    .hidden{
      	width: 0;
    	height: 0;
    	opacity: 0;
    	position: absolute;
    	top: -1000%;
    	left: -1000%;
    	z-index: -9999999;
      }

</style>
  