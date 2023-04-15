<template>
  <div class="about">
    <Header :title="headerTitle" fontSize="20px" iconSize="30px"></Header>
    <ul>
      <li v-for="(item, index) in liData" :key="index">
        <div @click="toPath(item)">
          <img :src="item.img" alt="">
          <span>{{ item.content }}</span>
        </div>
        <img :src="item.rightImg" alt="">
      </li>
    </ul>
  </div>
</template>
<script>
import Header from '_com/header/header';
export default {
  data() {
    return {
      headerTitle: 'về chúng tôi',
      liData: [
        {
          img: require('../../assets/images/gongsijieshao.png'),
          content: 'Hồ sơ công ty',
          rightImg: require('../../assets/images/xy.png'),
          path: '/company'
        },
        {
          img: require('../../assets/images/yingyezhizhao.png'),
          content: 'giấy phép kinh doanh',
          rightImg: require('../../assets/images/xy.png'),
          path: '/business'
        },
        {
          img: require('../../assets/images/anquanbaozhang.png'),
          content: 'Bảo vệ',
          rightImg: require('../../assets/images/xy.png'),
          path: '/safety'
        },
        {
          img: require('../../assets/images/huiyuandengji.png'),
          content: 'cấp thành viên',
          rightImg: require('../../assets/images/xy.png'),
          path: '/grade'
        },
        {
          img: require('../../assets/images/tuanduijiangli.png'),
          content: 'phần thưởng đội',
          rightImg: require('../../assets/images/xy.png'),
          path: '/team'
        },
        {
          img: require('../../assets/images/chongzhizhinan.png'),
          content: 'Thông báo nạp tiền',
          rightImg: require('../../assets/images/xy.png'),
          path: '/guide'
        },
        {
          img: require('../../assets/images/tixianshuoming.png'),
          content: 'hướng dẫn rút tiền',
          rightImg: require('../../assets/images/xy.png'),
          path: '/withdraw'
        },
        // {
        //   img: require('../../assets/images/hydj.png'),
        //   content: 'Quy tắc cấp độ thành viên',
        //   rightImg: require('../../assets/images/xy.png'),
        //   path: '/membership'
        // },
      ]
    };
  },
  methods: {
    toPath(item) {
      this.$router.push({
        path: item.path
      })
    }
  },
  components: {
    Header,
  },
};
</script>
<style type="text/css">
.about {
  width: 100%;
  height: 100vh;
  background-color: #fff;
  font-family: Source Han Sans CN;
}
.about button {
  width: 100%;
  background-color: blue;
  height: 40px;
  color: #fff;
  font-size: 18px;
}
.about .aboutMe {
  width: 100%;
  height: 50px;
  background-color: #ddd;
  color: #000;
  padding: 0 10px;
  box-sizing: border-box;
  line-height: 50px;
}
.about ul {
  width: 100%;
}
.about ul li {
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  font-size: 14px;
}
.about ul li div {
  width: 90%;
  display: flex;
  align-items: center;
}
.about ul li div > img {
  width: 25px;
  height: 25px;
  margin-left: 20px;
}
.about ul li div span {
  margin-left: 20px;
  font-size: 16px;
  color: #333333;
}
.about ul li img {
  width: 20px;
  height: 20px;
}
</style>
