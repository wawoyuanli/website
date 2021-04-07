<template>
  <div class="register-wrap">
    <h1 class="registerflag">Register</h1>
    <div class="container">
      <!--用户名：nickName-->
      <div class="row">
        <div class="col-lg-6">
          <label for="nickName" class="control-label">nickName
            <label style="color: red">*</label>
          </label>
          <input class="form-control" id="nickName" v-model="nickName" @blur="userNameCheck(nickName)" />
          <div v-show="show" style="margin-top: 10px; color: red">
            {{ errorMessage }}
          </div>
        </div>
      </div>
      <!--邮箱：email-->
      <div class="row">
        <div class="col-lg-4">
          <label for="email" class="control-label">Email
            <label style="color: red">*</label>
          </label>
          <input class="form-control" id="email" v-model="email" />
        </div>
        <div class="col-lg-2">
          <label for="sendCode" class="control-label">
            <label style="color: red; opacity: 0"> sendcode</label>
          </label>
          <button class="btn btn-primary form-control" @click="sendVerificationCode">
            发送验证码
          </button>
        </div>
      </div>
      <!--验证码-->
      <div class="row">
        <div class="col-lg-6">
          <label for="remark" class="control-label">remark
            <label style="color: red">*</label>
          </label>
          <input class="form-control" id="remark" v-model="remark" placeholder="请输入验证码" />
        </div>
      </div>
      <!--密码-->
      <div class="row">
        <div class="col-lg-6">
          <label for="password" class="control-label">Password
            <label style="color: red">*</label>
          </label>
          <input class="form-control" id="password" v-model="password" type="" />
        </div>
      </div>
      <!--firstName lastName-->
      <div class="row">
        <div class="col-lg-3">
          <label for="firstName" class="control-label">FirstName
            <label style="color: red">*</label>
          </label>
          <input type="text" class="form-control" placeholder="First name" v-model="firstName" />
        </div>
        <div class="col-lg-3">
          <label for="lastName" class="control-label">lastName
            <label style="color: red">*</label>
          </label>
          <input type="text" class="form-control" placeholder="Last name" v-model="lastName" />
        </div>
      </div>
      <!--sex-->
      <div class="row">
        <div class="col-lg-3">
          <label for="sex" class="control-label">sex
            <label style="color: red">*</label>
          </label>
          <select id="inputState" class="form-control">
            <option selected>男</option>
            <option>女</option>
          </select>
        </div>
        <div class="col-lg-3" style="opacity: 0">
          <label for="sex" class="control-label">
            <label style="color: red">*</label>
          </label>
          <select id="inputState" class="form-control"></select>
        </div>
      </div>
      <!--出生日期-->
      <div class="row">
        <div class="col-lg-2">
          <label for="sex" class="control-label">birthday year
            <label style="color: red">*</label>
          </label>
          <date-picker v-model="dateYear" :config="optionsYear" @dp-hide="showDatePickResult" />
        </div>
        <div class="col-lg-2">
          <label for="birthdaymonth" class="control-label">birthday month
            <label style="color: red">*</label>
          </label>
          <date-picker v-model="dateMonth" :config="optionsMonth" @dp-hide="showDatePickResult" />
        </div>
        <div class="col-lg-2">
          <label for="sex" class="control-label">birthday day
            <label style="color: red">*</label>
          </label>
          <date-picker v-model="dateDay" :config="optionsDay" @dp-hide="showDatePickResult" />
        </div>
      </div>
      <!--address-->
      <div class="row">
        <div class="col-lg-6">
          <label for="referrer" class="control-label">address ： </label>
          <input class="form-control control-label-referrer" id="password2" v-model="referrer" />
        </div>
      </div>
      <!--postCode 邮编-->
      <div class="row">
        <div class="col-lg-6">
          <label> postCode:</label>
          <label style="color: red">*</label>
          <input class="form-control control-label-referrer" id="password2" v-model="referrer" />
        </div>
      </div>
      <!--phone 电话号码-->
      <div class="row">
        <div class="col-lg-6">
          <label> phone:</label>
          <label style="color: red">*</label>
          <input class="form-control control-label-referrer" id="password2" v-model="referrer" />
        </div>
      </div>
      <!--PIN 个人识别码-->
      <div class="row">
        <div class="col-lg-6">
          <label> pinCode:</label>
          <label style="color: red">*</label>
          <input class="form-control control-label-referrer" id="pinCode" v-model="pinCode" />
        </div>
      </div>
      <div class="row">
        <div class="col-lg-6">
          <label> Vetification:</label>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-6">
          <div style="display: flex; color: #00acac">
            <p>Click or touch the</p>
            <strong style="margin-left: 4px">{{ iconName }}</strong>
          </div>
        </div>
      </div>
      <!--icon-->
      <div class="row">
        <div class="col-lg-6">
          <div style="display: flex; justify-content: space-between">
            <li v-for="(item, index) in iconList" :key="index">
              <img :src="item.path" alt="" @click="clickIcon(item.name)" />
            </li>
            <button @click="changeIconHandler">flush</button>
            <button @click="clickVoiceIcon">voice</button>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-6">Detected country:</div>
      </div>
      <div class="row">
        <div class="col-lg-6">
          <div style="display: flex">
            <img src="../assets/images/cn.png" alt="china" width="20px;height:10px" style="margin-right: 5px" />
            <p>China</p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-6">
          <div style="display: flex; padding: 4px 0px">
            <input id="TermsCheckBox" type="checkbox" name="" />
            <div style="display: flex; margin-left: 5px">
              <p>I have read and accepted</p>
              <a style="color: #ff6f00" href="#">Terms of Service *</a>
            </div>
          </div>
          <div style="display: flex; padding: 4px 0px">
            <input id="TermsCheckBox" type="checkbox" name="" />
            <div style="display: flex; margin-left: 5px">
              <p>I have read and accepted</p>
              <a style="color: #ff6f00" href="#">Privacy Notice *</a>
            </div>
          </div>
          <div style="display: flex; padding: 4px 0px">
            <input id="TermsCheckBox" type="checkbox" name="" />

            <div style="margin-left: 5px; display: flex">
              <img src="../assets/images/envelope.png" alt="" width="20px" />
              <p style="margin-left: 5px">
                I want to receive marketing communication
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-6">
          <div class="register-buttons m-t-30">
            <input type="submit" name="register" value="Register" class="btn btn-primary btn-block btn-lg" @click="registerHandler" />
          </div>
        </div>
      </div>
    </div>
    <div class="d-flex p-2 bd-highlight">I'm a flexbox container!</div>
  </div>
