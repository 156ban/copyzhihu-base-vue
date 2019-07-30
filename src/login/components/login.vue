<template>
	<div>
		<div class="container">
			<div class="header">
				<div>知乎</div>
				<div>登录知乎，发现更多可信赖的解答</div>
			</div>

			<div class="input">
				<input type="text" class="input_1" placeholder="账号" @focusout="outfocus('input_1')" v-model="id"/>
				<div class="input_1_div" id="input_1_div" @click="onfocus('input_1')">请输入账号</div>
				<input type="password" class="input_2" placeholder="密码" @focusout="outfocus('input_2')"  v-model="password"/>
				<div class="input_2_div" id="input_2_div" @click="onfocus('input_2')">请输入密码</div>
				<a class="ai" @click="change()"><i class="icon iconfont icon-in_biyan_fill eye" style="font-size: 20px;"></i></a>
				<div class="input_bottom" style="color: lightgray;">
					<span>手机验证码登录</span>
					
					<span>忘记密码</span><br>
					测试:名字:杨洋 密码:yangyang
				</div>

				<div class="btn_login">
					<el-button type="primary" @click="login()">登录</el-button>
				</div>
				<div class="under_btn" style="margin-top: 16px;color: #8590a6;font-size: 14px;">
					二维码登录
					·
					海外手机登录
					·
					社交帐号登录
				</div>
			</div>

		</div>
		<div class="bottom">
			没有帐号？
			<router-link to="regist" class="route">注册</router-link>
		</div>

	</div>

</template>

<script>
	export default {
		data() {
			return {
				openeye: false,
				rules: {
					id: [{
						required: true,
						message: '请输入手机号或邮箱',
						trigger: 'blur'
					}],
					element1: true,
					element2: true,
				},
				id:"",
				password:""
			}
		},
		methods: {
			change() {
				let eye = document.querySelector(".eye");
				let password = document.querySelector(".input_2");
				document.getElementsByClassName('input_2_div')[0].style.display = "none";

				if (this.openeye) {
					eye.classList.add("icon-in_biyan_fill");
					eye.classList.remove("icon-ai-eye");
					password.setAttribute("type", "password");

				} else {
					eye.classList.remove("icon-in_biyan_fill");
					eye.classList.add("icon-ai-eye");
					password.setAttribute("type", "text");

				}
				this.openeye = !this.openeye;
			},
			outfocus(classname) {
				
				let div = document.getElementsByClassName((classname + '_div'))[0];
				let value ;
                 if(classname=="input_2")
				 {
					 value = this.password.replace(/\s*/g, "");
					 
				 }else
				 {
					 value = this.id.replace(/\s*/g, "");
				 }
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
			login() {
				console.log(window.location);
				let state = true;
				
				
					if (this.id.replace(/\s*/g, "") ==""&&this.password.replace(/\s*/g, "")=="") {
						state = false;
						this.$message("用户名或密码不能为空");
					}
				
				if (state) {

					
					this.axios
						.get("https://easy-mock.com/mock/5d32d173da27b648233a1601/example/query?name="+this.id+"&password="+this.password)
						.then(res => {
							if(res.data.data.loginResult==1)
							{
								console.log("登陆成功");
								console.log("更改");
								setTimeout(()=>{
									window.location='http://localhost:8080/';
								},500)
								localStorage.setItem("token", res.data.data.token);
								
							}if(res.data.data.loginResult==2)
							{
								console.log("用户名或密码错误");
								this.$message("用户名或密码错误");
								console.log(res.data.data.head);
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
				margin-top: 25px;

				.el-button {
					width: 352px;
					height: 34px;
					background-color: #0084ff
				}
			}

			.input_1_div,
			.input_2_div {
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
