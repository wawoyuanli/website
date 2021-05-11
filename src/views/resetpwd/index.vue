<template>
  <div class="resetpwd">
    <Nav id="borderBottom" :color="color" :isActive="isActive"></Nav>
    <div class="container pt">
      <div class="row">
        <div class="col-md-12">
          <p class="h2 text-center">Reset my password</p>
        </div>
      </div>
      <div class="row">
        <div class="col-md-3"></div>
        <div class="col-md-5">
          <label class="mt-3 mb-2">username:*</label>
          <input
            type="text"
            class="form-control"
            v-model="username"
            maxlength="30"
            minlength="6"
          />
        </div>
      </div>
      <div class="row">
        <div class="col-md-3"></div>
        <div class="col-md-5">
          <div class="row">
            <div class="col-md-6">
              <label class="mt-3 mb-2"> email * </label>
              <input
                type="text"
                class="form-control"
                v-model="email"
                maxlength="30"
                minlength="0"
              />
            </div>
            <div class="col-md-6">
              <label class="mt-4 col-md-12" style="opacity: 0"> code </label>
              <input
                type="submit"
                class="col-md-12 btn btn-primary"
                value="send verification code"
                @click="sendCode"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-3"></div>
        <div class="col-md-5">
          <label class="mt-3 mb-2"> Email Verification Code * </label>
          <input
            type="text"
            class="form-control"
            v-model="code"
            maxlength="6"
            minlength="6"
          />
        </div>
      </div>
      <div class="row">
        <div class="col-md-3"></div>
        <div class="col-md-5">
          <label class="mt-3 mb-2">password:*</label>
          <input
            type="text"
            class="form-control"
            v-model="password"
            maxlength="20"
            minlength="6"
          />
        </div>
      </div>
      <div class="row">
        <div class="col-md-3"></div>
        <div class="col-md-5">
          <input
            type="submit"
            class="mt-4 col-md-12 btn btn-primary mb-4"
            @click="resetPwd"
          />
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>
<script>
import Nav from "@c/nav.vue";
import Footer from "@c/footer.vue";
import { resetPwd, getCode } from "@/api/login.js";
export default {
  name: "Resetpwd",
  components: {
    Nav,
    Footer,
  },

  data() {
    return {
      isActive: true,
      color: "#26a4c3",
      username: "",
      email: "",
      code: "",
      password: "",
    };
  },
  mounted() {
    document.getElementById("borderBottom").classList.add("borderBottom");
  },
  methods: {
    sendCode: function() {
      let _th = this;
      let req = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/;
      if (!req.test(_th.email)) {
        alert("邮箱格式不正确");
        return false;
      }
      getCode({ email: _th.email })
        .then(function(res) {
          console.log(res);
        })
        .catch(function(err) {
          console.log(err);
        });
    },
    resetPwd: function() {
      let _th = this;
      let data = {
        username: _th.username,
        email: _th.email,
        remark: _th.code,
        password: _th.password,
      };
      resetPwd(data)
        .then(function(res) {
          console.log(res);
          _th.$router.push("/login");
        })
        .catch(function(err) {
          console.log(err);
        });
    },
  },
};
</script>
<style lang="less" scoped>
.resetpwd {
  .container {
    min-height: 75vh;
  }
  .pt {
    padding-top: 8rem;
    label {
      font-size: 18px;
      font-family: "Liberation Sans";
    }
  }
}
</style>
