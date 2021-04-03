<template>
	<!--导航栏组件-->
	<nav
		class="navbar navbar-expand-lg navbar-light fixed-top"
		id="mainNav"
		:style="style"
	>
		<div class="container">
			<a class="navbar-brand" href="/home">
				<strong :style="{ color: color }">ColossalScope</strong>
			</a>
			<button
				class="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarNavAltMarkup"
				aria-controls="navbarNavAltMarkup"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span class="navbar-toggler-icon"></span>
			</button>

			<div class="collapse navbar-collapse" id="navbarNavAltMarkup">
				<!--Main menu-->
				<ul class="navbar-nav ml-auto mr-3">
					<li class="nav-item">
						<a
							class="nav-link js-scroll-trigger actived"
							href="/home"
							:style="{ color: color }"
							>Home
							<span class="sr-only">(current)</span>
						</a>
					</li>
					<li
						class="nav-item"
						v-for="(item, index) in navitemlist"
						:key="index"
					>
						<a
							class="nav-link js-scroll-trigger"
							:href="item.path"
							:style="{ color: color }"
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
				color: 'rgb(90, 199, 199)',
			},
			color: '#fff',
		}
	},
	mounted() {
		window.addEventListener('scroll', this.handleScroll)
	},
	methods: {
		handleScroll() {
			const _th = this
			let scrollTop = window.pageYOffset
			//设置背景颜色的透明读
			if (scrollTop < 10) {
				_th.style.background = `linear-gradient(to right, #207aa9,#1d90b3,#10b3c1)`
				_th.color = '#fff'
			} else if (scrollTop > 10) {
				_th.color = `#ec5c42`
				_th.style.background = '#fff'
				// _th.style.color = `#08006f`
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
.navbar {
	font-size: 0.875rem;
}
.navbar-expand-lg {
	flex-wrap: nowrap;
	justify-content: flex-start;
}
#mainNav {
	padding: .25rem 0px;
	transition: all 0.5s;
	padding-left: 3rem;
	padding-right: 3rem;
	border: none;
	background-color: transparent;
}
.fixed-top {
	background: linear-gradient(90deg, #1f75a7 0, #03bec5) !important;
	// box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

	.container {
		.navbar-brand {
			color: #fff;
			font-size: 2rem;
		}
		.navbar-toggler {
			// color:#fff;
		}
		.collapse {
			.navbar-nav {
				.nav-item {
					.nav-link:hover {
						opacity: 1;
					}
					.nav-link {
						color: #fff;
						opacity: 0.8;
						font-size: 1.1rem;
					}
					.actived {
						opacity: 1;
						font-size: 1.1rem;
					}
				}
			}
			.btn-outline-primary {
				border: 1px solid #fff;
				color: #fff;
				font-size: 1.56rem;
			}
			.btn-outline-primary:hover,
			.btn-outline-primary:focus {
				color: rgb(10, 10, 10);
				background-color: #fff;
				border: none;
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
		}
	}
}
</style>
