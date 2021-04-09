<template>
  <div class="login">
    <Nav :navitemlist="list" :color="color" :isActive="isActive" id="borderBottom"></Nav>
    <div class="login-form">
      <Login/>
    </div>
    <Footer/>
  </div>
</template>
<script>
import Nav from "@c/nav.vue";
import Login from "@c/login.vue";
import Footer from '@c/footer.vue' //引入底部组件
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
        { name: 'Features', path: '#', active: 'active' },
        { name: 'support', path: '#', active: 'active' },
        { name: 'Contact', path: '#', active: 'active' },
      ],
      color: '#26a4c3',
      isActive: true
    };
  },
  mounted () {
    document.getElementById('borderBottom').classList.add('borderBottom')
  }
};
</script>
<style lang="less" scoped>
.login {
  .login-form {
    min-width: 70vh;
  }
  .loginflag {
    font-size: 35px;
    font-weight: bold;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    padding-top: 200px;
    -moz-box-sizing: border-box; /* Firefox */
    -webkit-box-sizing: border-box; /* Safari */
  }
}
</style>

