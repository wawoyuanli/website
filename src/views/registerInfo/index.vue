<template>
  <div class="register-box">
    <Nav :color="color" :isActive="isActive" id="borderBottom"></Nav>
    <div class="register">
      <Register @register="register" />
    </div>
    <Dialog ref="dialog" @userBehavior="userBehaviorFun"></Dialog>
    <Footer />
  </div>
</template>
<script>
import Nav from "@c/nav.vue";
import Register from "@c/register.vue";
import Footer from "@c/footer.vue"; //引入底部组件
import $ from "jquery";
import Dialog from "@c/dialog.vue";
export default {
  name: "RegisterPage",
  components: {
    Nav: Nav,
    Register: Register,
    Footer: Footer,
    Dialog,
  },
  data() {
    return {
      color: "#26a4c3",
      isActive: true,
    };
  },
  mounted() {
    $("#myModal").on("shown.bs.modal", function() {
      $("#myInput").trigger("focus");
    });
    document.getElementById("borderBottom").classList.add("borderBottom");
  },
  methods: {
    userBehaviorFun() {
      this.$refs.dialog.isShowConfirm = false;
      this.$router.push("/login");
    },
    register(data) {
      let _th = this;

      if (!data.loginName.trim().length) {
        alert("Username can not be empty");
        return false;
      }
      if (!data.email) {
        alert("E-mail can not be empty");
        return false;
      }
      if (!data.password) {
        alert("password can not be empty");
        return false;
      }
      if (!data.surveyFirstName) {
        alert("firstName can not be empty");
        return false;
      }
      if (!data.surveyLastName) {
        alert("lastName can not be empty");
        return false;
      }
      if (!data.remark) {
        alert("remark can not be empty");
        return false;
      }
      if (!data.sex) {
        alert("sex can not be empty");
        return false;
      }
      if (!data.surveyBirthdayYear) {
        alert("surveyBirthdayYear can not be empty");
        return false;
      }
      if (!data.surveyBirthdayMonth) {
        alert("surveyBirthdayMonth can not be empty");
        return false;
      }
      if (!data.surveyBirthdayDay) {
        alert("surveyBirthdayDay can not be empty");
        return false;
      }
      if (!data.surveyAddress) {
        alert("surveyAddress can not be empty");
        return false;
      }
      if (!data.surveyPostcode) {
        alert("surveyPostcode can not be empty");
        return false;
      }

      if (!data.phonenumber) {
        alert("phonenumber can not be empty");
        return false;
      }
      var isPhone = /^[1](([3][0-9])|([4][5-9])|([5][0-3,5-9])|([6][5,6])|([7][0-8])|([8][0-9])|([9][1,8,9]))[0-9]{8}$/;
      // var isMob = /^((\+?86)|(\(\+86\)))?(13[012356789][0-9]{8}|15[012356789][0-9]{8}|18[02356789][0-9]{8}|147[0-9]{8}|1349[0-9]{7})$/;
      var value = data.phonenumber.trim();
      if (isPhone.test(data.phonenumber.trim())) {
        // return true;
      } else {
        alert(
          "The phone number format is wrong, please enter the correct number"
        );
        return false;
      }

      if (!data.surveyPinCode) {
        alert("surveyPinCode can not be empty");
        return false;
      }
      if (/^[a-zA-Z]/.test(data.surveyPinCode)) {
        alert("Need to enter four digits");
      }
      if (/^[\u4e00-\u9fa5]/.test(data.surveyPinCode)) {
        alert("Need to enter four digits");
      }
      if (data.surveyPinCode.length < 4) {
        alert("Need to enter four digits");
      }

      registerHandler(data)
        .then(function(res) {
          _th.$refs.dialog.content = "register successful";
          _th.$refs.dialog.isShowConfirm = true;
        })
        .catch(function(err) {
          // _th.$toast("registration failed");
          console.log(err);
        });
    },
  },
};
</script>
<style scoped lang="less">
.register-box {
  .register {
    margin-top: 8rem;
  }
}
</style>
