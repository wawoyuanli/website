<template>
	<div class="register-wrap">
		<h1 class="registerflag">Register</h1>
		<div class="container">
			<div class="row">
				<div class="col-md-4">
					<label for="username" class="control-label"
						>Username：
						<label style="color: red">*</label>
					</label>
					<input
						class="form-control"
						id="username"
						v-model="username"
						@blur="usernameCheck(username)"
					/>
					<div v-show="show" style="margin-top:10px;color:red">{{ errorMessage }}</div>
				</div>
			</div>
			<div class="row">
				<div class="col-md-4">
					<label for="email" class="control-label"
						>Email
						<label style="color: red">*</label>
					</label>
					<input class="form-control" id="email" v-model="email" />
				</div>
			</div>
			<div class="row">
				<div class="col-md-4">
					<label for="password" class="control-label"
						>Password
						<label style="color: red">*</label>
					</label>
					<input class="form-control" id="password" v-model="password" type=""/>
				</div>
			</div>
			<div class="row">
				<div class="col-md-4">
					<label for="password2" class="control-label"
						>Confirm Password
						<label style="color: red">*</label>
					</label>
					<input class="form-control" id="password2" v-model="password2" />
				</div>
			</div>

			<div class="row">
				<div class="col-md-2">
					<label for="password2" class="control-label"
						>Desired PIN ：
						<label style="color: red">*</label>
					</label>
					<input class="form-control" id="password2" v-model="desiredPin" />
				</div>

				<div class="col-md-2">
					<label for="password2" class="control-label"
						>Birth Year ：

						<label style="color: red">*</label>
					</label>
					<input class="form-control" id="password2" v-model="birthYear" />
				</div>
			</div>
			<div class="row">
				<div class="col-md-4">
					<label for="password2" class="control-label">Referrer ： </label>
					<input
						class="form-control control-label-referrer"
						id="password2"
						v-model="referrer"
					/>
				</div>
			</div>
			<div class="row">
				<div class="col-md-4">
					<label> Verification:</label>
					<label style="color: red">*</label>
				</div>
			</div>
			<div class="row">
				<div class="col-md-4">
					<div style="display: flex; color: #00acac">
						<p>Click or touch the</p>
						<strong style="margin-left: 4px">{{ iconName }}</strong>
					</div>
				</div>
			</div>

			<!--icon-->
			<div class="row">
				<div class="col-md-4">
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
				<div class="col-md-4">Detected country:</div>
			</div>
			<div class="row">
				<div class="col-md-4">
					<div style="display: flex">
						<img
							src="../assets/images/cn.png"
							alt="china"
							width="20px;height:10px"
							style="margin-right: 5px"
						/>
						<p>China</p>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-md-4">
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
				<div class="col-md-4">
					<div class="register-buttons m-t-30">
						<input
							type="submit"
							name="register"
							value="Register"
							class="btn btn-primary btn-block btn-lg"
						/>
					</div>
				</div>
			</div>
		</div>
		<div class="d-flex p-2 bd-highlight">I'm a flexbox container!</div>
	</div>
</template>
<script>
import { checkUsername, checkEmail, checkPassword } from '@/utils/validate.js'
export default {
	name: 'Register',
	data() {
		return {
			iconList: [
				{ name: 'people', path: require('../assets/images/People Plus.png') },
				{ name: 'earth', path: require('../assets/images/earth.png') },
				{ name: 'seat', path: require('../assets/images/seat.png') },
			],
			username: '',
			email: '',
			password: '',
			password2: '',
			desiredPin: '',
			birthYear: '',
			referrer: '',
			iconName: 'man',
			errorMessage: '',
			show: false,
		}
	},
	methods: {
		clickIcon: function (name) {
			console.log(name)
		},
		changeIconHandler: function () {},
		clickVoiceIcon: function () {},
		usernameCheck(username) {
      const _th=this
			var mess = checkUsername(username)
			_th.errorMessage =mess
			_th.show = true
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
					width: 26rem;
					height: 2.4rem;
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
				.form-control {
					// width: 13rem;
				}
			}
		}
	}
}
</style>

