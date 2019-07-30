<template>
	<div class="hole">
		<div class="user_head">
			<div class="user_info">
				<div>{{name}}</div>
				<div><span>性别</span><span>{{state.sex}}</span><label v-if="editbutton==='保存修改'">男</label><input type="radio" value="男"
					 v-if="editbutton==='保存修改'" name="sex" v-model="sex"><label v-if="editbutton==='保存修改'">女</label><input type="radio"
					 name="sex" v-if="editbutton==='保存修改'" value="女" v-model="sex"></div>
				<div><span>居住地</span><span>{{state.address}}</span><input type="text" v-if="editbutton==='保存修改'" class="edit"
					 v-model="address"></div>
				<div><span>所在行业</span><span>{{state.job}}</span><input type="text" v-if="editbutton==='保存修改'" class="edit" v-model="job"></div>
			</div>
			<div class="user_button">
				<el-button ref="edit_button" @click="edit">{{editbutton}}</el-button>
			</div>
		</div>
		<el-row>
			<el-col :span="17" style="padding-right: 10px;">
				<div class="left">
					<nav>
						<el-button @click="nav_selected(0)">动态</el-button>
						<el-button @click="nav_selected(1)">回答</el-button>
						<el-button @click="nav_selected(2)">提问</el-button>
					</nav>
					<div>
						<router-view onlyone='true' ></router-view>
					</div>
				</div>
			</el-col>
			<el-col :span="7">
				<div class="right">
					<div>
						<globalwrite></globalwrite>
					</div>
					<div>
						<creator></creator>
					</div>
					<div>
						<personal></personal>
					</div>
					<div class="fix">
						<ad></ad>
					</div>

					<div class="fix">
						<foot></foot>
					</div>
				</div>
			</el-col>
		</el-row>
	</div>
</template>

<script>
	import globalwrite from "./common/right/globalwrite"
	import creator from "./common/right/creator"
	import ad from "./common/right/ad"
	import personal from "./common/right/personal"
	import foot from "./common/right/footer"
	export default {
		data() {
			return {
				nav_select: 0,
				sex: "",
				address: "",
				job: "",
				editbutton: "编辑个人资料",
				name:null
			}
		},
		methods: {
			nav_selected(n) {
				let arr = document.querySelectorAll(".left nav>button");
				arr.forEach(function(item) {
					item.style.color = "black";
				})
				arr[n].style.color = "#0084ff";
				this.nav_select = n;
				switch (n) {
					case 0:
						this.$router.push({
							path: 'first_page_1'
						});
						break;
					case 1:
						this.$router.push({
							path: 'first_page_2'
						});
						break;
					case 2:
						this.$router.push({
							path: 'first_page_3'
						});
						break;
				}

			},
			edit() {
				if (this.editbutton == "编辑个人资料") {
					this.editbutton = "保存修改"
				} else {
					if (this.sex == "" || this.address == "" || this.job == "") {
						this.$message("不能为空");
						return;
					}
					this.$store.commit("setData", {
						sex: this.sex,
						address: this.address,
						job: this.job
					});

					this.editbutton = "编辑个人资料"
				}

			}
		},
		components: {
			globalwrite,
			creator,
			ad,
			personal,
			foot
		},
		mounted() {
          
			let fixs = this.$el.querySelectorAll(".fix");
			window.addEventListener('scroll', function() {
				console.log();
				if (scrollY > 596) {
					fixs[0].style.position = "fixed"
					fixs[1].style.position = "fixed"
					fixs[0].style.top = "62px";
					fixs[1].style.top = "319px";
				} else {
					fixs[0].style.position = "static"
					fixs[1].style.position = "static"
				}
			});
			this.nav_selected(0);
			// {,this.address,this.job} = {this.$store.state.sex,this.$store.state.address,this.$store.state.job}
			this.sex = this.$store.state.sex;
			this.address = this.$store.state.address;
			this.job = this.$store.state.job;
			this.name = this.$store.state.name;
			console.log("+++");
			console.log(this.$route);
			
		},
		computed: {
			state() {
				return this.$store.state;
			}

		}
	}
</script>

<style lang="less" scoped="scoped">
	.el-col .left,
	.el-col .right>div {
		box-shadow: 0 1px 3px rgba(26, 26, 26, .1);
	}

	.hole {
		width: 1000px;
		height: 100%;
		// background-color: white;
		margin: 0;

		.user_head {
			height: 166px;
			margin-bottom: 10px;
			box-shadow: 0 1px 3px rgba(26, 26, 26, .1);
			background-color: white;
			padding: 16px 32px;
			display: flex;
			justify-content: space-between;
			align-items: flex-end;

			.user_info {

				text-align: left;

				&>div {
					margin-bottom: 15px;
					font-size: 14px;

					span {
						&:nth-child(1) {
							font-weight: 600;
							margin-right: 42px;
							width: 60px;
							display: inline-block;
						}

						&:nth-child(2) {
							width: 120px;
							display: inline-block;
						}

					}

					&:nth-child(1) {
						font-size: 26px;
						font-weight: 600;
					}
				}
			}

			.user_button {}
		}

		.left {

			margin-right: 100px;
			width: 100%;
			background-color: white;


			nav {

				height: 59px;
				border-bottom: 1px solid rgb(240, 242, 247);

				button {
					height: 59px;
					float: left;
					border: none;
					font-size: 16px;

					&:focus {
						background-color: transparent;
						color: black;
					}

					&:hover {
						background-color: transparent;
					}

				}
			}
		}

		.right {
			width: 100%;
			height: 500px;

			&>div {
				margin-bottom: 10px;
				background-color: white;
				width: 292px;

				&:nth-child(1) {
					height: 145px;
				}

				&:nth-child(2) {
					height: 152px;
				}

				&:nth-child(3) {
					height: 256px;
				}

				&:nth-child(4) {
					height: 247px;
				}

				&:nth-child(5) {
					height: 185px;
					background-color: transparent;
					box-shadow: none;
				}

			}
		}
	}
</style>
