<template>
	<!--导航栏组件-->
	<div class="header-nav" id="mainNav">
		<div class="websitename"><strong>ColossalScope</strong></div>
		<ul class="nav justify-content-center">
			<li class="nav-item" v-for="(item, index) in navitemlist" :key="index">
				<a class="nav-link" :href="item.path">{{ item.name }}</a>
			</li>
		</ul>
		<button type="button" class="btn" @click="signinClick">Sign in</button>
		<button type="button" class="btn getstarted">Get started</button>
	</div>
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
					{ name: 'Home', path: '#', active: 'active' },
					{ name: 'Features', path: '#', active: 'active' },
					{ name: 'support', path: '#', active: 'active' },
					{ name: 'Contact', path: '#', active: 'active' },
				]
			},
		},
	},
	data() {
		return {
 
		}
	},
  methods:{
    signinClick(){
      //向父组件传递事件
      this.$emit('signClick')
    }
  }
}
</script>
<style lang="less" scoped>
/**导入nav配置样式 */
@import '../assets/less/nav.less';
.header-nav {
	width: 100%;
	background: #14a7bc;
	border: none;
	position: fixed;
	display: flex;
	padding: 20px 0px;
	.websitename {
		color: white;
		font-size: 28px;
		padding-left: 10rem;
	}
	.nav {
		margin-left: 30rem;
		.nav-item {
			.nav-link {
				font-size: 20px;
				color: white;
			}
		}
	}
	.btn {
		color: white;
		border: 1px solid white;
	}
	.getstarted {
		background: #fe7000;
		margin-left: 20px;
	}
}
</style>
