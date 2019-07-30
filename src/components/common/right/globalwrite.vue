<template>
	<div class="globalwrite">
		<div class="up">
			<div><i class="icon iconfont icon-wenzhang1"></i>
				<div>写回答</div>
			</div>
			<div><i class="icon iconfont icon-bi"></i>
				<div>写文章</div>
			</div>
			<div><i class="icon iconfont icon-10"></i>
				<div>写想法</div>
			</div>
		</div>
		<div class="down">
			<i class="icon iconfont icon-lishijilu"></i><span>我的稍后答</span>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
	}
</script>

<style lang="less" scoped="scoped">
	.globalwrite {
		width: 100%;
		height: 100%;

		.up {
			height: 40px;
			padding: 23px;
			display: flex;
			justify-content: space-between;

			&>div {
				cursor: pointer;

				&:hover {
					color: skyblue;

				}
			}

			&>div>div {
				margin-top: 6px;
			}
		}

		.down {
			color: darkgray;
			text-align: left;
			padding: 15px 23px;
			cursor: pointer;

			&:hover {
				background-color: rgba(245, 245, 245, 1);
			}
		}
	}
</style>
