<template>
	<div class="creator">
		<div class="up">
			<i class="icon iconfont icon-yonghu1"></i><span>创作者中心</span><i class="icon iconfont icon-icon-"></i>
		</div>
		<div class="down">
			<div>
				<div>昨日回答阅读数</div>
				<div>0</div>
				<div>较前日 --</div>
			</div>
			<div>
				<div>昨日回答赞同数</div>
				<div>0</div>
				<div>较前日 --</div>
			</div>
		</div>
	</div>
</template>

<script>
</script>

<style lang="less" scoped="scoped">
	.creator {
		padding: 10px 17px;
		width: auto;
		height: auto;
		text-align: left;
		color: rgb(133, 144, 166);
         cursor: pointer;
		.up {
			line-height: 35px;
			height: 45px;
              border-bottom: 1px solid #f0f2f7;
			  font-size: 14px;
			  
			.icon-yonghu1 {
				font-size: 20px;
			}

			.icon-icon- {
				float: right;
				font-size: 15px;
			}
		}
		.down{
			padding: 17px 0;
			height: 65px;
			display: flex;
			text-align: center;
			&>div{
				width: 181px;
				&>div{
					font-size: 12px;
					&:nth-child(2){
						font-size: 18px;
                      line-height: 28px;
					      font-weight: 600;
						  color: black;
					}
					
				}
				
			}
			&>div:nth-child(1){
				border-right: 1px solid #f0f2f7;
			}
		}
	}
</style>
