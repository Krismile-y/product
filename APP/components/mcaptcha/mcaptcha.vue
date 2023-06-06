<template>
	<view>
		<canvas canvas-id="verifyCanvas" style="width:270upx;height:90upx;"@tap="refreshCode"></canvas>
	</view>

</template>

<script>
	export default {
    props: {
      userInput: {
        type: String,
        default: ''
      }
    },
		data() {
			return {
				code: "", // 存储生成的验证码
				inputCode: "", //存储用户输入的验证码

			};
		},
		mounted() {
			this.refreshCode();
		},
		methods: {
			// 生成随机数
			randomNum(min, max) {
				return Math.floor(Math.random() * (max - min) + min);
			},
			// 生成随机颜色
			randomColor(min, max) {
				var r = this.randomNum(min, max);
				var g = this.randomNum(min, max);
				var b = this.randomNum(min, max);
				return "rgb(" + r + "," + g + "," + b + ")";
			},
			// 绘制验证码
			drawCode() {
				var canvas = uni.createCanvasContext("verifyCanvas", this);
				canvas.clearRect(0, 0, 200, 70); // 清空画布
				canvas.setFillStyle(this.randomColor(180, 240)); // 设置背景颜色
				canvas.fillRect(0, 0, 200, 70); // 绘制矩形背景
				canvas.setFontSize(30);
				for (var i = 0; i < 4; i++) {
					var num = this.randomNum(0, 10);
					this.code += num; // 将生成的数字添加到验证码
					var x = (i + 1) * 25 + this.randomNum(-5, 5); // 设置每个数字的x坐标
					var y = 30 + this.randomNum(-5, 5); // 设置每个数字的y坐标
					canvas.setFillStyle(this.randomColor(0, 100));
					canvas.fillText(num, x, y);
				}
				// 绘制斜线
				for (var i = 0; i < 4; i++) {
					canvas.setStrokeStyle(this.randomColor(0, 255));
					canvas.beginPath();
					canvas.moveTo(this.randomNum(0, 200), this.randomNum(0, 70));
					canvas.lineTo(this.randomNum(0, 200), this.randomNum(0, 70));
					canvas.stroke();
				}
				canvas.draw(true);
			},
			
			// 刷新验证码
			refreshCode() {
				this.code = "";
				this.drawCode();
			},
			
			//验证输入的验证码
			checkCode() {
        console.log(this.userInput.toLocaleLowerCase(), this.code ,'验证码判断');
				if (this.userInput.toLocaleLowerCase() == this.code) {
          // 验证码正确
          this.$emit('checkCode',true)
					// this.refreshCode();
				} else {
					// 验证码错误
					this.$emit('checkCode',false)
					this.refreshCode();
				}
        
			},
		}
	};
</script>

<style>

</style>