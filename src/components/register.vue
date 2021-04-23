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
						>userName
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
				<div class="col-lg-3"></div>
				<div class="col-lg-3">
					<label for="email" class="control-label mt-2"
						>Email
						<label style="color: red">*</label>
					</label>
					<input
						class="form-control"
						id="email"
						v-model="email"
						data-toggle="tooltip"
						data-placement="right"
						:title="tipEmail"
						maxlength="30"
						minlength="0"
					/>
				</div>
				<div class="col-lg-3">
					<label for="sendCode" class="control-label mt-2">
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
				<div class="col-lg-3"></div>
				<div class="col-lg-6">
					<label for="remark" class="control-label mt-2"
						>Email Verification Code:
						<label style="color: red">*</label>
					</label>
					<input
						class="form-control"
						id="remark"
						v-model="remark"
						placeholder=""
						data-toggle="tooltip"
						data-placement="right"
						:title="tipRemark"
						maxlength="6"
						minlength="6"
					/>
				</div>
			</div>
			<!--密码-->
			<div class="row">
				<div class="col-lg-3"></div>
				<div class="col-lg-6">
					<label for="password" class="control-label mt-2"
						>Password
						<label style="color: red">*</label>
					</label>
					<input
						class="form-control"
						id="password"
						v-model="password"
						type=""
						data-toggle="tooltip"
						data-placement="right"
						:title="tipPassword"
						maxlength="20"
						minlength="6"
					/>
				</div>
			</div>
			<!--firstName lastName-->
			<div class="row">
				<div class="col-lg-3"></div>
				<div class="col-lg-3">
					<label for="firstName" class="control-label mt-2"
						>FirstName
						<label style="color: red">*</label>
					</label>
					<input
						type="text"
						class="form-control"
						placeholder=""
						v-model="firstName"
						data-toggle="tooltip"
						data-placement="right"
						:title="tipFirstname"
						maxlength="30"
						minlength="0"
					/>
				</div>
				<div class="col-lg-3">
					<label for="lastName" class="control-label mt-2"
						>lastName
						<label style="color: red">*</label>
					</label>
					<input
						type="text"
						class="form-control"
						placeholder=""
						v-model="lastName"
						data-toggle="tooltip"
						data-placement="right"
						:title="tipLastname"
						maxlength="30"
						minlength="0"
					/>
				</div>
			</div>
			<!--sex-->
			<div class="row">
				<div class="col-lg-3"></div>
				<div class="col-lg-3">
					<label for="sex" class="control-label mt-2"
						>sex
						<label style="color: red">*</label>
					</label>
					<select id="inputState" class="form-control">
						<option selected>男</option>
						<option>女</option>
					</select>
				</div>
				<div class="col-lg-3" style="opacity: 0"></div>
			</div>
			<!--出生日期-->
			<div class="row">
				<div class="col-lg-3"></div>
				<div class="col-lg-2">
					<label for="sex" class="control-label mt-2"
						>birthday year
						<label style="color: red">*</label>
					</label>
					<date-picker
						v-model="dateYear"
						:config="optionsYear"
						@dp-hide="selectYear"
					/>
				</div>
				<div class="col-lg-2">
					<label for="birthdaymonth" class="control-label mt-2"
						>birthday month
						<label style="color: red">*</label>
					</label>
					<date-picker
						v-model="dateMonth"
						:config="optionsMonth"
						@dp-hide="selectMonth"
					/>
				</div>
				<div class="col-lg-2">
					<label for="sex" class="control-label mt-2"
						>birthday day
						<label style="color: red">*</label>
					</label>
					<date-picker
						v-model="dateDay"
						:config="optionsDay"
						@dp-hide="selectDay"
					/>
				</div>
			</div>
			<!--address-->
			<div class="row">
				<div class="col-lg-3"></div>
				<div class="col-lg-6">
					<label for="referrer" class="control-label mt-2">address ： </label>
					<input
						class="form-control control-label-referrer"
						id="password2"
						v-model="address"
						data-toggle="tooltip"
						data-placement="right"
						:title="tipAddress"
						maxlength="30"
					/>
				</div>
			</div>
			<!--postCode 邮编-->
			<div class="row">
				<div class="col-lg-3"></div>
				<div class="col-lg-6">
					<label class="mt-2"> postCode:</label>
					<label style="color: red">*</label>
					<input
						class="form-control control-label-referrer"
						id="password2"
						v-model="postCode"
						data-toggle="tooltip"
						data-placement="right"
						:title="tipPostcode"
						maxlength="10"
					/>
				</div>
			</div>
			<!--phone 电话号码-->
			<div class="row">
				<div class="col-lg-3"></div>
				<div class="col-lg-6">
					<label class="mt-2"> phone:</label>
					<label style="color: red">*</label>
					<input
						class="form-control control-label-referrer"
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
				<div class="col-lg-3"></div>
				<div class="col-lg-6">
					<label class="mt-2"> pinCode:</label>
					<label style="color: red">*</label>
					<input
						class="form-control control-label-referrer"
						id="pinCode"
						v-model="pinCode"
						data-toggle="tooltip"
						data-placement="right"
						:title="tipPincode"
						maxlength="4"
					/>
				</div>
			</div>
			<div class="row">
				<div class="col-lg-3"></div>
				<div class="col-lg-6">
					<label class="h6 mt-3"> Vetification:</label>
					<div style="color: red" class="p-2" v-if="showTip">
						{{ validate }}
					</div>

					<re-captcha
						:sitekey="sitekey"
						@getValidateCode="getValidateCode"
					></re-captcha>
				</div>
			</div>
			<div class="row">
				<div class="col-lg-3"></div>
				<div class="col-lg-6 mt-4">Detected country:</div>
			</div>
			<div class="row">
				<div class="col-lg-3"></div>
				<div class="col-lg-6">
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
				<div class="col-lg-3"></div>
				<div class="col-lg-6">
					<div style="display: flex; padding: 4px 0px; align-items: center">
						<input id="checkbox1" type="checkbox" name="" />
						<div style="display: flex; margin-left: 5px">
							<div>I have read and accepted</div>
							<a style="color: #ff6f00" href="/terms" class="ml-2"
								>Terms And Conditions *</a
							>
						</div>
					</div>
					<div style="display: flex; padding: 4px 0px; align-items: center">
						<input id="checkbox2" type="checkbox" name="" />
						<div style="display: flex; margin-left: 5px">
							<div>I have read and accepted</div>
							<a style="color: #ff6f00" href="/privacy" class="ml-2"
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
				<div class="col-lg-3"></div>
				<div class="col-lg-6">
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
import 'bootstrap/dist/css/bootstrap.css'
import 'pc-bootstrap4-datetimepicker/build/css/bootstrap-datetimepicker.css'
import datePicker from 'vue-bootstrap-datetimepicker'
import $ from 'jquery'
import { getCode, getCountryCode } from '@/api/login'
import ReCaptcha from '@c/reCaptcha'
export default {
	name: 'Register',
	components: {
		datePicker,
		ReCaptcha,
	},
	data() {
		return {
			sendCode: 'send the verification code',
			disabled: false,
			tipUsername:
				'Choose your desired username,It must be 4-20 characters long and can only contain letters and numbers. it must start with a letter',
			tipPassword:
				'Choose your password.It must be 4-80 characters long and can only contain letters,numbers and !@#$%^&*(0-=+.,',
			tipEmail:
				'Choose your desired username.It must be 4-20 characters long and can only contain letters and numbers.it must start width a letter',
			tipRemark: 'validate code must be six numbers',
			tipPincode:
				'This is your additional security. we will request it before your cashout or password reset.It can only contain only 4 numbers (0-9)',
			tipFirstname: 'you will input your first name',
			tipLastname: 'tou will input your last name',
			tipAddress: 'please input your address',
			tipPostcode: 'please input your post code',
			tipPhonenumber: 'plase input your phone number must be 11 letters',

			userName: '',
			email: '',
			remark: '', //邮箱校验码
			password: '',
			firstName: '',
			lastName: '',
			sex: '0',
			phonenumber: '',
			pinCode: '',
			birthYear: '',
			referrer: '',
			address: '',
			postCode: '',
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
				format: 'MM',
				useCurrent: false,
				locale: 'en',
				tooltips: {
					selectTime: '',
				},
			},
			optionsDay: {
				format: 'DD',
				useCurrent: false,
				locale: 'zh-cn',
				tooltips: {
					selectTime: '',
				},
			},
			countryCode: 'CA', //国家码
			//6Lduy5QaAAAAAMY3jsB2FhBYxEo96d59qf
			sitekey: process.env.VUE_APP_SITEKEY,
			checkCode: false,
			validate: 'Perform man-machine authentication',
			showTip: false,
		}
	},
	created: function () {},
	mounted() {
		let _th = this

		/**国家码获取 */
		getCountryCode()
			.then(function (res) {
				_th.countryCode = res.data.data
				console.log(res)
			})
			.catch(function (err) {
				console.log('接口请求失败')
			})
	},
	methods: {
		selectYear: function () {
			this.dateYear
			console.log(this.dateYear)
		},
		selectMonth: function () {
			console.log(this.dateMonth)
		},
		selectDay: function () {
			console.log(this.dateDay)
		},
		/**获取验证码 */
		sendVerificationCode: function () {
			const _th = this
			var reg = new RegExp(
				'^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$'
			) //正则表达式
			let data = {
				email: _th.email,
			}
			if (!data.email) {
				alert('E-mail can not be empty!')
				return false
			}
			if (!reg.test(data.email)) {
				alert('please enter your vaild email!')
				return false
			}
			_th.sendCode = 'sending...'
			_th.disabled = true
			getCode(data)
				.then(function (res) {
					if (res.data.code === 0) {
						_th.sendCode = 'send the verification code'
						_th.disabled = false
					}
				})
				.catch(function (err) {
					_th.sendCode = 'send the verification code'
					_th.disabled = false
					console.log(err)
				})
		},
		registerHandler: function () {
			let _th = this
			const data = {
				loginName: _th.userName,
				email: _th.email,
				password: _th.password,
				surveyFirstName: _th.firstName,
				surveyLastName: _th.lastName,
				remark: _th.remark,
				sex: _th.sex,
				surveyBirthdayYear: _th.dateYear, //年
				surveyBirthdayMonth: _th.dateMonth, //月
				surveyBirthdayDay: _th.dateDay, //日
				surveyAddress: _th.address,
				surveyPostcode: _th.postCode,
				phonenumber: _th.phonenumber,
				surveyPinCode: _th.pinCode,
				checkbox1: $('#checkbox1').is(':checked'),
				checkbox2: $('#checkbox2').is(':checked'),
				checkbox3: $('#checkbox3').is(':checked'),
				
			}
			_th.$emit('register', data)
			// debugger;
			/**注册接口调用 */
		},

		getValidateCode(code) {
			// debugger
			if (code) {
				//认证成功
				this.checkCode = code
			} else {
				//认证失败
				this.checkCode = code
			}
		},
	},
}
</script>
<style scoped lang="less">
.register-wrap {
	min-height: 75vh;
	padding-bottom: 3rem;
}
</style>
