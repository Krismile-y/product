<template>
	<view>
		<airel-floatball  />
		<view class="zongshouyi">
			<view class="one disc">
				<view style="color: #fff;">共计获得津贴</view>
				<view style="font-weight: 600;font-size: 42upx;color: #fff;">{{dataObj.allowance}}</view>
			</view>
			<view class="two disc">
				<view class="t" style="width: 100%;height: 60%;display: flex;">
					<view class="twoItem disc">
						<view>共计直推人数</view>
						<view>{{dataObj.people}}</view>
					</view>
					<view class="twoItem disc">
						<view>共计完成任务</view>
						<view>{{dataObj.task}}</view>
					</view>
				</view>
			</view>
			
		</view>
		
		<!--  -->
		<view style="margin-top: 30upx;">
			<view class="item" v-for="(item,index) in list" :key="index">
				<view class="font ">
					{{item.title}}
				</view>
				<view :class="{
          'gray': btnType == '2',
          'btn': btnType == '0',
          'pink': btnType == '1',
        }" @tap="linquClick(item)">
          {{linquSet(item)}}
        </view>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				dataObj: {},
        list: [],
        btnType: '0', //0 未达成，1 能领取，2 不能领取(超过要求) 3已领取（当月）
			};
		},
    onLoad() {
      this.getData()
    },
    methods: {
      getData() {
        // 新闻接口
        this.$fn.request('welfare/allowance', "GET", {}).then(res => {
        	if(res.data.code ==1 ) {
            this.dataObj = res.data.data
            this.list = res.data.data.list
          }
        })
      },
      linquSet(item) {
        // 未达成。 （/）领取 this.btnType 0
        let linqu = ''
        if( item.status == '0') {
          this.btnType = '0'
          linqu = `(${this.dataObj.people}/${item.number})领取`
        }else if(item.status == '1') {
          // 可领取，按钮发光
          this.btnType = '1'
          linqu = `可领取`
        }else if(item.status == '2'){
          // 超出档位，灰色按钮
          this.btnType = '2'
          linqu = `已升级`
        }else {
          // 当月领取过后，灰色按钮
          this.btnType = '2'
          linqu = `已领取`
        }
        return linqu
      },
      // 点击领取触发
      linquClick(item) {
        let params = {
          iid: item.id
        } 
        if(item.status == '1'){
          this.$fn.request('welfare/received', "POST", params).then(res => {
          	if(res.data.code ==1 ) {
              uni.showToast({
                title:'领取成功',
                icon: 'success'
              })
              this.getData()
            }
          })
        }else {
          return
        }
      }
    }
	}
</script>

<style lang="less">
.zongshouyi{
	height: 300upx;
	width: 684upx;
	margin: 0 auto;
	margin-top: 0upx;
	border: 1upx solid #cccccc;
	border-radius: 30upx;
	background-color: #e5f7f1;
	.one{
		width: 100%;
		height: 40%;
		background-image:url('../../static/newMy/tuoyuan1.png') ;
		background-repeat: no-repeat;
		background-size: 100% auto;
		border-radius: 0 0 26% 26%;
	}
	.two{
		background-image:url('../../static/newMy/juxing.png') ;
		background-repeat: no-repeat;
		background-size: 100% 100%;
		 border-radius:30% 30% 0 0 ;
		width: 100%;
		height: 60%;
		.twoItem{
			width: 50%;
			height: 80%;
		}
		.last{
			width: 80%;
			height: 80upx;
			background-color: #07c07e;
			border-radius: 30upx;
			color: #fff;
			
		}
	}
	
}

.item{
	width: 90%;
  height: 160upx;
	margin: 20upx auto;
  box-sizing: border-box;
  padding: 10upx 20upx;
	display: flex;
  flex-direction: column;
	align-items: center;
	position: relative;
  background-image: url('../../static/c/jintie.png');
  background-size: 100% 100%;
  background-repeat: no-repeat;
  position: relative;
	.font{
		width: 100%;
    text-align: center;
	}
	.btn{
    margin-top: 30upx;
		background-color: #07c07e;
		color: #fff;
		border-radius: 15upx;
    box-sizing: border-box;
    padding: 10upx 20upx 15upx;
    position: absolute;
    bottom: 15upx;
    right: 15upx;
	}
  .gray {
    margin-top: 30upx;
    background-color: #8e8e8e;
    color: #fff;
    border-radius: 15upx;
    box-sizing: border-box;
    padding: 10upx 20upx 15upx;
    position: absolute;
    bottom: 15upx;
    right: 15upx;
  }
  .pink {
    margin-top: 30upx;
    background-color: #07c07e;
    color: #fff;
    border-radius: 15upx;
    box-sizing: border-box;
    padding: 10upx 20upx 15upx;
    position: absolute;
    bottom: 15upx;
    right: 15upx;
    filter: brightness(110%);
    box-shadow: 0 0 5px #fff, 0 0 10upx #fff, 0 0 15upx #fff, 0 0 10upx #fff,
        0 0 10upx #fff, 0 0 40upx #fff, 0 0 10upx #fff, 0 0 15upx #fff;
  }
}
</style>
