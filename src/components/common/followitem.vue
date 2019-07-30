<template>
	<div>
		<div class="item">
			<div class="user" ><span style="font-weight: 600;cursor: pointer;" @click="touser()">{{obj.head1}}</span>{{obj.head2}} · {{obj.datenumber+obj.datetext}}</div>
			<div class="head" @click="toquestion"><a>{{obj.question}}</a></div>
			<div class="text">
				<p><span style="font-weight: 600;cursor: pointer;" @click="touser()">{{obj.name}}:</span>{{display}}
				</p>
				<el-button @click="show" id="show" icon="el-icon-arrow-down">阅读全文</el-button>
			</div>

			<div class="buttons">
				<el-button type="primary" icon="el-icon-caret-top" ref="agree" @click="agreeload()">{{zantong}} {{obj.agree}}</el-button>
				<el-button type="primary" icon="el-icon-caret-bottom"  @click="cai" ref="disagree"></el-button>
				<el-button icon='el-icon-chat-dot-round' @click="iscomm()">{{obj.commit}}条评论</el-button>
				<el-button icon='el-icon-s-promotion'>分享</el-button>
				<el-button icon='el-icon-star-on'>收藏</el-button>
				<el-button icon='el-icon-thumb'>感谢</el-button>
				<el-button icon='el-icon-more'></el-button>
				<el-button icon='el-icon-arrow-up' id="close" @click="close">收起</el-button>
			</div>
			<div class="commit" ref="commit">
				<div class="commit_1" v-for="items,index in arr" :key="index" ref="commit_1"  v-loading="loading">
					<div class="commit_user">
						<span>{{items.name}}:</span><span>{{items.datenumber+items.datetext}}</span>
					</div>
					<div class="commit_content">
						<span>{{items.text}}</span>
					</div>
					<div class="commit_button">
						<el-button icon="el-icon-caret-top">赞同 {{items.agree}}</el-button>
						<el-button icon='el-icon-chat-dot-round' @click="isrespon(index)">{{items.respon}}条回复</el-button>
						<el-button icon='el-icon-top-left'>回复</el-button>
						<el-button icon='el-icon-caret-bottom'>踩</el-button>
						<el-button icon='el-icon-s-flag'>举报</el-button>
					</div>
					<div class="commit_2">
						<div v-for="obj,n in items.respons" :key="n">
							<div class="commit2_user">
								<span>{{obj.name1}} </span> <span style="color: lightgray;padding: 0 10px;">回复 </span><span>{{obj.name2}} </span> <span>{{obj.datenumber+obj.datetext}}</span>
							</div>
							<div class="commit2_content">
								<span>{{obj.text}}</span>
							</div>
							<div class="commit2_button">
								<el-button icon="el-icon-caret-top">赞同{{obj.agree}}</el-button>
								<el-button icon='el-icon-top-left'>回复</el-button>
								<el-button icon='el-icon-caret-bottom'>踩</el-button>
								<el-button icon='el-icon-s-flag'>举报</el-button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		



	</div>

</template>

