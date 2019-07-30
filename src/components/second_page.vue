<template>
	<div class="hole">
		<div class="header">
			<el-row>
				<el-col :span="17">
					<div class="item">

						<div class="head"><a>{{question}}</a></div>
						<div class="text">
							<p>{{display}}
							</p>
						</div>

						<div class="buttons">
							<el-button type="primary">关注问题</el-button>
							<el-button type="primary" icon="el-icon-edit" @click="iswritechange()">写回答</el-button>
							<el-button icon='el-icon-plus'>邀请回答</el-button>
							<el-button icon='el-icon-chat-dot-round'>评论</el-button>
							<el-button icon='el-icon-s-promotion'>分享</el-button>
						</div>
					</div>
				</el-col>
				<el-col :span="7">
					<div class="header_right">
						<div>
							<div>关注者</div>
							<div>453</div>
						</div>
						<div>
							<div>被浏览</div>
							<div>1,545,692</div>
						</div>
					</div>
				</el-col>
			</el-row>
		</div>
		<el-row>
			<el-col :span="17" style="padding-right: 10px;">
				<div class="left">
					<div class="write" v-if="iswrite">
						<div class="user">
							<span>作者</span>
						</div>
						<div class="writing">
							<el-input  type="textarea" placeholder="写回答..." :rows="7" v-model="write_text"  :autosize="{minRows: 7}">
							</el-input>
							
						</div>
						<div class="write_button">
							<el-button type="primary" @click="upload">提交回答</el-button>
						</div>
					</div>
					<div>
						<contentlist :onlyquestion="question"></contentlist>
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
	import contentlist from './common/contentlist';
	export default {
		data() {
			return {
				write_text: "",
				iswrite:false,
				question:"",
				display:""
			}
		},
		methods: {
              iswritechange(){
				  this.iswrite =!this.iswrite;
				  console.log(this.iswrite);
			  },
			  upload(){
				  this.iswritechange();
		          this.$message("提交成功");
			  }
		},
		components: {
			globalwrite,
			creator,
			ad,
			personal,
			foot,
			contentlist
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
			
					this.question =	 this.$route.query.question;
			        this.display = this.$route.query.text;
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

		.header {
			.header_right {
				display: flex;
				justify-content: flex-end;

				&>div {
					width: 100px;
					height: 50px;
					padding: 10px;

					div {
						padding: 5px;

						&:nth-child(2) {

							color: rgb(26, 26, 26);
							font-size: 18px;
							font-weight: 600;
						}
					}

					&:nth-child(1) {
						border-right: 1px solid rgb(235, 235, 235);

					}
				}
			}

			width: 100%;
			height: auto;
			background-color: white;
			margin-bottom: 10px;

			.item {
				text-align: left;
				height: auto;
				padding: 20px;
				border-bottom: 1px solid rgb(240, 242, 247);

				.head {
					height: 28.8px;

					font-size: 22px;
					font-weight: 600;
				}

				.text {
					height: auto;
					margin: 5px 0;

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
					color: gray;

					.question_info {
						float: right;
					}

					button {
						padding: 0 12px;
						font-size: 14px;
						height: 34px;
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

						&:nth-child(1) {
							color: white;
							background-color: rgb(0, 132, 255);
						}

						&:nth-child(1),
						&:nth-child(2),
						&:nth-child(3) {
							border: 1px solid rgb(0, 132, 255);
						}
					}

				}
			}
		}

		.left {

			margin-right: 100px;
			width: 100%;
			background-color: white;
            .write{
				padding: 16px 20px;
			    margin-bottom: 20px;
				border-bottom:2px solid lightgray; 
				
				.user{
					font-size: 15px;
					font-weight: 600;
					float: left;
					padding: 10px;
				} 
				
				
				
				.write_button{
					padding: 10px;
					
					overflow: hidden;
					button{
						float: right;
					}
					
				}
			}
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
