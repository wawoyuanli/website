<template>
  <div class="clogin">
    <p class="h1">Login</p>
    <div class="formdata">
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <input class="form-control">
          </div>
        </div>
        <div class="row">
          <div class="col-md-4">
            <input class="form-control">
          </div>
        </div>
        <div class="row">
          <div class="col-md-4">
            <div class="submit">
              <button @click="login" class="btn col-md-12">Log in</button>
            </div>
            <div class="forgot">
              <a href="/register"> I forgot my password</a>
            </div>
            <div class="toregister">Not a member yet? Click
              <a href="/register">here</a> to register.</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Login",
  props: {
    loginflag: {
      type: String,
      value: "Login"
    }
  },
  data () {
    return {};
  },
  methods: {
    /**登录 */
    login () {

    }
  }
};
</script>
<style lang="less" scoped>
.clogin {
  .h1 {
    text-align: center;
    padding-top: 8rem;
  }
  .formdata {
    .container {
      .row {
        justify-content: center;
        .col-md-4 {
          .form-control {
            margin: 10px 0px;
          }
        }
        .submit {
          .btn {
            background: #ff6f00;
            color: #fff;
          }
        }
        .forgot {
          margin-top: 20px;
          a {
            color: #ff6f00;

            text-decoration: underline;
          }
        }
        .toregister {
          margin-top: 20px;
          color: rgb(146, 135, 135);
          margin-bottom: 10rem;
          a {
            text-decoration: underline;
            color: #ff6f00;
          }
        }
      }
    }
  }
}
</style>
