<template>
  <div class="clogin">
    <div class="loginflag">Login</div>
    <div class="formdata">
      <div class="row  row-center">
        <div class="col-center">
          <div id="loginui" class="loginui">
            <div class="form-group">
              <input name="username" class="form-control uname" placeholder="">
            </div>
            <div style="padding: 1px" class="form-group">
              <input name="password" type="password" class="form-control password" id="password" placeholder=" ">
            </div>
            <div class="submit">
              <button @click="login" class="btn">Log in</button>
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
  .loginflag {
    display: flex;
    justify-content: center;
    font-size: 30px;
    padding-top: 10rem;
  }
  .formdata {
    display: flex;
    justify-content: center;
    .row-center {
      text-align: center;
      .col-center {
        display: inline-block;
        float: none;
        text-align: left;
        .loginui {
          padding: 28px;
          border-radius: 8px;
          // border-color: #00a3ff;
          border-width: 1px;
          .form-group {
            .uname {
              width: 280px;
            }
            .password {
              width: 280px;
            }
          }
          .submit {
            display: flex;
            justify-content: center;
            .btn {
              background: #ff6f00;
              border-radius: 5px;
              width: 300px;
              color: #fff;
            }
          }
          .forgot a {
            font-size: 14px;
            color: #ff6f00;
            text-decoration: underline;
          }
          .toregister {
            font-size: 14px;
            a {
              color: #ff6f00;
              text-decoration: underline;
            }
          }
        }
      }
    }
  }
}
</style>
