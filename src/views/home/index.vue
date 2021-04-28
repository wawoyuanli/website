<template>
	<div class="js home" id="page-top">
		<!--导航组件-->
		<div class="nav-bg-liner">
			<Nav
				:navitemlist="navitemlist"
				id="nav"
				:isActive="isActive"
				:color="color"
				@aboutUrlClick="aboutUrlClick"
				@reviewsUrlClick="reviewsUrlClick"
			/>
		</div>
		<div class="bg-image"></div>

		<div class="phone">
			<div class="container">
				<div class="row">
					<div class="col-lg-6" style="padding: 7.3rem 0px">
						<h1
							class="page-header mb-3 animated fadeIn"
							style="font-size: 2.7rem; color: #fff"
						>
							{{ $t('home.earnMoney') }}
						</h1>
						<p style="font-size: 1.2rem; color: #fff; padding: 20px 0px">
							{{ $t('home.refer') }}
						</p>
						<div class="joinus-btn">
							<a href="#/registerInfo">{{ $t('home.join') }}</a>
						</div>
					</div>
					<div class="col-lg-6" style="padding-top: 7.3rem">
						<img
							src="../../assets/images/yun_03.png"
							alt=""
							style="margin-left: 40%; z-index: 100; position: absolute"
							width="50%"
						/>
					</div>
				</div>
			</div>
			<div
				class="layer"
				style="
					width: 100%;
					z-index: 0;
					border-top: 200px solid transparent;
					border-right: 100vw solid #fff;
				"
			></div>
		</div>
		<!-- <a href="#" name="features"></a>
		<a href="#" name="home#features"></a> -->
		<div class="middle-user-payout">
			<div class="container" style="padding-top: 110px">
				<div class="row">
					<div class="col-lg-12 text-center">
						<div class="section-heading">
							{{ $t('home.easyTitle') }}
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-md-12 hidden-xs">
						<div class="row">
							<div class="col-md-2 col-sm-2 ht">&nbsp;</div>
							<div class="col-md-2 col-sm-2 ht">&nbsp;</div>
							<div class="col-md-2 col-sm-2 ht">&nbsp;</div>
							<div class="col-md-2 col-sm-2 ht bor_lt">&nbsp;</div>
							<div class="col-md-2 col-sm-2 ht">&nbsp;</div>
							<div class="col-md-2 col-sm-2 ht">&nbsp;</div>
						</div>
						<div class="row">
							<div class="col-md-2 col-sm-2 ht">&nbsp;</div>
							<div class="col-md-2 col-sm-2 ht bor_tp bor_lt">&nbsp;</div>
							<div class="col-md-2 col-sm-2 ht bor_tp">&nbsp;</div>
							<div class="col-md-2 col-sm-2 ht bor_tp bor_lt">&nbsp;</div>
							<div class="col-md-2 col-sm-2 ht bor_tp">&nbsp;</div>
							<div class="col-md-2 col-sm-2 ht bor_lt">&nbsp;</div>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-lg-4 col-md-6 text-center">
						<div class="status-box mx-auto mb-3 mb-lg-0">
							<img
								src="@/assets/images/sign.png"
								alt=""
								style="margin: 0 auto"
							/>

							<p class="counter mt-2" style="font-size: 1.3rem">
								{{ $t('home.signUpFree') }}
							</p>

							<p class="mt-1" style="font-size: 1.1rem">
								{{ $t('home.signUpDesc') }}
							</p>
						</div>
					</div>
					<div class="col-lg-4 col-md-6 text-center">
						<div class="status-box mx-auto mb-3 mb-lg-0">
							<img
								src="@/assets/images/complete.png"
								alt=""
								style="margin: 0 auto"
							/>
							<p class="counter mt-2" style="font-size: 1.3rem">
								{{ $t('home.completeOffers') }}
							</p>
							<p class="mt-1" style="font-size: 1.1rem">
								{{ $t('home.completeOffersDesc') }}
							</p>
						</div>
					</div>
					<div class="col-lg-4 col-md-6 text-center">
						<div class="status-box mx-auto mb-3 mb-lg-0">
							<img
								src="@/assets/images/get.png"
								alt=""
								style="margin: 0 auto"
							/>
							<p class="counter mt-2" style="font-size: 1.3rem">
								{{ $t('home.getPaid') }}
							</p>
							<p class="mt-1" style="font-size: 1.1rem">
								{{ $t('home.getPaidDesc') }}
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!--aboutUs 页面锚点-->
		<a name="about" id="about"></a>
		<div class="middle">
			<div
				class="layer"
				style="
					width: 100%;
					z-index: 100;
					border-bottom: 200px solid transparent;
					border-left: 100vw solid #fff;
				"
			></div>
			<div class="text-center section-heading">{{ $t('home.our') }}</div>
			<div class="third-part">
				<div class="container">
					<div class="row">
						<div class="col-lg-12 text-center">
							<div class="mb-5" style="font-size: 1.2rem">
								{{ $t('home.second_title') }}
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col-md-12"></div>
					</div>
					<div class="row">
						<div class="col-lg-4 col-md-6 text-center">
							<div class="status-box mx-auto mb-3 mb-lg-0">
								<img
									src="@/assets/images/users (1).png"
									alt=""
									style="margin: 0 auto"
									width="60px"
								/>
								<countTo
									:startVal="0"
									:endVal="26912"
									:duration="5600"
									class="counter"
								></countTo>
								<p class="mb-0">{{ $t('home.monthly') }}</p>
							</div>
						</div>
						<div class="col-lg-4 col-md-6 text-center">
							<div class="status-box mx-auto mb-3 mb-lg-0">
								<img
									src="@/assets/images/card (1).png"
									alt=""
									style="margin: 0 auto"
									width="60px"
								/>
								<countTo
									:startVal="0"
									:endVal="3819018"
									:duration="5600"
									class="counter"
								></countTo>

								<p class="mb-0">{{ $t('home.total') }}</p>
							</div>
						</div>
						<div class="col-lg-4 col-md-6 text-center">
							<div class="status-box mx-auto mb-3 mb-lg-0">
								<img
									src="@/assets/images/cloud-partner.png"
									alt=""
									style="margin: 0 auto"
									width="60px"
								/>

								<countTo
									:startVal="0"
									:endVal="90"
									:duration="5600"
									class="counter"
									>$</countTo
								>
								<p class="mb-0">{{ $t('home.partner') }}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!--Reviews 页面锚点-->
		<a name="Reviews" id="reviews"></a>
		<div class="testimonials">
			<div class="container" style="margin-top: 30px">
				<div class="row">
					<div class="col-md-12">
						<p
							class="text-center"
							style="font-size: 30px; padding-bottom: 40px"
						>
							{{ $t('home.testimonials') }}
						</p>
					</div>
				</div>
				<div class="row">
					<div class="col-md-4">
						<div
							class="card card shadow p-3 mb-5 bg-white rounded"
							style="
								width: 18rem;
								height: 440px;
								margin: 0 auto;
								line-height: 40px;
							"
						>
							<div class="card-body">
								<p class="card-text">{{ $t('home.user1Text') }}</p>
								<p class="card-text h6">{{ $t('home.user1') }}</p>
							</div>
						</div>
					</div>
					<div class="col-md-4">
						<div
							class="card card shadow p-3 mb-5 bg-white rounded"
							style="
								width: 18rem;
								height: 440px;
								margin: 0 auto;
								line-height: 40px;
							"
						>
							<div class="card-body">
								<p class="card-text">{{ $t('home.user2Text') }}</p>
								<br/>
								<p class="card-text h6">{{ $t('home.user2') }}</p>
							</div>
						</div>
					</div>
					<div class="col-md-4">
						<div
							class="card shadow p-3 mb-5 bg-white rounded"
							style="
								width: 18rem;
								height: 440px;
								margin: 0 auto;
								line-height: 40px;
							"
						>
							<div class="card-body">
								<p class="card-text">{{ $t('home.user3Text') }}</p>
								<p class="card-text h6">{{ $t('home.user3') }}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="four-part mt-5 mb-5">
			<div class="container bg">
				<div class="row">
					<div class="col-md-8 text-white">
						<div class="row">
							<div class="col-md-12">
								<div class="h2 mt-5 text-center">
									{{ $t('home.why') }}
								</div>
							</div>
						</div>
						<div class="row">
							<div class="col-md-12">
								<div class="h6 mt-3">
									<p class="text-center" style="color: #829eb0">
										{{ $t('home.reasons') }}
									</p>
								</div>
							</div>
						</div>
						<div class="row">
							<div class="col-md-12">
								<div class="row mt-5 ml-5">
									<div class="col-md-3 col-sm-3">
										<div class="col-md-12">
											<div
												class="sprite01"
												width="100px"
												height="100px"
												style="
													background-image: url('https://s3.amazonaws.com/leadgen-prod/10/images/sprite.png');
												"
											></div>
										</div>
										<div class="col-md-12">
											<p class="h6 text-white mt-4">
												{{ $t('home.cashPayments') }}
											</p>
										</div>
									</div>
									<div class="col-md-3 col-sm-3">
										<div class="col-md-12">
											<div
												class="sprite02"
												width="100px"
												height="100px"
												style="
													background-image: url('https://s3.amazonaws.com/leadgen-prod/10/images/sprite.png');
												"
											></div>
										</div>
										<div class="col-md-12">
											<p class="h6 text-white mt-4">
												{{ $t('home.dataPrivacy') }}
											</p>
										</div>
									</div>
									<div class="col-md-3 col-sm-3">
										<div class="col-md-12">
											<div
												class="sprite03"
												width="100px"
												height="100px"
												style="
													background-image: url('https://s3.amazonaws.com/leadgen-prod/10/images/sprite.png');
												"
											></div>
										</div>
										<div class="col-md-12">
											<p class="h6 text-white mt-4">
												{{ $t('home.supportTeam') }}
											</p>
										</div>
									</div>
									<div class="col-md-3 col-sm-3">
										<div class="col-md-12">
											<div
												class="sprite04"
												width="100px"
												height="100px"
												style="
													background-image: url('https://s3.amazonaws.com/leadgen-prod/10/images/sprite.png');
												"
											></div>
										</div>
										<div class="col-md-12">
											<p class="h6 text-white mt-4">
												{{ $t('home.anydevices') }}
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="five-part">
			<div class="w" style="width: 30vw; margin: 0 auto; margin-bottom: 40px">
				<div class="container">
					<div class="row">
						<div class="col-md-12">
							<p class="text-center title" id="title">
								{{ $t('home.fiveTitle') }}
							</p>
							<div class="text-center">
								{{ $t('home.fiveText1') }}
							</div>
							<p class="text-center">
								{{ $t('home.fiveText2') }}
							</p>
						</div>
					</div>
					<div class="row">
						<div class="col-md-12">
							<button class="btn btn-primary">
								<a href="/registerInfo">{{ $t('nav.getStarted') }}</a>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
		<Footer />
	</div>
