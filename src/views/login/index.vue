<template>
	<div class="login">
		<Nav :color="color" :isActive="isActive" id="borderBottom"></Nav>
		<div class="login-form">
			<Login @login="login" ref="login"></Login>
		</div>
		<Dialog ref="myConfirm" @userBehavior="userBehaviorFun"></Dialog>
		<Footer />
	</div>
</template>
<script>
import Nav from '@c/nav.vue'
import Login from '@c/login.vue'
import Footer from '@c/footer.vue' //引入底部组件
import Dialog from '@c/dialog.vue'
import { login } from '@/api/login'
export default {
	name: 'LoginPage',
	components: {
		Nav: Nav,
		Login: Login,
		Footer: Footer,
		Dialog: Dialog,
	},
	data() {
		return {
			color: '#26a4c3',
			isActive: true,
		}
	},
	mounted() {
		document.getElementById('borderBottom').classList.add('borderBottom')
	},
	methods: {
		login(data) {
			let _th = this
			if (!data.username) {
				alert('Username can not be empty')
				// _th.$refs.login.errMess = "用户名不能为空";
				// _th.$refs.login.isShow = true;
				return false
			}
			if (!data.username.trim().length) {
				alert('Username can not be empty')
				return false
			}
			if (!data.password) {
				alert('password can not be blank')
				// _th.$refs.login.errMessPassword = ''
				// _th.$refs.login.show = true
				return false
			}
			if (!data.password.trim().length) {
				alert('password can not be blank')
				// _th.$refs.login.errMess = 'password can not be blank'
				return false
			}
			if(!data.checkCode){
              alert(`Verify You're Human`)
			  return false
			}
			let requestData = {
				username: data.username,
				password: data.password,
				// rememberMe: false,
			}
			/**登录接口 */
			login(requestData)
				.then(function (res) {
					if (res.data.code === 0) {
						// _th.$router.push('/registerInfo')
						window.location.href = process.env.VUE_APP_URL //登录成功跳转地址
					} else if (res.data.code === 500) {
						_th.$refs.myConfirm.content = res.data.msg
						_th.$refs.myConfirm.isShowConfirm = true
					}
				})
				.catch(function (err) {
					console.log(err)
				})
		},
		userBehaviorFun(type, data) {
			this.$refs.myConfirm.isShowConfirm = false
			// window.location.href = process.env.VUE_APP_URL //登录成功跳转地址
		},
	},
}
</script>
<style lang="less" scoped></style>
