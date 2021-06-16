<template>
  <div class="register-wrap">
    <div class="container">
      <div class="row">
        <div class="col-md-12 h2 text-center">Register</div>
      </div>
      <!--userName-->
      <div class="row">
        <div class="col-md-3"></div>
        <div class="col-md-6">
          <label for="userName" class="mt-2"
            >Username
            <label style="color: red">*</label>
          </label>
          <input
            class="form-control"
            id="userName"
            v-model="userName"
            data-toggle="tooltip"
            data-placement="right"
            :title="tipUsername"
            maxlength="30"
            minlength="6"
          />
          <div v-show="show" style="margin-top: 10px; color: red">
            {{ errorMessage }}
          </div>
        </div>
      </div>
      <!--邮箱：email-->
      <div class="row">
        <div class="col-md-3"></div>
        <div class="col-md-3">
          <label for="email" class="col-md-12 mt-2"
            >Email
            <label style="color: red">*</label>
          </label>
          <input
            class="form-control col-md-12"
            id="email"
            v-model="email"
            :title="tipEmail"
            maxlength="30"
            minlength="0"
          />
        </div>
        <div class="col-md-3">
          <label for="sendCode" class="col-md-12 mt-2">
            <label style="color: red; opacity: 0"> sendcode</label>
          </label>
          <button
            class="btn btn-primary form-control"
            @click="sendVerificationCode"
            :disabled="disabled"
          >
            {{ sendCode }}
          </button>
        </div>
      </div>
      <!--验证码-->
      <div class="row">
        <div class="col-md-3"></div>
        <div class="col-md-6">
          <label for="remark" class="control-label mt-2"
            >Email Verification Code:
            <label style="color: red">*</label>
          </label>
          <input
            class="form-control"
            id="remark"
            v-model="remark"
            placeholder=""
            :title="tipRemark"
            maxlength="6"
            minlength="6"
          />
        </div>
      </div>
      <!--密码-->
      <div class="row">
        <div class="col-md-3"></div>
        <div class="col-md-6">
          <label for="password" class="col-md-12 mt-2"
            >Password
            <label style="color: red">*</label>
          </label>
          <input
            class="form-control"
            id="password"
            v-model="password"
            type="password"
            :title="tipPassword"
            maxlength="20"
            minlength="6"
          />
        </div>
      </div>
      <!--firstName lastName-->
      <div class="row">
        <div class="col-md-3"></div>
        <div class="col-md-3">
          <label for="firstName" class="col-md-12 mt-2"
            >FirstName
            <label style="color: red">*</label>
          </label>
          <input
            type="text"
            class="form-control"
            placeholder=""
            v-model="firstName"
            :title="tipFirstname"
            maxlength="30"
            minlength="0"
          />
        </div>
        <div class="col-md-3">
          <label for="lastName" class="col-md-12 mt-2"
            >LastName
            <label style="color: red">*</label>
          </label>
          <input
            type="text"
            class="form-control"
            placeholder=""
            v-model="lastName"
            :title="tipLastname"
            maxlength="30"
            minlength="0"
          />
        </div>
      </div>
      <!--sex-->
      <div class="row">
        <div class="col-md-3"></div>
        <div class="col-md-6">
          <label for="sex" class="col-md-12 mt-2"
            >Sex
            <label style="color: red">*</label>
          </label>
          <select id="inputState" class="form-control">
            <option selected>male</option>
            <option>female</option>
          </select>
        </div>
        <div class="col-lg-3" style="opacity: 0"></div>
      </div>
      <!--出生日期-->
      <div class="row">
        <div class="col-md-3"></div>
        <div class="col-md-2">
          <label for="sex" class="col-md-12 mt-2 mb-2"
            >Birthday year
            <label style="color: red">*</label>
          </label>
          <date-picker
            v-model="time1"
            type="year"
            value-type="format"
            format="YYYY"
            class="col-md-12"
          ></date-picker>
        </div>
        <div class="col-md-2">
          <label for="birthdaymonth" class="col-md-12 mt-2 mb-2"
            >Birthday month
            <label style="color: red">*</label>
          </label>
          <date-picker
            v-model="time2"
            type="month"
            value-type="format"
            format="M"
            class="col-md-12"
          ></date-picker>
        </div>
        <div class="col-md-2">
          <label for="sex" class="col-md-12 mt-2 mb-2"
            >Birthday day
            <label style="color: red">*</label>
          </label>
          <date-picker
            v-model="time3"
            type="day"
            format="D"
            value-type="format"
            class="col-md-12"
          ></date-picker>
        </div>
      </div>
      <!--address-->
      <div class="row">
        <div class="col-md-3"></div>
        <div class="col-md-6">
          <label for="referrer" class="col-md-12 mt-2">Address : </label>
          <input
            class="form-control"
            id="address"
            v-model="address"
            :title="tipAddress"
            maxlength="30"
          />
        </div>
      </div>
      <!--postCode 邮编-->
      <div class="row">
        <div class="col-md-3"></div>
        <div class="col-md-6">
          <label class="mt-2"> PostCode:</label>
          <label style="color: red">*</label>
          <input
            class="form-control"
            id="postCode"
            v-model="postCode"
            :title="tipPostcode"
            maxlength="10"
          />
        </div>
      </div>
      <!--phone 电话号码-->
      <div class="row">
        <div class="col-md-3"></div>
        <div class="col-md-6">
          <label class="mt-2"> Phone:</label>
          <label style="color: red">*</label>
          <input
            class="form-control"
            id="password2"
            v-model="phonenumber"
            data-toggle="tooltip"
            data-placement="right"
            :title="tipPhonenumber"
            type="tel"
            maxlength="11"
          />
        </div>
      </div>
      <!--PIN 个人识别码-->
      <div class="row">
        <div class="col-md-3"></div>
        <div class="col-md-6">
          <label class="mt-2"> PinCode:</label>
          <label style="color: red">*</label>
          <input
            class="form-control"
            id="pinCode"
            v-model="pinCode"
            :title="tipPincode"
            maxlength="4"
          />
        </div>
      </div>
      <div class="row">
        <div class="col-md-3"></div>
        <div class="col-md-6">
          <label class="mt-2"> Referral Links:</label>
          <input
            class="form-control"
            id="pinCode"
            v-model="link"
            :title="tipPincode"
            maxlength="4"
          />
        </div>
      </div>
      <div class="row">
        <div class="col-md-3"></div>
        <div class="col-md-6">
          <label class="h6 mt-3"> Vetification:</label>
          <div style="color: red" class="p-2" v-if="showTip">
            {{ validate }}
          </div>

          <re-captcha
            class="col-md-12"
            :sitekey="sitekey"
            @getValidateCode="getValidateCode"
          ></re-captcha>
        </div>
      </div>
      <div class="row">
        <div class="col-md-3"></div>
        <div class="col-md-6 mt-4">Detected country:</div>
      </div>
      <div class="row">
        <div class="col-md-3"></div>
        <div class="col-md-6">
          <!-- 美国-US、中国-CN、英国-GB、澳大利亚-AU、加拿大-CA、德国-DE、法国-FR -->
          <div class="mt-3" style="display: flex" v-if="countryCode === 'US'">
            <svg-icon icon-class="us"></svg-icon>
            <p class="text-dark ml-3" style="font-size: 18px">United States</p>
          </div>
          <div class="mt-3" style="display: flex" v-if="countryCode === 'CN'">
            <svg-icon icon-class="cn"></svg-icon>
            <p class="text-dark ml-3" style="font-size: 18px">China</p>
          </div>
          <div class="mt-3" style="display: flex" v-if="countryCode === 'GB'">
            <svg-icon icon-class="gb"></svg-icon>
            <p class="text-dark ml-3" style="font-size: 18px">United Kingdom</p>
          </div>
          <div class="mt-3" style="display: flex" v-if="countryCode === 'AU'">
            <svg-icon icon-class="au"></svg-icon>
            <p class="text-dark ml-3" style="font-size: 18px">Australia</p>
          </div>
          <div class="mt-3" style="display: flex" v-if="countryCode === 'CA'">
            <svg-icon icon-class="ca"></svg-icon>
            <p class="text-dark ml-3" style="font-size: 18px">Canada</p>
          </div>
          <div style="display: flex" v-if="countryCode === 'DE'">
            <svg-icon icon-class="de"></svg-icon>
            <p class="text-dark ml-3" style="font-size: 18px">Germany</p>
          </div>
          <div class="mt-3" style="display: flex" v-if="countryCode === 'FR'">
            <svg-icon icon-class="fr"></svg-icon>
            <p class="text-dark ml-3" style="font-size: 18px">France</p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-3"></div>
        <div class="col-md-6">
          <div style="display: flex; padding: 4px 0px; align-items: center">
            <input id="checkbox1" type="checkbox" name="" />
            <div style="display: flex; margin-left: 5px">
              <div>I have read and accepted</div>
              <a style="color: #ff6f00" href="#/terms" class="ml-2"
                >Terms And Conditions *</a
              >
            </div>
          </div>
          <div style="display: flex; padding: 4px 0px; align-items: center">
            <input id="checkbox2" type="checkbox" name="" />
            <div style="display: flex; margin-left: 5px">
              <div>I have read and accepted</div>
              <a style="color: #ff6f00" href="#/privacy" class="ml-2"
                >Privacy Policy *</a
              >
            </div>
          </div>
          <div style="display: flex; padding: 4px 0px; align-items: center">
            <input id="checkbox3" type="checkbox" name="" />

            <div style="margin-left: 5px; display: flex; align-items: center">
              <img
                src="../assets/images/envelope.png"
                alt=""
                width="20px"
                height="20px"
              />
              <div style="margin-left: 5px">
                I want to receive marketing communication
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-3"></div>
        <div class="col-md-6">
          <div class="register-buttons mt-3">
            <input
              type="submit"
              name="register"
              value="Register"
              class="btn btn-primary btn-block btn-lg"
              @click="registerHandler"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import 'bootstrap/dist/css/bootstrap.css'
