<template>
	<div>
		<el-dialog :visible.sync="dialogVisible" width="30%"  class="ask">
			<el-input v-model="question_text1"  placeholder="写下你的问题，准确地描述问题更容易得到解答">
			</el-input>
			<el-input type="textarea" :autosize="{ minRows: 2, maxRows: 4}" v-model="question_text2" placeholder="输入问题背景条件等详细信息(选填)" style="margin-top: 10px;">
			</el-input>
			<span slot="footer" class="dialog-footer">
				<div style="float: left;">匿名提问<input type="radio" />
				</div>
				<el-button @click="dialogVisible = false">取 消</el-button>
				<el-button type="primary" @click="upload()">发布</el-button>
				
			</span>
		</el-dialog>
		<div class="menu-container">
			<div class="menu">
				<div class="brand"><a>知乎</a></div>
				<div>
					<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
						<el-menu-item index="1">首页</el-menu-item>
						<el-menu-item index="2">发现</el-menu-item>
						<el-menu-item index="3">等你来答</el-menu-item>
					</el-menu>
				</div>
				<div class="search">
					<div class="input_container">
						<el-input v-model="searchmsg" placeholder="请输入内容">

						</el-input>
						<div class="search_btn"><i class="icon iconfont icon-fangdajing" style="font-size: 18px;color: gray;"></i></div>

					</div>
					<el-button type="primary" class="question_btn" @click="dialogVisible = true" lock-scroll="false">提问</el-button>

				</div>
				<div class='user_state'>
					<div class="nologin" v-if="islogin==false">
						<el-button type="primary" class="el-button" plain @click="tologin">登录</el-button>
						<el-button type="primary" class="el-button" @click="toregist">加入知乎</el-button>
					</div>
					<div class="login" v-else>
						<div class="user_ring"><i class="icon iconfont icon-lingdang"></i>
							<el-dropdown placement="bottom">
								<el-button type="primary">
								</el-button>
								<el-dropdown-menu slot="dropdown" style="width: 500px;">
									<el-dropdown-item></el-dropdown-item>
									<el-dropdown-item>{{lingdang}}</el-dropdown-item>
									<el-dropdown-item>{{lingdang}}</el-dropdown-item>
									<el-dropdown-item>{{lingdang}}</el-dropdown-item>
								</el-dropdown-menu>
							</el-dropdown>
						</div>
						<div class="user_msg"><i class="icon iconfont icon-xiaoxi">
							</i>
							<el-dropdown placement="bottom">
								<el-button type="primary">
								</el-button>
								<el-dropdown-menu slot="dropdown">
									<el-dropdown-item style="text-align: center;" disabled>我的私信</el-dropdown-item>
									<el-dropdown-item divided>
										{{qipao}}</el-dropdown-item>
									<el-dropdown-item>{{qipao}}
									</el-dropdown-item>
									<el-dropdown-item>{{qipao}}
									</el-dropdown-item>
								</el-dropdown-menu>
							</el-dropdown>
						</div>
						<div class="user_img">
							<el-dropdown placement="bottom">
								<el-button type="primary">
									{{username}}
								</el-button>
								<el-dropdown-menu slot="dropdown">
									<el-dropdown-item @click.native="touser()"><i class="icon iconfont icon-yonghu1"></i>我的主页</el-dropdown-item>
									<el-dropdown-item><i class="icon iconfont icon-yonghu"></i>创作者中心</el-dropdown-item>
									<el-dropdown-item><i class="icon iconfont icon-shezhi"></i>设置</el-dropdown-item>
									<el-dropdown-item @click.native="out()"><i class="icon iconfont icon-guanbi"></i>退出</el-dropdown-item>
								</el-dropdown-menu>
							</el-dropdown>
						</div>
					</div>
				</div>
				<div class="search_list" v-show="search_list_show">
					<el-menu default-active="2" class="el-menu-vertical-demo" background-color="white" text-color="black"
					 active-text-color="#ffd04b">
						<el-menu-item key="0" disabled text-color="gray" style="border-bottom: 1px solid gray;">

							<span slot="title">知乎热搜</span>
						</el-menu-item>
						<el-menu-item v-for="item in search_list" :key="item.id">

							<span slot="title">{{item.text}}</span>
						</el-menu-item>

					</el-menu>
				</div>
			</div>
		</div>
		<div class="content">
			<router-view></router-view>
		</div>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				qipao: '亲爱的 羊村村长 你好：恭喜你获得「创作者中心」公测权！',
				lingdang: '西洋菜心  的提问等你来答 慕课网前端就业班怎么样?',
				islogin: true,
				dialogVisible: false,
				activeIndex: '1',
				activeIndex2: '1',
				searchmsg: "",
				question_text1:"",
				question_text2:"",
				search_list_show: false,
				search_list: [{
					id: 1,
					text: "上气真的辱华了吗"
				}, {
					id: 2,
					text: "卜凡成立个人工作室"
				}, {
					id: 3,
					text: "网传鹿晗关晓彤分手"
				}, {
					id: 4,
					text: "华为百万年薪博士"
				}, {
					id: 5,
					text: "公众号HUGO注销"
				}]
			};
		},
		methods: {
			handleSelect(key, keyPath) {
				console.log(keyPath);
				if (key == 1) {
					this.$router.replace({
						path: '/home/first_page/'
					});
				} else if (key == 3) {
					this.$router.replace({
						path: '/home/question_page/'
					});
				}
			},
			upload(){
		          if(this.question_text1!="")
					{this.$message("发布成功");
					this.dialogVisible = false}else
					{
						this.$message("问题不能为空");
					}
			},
			touser() {

				this.$router.replace({
					path: '/home/user_page'
				});
			},
			tologin() {
				window.location = 'http://localhost:8080/login.html';
			},
			toregist() {
				window.location = 'http://localhost:8080/login.html#/regist';
			},
			out() {
				localStorage.clear();
				this.tologin();

			},
			getuserinfo() {
				this.axios.get("/restful")
					.then(res => {
						let data = res.data.data;
						if (data.result == 1)

						{
							this.$store.commit("setData", data.userinfo);
							console.log(data);
							this.islogin = true;
						} else {
							this.islogin = false;
						}
					})
					.catch(err => {
						console.log(err);
						this.$message("网络错误");
						this.islogin = false;
					});
			}
		},
		computed: {
			username() {
				return this.$store.state.name;
			}

		},
		mounted() {
			let element = document.querySelector(".search input");
			console.log(element);
			let list = document.querySelector(".search_list");
			let vue = this;
			element.onfocus = function() {

				vue.search_list_show = true;
			};
			element.addEventListener("focusout", function(e) {
				vue.search_list_show = false;
			}, false)
			this.getuserinfo();

		}
	}
