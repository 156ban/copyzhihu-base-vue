<template>
	<div>
		<div class="container">
			<div class="header">
				<div>知乎</div>
				<div>注册知乎，发现更多可信赖的解答</div>
			</div>
			<div class="input">
				<input type="text" class="input_1" placeholder="账号" @focusout="outfocus('input_1')" />
				<div class="input_1_div" id="input_1_div" @click="onfocus('input_1')">请输入账号</div>
				<input type="password" class="input_2" placeholder="密码" @focusout="outfocus('input_2')" />
				<div class="input_2_div" id="input_2_div" @click="onfocus('input_2')">请输入密码</div>
				<input type="password" class="input_3" placeholder="确认密码" @focusout="outfocus('input_3')" />
				<div class="input_3_div" id="input_3_div" @click="onfocus('input_3')">请输入确认密码</div>
				<a class="ai" @click="change()"><i class="icon iconfont icon-in_biyan_fill eye" style="font-size: 20px;"></i></a>


				<div class="btn_login">
					<el-button type="primary" @click="regist()">注册</el-button>
				</div>
				<div class="under_btn" style="margin-top: 16px;color: #8590a6;font-size: 12px;">
					注册即代表同意《知乎协议》《隐私保护指引》
					注册机构号
				</div>
			</div>

		</div>
		<div class="bottom">
			已有帐号？
			<router-link to="login" class="route">登录</router-link>
		</div>

	</div>

</template>

<script>
	export default {
		data() {
			return {
				openeye: false
			}
		},
		methods: {
			change() {
				let eye = document.querySelector(".eye");
				let password = document.querySelector(".input_2");
				let password2 = document.querySelector(".input_3");
				document.getElementsByClassName('input_3_div')[0].style.display = "none";
				document.getElementsByClassName('input_2_div')[0].style.display = "none";
				if (this.openeye) {
					eye.classList.add("icon-in_biyan_fill");
					eye.classList.remove("icon-ai-eye");
					password.setAttribute("type", "password");
					password2.setAttribute("type", "password");
				} else {
					eye.classList.remove("icon-in_biyan_fill");
					eye.classList.add("icon-ai-eye");
					password.setAttribute("type", "text");
					password2.setAttribute("type", "text");
				}
				this.openeye = !this.openeye;
			},
			outfocus(classname) {
				let element = document.getElementsByClassName(classname)[0];
				let div = document.getElementsByClassName((classname + '_div'))[0];
				let value = element.value.replace(/\s*/g, "");

				if (value == "") {

					div.style.display = "block";

				}
			},
			onfocus(classname) {
				let div = document.getElementsByClassName((classname + '_div'))[0];
				let element = document.getElementsByClassName(classname)[0];
				element.focus();
				div.style.display = "none";
			},
			regist() {
				let state = true;
				let elements = [document.getElementsByClassName("input_1")[0], document.getElementsByClassName("input_2")[0],
					document.getElementsByClassName("input_3")[0]
				];
				

				for (let i = 0; i < elements.length; i++) {
					if (elements[i].value.replace(/\s*/g, "") == "") {
						state = false;
						this.$message("用户名或密码不能为空");
						return;
					}
				}
				if(elements[1].value!=elements[2].value)
				{
					this.$message("密码两次输入不一致");
					return;
				}
				
				
				if (state) {
					console.log("注册成功");
					
						this.axios
						.get("https://easy-mock.com/mock/5d32d173da27b648233a1601/example/query?type=regist&name="+elements[0].value+"&password="+elements[1].value)
						.then(res => {
							if(res.data.data.registResult==1)
							{this.$message("注册成功");
								console.log("注册成功");
								console.log(res.data);
								localStorage.setItem("token", res.data.data.token);
								window.location='http://localhost:8080/';
							}if(res.data.data.registResult==2)
							{
								console.log("用户名重复");
								this.$message("用户名重复");
							}
							
						})
						.catch(err => {
							console.log(err);
							this.$message("网络错误");
						});

				}

			}
		}
	}
</script>

<style lang="less" scoped="scoped">
	.container {

		width: 432px;
		height: 505px;
		text-align: center;
		background-color: white;
		border-radius: 3px;

		.header {
			color: #0084ff;
			height: 144.43px;
			width: 432px;
			padding-top: 30px;
			padding-bottom: 5px;

			div:first-child {
				font-size: 65px;
			}

			div:last-child {
				font-size: 22px;
			}
		}

		.input {
			width: 352px;
			padding: 0 40px 36px 40px;

			input {
				width: 352px;
				height: 31.2px;
				border: none;
				padding-top: 12px;
				padding-bottom: 7px;
				outline: none;
				font-size: 15px;
				border-bottom: 0.5px solid lightgray;

				&:focus {}

				&:nth-child(2) {
					margin-top: 10px;
					margin-bottom: 10px;
				}
			}


			.btn_login {
				width: 352px;
				margin-top: 5px;

				.el-button {
					width: 352px;
					height: 34px;
					background-color: #0084ff
				}
			}

			.input_1_div,
			.input_2_div,
			.input_3_div {
				width: 300px;
				height: 25px;
				color: red;
				position: absolute;
				left: 40px;
				top: 195px;
				text-align: left;
				display: none;
				background-color: white;
			}

			.input_2_div {
				top: 245px;
			}

			.input_3_div {
				top: 297px;
			}
		}

	}

	.bottom {
		width: 432px;
		height: 59px;
		background-color: #f6f6f6;
		border-top: 1px solid #ebebeb;
		position: absolute;
		bottom: 0;
		text-align: center;
		line-height: 59px;

		.route {


			text-decoration: none;

		}
	}

	.input_bottom {
		position: relative;
		height: 20px;
		margin-top: 10px;

		span {
			position: absolute;
			font-size: 14px;

			&:nth-child(1) {
				left: 0;
				color: #175199;

			}

			&:nth-child(2) {
				right: 0;
				color: #8590a6;
			}
		}
	}

	.ai {
		position: absolute;
		right: 40px;
		top: 255px;
	}
</style>
