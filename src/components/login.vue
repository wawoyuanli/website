<template>
  <div class="clogin">
    <p class="h1">Login</p>
    <div class="formdata">
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <input class="form-control" data-toggle="tooltip" data-placement="right" :title='tipUsername' v-model="username" @blur="blur(username)"
              @input="input" />
            <p v-show="isShow" style="font-size:10px;color:red">{{errMess}} *</p>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4">
            <input class="form-control" data-toggle="tooltip" data-placement="right" :title='tipPassword' v-model="password" @blur="blur2(password)"
              @input="input2" />
            <p v-show="show" style="font-size:10px;color:red">{{errMessPassword}} *</p>
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
            <div class="toregister">
              Not a member yet? Click
              <a href="/register">here</a> to register.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { login } from '@/api/login'
export default {
  name: 'Login',
  props: {},
  data () {
    return {
      username: '',
      password: '',
      errMess: '',
      errMessPassword: '',
      isShow: false,
      show: false,
      tipUsername: 'Choose your desired username,It must be 4-20 characters long and can only contain letters and numbers. it must start with a letter',
      tipPassword: 'Choose your password.It must be 4-80 characters long and can only contain letters,numbers and !@#$%^&*(0-=+.,'
    }
  },
  methods: {
    /**登录 */
    login () {
      if (!this.username.trim()) {
        this.errMess = '用户名不能为空'
        this.isShow = true
        return false
      }
      if (!this.password.trim()) {
        this.errMessPassword = '密码不能为空'
        this.show = true
        return false
      }
      let requestData = {
        username: this.username,
        password: this.password
      }
      /**登录接口 */
      login(requestData)
        .then(function (res) {

        })
        .catch(function (err) {
          console.log(err)
        })
    },
    blur: function (username) {
      if (!username) {
        this.errMess = '用户名不能为空！'
        this.isShow = true
      }
    },
    input: function (e) {
      if (!e.data.trim()) {
        this.errMess = '用户名不能为空！'
        this.isShow = true
      } else {
        this.isShow = false
      }
    },
    blur2: function (password) {
      if (!password.trim()) {
        this.errMessPassword = '密码不能为空！'
        this.show = true
      }
    },
    input2: function (e) {
      if (!e.data.trim()) {
        this.errMessPassword = '用户名不能为空！'
        this.show = true
      } else {
        this.show = false
      }
    },
  },
}
</script>
<style lang="less" scoped>
.clogin {
  min-height: 75vh;
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
