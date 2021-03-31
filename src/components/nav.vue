<template>
	<!--导航栏组件-->
	<nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
		<div class="container">
			<a class="navbar-brand" href="/home"> <strong>ColossalScope</strong></a>
			<button
				class="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarCollapse"
				aria-controls="navbarCollapse"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span class="navbar-toggler-icon"></span>
			</button>

			<div class="collapse navbar-collapse" id="navbarCollapse">
				<!--Main menu-->
				<ul class="navbar-nav ml-auto mr-3">
					<li class="nav-item">
						<a class="nav-link js-scroll-trigger" href=""
							>Home<span class="sr-only">(current)</span>
						</a>
					</li>
					<li
						class="nav-item"
						v-for="(item, index) in navitemlist"
						:key="index"
					>
						<a class="nav-link js-scroll-trigger" :href="item.path">{{
							item.name
						}}</a>
					</li>
				</ul>
				<a class="btn btn-outline-primary btn-lg animated mr-3" href="/login"
					>Sign In</a
				>
				<a class="btn btn-primary btn-lg" href="">Get started</a>
			</div>
		</div>
	</nav>
	<!-- <div class="header-nav" id="mainNav">

		<div class="websitename"><strong>ColossalScope</strong></div>
		<ul class="nav justify-content-center">
			<li class="nav-item" v-for="(item, index) in navitemlist" :key="index">
				<a class="nav-link" :href="item.path">{{ item.name }}</a>
			</li>
		</ul>
		<button type="button" class="btn" @click="signinClick">Sign in</button>
		<button type="button" class="btn getstarted">Get started</button>
	</div> -->
</template>

<script>
export default {
	name: 'Nav',
	props: {
		navitemlist: {
			type: Array,
			default() {
				//默认数组 可从父组件中传入 需要几个对象传几个对象
				return [
					// { name: 'Home', path: '#', active: 'active' },
					{ name: 'Features', path: '#', active: 'active' },
					{ name: 'support', path: '#', active: 'active' },
					{ name: 'Contact', path: '#', active: 'active' },
				]
			},
		},
	},
	data() {
		return {}
	},
	methods: {
		signinClick() {
			//向父组件传递事件
			this.$emit('signClick')
		},
	},
}
</script>
<style lang="less" scoped>
/**导入nav配置样式 */
@import '../assets/less/nav.less';
// .header-nav {
// 	width: 100%;
// 	background: #14a7bc;
// 	border: none;
// 	position: fixed;
// 	display: flex;
// 	padding: 20px 0px;
// 	.websitename {
// 		color: white;
// 		font-size: 28px;
// 		padding-left: 10rem;
// 	}
// 	.nav {
// 		margin-left: 30rem;
// 		.nav-item {
// 			.nav-link {
// 				font-size: 20px;
// 				color: white;
// 			}
// 		}
// 	}
// 	.btn {
// 		color: white;
// 		border: 1px solid white;
// 	}
// 	.getstarted {
// 		background: #fe7000;
// 		margin-left: 20px;
// 	}
// }
.content-section {
	min-height: 75vh;
}
.form-control {
	border-color: #ccc;
	color: #343a40 !important;
	border-radius: 5px;
}
.form-control:disabled,
.form-control[readonly] {
	background-color: #ccc;
	border-color: #ccc;
}
#registerDetectedCountryRow img {
	margin-right: 5px;
}
#mainNav.navbar-shrink .navbar-brand {
	color: #26a4c3;
}
.btn-primary,
.btn-success {
	color: #fff;
	background-color: #ff6f00;
	border-color: #ff6f00;
}

.btn-primary:hover,
.btn-success:hover,
.btn-primary:focus,
.btn-success:focus {
	color: #fff;
	background-color: #ff8526;
	border-color: #ff7d1a;
}

.btn-outline-primary:hover,
.btn-outline-primary:focus {
	color: #fff;
	background-color: #ff6f00;
	border-color: #ff6f00;
}
</style>
