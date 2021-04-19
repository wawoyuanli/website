<template>
	<div class="resetpwd">
		<Nav id="borderBottom" :color="color" :isActive="isActive"></Nav>
		<div class="container pt">
			<div class="row">
				<div class="col-md-12">
					<p class="h2 text-center">Reset my password</p>
				</div>
			</div>
			<div class="row">
				<div class="col-md-3"></div>
				<div class="col-md-5">
					<label class="m-3">username:*</label>
					<input type="text" class="form-control" />
				</div>
			</div>
			<div class="row">
				<div class="col-md-3"></div>
				<div class="col-md-5">
					<div class="row">
						<div class="col-md-7">
							<label class="m-3"> email * </label>
							<input type="text" class="form-control" />
						</div>
						<div class="col-md-5">
							<label class="m-3" style="opacity: 0"> code </label>
							<input
								type="submit"
								class="col-md-12 btn btn-primary"
								value="send verification code"
							/>
						</div>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-md-3"></div>
				<div class="col-md-5">
					<label class="m-3"> Email Verification Code * </label>
					<input type="text" class="form-control" />
				</div>
			</div>
			<div class="row">
				<div class="col-md-3"></div>
				<div class="col-md-5">
					<label class="m-3">password:*</label>
					<input type="text" class="form-control" />
				</div>
			</div>
			<div class="row">
				<div class="col-md-3"></div>
				<div class="col-md-5">
					<input type="submit" class="mt-4 col-md-12 btn btn-primary" />
				</div>
			</div>
		</div>
		<Footer />
	</div>
</template>
<script>
import Nav from '@c/nav.vue'
import Footer from '@c/footer.vue'
export default {
	name: 'Resetpwd',
	components: {
		Nav,
		Footer,
	},

	data() {
		return {
			isActive: true,
			color: '#26a4c3',
		}
	},
	mounted() {
		document.getElementById('borderBottom').classList.add('borderBottom')
		
	},
}
</script>
<style lang="less" scoped>
.resetpwd {
	.container {
		min-height: 75vh;
	}
	.pt {
		padding-top: 8rem;
		label {
			font-size: 18px;
			font-family: 'Liberation Sans';
		}
	}
}
</style>
