<template>
  <div class="register-box">
    <nav
      class="navbar navbar-expand-lg navbar-light shadow pt-3 pb-3 bg-white rounded border-bottom fixed-top"
    >
      <a
        class="navbar-brand"
        href="#/home"
        style="color: rgb(38, 164, 195); margin-left: 160px"
      >
        <strong class="h3">
          {{ $t("nav.webLogo") }}
        </strong>
      </a>
      <div class="container">
        <div class="collapse navbar-collapse ml-2" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="#/home" style="color: rgb(38, 164, 195)"
                >Home <span class="sr-only">(current)</span></a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" :href="'#/home?maodian=about'">{{
                $t("nav.about")
              }}</a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                :href="'#/home?maodian=reviews'"
                tabindex="-1"
                aria-disabled="true"
                >{{ $t("nav.reviews") }}</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#/faq">{{ $t("nav.FAQ") }}</a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="#/contact"
                tabindex="-1"
                aria-disabled="true"
                >{{ $t("nav.contact") }}</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="#/privacy"
                tabindex="-1"
                aria-disabled="true"
                >{{ $t("nav.privacy") }}</a
              >
            </li>
          </ul>
          <a
            class="btn btn-lg mr-3 ml-4 border-0"
            href="#/login"
            :style="{ color: color, fontSize: '1.5rem' }"
            >{{ $t("nav.signIn") }}</a
          >
          <a class="btn btn-primary btn-lg border-0" href="#/registerInfo">{{
            $t("nav.getStarted")
          }}</a>
          <div class="dropdown ml-5">
            <button
              class="btn btn-primary dropdown-toggle border-0 pt-2 pb-2"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              {{ $t("nav.changeLanguage") }}
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a class="dropdown-item" href="#" @click="changeLanguage('en')"
                >English</a
              >
              <a class="dropdown-item" href="#" @click="changeLanguage('zh')"
                >中文</a
              >
            </div>
          </div>
        </div>
      </div>
    </nav>
    <div class="register">
      <Register @register="register" ref="register" />
    </div>
    <Dialog ref="dialog" @userBehavior="userBehaviorFun"></Dialog>
    <Footer />
  </div>
</template>
<script>
import Nav from "@c/nav.vue";
import Register from "@c/register.vue";
import Footer from "@c/footer.vue"; //引入底部组件
import Dialog from "@c/dialog.vue";
import ReCaptcha from "@c/reCaptcha";
import { registerHandler } from "@/api/login";
export default {
  name: "RegisterPage",
  components: {
    Nav: Nav,
    Register: Register,
    Footer: Footer,
    Dialog,
    ReCaptcha,
  },
  data() {
    return {
      color: "#26a4c3",
      isActive: true,
    };
  },
  mounted() {},
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
      // var isPhone = /^[1](([3][0-9])|([4][5-9])|([5][0-3,5-9])|([6][5,6])|([7][0-8])|([8][0-9])|([9][1,8,9]))[0-9]{8}$/;
      // // var isMob = /^((\+?86)|(\(\+86\)))?(13[012356789][0-9]{8}|15[012356789][0-9]{8}|18[02356789][0-9]{8}|147[0-9]{8}|1349[0-9]{7})$/;
      // var value = data.phonenumber.trim();
      // if (isPhone.test(data.phonenumber.trim())) {
      //   // return true;
      // } else {
      //   alert(
      //     "The phone number format is wrong, please enter the correct number"
      //   );
      //   return false;
      // }

      if (!data.surveyPinCode) {
        alert("surveyPinCode can not be empty");
        return false;
      }
      if (/^[a-zA-Z]/.test(data.surveyPinCode)) {
        alert("Need to enter four digits");
        return false;
      }
      if (/^[\u4e00-\u9fa5]/.test(data.surveyPinCode)) {
        alert("Need to enter four digits");
        return false;
      }
      if (data.surveyPinCode.length < 4) {
        alert("Need to enter four digits");
        return false;
      }
      if (!data.checkbox1) {
        alert(
          "You have related agreements that have not been read and checked"
        );
        return false;
      }
      if (!data.checkbox2) {
        alert(
          "You have related agreements that have not been read and checked"
        );
        return false;
      }

      if (!data.checkbox3) {
        alert(
          "You have related agreements that have not been read and checked"
        );
        return false;
      }
      _th.$refs.register.checkCode;
      if (!_th.$refs.register.checkCode) {
        _th.$refs.register.showTip = true;
        return false;
      }
      registerHandler(data)
        .then(function(res) {
          if (res.data.code === 0) {
            _th.$router.push("/login");
          } else if (res.data.code === 500) {
            _th.$refs.dialog.content = res.data.msg;
            _th.$refs.dialog.isShowConfirm = true;
          }
        })
        .catch(function(err) {
          // _th.$toast("registration failed");
          console.log(err);
        });
    },
    changeLanguage(type) {
      this.$i18n.locale = type;
      localStorage.setItem("lang", type);
    },
    userBehaviorFun() {
      _th.$refs.dialog.isShowConfirm = false;
    },
  },
};
</script>
<style scoped lang="less">
.register-box {
  margin-top: 8rem;
  .nav-item {
    color: #0f0f0f;
    font-size: 1.1rem;
  }
  .btn-primary {
    background-color: #ff6f00;
  }
}
</style>
