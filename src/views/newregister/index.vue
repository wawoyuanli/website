<template>
	<div class="container-wrap">
		<Nav></Nav>
        <!-- <Register></Register> -->
		<Footer></Footer>
	</div>
</template>
<script>
import Nav from '@c/nav.vue'
import Footer from '@c/footer.vue'
import Register from '@c/register.vue'
export default {
	name: 'NewRegister',
	components: {
		Nav,
        Register,
		Footer,
	},
}
</script>
