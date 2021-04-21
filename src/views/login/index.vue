<template>
  <div class="login">
    <Nav :color="color" :isActive="isActive" id="borderBottom"></Nav>
    <div class="login-form">
      <Login @login="login" ref="login"></Login>
    </div>
    <Dialog ref="myConfirm" @userBehavior="userBehaviorFun"></Dialog>
    <Footer />
  </div>
</template>
<script>
import Nav from "@c/nav.vue";
import Login from "@c/login.vue";
import Footer from "@c/footer.vue"; //引入底部组件
import Dialog from "@c/dialog.vue";
import { login } from "@/api/login";
export default {
  name: "LoginPage",
  components: {
    Nav: Nav,
    Login: Login,
    Footer: Footer,
    Dialog: Dialog,
  },
  data() {
    return {
      color: "#26a4c3",
      isActive: true,
    };
  },
  mounted() {
    document.getElementById("borderBottom").classList.add("borderBottom");
  },
  methods: {
    login(data) {
      let _th = this;
      if (!data.username) {
        _th.$refs.login.errMess = "用户名不能为空";
        _th.$refs.login.isShow = true;
        return false;
      }
      if (!data.username.trim().length) {
        alert("用户名不能为空");
        return false;
      }
      if (!data.password) {
        _th.$refs.login.errMessPassword = "密码不能为空";
        _th.$refs.login.show = true;
        return false;
      }
      if (!data.password.trim().length) {
        _th.$refs.login.errMess = "密码不能为空";
        return false;
      }
      let requestData = {
        username: data.username,
        password: data.password,
        // rememberMe: false,
      };
      /**登录接口 */
      login(requestData)
        .then(function(res) {
          _th.$refs.myConfirm.content = "login successful";
          _th.$refs.myConfirm.isShowConfirm = true;
          // window.location.href = process.env.VUE_APP_URL; //登录成功跳转地址
        })
        .catch(function(err) {
          console.log(err);
        });
    },
    userBehaviorFun(type, data) {
      this.$refs.myConfirm.isShowConfirm = false;
      window.location.href = process.env.VUE_APP_URL; //登录成功跳转地址
    },
  },
};
</script>
<style lang="less" scoped></style>