</template>
<script>
import Nav from '@c/nav.vue' //引入导航栏组件
import Footer from '@c/footer.vue' //引入底部组件
import $ from 'jquery'
import countTo from 'vue-count-to'
// import { goAnchor, getQueryString } from '@/utils/common.js'
export default {
	name: 'Home',
	components: {
		Nav: Nav,
		Footer: Footer,
		countTo: countTo,
	},
	data() {
		return {
			navitemlist: [
				{ name: this.$t('nav.features'), path: '#features', active: 'active' },
				{ name: this.$t('nav.support'), path: '/support', active: 'active' },
				{ name: this.$t('nav.contact'), path: '/contact', active: 'active' },
			],
			color: '',
			background: '',
			isActive: false,
			showCounter: false,
		}
	},
	mounted() {
		var _th = this
		window.addEventListener('scroll', _th.handleScroll)
		// let maodian = _th.getQueryString('about')
		// console.info('*****', maodian)
		// if (maodian) {
		// 	debugger
		// 	_th.goAnchor('#' + maodian, _th)
		// }
	},
	compoted() {},
	methods: {
		signClick() {
			this.$router.push('#/login')
		},
		handleScroll() {
			const _th = this
			let scrollTop = window.pageYOffset
			//设置背景颜色的透明读
			if (scrollTop < 10) {
				document.getElementById('nav').classList.remove('nav-bg')
				_th.color = '#fff'
				_th.isActive = false
			} else if (scrollTop > 10) {
				document.getElementById('nav').classList.add('nav-bg')
				_th.isActive = true
				_th.color = '#ff6f00'
			}
		},
		aboutUrlClick(selector) {
			var anchor = document.querySelector(selector)
			//   没有动画
			document.documentElement.scrollTop = anchor.offsetTop
			//   有动画
			// this.scrollTo(anchor.offsetTop, 530)
		},
		reviewsUrlClick(selector) {
			var anchor = document.querySelector(selector)
			document.documentElement.scrollTop = anchor.offsetTop
		},
		scrollTo(y, duration) {
			/* y:目标纵坐标,duration:时间(毫秒) */

			var scrollTop = document.body.scrollTop /* 页面当前滚动距离 */

			var distance =
				y - scrollTop /* 结果大于0,说明目标在下方,小于0,说明目标在上方 */

			var scrollCount = duration / 10 /* 10毫秒滚动一次,计算滚动次数 */

			var everyDistance = parseInt(
				distance / scrollCount
			) /* 滚动距离除以滚动次数计算每次滚动距离 */

			for (
				var index = 1;
				index <= scrollCount;
				index++ /* 循环设置scrollBy事件,在duration之内,完成滚动效果 */
			) {
				setTimeout(function () {
					window.scrollBy(0, everyDistance)
				}, 10 * index)
			}
			let deviation = y - scrollCount * everyDistance
			window.scrollBy(0, deviation)
		},
	},
}
</script>
<style scoped lang="less">
.home {
	min-height: 100vh;
	.nav-bg-liner {
		width: 100vw;
		height: 80px;
		// background: linear-gradient(90deg, rgb(31, 117, 167) 0px, rgb(3, 190, 197));
		background: linear-gradient(90deg, #4179c3, #84c7f1, #ddedfa);
		// background: linear-gradient(90deg, #4179c3, #ddedfa, #84c7f1);
	}
	.bg-image {
		position: absolute;
		top: 0px;
		left: 0px;
		background-attachment: scroll;
		transform: translate3d(0px, 900px, 0px);
		// background-image: url("../../assets/images/parallax.jpeg");
		background-size: 100vw 100vh;
		min-height: 100vh;
		width: 100vw;
		overflow: hidden;
		z-index: -100;
	}
	.phone {
		background: linear-gradient(90deg, #4179c3, #84c7f1, #ddedfa);
		// background: linear-gradient(90deg, rgb(31, 117, 167) 0px, rgb(3, 190, 197)); //备用
		// background: linear-gradient(90deg, #4179c3, rgb(31, 117, 167), #84c7f1);
	}
	.middle-user-payout {
		background: #ffffff;
		height: 500px;
		.section-heading {
			font-family: 'Montserrat', sans-serif;
			font-size: 36px;
			visibility: visible;
			color: #00074e;
			margin-bottom: 0rem;
		}
		.lead {
			color: #343a40;
		}
		.ht {
			height: 32px;
		}
		.bor_lt {
			border-left: 1px solid #d9d6d6;
		}
		.bor_tp {
			border-top: 1px solid #d9d6d6;
		}

		.mb-0 {
			margin-top: 15px;
			margin-bottom: 15px;
			color: #777;
			font-size: 14px;
		}
	}
	.third-part {
		padding-bottom: 3rem;
		.section-heading {
			font-size: 30px;
			padding: 20px 0px;
		}
		.counter {
			font-size: 1.6rem;
			color: #343a40;
			padding: 10px 0px;
		}
		.mb-0 {
			color: #343a40;
		}
	}
	.middle {
		width: 100vw;
		// background: linear-gradient(90deg, #4179c3, #84c7f1, #ddedfa);
		// background: rgba(1, 93, 97, 0.6);
		background: linear-gradient(90deg, #4179c3, #84c7f1, #ddedfa);
		height: 700px;
		.left {
			font-size: 2rem;
			color: #fff;
		}
		.right {
			color: #fff;
			p {
				font-size: 1.1rem;
				text-align: center;
			}
		}
		.section-heading {
			font-size: 30px;
			padding: 20px 0px;
		}
	}
	.map {
		background-color: #fff;
	}
	.swiper {
		background: linear-gradient(90deg, rgb(31, 117, 167) 0px, rgb(3, 190, 197));
		// background: linear-gradient(90deg, #4179c3, #84c7f1, #ddedfa);
		.title-swiper {
			text-align: center;
			font-size: 2rem;
			color: #fff;
		}
		.slide-swiper {
			margin-top: 3rem;
			padding-bottom: 4rem;
		}
		.owl-carousel {
			background-color: #fff;
			padding: 3rem 0px;

			.owl-list {
				width: 60vw;
				display: flex;
				justify-content: space-between;
				margin: 0 auto;
			}
		}
	}
	/**第四部分 */
	.testimonials {
		// background: linear-gradient(90deg, #4179c3, #84c7f1, #ddedfa);
		padding: 50px 0px;
		// height: 380px;
		.hm {
			margin-top: 25px;
			.col-md-12 {
				background: #f2f2f2;
				height: 170px;
				border-radius: 5px;
				.lt {
					font-size: 14px;
					color: #757575;
					margin: 0;
					line-height: 22px;
				}
				.username {
					font-size: 16px;
					color: #616161;
					margin-top: 15px;
				}
			}
		}
	}
	.four-part {
		height: 378px;
		background: #124769;
		// background: linear-gradient(90deg, #4179c3, #84c7f1, #ddedfa);
		.bg {
			background: #124769
				url(https://s3.amazonaws.com/leadgen-prod/10/images/hm_bg01.png)
				no-repeat top right;
			height: 378px;
			.sprite01 {
				background-position: -550px 0;
				width: 70px;
				height: 70px;
				background-repeat: no-repeat;
			}
			.sprite02 {
				background-position: -660px 0;
				width: 70px;
				height: 70px;
				background-repeat: no-repeat;
			}
			.sprite03 {
				background-position: -770px 0;
				width: 70px;
				height: 70px;
				background-repeat: no-repeat;
			}
			.sprite04 {
				background-position: -880px 0;
				width: 70px;
				height: 70px;
				background-repeat: no-repeat;
			}
		}
	}
	.five-part {
		height: 340px;
		background: linear-gradient(90deg, #4179c3, #84c7f1, #ddedfa);
		// background-image: url("../../assets/images/bg.jpeg");
		background-size: 100vw 100%;
		background-repeat: no-repeat;
		padding: 20px 0px;
		margin-bottom: 30px;
		.container {
			// background: rgba(23, 45, 49, 0.2);

			border-radius: 4px;
		}
		.title {
			font-size: 36px;
			color: #00074e;
			position: relative;
			padding: 25px 0px;
			text-align: center;
			// background-color: rgba(63, 165, 184, 0.5);
		}

		.btn-primary {
			background-color: #ff6f00;
			border: none;
			display: block;
			margin: 0 auto;
			margin-top: 40px;
			margin-bottom: 40px;
			a {
				color: white;
				text-decoration: none;
			}
		}
	}
	.joinus-btn {
		border: none;
		background-color: #ff6f00;
		border-color: #ff6f00;
		width: 110px;
		height: 50px;
		line-height: 50px;
		border-radius: 5px;
		text-align: center;
		a {
			font-size: 1.4rem;
			color: white;
		}
	}

	header .my-auto {
		margin-top: auto !important;
		margin-bottom: auto !important;
	}

	header.intro p {
		color: rgb(255, 255, 255);
		font-size: 1.15rem;
		font-weight: 300;
	}
	header.intro .h1,
	header.intro h1 {
		font-size: 4rem;
		color: rgb(255, 255, 255);
	}
	header.intro h1 {
		font-size: 2rem;
	}
}
</style>
