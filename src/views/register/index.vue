<template>
  <div class="register">
    <Nav :navitemlist="list" />
    <Register/>
    <Footer/>
  </div>
</template>
<script>
import Nav from '@c/nav.vue'
import Register from '@c/register.vue'
import Footer from "@c/footer.vue";
export default {
  name: 'RegisterPage',
  components: {
    Nav: Nav,
    Register: Register,
    Footer: Footer
  },
  data () {
    return {
      list: [
        { name: 'Home', path: '/', active: 'active' },
        { name: 'Features', path: '#', active: 'active' },
        { name: 'support', path: '#', active: 'active' },
        { name: 'Contact', path: '#', active: 'active' },
      ],
    }
  },
  mounted () { },
  methods: {},
}
</script>