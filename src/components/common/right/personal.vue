<template>
	<div class="personal">
		 <div><i class="icon iconfont icon-star"></i><span> 我的收藏</span><div><span>123</span></div></div>
	     <div><i class="icon iconfont icon-wentidan"></i><span> 我关注的问题</span><div><span>123</span></div></div>
		 <div><i class="icon iconfont icon-yaoqing"></i><span> 我的邀请</span><div><span>13</span></div></div>
		 <div><i class="icon iconfont icon-wallet_icon"></i><span> 我的余额</span></div>
		 <div><i class="icon iconfont icon-ai-message"></i><span> 站务中心</span></div>
		 <div><i class="icon iconfont icon-banquan"></i><span> 版权服务中心</span></div>
	</div>
</template>

<script>
</script>

<style lang="less" scoped="scoped">
	.personal{
		text-align: left;
		padding: 8px 20px;
		color: rgb(133, 144, 166);
		cursor: pointer;
		&>div{
			height: 40px;
			line-height: 40px;
			&:hover{
				background-color: rgba(245, 245, 245, 1);
				div span{
					background-color: white;
				}
			}
			
			span{
				margin-left: 10px;
				font-size: 14px;
				
			}
			div{
				 height: 40px;
					float: right;
					
					
				    span{
				    	
				    	font-size: 12px;
				    	padding: 6px 10px;
						background-color: rgba(245, 245, 245, 1);
				    }
			}
		}
	}
</style>
