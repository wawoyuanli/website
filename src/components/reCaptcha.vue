<template>
	<div ref="grecaptcha">人机验证</div>
</template>
<script>
export default {
	name: 'ReCaptcha',
	props: ['sitekey'], //所要传的密钥
	methods: {
		loaded() {
			//   alert("grecaptcha is ready!");
			window.grecaptcha.render(this.$refs.grecaptcha, {
				sitekey: this.sitekey,
				theme: 'light',
				size: 'normal',
				callback: (res) => {
					res.length > 0
						? this.$emit('getValidateCode', true)
						: this.$emit('getValidateCode', false)
				},
			})
		},
	},
	mounted() {
		// /定义加载完成的回调函数名称
		window.ReCaptchaLoaded = this.loaded
		var script = document.createElement('script')
		/**onload   render  hl*/
		script.src =
			'https://recaptcha.net/recaptcha/api.js?onload=ReCaptchaLoaded&render=onload&hl=en'
		document.head.appendChild(script)
	},
}
</script>
