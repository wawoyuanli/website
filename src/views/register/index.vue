<template>
  <div class="register">
    <Nav :navitemlist="list" :color="color" :isActive="isActive" id="borderBottom" />
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
        { name: 'Features', path: '/home#features', active: 'active' },
        { name: 'support', path: '/support', active: 'active' },
        { name: 'Contact', path: '/contact', active: 'active' },
      ],
      isActive: true,
      color: '#26a4c3'
    }
  },
  mounted () {
    document.getElementById('borderBottom').classList.add('borderBottom')
  },
  methods: {},
}
</script>