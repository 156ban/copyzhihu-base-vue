<template>
	<div class="hole">

		<div class="inner">
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
</script>

<style lang="less">
	html,
	body {
		width: 100%;
		height: 100%;
		margin: 0;
		padding: 0;
		font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, PingFang SC, Microsoft YaHei, Source Han Sans SC, Noto Sans CJK SC, WenQuanYi Micro Hei, sans-serif;
		background-color: #b8e5f8;
	}

	.hole {
		width: 100%;
		height: 100%;
		background: url(../assets/bgimg.png) no-repeat;
		background-size: cover;

		.inner {
			position: absolute;
			left: 50%;
			top: 50%;
			transform: translate(-50%, -50%);

		}
	}
</style>