</script>

<style lang="less">
	.ask {
		.el-dialog__body {
			padding: 10px 20px;
		}
	}

	.el-dropdown {
		vertical-align: top;
	}

	.el-dropdown+.el-dropdown {
		margin-left: 15px;
	}

	.el-icon-arrow-down {
		font-size: 12px;
	}


	html,
	body {
		height: 100%;
		width: 100%;
		margin: 0;
		padding: 0;
		background-color: rgb(246, 246, 246);

	}

	.menu-container {

		width: 100%;
		height: 52px;
		background-color: white;
		box-shadow: 0 1px 3px rgba(26, 26, 26, .1);
		position: fixed;
		top: 0;
		z-index: 10;

		.menu {
			position: relative;
			width: 1000px;
			margin: 0 auto;
			font-size: 15px;

			.el-menu-demo {
				height: 52px;
				margin-left: 90px;

				.el-menu-item {
					height: 52px;
					padding: 0;
					line-height: 52px;
					margin: 0 17px;

					&.is-active {
						font-weight: 600;
						border-bottom: 2px solid #0084ff;
					}

					&:nth-child(1) {
						a {
							text-decoration: none;
							color: #333;
						}

					}
				}
			}

			.search_list {
				text-align: left;
				height: 200px;
				width: 400px;
				position: absolute;
				left: 32.5%;
				z-index: 10;

				ul {
					height: 204px;

					li {
						height: 34px;
						line-height: 34px;
					}
				}
			}
		}

		.brand {
			height: 52px;
			line-height: 52px;
			position: absolute;

			a {
				text-decoration: none;
				color: #0084ff;
				font-size: 30px;
				cursor: pointer;
			}
		}

		.search {
			width: 400px;
			height: 52px;
			position: absolute;
			left: 325px;
			top: 0;
			display: flex;
			justify-content: flex-start;
			align-items: center;
			overflow: hidden;

			input {
				height: 34px;
				background-color: rgb(246, 246, 246);
				width: 326px;
				transition: 0.5s all;

				&:focus {
					width: 400px;
				}
			}


			.question_btn {
				width: 58px;
				height: 34px;
				background-color: #0084ff;
				padding: 0 14px;
				margin-left: 16px;
				transition: 0.3s all;

				span {}
			}

			.input_container {
				position: relative;

				.search_btn {
					height: 34px;
					width: 42px;

					position: absolute;
					right: 0;
					top: 0;
					justify-content: center;
					align-items: center;
					display: flex;
					cursor: pointer;
				}
			}
		}

		.user_state {
			position: absolute;
			right: 0;
			top: 0px;
			height: 52px;
			display: flex;
			justify-content: flex-start;
			align-items: center;

			.nologin {
				display: block;

				.el-button {
					padding: 0 16px;
					height: 34px;
				}
			}

			.login {
				display: flex;
				justify-content: flex-start;
				align-items: center;

				div {

					height: 22px;
					display: inline-block;
					width: 22px;
					margin-right: 40px;
					cursor: pointer;
					position: relative;

					.icon {
						font-size: 25px;
						color: gray;
					}

					&:nth-child(3) {

						width: 40px;
						height: 30px;
						margin-right: 20px;
						color: black;
						font-size: 20px;

						.el-dropdown {
							width: 100%;
							height: 100%;

							.el-button {
								height: 100%;
								width: 100%;
								padding: 0;
								background-color: transparent;
								border: none;

								span {
									color: gray;
									font-weight: 600;
								}
							}
						}
					}

					&:nth-child(1),
					&:nth-child(2) {
						.el-dropdown {
							width: 22px;
							height: 22px;
							position: absolute;
							top: 0;
							left: 0;

							.el-button {
								height: 100%;
								width: 100%;
								padding: 0;
								background-color: transparent;
								border: none;

							}
						}
					}
				}

			}
		}
	}

	.content {
		margin: 62px auto;
		width: 1000px;

	}
</style>
