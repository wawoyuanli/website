<template>
  <div class="login">
    <Nav :navitemlist="list"></Nav>
    <Login/>
    <Footer/>
  </div>
</template>
<script>
import Nav from "@c/nav.vue";
import Login from "@c/login.vue";
import Footer from '@c/footer.vue' //引入底部组件
export default {
  name: "login",
  components: {
    Nav: Nav,
    Login: Login,
    Footer:Footer
  },
  data () {
    return {
      list: [
        { name: 'Home', path: '#', active: 'active' },
        { name: 'Features', path: '#', active: 'active' },
        { name: 'support', path: '#', active: 'active' },
        { name: 'Contact', path: '#', active: 'active' },
      ],
    };
  }
};
</script>
<style lang="less" scoped>
.login {
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

