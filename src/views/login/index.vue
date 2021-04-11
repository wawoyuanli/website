<template>
  <div class="login">
    <Nav :navitemlist="list" :color="color" :isActive="isActive" id="borderBottom"></Nav>
    <div class="login-form">
      <Login></Login>
    </div>
    <Footer/>
  </div>
</template>
<script>
import Nav from "@c/nav.vue";
import Login from "@c/login.vue";
import Footer from '@c/footer.vue' //引入底部组件
import $ from 'jquery'
export default {
  name: "LoginPage",
  components: {
    Nav: Nav,
    Login: Login,
    Footer: Footer
  },
  data () {
    return {
      list: [
        { name: 'Features', path: '/home#features', active: 'active' },
        { name: 'support', path: '#', active: 'active' },
        { name: 'Contact', path: '#', active: 'active' },
      ],
      color: '#26a4c3',
      isActive: true,
    };
  },
  mounted () {
    document.getElementById('borderBottom').classList.add('borderBottom')
  },
  methods: {

  }
};
</script>
<style lang="less" scoped>
</style>

