<template>
    <view>
        <view class="holdon">
            <view class="ball"
                :style="'left:'+(moveX == 0 & x>0? x+'%':moveX+'px')+';top:'+(moveY == 0 & y>0? y+'%':moveY+'px')"
                @touchstart="drag_start" @touchmove.prevent="drag_hmove" mode="aspectFit">
            </view>
        </view>
    </view>
</template>
<script>
    export default {
        //悬浮球绝对位置百分比，页面刷新会回到这个位置
        props: {
            x: {
                type: Number,
                default: 80
            },
            y: {
                type: Number,
                default: 50
            },
            image: {
                type: String,
                default: ''
            }
        },
        data() {
            return {
                start: [0, 0],
                moveY: 0,
                moveX: 0,
                windowWidth: '',
                windowHeight: '',
            }
        },
        onShow() {
            //获取系统分辨率
            const {
                windowWidth,
                windowHeight
            } = uni.getSystemInfoSync();
            this.windowWidth = windowWidth
            this.windowHeight = windowHeight
        },
        methods: {
            drag_start(event) {
                this.start[0] = event.touches[0].clientX - event.target.offsetLeft;
                this.start[1] = event.touches[0].clientY - event.target.offsetTop;
            },
            //判断防止悬浮球被拖出页面
            drag_hmove(event) {
                let tag = event.touches;
                if (tag[0].clientX < 0) {
                    tag[0].clientX = 0
                }
                if (tag[0].clientY < 0) {
                    tag[0].clientY = 0
                }
                if (tag[0].clientX > this.windowWidth) {
                    tag[0].clientX = this.windowWidth
                }
                if (tag[0].clientY > this.windowHeight) {
                    tag[0].clientY = this.windowHeight
                }
                this.moveX = tag[0].clientX - this.start[0];
                this.moveY = tag[0].clientY - this.start[1];
            },
        }
    }
</script>

<style>
    .ball {
        width: 100rpx;
        height: 100rpx;
        background: linear-gradient(to bottom, #F8F8FF, #87CEFA);
        border-radius: 50%;
        /* 防止页面滚动条或其他事件跟着动 */
        position: fixed !important;
        z-index: 9999;
    }
</style>