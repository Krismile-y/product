<template>
  <div class="flex-scroll" id="toTopWrap">
    <Header :title="title"></Header>
    <mescroll-vue
      ref="mescroll"
      :down="mescrollDown"
      :up="mescrollUp"
      @init="mescrollInit"
    >
      <ul class="team-list" id="listWrap">
        <li class="team-item border-1px--top">
          <div class="income-lists" v-for="(item, idx) in dataList" :key="idx">
            <div class="income-lists-item">
              <div class="source" v-if="$route.params.type === 'tx'">
                <div>
                  {{ item.title }}rút（{{
                    item.status === 1
                      ? 'trong ứng dụng'
                      : item.status === 2
                      ? 'hoàn thành'
                      : 'ứng dụng không thành công'
                  }}）<span style="margin-left: 10px; font-size: 12px;">{{
                    item.truename
                  }}</span>
                </div>
              </div>
              <div class="source" v-if="$route.params.type === 'yue'">
                {{ item.title
                }}<span
                  v-if="item.status === 1"
                  style="margin-left: 10px; font-size: 12px;"
                  >{{ item.rebate * 100 }}% x
                  {{ Number(item.money) / item.rebate }}</span
                >
              </div>
              <div class="source" v-if="$route.params.type === 'qiandou'">
                {{ item.title
                }}<span
                  v-if="item.status === 1"
                  style="margin-left: 10px; font-size: 12px;"
                  >{{ item.rebate * 100 }}% x
                  {{ Number(item.money) / item.rebate }}</span
                >
              </div>
              <div class="source" v-if="$route.params.type === 'jiaquan'">
                {{ item.title
                }}<span style="margin-left: 10px; font-size: 12px;"
                  >{{ item.number }}mọi người chia sẻ</span
                >
              </div>
              <div class="details">
                <div class="time">{{ item.create_time }}</div>
                <div class="money" v-if="$route.params.type === 'tx'">
                  -₫ {{ item.money }}
                </div>
                <div class="money" v-if="$route.params.type === 'yue'">
                  <span>{{ item.status !== 2 ? '+' : '-' }}</span
                  >{{ item.money }}
                </div>
                <div class="money" v-if="$route.params.type === 'qiandou'">
                  <span>{{ item.status !== 2 ? '+' : '-' }}</span
                  >{{ item.money }}
                </div>
                <div class="money" v-if="$route.params.type === 'jiaquan'">
                  <span>{{ item.status !== 2 ? '+' : '-' }}</span
                  >{{ item.money }}
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </mescroll-vue>
  </div>
  <!--  <div class="no-data" v-else>-->
  <!--    <img src="@/assets/images/mescroll-empty.png">-->
  <!--    <div class="text">暂无相关数据 ~</div>-->
  <!--  </div>-->
</template>

<script>
import { yjRecord_api, cashRecord_api } from '_api/distribution';
import meScrollBase from '@/mixins/meScrollBase';
import Header from '_com/header/header';
import axios from '../../../api/request_two';

export default {
  components: {
    Header,
  },
  mixins: [meScrollBase],
  data() {
    return {
      list: ['thêm bản ghi', 'hồ sơ chi tiêu'],
      index: 0,
      demo: 'thêm bản ghi',
      key: true,
      recordLists: [],
      title: '',
    };
  },
  created() {
    if (this.$route.params.type === 'tx') {
      this.title = 'Hồ sơ rút tiền';
    } else if (this.$route.params.type === 'yue') {
      this.title = 'Tồ sơ cân bằng';
    } else if (this.$route.params.type === 'qiandou') {
      this.title = 'Bản ghi số dư có thể rút';
    } else if (this.$route.params.type === 'jiaquan') {
      this.title = 'Kỷ lục điểm';
    }
  },
  computed: {
    getList_api() {
      if (this.$route.params.type === 'tx') {
        return cashRecord_api;
      } else {
        return yjRecord_api;
      }
    },
  },
  methods: {
    _requestAfter(list) {
      console.log(list);
    },
    _requestBefore() {
      if (this.$route.params.type === 'yue') {
        this.queryList = {
          tip: 4,
        };
      } else if (this.$route.params.type === 'qiandou') {
        this.queryList = {
          tip: 1,
        };
      } else if (this.$route.params.type === 'jiaquan') {
        this.queryList = {
          tip: 3,
        };
      }
    },
  },
};
</script>

<style scoped>
.flex-scroll {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.no-data {
  position: relative;
  /*justify-content: center;*/
  /*width: 100%;*/
  display: flex;
  padding-top: 100px;
  /*margin-top: 100px;*/
  align-items: center;
  flex-direction: column;
}
.text {
  margin-top: 20px;
  font-size: 16px;
  color: gray;
}
.income-lists {
  width: 93%;
  height: 100%;
  margin: auto;
  background: #fff;
  border-bottom: 1px solid rgba(229, 229, 229, 1);
}
.source {
  font-size: 16px;
  font-weight: bold;
}
.time {
  font-size: 12px;
  color: #999;
}
.money {
  font-size: 20px;
  display: flex;
  align-items: center;
  color: #dc0000;
}
.details {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 15px;
}
.income-lists-item {
  padding: 20px 0;
}
.top {
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background: #fff;
}
.content {
  flex: 1;
  height: 100%;
  overflow-y: auto;
  /*margin-bottom: .1rem;*/
}
.income {
  width: 100%;
  background: #fff;
}
</style>