</template>
<script>
import { checkUsername } from '@/utils/validate.js'
import datePicker from 'vue-bootstrap-datetimepicker'
import $ from 'jquery'
import { registerHandler, getCode } from '@/api/login'
export default {
  name: 'Register',
  components: {
    datePicker,
  },
  data () {
    return {
      iconList: [
        { name: 'people', path: require('../assets/images/People Plus.png') },
        { name: 'earth', path: require('../assets/images/earth.png') },
        { name: 'seat', path: require('../assets/images/seat.png') },
      ],
      nickName: '',
      email: '',
      remark: '1583649818@qq.com', //邮箱校验码
      password: '',
      firstName: '',
      lastName: '',
      sex: '0',
      pinCode: '',
      birthYear: '',
      referrer: '',
      iconName: 'man',
      errorMessage: '',
      show: false,
      dateYear: new Date(),
      dateMonth: new Date(),
      dateDay: new Date(),
      optionsYear: {
        format: 'YYYY',
        useCurrent: false,
        locale: 'zh-cn',
        tooltips: {
          selectTime: '',
        },
      },
      optionsMonth: {
        format: 'M',
        useCurrent: false,
        locale: 'zh-cn',
        tooltips: {
          selectTime: '',
        },
      },
      optionsDay: {
        format: 'D',
        useCurrent: false,
        locale: 'zh-cn',
        tooltips: {
          selectTime: '',
        },
      },
    }
  },
  created: function () {
    $.extend(true, $.fn.datetimepicker.defaults, {
      icons: {
        time: 'far fa-clock',
        date: 'far fa-calendar',
        up: 'fas fa-arrow-up',
        down: 'fas fa-arrow-down',
        previous: 'fas fa-chevron-left',
        next: 'fas fa-chevron-right',
        today: 'fas fa-calendar-check',
        clear: 'far fa-trash-alt',
        close: 'far fa-times-circle',
      },
    })
  },
  methods: {
    showDatePickResult: function () {
      console.log(this.dateYear)
    },
    /**获取验证码 */
    sendVerificationCode: function () {
      let data = {
        email: '3037806040@qq.com'
      }
      getCode(data).then(function (res) {
        debugger
      }).catch(function (err) {
        console.log(err)
      })
      console.log('发送验证码')
    },
    clickIcon: function (name) {
      console.log(name)
    },
    changeIconHandler: function () { },
    clickVoiceIcon: function () { },
    usernameCheck (nickName) {
      const _th = this
      var mess = checkUsername(nickName)
      _th.errorMessage = mess
      _th.show = true
    },
    registerHandler: function () {
      let _th = this
      const data = {
        loginName: 'hyl123',
        email: '3037806040@qq.com',
        password: '123456',
        surveyFirstName: 'xiaohong',
        surveyLastName: 'wang',
        remark: '691223',
        sex: '1',
        surveyBirthdayYear: '1996',
        surveyBirthdayMonth: '10',
        surveyBirthdayDay: '12',
        surveyAddress: '中国北京市海淀区1700号',
        surveyPostcode: '100000',
        phonenumber: '17100000000',
        surveyPinCode: '1234',
      }
      registerHandler(data).then(function (res) {
        _th.$toast('注冊成功')
      }).catch(function (err) {
        _th.$toast('注冊成功')
        console.log(err)
      })
    },
  },
}
</script>
<style scoped lang="less">
.register-wrap {
  width: 100%;
  margin-top: 8rem;
  box-sizing: border-box;
  .registerflag {
    width: 100%;
    text-align: center;
    font-size: 2.5rem;
  }
  .container {
    .row {
      justify-content: center;
      .col-md-4 {
        padding: 5px 0px;
        .form-control {
          border: 1px solid #ccc;
          color: #343a40 !important;
          border-radius: 5px;
          display: block;
          // width: 26rem;
          // height: 2.4rem;
          padding: 0.375rem 0.75rem;
          font-size: 1rem;
          font-weight: 400;
          color: #495057;
          background-color: #fff;
          background-clip: padding-box;
          transition: border-color 0.15s ease-in-out,
            box-shadow 0.15s ease-in-out;
        }
        .control-label {
          font-size: 0.875rem;
          padding: 5px 0px;
          color: #65686b;
        }
        .control-label-referrer {
          background-color: #ccc;
        }
        .register-buttons {
          .btn-primary {
            background-color: #ff6f00;
            border: none;
            margin-top: 2rem;
            margin-bottom: 10rem;
          }
        }
      }
      .col-md-2 {
        .control-label {
          font-size: 0.875rem;
          padding: 5px 0px;
          color: #65686b;
        }
      }
    }
  }
}
</style>

