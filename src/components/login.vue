<template>
  <div class="clogin">
    <p class="h1">Login</p>
    <div class="formdata">
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <input class="form-control" data-toggle="tooltip" data-placement="right" :title='tipUsername' />
          </div>
        </div>
        <div class="row">
          <div class="col-md-4">
            <input class="form-control" data-toggle="tooltip" data-placement="right" :title='tipPassword' />
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
import { login, getCountryCode } from '@/api/login'
export default {
  name: 'Login',
  props: {
    loginflag: {
      type: String,
      value: 'Login',
    },
  },
  data () {
    return {
      tipUsername: 'Choose your desired username,It must be 4-20 characters long and can only contain letters and numbers. it must start with a letter',
      tipPassword: 'Choose your password.It must be 4-80 characters long and can only contain letters,numbers and !@#$%^&*(0-=+.,'
    }
  },
  methods: {
    /**登录 */
    login () {
      let requestData = {
        'username': 'hyl123',
        'password': '123456',
      }
      login(requestData)
        .then(function (res) {
          debugger
        })
        .catch(function (err) {
          console.log(err)
        })
      // getCountryCode().then(function (res) {

      // }).catch(function (err) {
      //   console.log(err)
      // })
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
