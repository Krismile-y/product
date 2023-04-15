<template>
  <div class="my-team-box" v-if="userList.length != 0">
    <div class="weui-flex title">
      <div class="weui-flex-item"><div class="placeholder">基本信息</div></div>
      <div class="weui-flex-item"><div class="placeholder">消费金额</div></div>
      <div class="weui-flex-item"><div class="placeholder">获得佣金</div></div>
    </div>
    <div class="team-lists" v-for="(item, index) in userList" :key="index">
      <div class="weui-flex content">
        <div class="weui-flex-item">
          <div class="placeholder">
            <div class="user-info">
              <div
                @click="$router.push('/twoLevelTeam/' + item.id)"
                class="user-img"
              >
                <img
                  :src="item.socialite.auth_info.headimgurl"
                  alt=""
                  v-if="item.socialite.auth_info.headimgurl"
                />
                <img v-else src="@/assets/images/headerImg.png" />
              </div>
              <div class="user-name-num">
                <div class="user-name">
                  {{ item.socialite.auth_info.nickname }}
                </div>
                <div class="user-num">{{ item.account }}</div>
              </div>
            </div>
          </div>
        </div>
        <div class="weui-flex-item">
          <div class="placeholder">₫{{ item.money.consume_money }}</div>
        </div>
        <div class="weui-flex-item">
          <div class="placeholder">₫{{ item.money.money }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    userList: {
      type: Array,
    },
  },
  data() {
    return {
      list: [],
    };
  },
  created() {},
  methods: {},
  watch: {},
};
</script>

<style scoped>
.my-team-box {
  width: 100%;
  height: 100%;
  background: #fff;
}
.weui-flex {
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  font-size: 14px;
}
.title {
  height: 40px;
  align-items: center;
  justify-content: center;
  color: #666666;
  border-bottom: 1px solid rgba(229, 229, 229, 1);
  font-weight: 400;
  /*padding: 0 .2rem;*/
}
.content {
  padding: 0 15px;
  height: 71px;
  align-items: center;
  position: relative;
}
.content .placeholder {
  font-size: 14px;
  font-weight: 400;
}
.content:before {
  content: ' ';
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  height: 1px;
  width: 95%;
  margin: auto;
  border-top: 1px solid #e5e5e5;
  color: #e5e5e5;
}
.weui-flex-item {
  text-align: center;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  flex: 1;
}
.user-info {
  display: flex;
  align-items: center;
}
.user-img img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
.user-name {
  font-size: 14px;
  color: #000;
  font-weight: 400;
  overflow: hidden;
  white-space: nowrap;
  width: 50px;
  text-overflow: ellipsis;
}
.user-num {
  font-size: 12px;
  color: #666666;
  margin-top: 6px;
}
.user-name-num {
  text-align: left;
  margin-left: 2px;
}
</style>
