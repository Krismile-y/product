<template>
  <view class="box" v-show="currentIndex==1?true:false">
    <view class="show disc">
      <view class="price">{{priceTotal}}￥</view>
      <view class="title">返佣记录</view>
    </view>
  
    <view class="picker-view" @click="changeYear">
      {{dateText}}
    </view>
  
    <view class="" style="margin-top: 10upx;">
      <uni-table ref="table" border stripe emptyText="暂无更多数据">
        <!-- 表头行 -->
        <uni-tr>
          <uni-th align="center">来源</uni-th>
          <uni-th align="center">获得金额</uni-th>
          <uni-th align="center">操作/时间</uni-th>
        </uni-tr>
        <!-- 表格数据行 -->
        <uni-tr v-for="(item,index) in tableData" :key="index">
          <uni-td align="center">{{item.money_type_text}}</uni-td>
          <uni-td align="center">{{item.money_amount}}</uni-td>
          <uni-td align="center">{{item.create_time}}</uni-td>
  
        </uni-tr>
      </uni-table>
      <view class="uni-pagination-box" v-if="showPagination"><uni-pagination show-icon :page-size="pageSize"
          :current="pageCurrent" :total="total" @change="change" /></view>
    </view>
  
</template>

<script>
  export default {
    data() {
      return {
        
      }
    }
  }
</script>

<style>
</style>