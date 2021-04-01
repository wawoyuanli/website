<template>
	<!--导航栏组件-->
	<nav
		class="navbar navbar-expand-lg navbar-light fixed-top"
		id="mainNav"
		:style="style"
	>
		<div class="container">
			<a class="navbar-brand" href="/home">
				<strong style="color:#26a4c3">ColossalScope</strong>
			</a>
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
							>Home
							<span class="sr-only">(current)</span>
						</a>
					</li>
					<li
						class="nav-item"
						v-for="(item, index) in navitemlist"
						:key="index"
            
					>
						<a class="nav-link js-scroll-trigger" :href="item.path"
							>{{ item.name }}
						</a>
					</li>
				</ul>
				<a class="btn btn-outline-primary btn-lg animated mr-3" href="/login"
					>Sign In</a
				>
				<a class="btn btn-primary btn-lg" href="">Get started</a>
			</div>
		</div>
	</nav>
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
		return {
			style: {
				backgroundColor: `rgb(90, 199, 199)`,
        color:'#fff'
			},
      color:'red'
		}
	},
	mounted() {
		window.addEventListener('scroll', this.handleScroll)
	},
	methods: {
		handleScroll() {
			const _th = this
			let scrollTop =
				window.pageYOffset ||
				document.documentElement.scrollTop ||
				document.body.scrollTop
			//设置背景颜色的透明读
			if (scrollTop) {
				_th.style.backgroundColor = `rgb(255, 255, 255)`
        _th.style.color='#ff8526'
			} else if (scrollTop == 0) {
				_th.style.backgroundColor = `rgb(90, 199, 199)`
         _th.style.color=`#fff`
			}
		},
		signinClick() {
			//向父组件传递事件
			this.$emit('signClick')
		},
	},
	beforeDestroy() {
		window.removeEventListener('scroll', this.handleScroll)
	},
}
</script>
<style lang="less" scoped>
/**导入nav配置样式 */
@import '../assets/less/nav.less';
.fixed-top {
	background: rgb(90, 199, 199);
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
}
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
#mainNav .navbar-shrink .navbar-brand {
	// color: #26a4c3;
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