<script>
	
	export default {
		data() {
			return {
				
				name: "狗蛋的柴尔德",
				all: "",
				cut: "",
				display: "",
				zantong: "赞同",
				agree: false,
				disagree: false,
				loading:true,
				topic: "男人去按摩店到底正不正常？",
				arr: [{
					id: 1
				}, {
					id: 1
				}, {
					id: 1
				}, {
					id: 1
				}],
				obj:{}
			}
		},
		methods: {
			show() {
				this.display =  this.all;
				this.$el.querySelector(".text").style.height = "auto";

				this.$el.querySelector("#close").style.display = "inline-block";
				this.$el.querySelector("#show").style.display = "none";
			},
			close() {

				this.$el.querySelector(".text").style.height = "55px";
				this.$el.querySelector("#close").style.display = "none";
				this.$el.querySelector("#show").style.display = "inline-block";
				this.display =  this.cut;
			},
		toquestion() {
			this.$router.replace({
				path: '/home/second_page/',query:{question:this.obj.question}
			});
		},
		touser(){
			this.$router.replace({
				path: '/home/user_page/'
			});
		},
			isrespon(n) {
				console.log("isrespon");
				let element = this.$refs.commit_1[n].querySelector(".commit_2");
				if (getComputedStyle(element).display == "none") {
					element.style.display = "block";
				} else {
					element.style.display = "none";
				}

			},
			iscomm() {
				 console.log("iscomm");
				let element = this.$refs.commit;
				if (getComputedStyle(element).display == "none") {
					element.style.display = "block";
					this.axios.get("/commit")
						.then(res => {
							let data = res.data.data;
							this.arr = data.projects;
							this.loading = false;
						})
						.catch(err => {
							console.log(err);
							this.$message("网络错误");})
				} else {
					element.style.display = "none";
					this.loading = true;
				}
			},
			agreeload() {
				let element = this.$refs.agree.$el;
				if (this.disagree) {
					this.cai();
				}

				if (!this.agree) {
					this.agree = true;
					this.zantong = "已赞同";
					element.style.color = "white";
					element.style.backgroundColor = "#0084ff";
				} else

				{
					element.style.backgroundColor = "rgba(0, 132, 255, 0.1)";
					element.style.color = "#0084ff";
					console.log("else");
					this.agree = false;
					this.zantong = "赞同";
				}

			},
			cai() {
				let element = this.$refs.disagree.$el;
				if (this.agree) {
					this.agreeload();


				}
				if (!this.disagree) {
					element.style.color = "white";
					element.style.backgroundColor = "#0084ff";
					this.disagree = true;

				} else {
					element.style.backgroundColor = "rgba(0, 132, 255, 0.1)";
					element.style.color = "#0084ff";
					this.disagree = false;
				}
			}

		},
		mounted() {
			this.obj= this.$attrs.msg;
			this.all = this.obj.text;
			this.cut = this.all.substr(0, 75) + "..."
			this.display = this.cut;
			
            
		},
		update() {
            
		}
	}
</script>

<style scoped="scoped" lang="less">
	.item {
		text-align: left;
		height: auto;
		padding: 20px;
		border-bottom: 1px solid rgb(240, 242, 247);
         .commit{
			 
			 	box-shadow: rgba(26, 26, 26, 0.3) 0px 1px 3px 0px;
			 	margin-top: 10px;
			 	padding: 12px 20px;
			 	display: none;
			 
			 	.commit_1 {
			 		border-bottom: 1px solid lightgray;
			 		margin-top: 10px;
			 
			 		.commit_user {
			 			margin-bottom: 10px;
			 			overflow: hidden;
			 
			 			span {
			 				&:last-child {
			 					float: right;
			 				}
			 			}
			 		}
			 
			 		.commit_content {
			 			margin-bottom: 10px;
			 		}
			 
			 		.commit_button {
			 			margin-bottom: 10px;
			 
			 			button {
			 				padding: 0 10px;
			 				font-size: 14px;
			 				height: 20px;
			 				border: none;
			 				font-size: 14px;
			 				color: gray;
			 
			 				&:focus {
			 					background-color: transparent;
			 
			 				}
			 
			 				&:hover {
			 					background-color: transparent;
			 				}
			 			}
			 		}
			 
			 		.commit_2 {
			 			display: none;
			 			padding: 12px 0 10px 30px;
			 
			 			&>div {
			 				border-top: 1px solid rgb(240, 242, 247);
			 			}
			 
			 			.commit2_user {
			 				margin-top: 10px;
			 				.commit_user;
			 			}
			 
			 			.commit2_button {
			 				margin-top: 10px;
			 				.commit_button;
			 
			 				button {
			 					padding: 0;
			 					margin-left: 5px;
			 				}
			 			}
			 		}
			 
			 	}
			 
		 }
		.user {
			margin-bottom: 6px;
			color: rgb(133, 144, 166);
		}

		.head {
			height: 28.8px;

			font-size: 18px;
			font-weight: 600;
			cursor: pointer;
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

				&:focus {
					background-color: transparent;

				}

				&:hover {
					background-color: transparent;
				}

				&:nth-child(1),
				&:nth-child(2) {
					color: #0084ff;
					background-color: rgba(0, 132, 255, 0.1);
				}

				&:last-child {
					float: right;
					display: none;
				}

			}

		}
	}
</style>
