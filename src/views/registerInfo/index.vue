<template>
	<div class="register-box">
		<Nav :color="color" :isActive="isActive" id="borderBottom"></Nav>
		<div class="register">
			<Register />
		</div>
		<Footer />
	<button class="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal">
	开始演示模态框
</button>
<!-- 模态框（Modal） -->
<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
	<div class="modal-dialog">
		<div class="modal-content">
			<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal" aria-hidden="true">
					&times;
				</button>
				<h4 class="modal-title" id="myModalLabel">
					模态框（Modal）标题
				</h4>
			</div>
			<div class="modal-body">
				在这里添加一些文本
			</div>
			<div class="modal-footer">
				<button type="button" class="btn btn-default" data-dismiss="modal">关闭
				</button>
				<button type="button" class="btn btn-primary">
					提交更改
				</button>
			</div>
		</div><!-- /.modal-content -->
	</div><!-- /.modal -->
</div>
	</div>
</template>
<script>
import Nav from '@c/nav.vue'
import Register from '@c/register.vue'
import Footer from '@c/footer.vue' //引入底部组件
import $ from 'jquery'
export default {
	name: 'RegisterPage',
	components: {
		Nav: Nav,
		Register: Register,
		Footer: Footer,
	},
	data() {
		return {
			color: '#26a4c3',
			isActive: true,
		}
	},
	mounted() {
		$('#myModal').on('shown.bs.modal', function () {
			$('#myInput').trigger('focus')
		})
		document.getElementById('borderBottom').classList.add('borderBottom')
	},
	methods: {},
}
</script>
<style scoped lang="less">
.register-box {
	.register {
		margin-top: 8rem;
	}
}
</style>
