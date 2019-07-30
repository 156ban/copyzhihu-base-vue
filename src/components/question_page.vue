<template>
	<div class="hole">

		<el-row style="width: 100%;">
			<el-col :span="17" style="padding-right: 10px;" >
				<div class="left" >
					<nav>
	    
					</nav>
					<div>
						<contentlist></contentlist>
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
	import contentlist from './common/contentlist.vue';
	export default {
		data() {
			return {
				nav_select: 0
			}
		},
		methods: {
			nav_selected(n) {
			// 	let arr = document.querySelectorAll(".left nav>button");
			// 	arr.forEach(function(item) {
			// 		item.style.color = "black";})
			// 	arr[n].style.color = "#0084ff";
			// 	this.nav_select = n;
			// 	switch(n){
			// 		case 0:this.$router.push({path:'first_page_1'});break;
			// 		case 1:this.$router.push({path:'first_page_2'});break;
			// 		case 2:this.$router.push({path:'first_page_3'});break;	
			// 	}
			// 	
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
