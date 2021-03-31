<template>
	<div class="home">
		<Nav/>
		<!-- <Footer/> -->
	</div>
</template>
<script>
import Nav from '@c/nav.vue' //引入导航栏组件
import Footer from '@c/footer.vue' //引入底部组件
// import a from '@/utils/blockadblock.js'
export default {
	name: 'Home',
	components: {
		Nav: Nav,
		Footer: Footer,
	},
	data() {
		return {
			navitemlist: [
				// { name: 'Home', path: '/', active: 'active' },
				{ name: 'Features', path: '#', active: 'active' },
				{ name: 'support', path: '#', active: 'active' },
				{ name: 'Contact', path: '/contact', active: 'active' },
			],
		}
	},
	mounted() {
		// a()
	},
	methods: {
		signClick() {
			this.$router.push('/login')
		},
	},
}
</script>
 <style scoped  lang="less">

</style>


