<template>
	<div class="register">
    <Nav :navitemlist="list"/>
  </div>
</template>
<script>
import Nav from "@c/nav.vue";
export default {
	name: 'Register',
  components:{
    Nav:Nav
  },
	data() {
		return {
      list:	[
        { name: 'Home', path: '/', active: 'active' },
					{ name: 'Features', path: '#', active: 'active' },
					{ name: 'support', path: '#', active: 'active' },
					{ name: 'Contact', path: '#', active: 'active' },
      ]
    }
	},
	mounted() {},
	methods: {},
}
</script>