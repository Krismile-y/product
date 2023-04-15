<template>
  <div class="flex-scroll" id="toTopWrap">
    <mescroll-vue
      ref="mescroll"
      :down="mescrollDown"
      :up="mescrollUp"
      @init="mescrollInit"
    >
      <ul class="team-list" id="listWrap">
        <li class="team-item border-1px--bottom">
          <div class="income-lists">
            <div
              class="income-lists-item"
              v-for="(item,index) in dataList"
              :key="index"
            >
              <div class="source">{{ item.title }}（{{ item.daynum }}bầu trời）</div>
              <div class="details">
                <div class="time">{{ item.create_time }}</div>
                <div class="money">-₫ {{ item.total_price }}</div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </mescroll-vue>
  </div>
</template>

<script>
import { getVipRecord_api } from '_api/member';
import meScrollBase from '@/mixins/meScrollBase';

export default {
  mixins: [meScrollBase],
  data() {
    return {
      list: ['thêm bản ghi', 'hồ sơ chi tiêu'],
      index: 0,
      demo: 'thêm bản ghi',
      key: true,
      recordLists: [],
      getList_api: getVipRecord_api,
    };
  },
  created() {},
  methods: {},
};
</script>

<style scoped>
.income-lists {
  width: 93%;
  height: 100%;
  margin: auto;
  background: #fff;
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
}
.details {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
}
.income-lists-item {
  padding: 20px 0;
  border-bottom: 1px solid rgba(229, 229, 229, 1);
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
