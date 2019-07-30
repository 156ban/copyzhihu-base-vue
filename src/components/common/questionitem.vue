<template>
	<div>
		<div class="item">

			<div class="head"  @click="towrite"><a>{{topic}}</a></div>
			<div class="text" >
				<p>{{display}}
				</p>
			</div>

			<div class="buttons">
				<el-button type="primary" icon="el-icon-edit" @click="towrite()">写回答</el-button>
				<el-button type="primary" icon="el-icon-plus">关注问题</el-button>
				<el-button icon='el-icon-time'>稍后答</el-button>
				<span class="question_info">{{awsernum}}个回答.{{viewnum}}次浏览</span>
				
			</div>
		</div>



	</div>

</template>

<script>
	export default {
		data() {
			return {
				id: "",
				display: "",
				topic: "男人去按摩店到底正不正常？",
				awsernum: 100,
				viewnum: 1000,
                obj:{}
			}
		},
		methods: {
			
          towrite(){
			 
			this.$router.replace({
				path: '/home/second_page/',query:{question:this.topic,text:this.display}
			});
		  },
		  },
		mounted() {
           this.obj= this.$attrs.msg;
           this.topic = this.obj.question;
		   this.display = this.obj.qtext;
            this.awsernum = this.obj.commit;
			this.viewnum = this.obj.agree;
		}
	}
</script>

<style scoped="scoped" lang="less">
	.item {
		text-align: left;
		height: auto;
		padding: 20px;
		border-bottom: 1px solid rgb(240, 242, 247);



		.head {
			height: 28.8px;

			font-size: 18px;
			font-weight: 600;
			cursor: pointer;
		}

		.text {
			height: auto;

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
           .question_info{
			   float: right;
		   }
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

				&:nth-child(1) {
					color: #0084ff;
					background-color: rgba(0, 132, 255, 0.1);
					
				}

			}

		}
	}
</style>
