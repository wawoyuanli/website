<template>
	<div class="home">
		<Nav :navitemlist="navitemlist" @signClick='signClick'/>
	</div>
</template>
<script>
import Nav from '@c/nav.vue' //引入导航栏组件
export default {
	name: 'Home',
	components: {
		Nav: Nav,
	},
	data() {
		return {
			navitemlist: [
				{ name: 'Home', path: '#', active: 'active' },
				{ name: 'Features', path: '#', active: 'active' },
				{ name: 'support', path: '#', active: 'active' },
				{ name: 'Contact', path: '#', active: 'active' },
			],
		}
	},
    methods:{
        signClick(){
           this.$router.push('/login')

        }
    }
}
</script>
 <style scoped  lang="less">
.home {
}
</style>