import $ from "jquery";
import { getCode, getCountryCode } from "@/api/login";
import ReCaptcha from "@c/reCaptcha";
/**日期选择器 */
import DatePicker from "vue2-datepicker";
import "vue2-datepicker/index.css";
export default {
  name: "Register",
  components: {
    ReCaptcha,
    DatePicker,
  },
  data() {
    return {
      disabled: false,
      tipUsername:
        "Choose your desired username,It must be 4-20 characters long and can only contain letters and numbers. it must start with a letter",
      tipPassword:
        "Choose your password.It must be 4-80 characters long and can only contain letters,numbers and !@#$%^&*(0-=+.,",
      tipEmail:
        "Choose your desired username.It must be 4-20 characters long and can only contain letters and numbers.it must start width a letter",
      tipRemark: "validate code must be six numbers",
      tipPincode:
        "This is your additional security. we will request it before your cashout or password reset.It can only contain only 4 numbers (0-9)",
      tipFirstname: "you will input your first name",
      tipLastname: "tou will input your last name",
      tipAddress: "please input your address",
      tipPostcode: "please input your post code",
      tipPhonenumber: "plase input your phone number must be 11 letters",

      userName: "",
      email: "",
      remark: "", //邮箱校验码
      password: "",
      firstName: "",
      lastName: "",
      sex: "0",
      phonenumber: "",
      pinCode: "",
      birthYear: "",
      referrer: "",
      address: "",
      postCode: "",
      iconName: "man",
      errorMessage: "",
      show: false,
      dateYear: new Date(),
      dateMonth: new Date(),
      dateDay: new Date(),
      countryCode: "CA", //国家码
      sitekey: process.env.VUE_APP_SITEKEY,
      checkCode: false,
      validate: "Perform man-machine authentication",
      showTip: false,
      seconds: 60,
      sendCode: "get verification code",
      time1: new Date().getFullYear().toString(),
      time2: (new Date().getMonth() + 1).toString(),
      time3: new Date().getDate().toString(),
      link: "",
      navitemlist: [
        { name: this.$t("nav.features"), path: "#features", active: "active" },
        { name: this.$t("nav.support"), path: "/support", active: "active" },
        { name: this.$t("nav.contact"), path: "/contact", active: "active" },
      ],
      color: "",
      background: "",
      isActive: false,
      showCounter: false,
    };
  },
  created: function() {},
  mounted() {
    let _th = this;
    window.addEventListener("scroll", _th.handleScroll);

    /**国家码获取 */
    getCountryCode()
      .then(function(res) {
        _th.countryCode = res.data.data;
        console.log(res);
      })
      .catch(function(err) {
        console.log("接口请求失败");
      });
  },
  methods: {
    handleScroll() {
      const _th = this;
      let scrollTop = window.pageYOffset;
      //设置背景颜色的透明读
      if (scrollTop < 10) {
        document.getElementById("nav").classList.remove("nav-bg");
        _th.color = "#fff";
        _th.isActive = false;
      } else if (scrollTop > 10) {
        document.getElementById("nav").classList.add("nav-bg");
        _th.isActive = true;
        _th.color = "#ff6f00";
      }
    },
    selectYear: function() {
      this.dateYear;
      console.log(this.dateYear);
    },
    selectMonth: function() {
      console.log(this.dateMonth);
    },
    selectDay: function() {
      console.log(this.dateDay);
    },
    countDown() {
      let clock = setInterval(() => {
        if (this.seconds < 1) {
          this.disabled = false;
          this.sendCode = "get verification code";
          this.seconds = 60;

          clearInterval(clock);
        } else {
          this.disabled = true;
          this.sendCode = `resend in ${this.seconds--} seconds`;
        }
      }, 1000);
    },
    /**获取验证码 */
    sendVerificationCode: function() {
      const _th = this;
      var reg = new RegExp(
        "^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$"
      ); //正则表达式
      let data = {
        email: _th.email,
      };
      if (!data.email) {
        alert("E-mail can not be empty!");
        return false;
      }
      if (!reg.test(data.email)) {
        alert("please enter your vaild email!");
        return false;
      }
      _th.disabled = true;
      _th.countDown();
      // _th.sendCode = "sending...";

      getCode(data)
        .then(function(res) {
          if (res.data.code === 0) {
            // _th.sendCode = "send the verification code";
            // _th.disabled = false;
          }
        })
        .catch(function(err) {
          // _th.sendCode = "send the verification code";
          // _th.disabled = false;
          console.log(err);
        });
    },
    registerHandler: function() {
      let _th = this;
      const data = {
        loginName: _th.userName,
        email: _th.email,
        password: _th.password,
        surveyFirstName: _th.firstName,
        surveyLastName: _th.lastName,
        remark: _th.remark,
        sex: _th.sex,
        surveyBirthdayYear: _th.time1, //年
        surveyBirthdayMonth: _th.time2, //月
        surveyBirthdayDay: _th.time3, //日
        surveyAddress: _th.address,
        surveyPostcode: _th.postCode,
        phonenumber: _th.phonenumber,
        surveyPinCode: _th.pinCode,
        checkCode: _th.checkCode,
        checkbox1: $("#checkbox1").is(":checked"),
        checkbox2: $("#checkbox2").is(":checked"),
        checkbox3: $("#checkbox3").is(":checked"),
      };
      _th.$emit("register", data);
      // debugger;
      /**注册接口调用 */
    },

    getValidateCode(code) {
      // debugger
      if (code) {
        //认证成功
        this.checkCode = code;
      } else {
        //认证失败
        this.checkCode = code;
      }
    },
  },
};
</script>
<style scoped lang="less">
.register-wrap {
  min-height: 75vh;
  padding-bottom: 3rem;
}
</style>
