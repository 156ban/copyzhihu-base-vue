<template>
	<div class="hot">
		<el-row>
			<el-col :span="2">
				<div class="num">{{obj.key}}</div>
			</el-col>
			<el-col :span="22">
				<div class="item">
					<div class="head" @click="toquestion"><a>{{obj.question}}</a></div>
					<div class="text">
						<p>{{display}}
						</p>
					</div>
					<div class="buttons">
						<el-button type="primary" icon="el-icon-caret-top">热度 {{obj.agree}}</el-button>
						<el-button icon='el-icon-s-promotion'>分享</el-button>
					</div>
				</div>
			</el-col>

		</el-row>

	</div>

</template>

<script>
	
	export default {
		data() {
			return {
				id: "",
				name: "狗蛋的柴尔德",
				all: "",
				cut: "",
				display: "",
				agree: 189,
				topic: "男人去按摩店到底正不正常？",
				num: 2,
				obj:""

			}
		},
		methods: {
			toquestion() {
				this.$router.replace({
					path: '/home/second_page/',query:{question:this.obj.question}
				});
			}
		},
		mounted() {
			this.obj= this.$attrs.msg;
			this.all = this.obj.text;
			this.cut = this.all.substr(0, 75) + "..."
			this.display = this.cut;
 

		}
	}
</script>

<style scoped="scoped" lang="less">
	.hot {
		border-bottom: 1px solid rgb(240, 242, 247);
	}

	.num {
		color: #ff9607;
		font-size: 18px;
		font-weight: 600;
		padding-top: 23.5px;
	}


	.item {
		text-align: left;
		height: auto;
		padding: 20px;
		padding-left: 0;




		.head {
			height: 28.8px;
			cursor: pointer;
			font-size: 18px;
			font-weight: 600;
		}

		.text {
			height: 55px;

			button {
				margin: 0;
				padding: 0;
				background-color: transparent;

			}

			p {
				margin: 0;
				font-family: BlinkMacSystemFont;
				font-size: 15px;
				line-height: 25px;
				display: inline;
			}
		}

		.buttons {
			height: 30px;

			button {
				padding: 0 12px;
				font-size: 14px;
				height: 31px;
				border: none;
				font-size: 14px;
				color: gray;
				background-color: transparent;

				&:focus {
					background-color: transparent;

				}

				&:hover {
					background-color: transparent;
				}




			}

		}
	}
</style>
