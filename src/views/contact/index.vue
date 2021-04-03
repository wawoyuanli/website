<template>
	<div class="contact">
		<Nav />
        <Footer/>
	</div>
</template>
<script>
import Nav from '@c/nav.vue'
import Footer from '@c/footer.vue'
export default {
	name: 'Contact',
	components: {
		Nav: Nav,
        Footer:Footer
	},
}
</script>
<style scoped lang="less">
.contact {
}
</style>