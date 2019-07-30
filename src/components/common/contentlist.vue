<template>
	<div v-if="this.show" v-loading="loading">


		<component ref="card" v-for="items in real" :is="gettype()" :type="type" :msg="items"    ></component>
		<!-- <component ref="card"  is="questionitem" ></component> -->
	</div>
</template>

<script>
	import contentitem from './contentitem'
	import followitem from './followitem'
	import hotitem from './hotitem'
	import questionitem from './questionitem'
	export default {
		data() {
			return {
				num: 8,
				say: "nihao",
				type: "",
				real: [],
				arr: [],
				show: true,
				loading:true
			}
		},
		components: {
			contentitem,
			followitem,
			hotitem,
			questionitem
		},
		mounted() {
			let element = this;
			window.addEventListener("scroll", function() {
				let sum1 = 122;
				for (let i = 0; i < element.$refs.card.length; i++) {
					sum1 = sum1 + parseInt(getComputedStyle(element.$refs.card[i].$el).height.replace(/[a-zA-Z]/g, ""), 10);
				}
				if ((scrollY + window.innerHeight) > sum1) {
					console.log("到底了");
					element.countinue();
				}
			})
			
		},

		methods: {
			countinue() {
				if (this.real.length == this.arr.length) {


					return;
				}
				this.real = this.real.concat(this.arr.slice(this.num, this.num + 8));
               
				this.num += 8;

			},
			gettype() {

				if (this.$route.name == "hot") {
					this.type = this.$route.name;
					return "hotitem"
				} else if (this.$route.name == "follow") {
					this.type = this.$route.name;
					return "followitem"
				} else if (this.$route.name == "recommend") {
					this.type = this.$route.name;
					return "contentitem"
				} else if (this.$route.name == "question") {
					this.type = this.$route.name;
					return "questionitem"
				}
			}
		},
		created() {
this.type = this.$route.name;

			this.axios.get("/contentitem")
				.then(res => {
					let data = res.data.data;
					this.arr = data.projects;
					this.real = this.arr.slice(0, this.num);
					if (this.$attrs.onlyquestion) {
						console.log(this.arr);
						for (let i = 0; i < 30; i++) {
							this.arr[i].question = this.$attrs.onlyquestion;
						}

					};
					if(this.$attrs.onlyone)
					{
						for (let i = 0; i < 30; i++) {
							this.arr[i].name = this.$store.state.name;
							this.arr[i].head1 = "";
						}
					}
				  this.loading=false;
				})
				.catch(err => {
					console.log(err);
					this.$message("网络错误");
					this.islogin = false;
				});

		},
		updated() {

		},
		watch: {
			type(newValue, oldValue) {
				this.num = 8;
				console.log("更改了");
				this.loading=true;
				this.axios.get("/contentitem")
					.then(res => {
						let data = res.data.data;
						this.arr = data.projects;
						if (this.$attrs.onlyquestion) {
							console.log(this.arr);
							for (let i = 0; i < 30; i++) {
								this.arr[i].question = this.$attrs.onlyquestion;
							}
						
						}
						if(this.$attrs.onlyone)
						{
							for (let i = 0; i < 30; i++) {
								this.arr[i].name = this.$store.state.name;
								this.arr[i].head1 = "";
							}
						}
						this.loading=false;
						
						this.real = this.arr.slice(0, this.num);
					})
					.catch(err => {
						console.log(err);
						this.$message("网络错误");
						this.islogin = false;
					});
					

			}
		},
	}
</script>

<style>
</style>
