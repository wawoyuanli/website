<template>
	<div class="js home" id="page-top">
		<div class="parallax-mirror" style="">
			<img class="parallax-slider" src="../../assets/images/parallax.jpeg" />
		</div>
		<!--导航组件-->
		<Nav :navitemlist="navitemlist" />
		<!--首页头部-->
		<header class="intro d-flex" id="header">
			<div class="container my-auto">
				<div class="row">
					<div class="col-lg-10">
						<h1 class="page-header mb-3 animated fadeIn">
							Earn Money
							<br />
							For the things you do online
						</h1>
					</div>
					<div class="col-lg-8">
						<p class="text-faded mb-3 lead animated">
							All-in-one script for earning money online.
						</p>

						<a class="btn btn-primary btn-lg animated mt-3 mr-2" href="#"
							>Join Us</a
						>
					</div>
				</div>
			</div>
			<div class="d-none" id="mobile">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="95.706642mm"
					height="197.55725mm"
					viewBox="0 0 95.706643 197.55725"
					id="mobile-svg"
					style="display: none"
				>
					<g
						inkscape:label="Layer 1"
						inkscape:groupmode="layer"
						id="layer1"
						style="display: inline"
						transform="translate(-29.535862,-34.177647)"
					>
						<path
							style="
								fill: none;
								stroke: rgb(255, 255, 255);
								stroke-width: 0.211667;
								stroke-dasharray: 567, 569;
								stroke-dashoffset: 0;
							"
							d="m 41.086935,34.28348 h 72.604495 c 6.34068,0 11.44524,4.714804 11.44524,11.055491 V 220.40424 c 0,6.34069 -5.10456,11.22483 -11.44524,11.22483 H 41.086935 c -6.340686,0 -11.44524,-4.88414 -11.44524,-11.22483 V 45.338971 c 0,-6.340687 5.104554,-11.055491 11.44524,-11.055491 z"
							id="path44"
							inkscape:connector-curvature="0"
						></path>
						<path
							style="
								fill: none;
								stroke: rgb(255, 255, 255);
								stroke-width: 0.211667;
								stroke-dasharray: 557, 559;
								stroke-dashoffset: 0;
							"
							d="m 40.529518,35.921554 h 73.719272 c 5.0927,0 9.19254,4.099842 9.19254,9.192542 V 220.66197 c 0,5.0927 -4.09984,9.19254 -9.19254,9.19254 H 40.529518 c -5.0927,0 -9.192542,-4.09984 -9.192542,-9.19254 V 45.114096 c 0,-5.0927 4.099842,-9.192542 9.192542,-9.192542 z"
							id="path36"
							inkscape:connector-curvature="0"
						></path>
						<path
							style="
								fill: none;
								stroke: rgb(255, 255, 255);
								stroke-width: 0.211667;
								stroke-dasharray: 46, 48;
								stroke-dashoffset: 0;
							"
							d="m 84.760797,219.16128 a 7.259038,7.259038 0 0 1 -7.259038,7.25904 7.259038,7.259038 0 0 1 -7.259038,-7.25904 7.259038,7.259038 0 0 1 7.259038,-7.25904 7.259038,7.259038 0 0 1 7.259038,7.25904 z"
							id="path47"
							inkscape:connector-curvature="0"
						></path>
						<path
							style="
								fill: none;
								stroke: rgb(255, 255, 255);
								stroke-width: 0.211667;
								stroke-dasharray: 474, 476;
								stroke-dashoffset: 0;
							"
							d="m 34.60144,57.312475 h 85.57542 V 208.37475 H 34.60144 Z"
							id="path45"
							inkscape:connector-curvature="0"
						></path>
						<path
							style="
								fill: none;
								stroke: rgb(255, 255, 255);
								stroke-width: 0.211667;
								stroke-dasharray: 30, 32;
								stroke-dashoffset: 0;
							"
							d="m 70.799264,45.469019 h 13.278273 c 0.297209,0 0.536505,0.239277 0.536505,0.536505 0,0.297228 -0.239277,0.536504 -0.536505,0.536504 H 70.799264 c -0.297237,0 -0.536505,-0.239282 -0.536505,-0.536504 0,-0.297223 0.239277,-0.536505 0.536505,-0.536505 z"
							id="path42"
							inkscape:connector-curvature="0"
						></path>
						<path
							style="
								fill: none;
								stroke: rgb(255, 255, 255);
								stroke-width: 0.211667;
								stroke-dasharray: 11, 13;
								stroke-dashoffset: 0;
							"
							d="m 63.736652,46.534803 a 1.6646314,1.6646314 0 0 1 -1.664631,1.664632 1.6646314,1.6646314 0 0 1 -1.664631,-1.664632 1.6646314,1.6646314 0 0 1 1.664631,-1.664631 1.6646314,1.6646314 0 0 1 1.664631,1.664631 z"
							id="path40"
							inkscape:connector-curvature="0"
						></path>
						<path
							style="
								fill: none;
								stroke: rgb(255, 255, 255);
								stroke-width: 0.211667;
								stroke-dasharray: 8, 10;
								stroke-dashoffset: 0;
							"
							d="m 78.601297,40.631279 a 1.1628685,1.1628685 0 0 1 -1.162868,1.162868 1.1628685,1.1628685 0 0 1 -1.162869,-1.162868 1.1628685,1.1628685 0 0 1 1.162869,-1.162869 1.1628685,1.1628685 0 0 1 1.162868,1.162869 z"
							id="path38"
							inkscape:connector-curvature="0"
						></path>
					</g>
				</svg>
			</div>
			<img
				src="../../assets/images/iphone-x-mockup.png"
				class="d-none d-lg-block visible"
				id="mobile-image"
				alt=""
			/>
		</header>

		<Footer />
	</div>
</template>
<script>
import Nav from '@c/nav.vue' //引入导航栏组件
import Footer from '@c/footer.vue' //引入底部组件
export default {
	name: 'Home',
	components: {
		Nav: Nav,
		Footer: Footer,
	},
	data() {
		return {
			navitemlist: [
				// { name: 'Home', path: '/', active: 'active' },
				{ name: 'Features', path: '#', active: 'active' },
				{ name: 'support', path: '/support', active: 'active' },
				{ name: 'Contact', path: '/contact', active: 'active' },
			],
		}
	},
	mounted() {
		// a()
	},
	methods: {
		signClick() {
			this.$router.push('/login')
		},
	},
}
</script>
 <style scoped  lang="less">
.home {
	 background: linear-gradient(90deg,#1f75a7 0,#03bec5)!important;
	color: #343a40;
	min-height: 100vh;
	.parallax-mirror {
		visibility: hidden;
		z-index: -10;
		position: fixed;
		top: 0px;
		left: 0px;
		overflow: hidden;
		height: 716px;
		width: 1703px;
		transform: translate3d(0px, 458px, 0px);
		.parallax-slider {
			position: absolute;
			height: 1047px;
			width: 1703px;
			max-width: none;
			transform: translate3d(0px, -633.4px, 0px);
		}
	}
	header .intro {
		overflow: hidden;
		min-height: 650px;
		padding-top: 0px;
		padding-bottom: 0px;
		background: linear-gradient(
			90deg,
			rgb(31, 117, 167) 0px,
			rgb(3, 190, 197)
		) !important;
		.my-auto {
      padding-top: 8rem;
			.row {
				.col-lg-10 {
					.mb-3 {
						margin-bottom: 1rem !important;
					}
					.fadeIn {
						-webkit-animation-name: fadeIn;
						animation-name: fadeIn;
					}
					.animated {
						-webkit-animation-duration: 1s;
						animation-duration: 1s;
						-webkit-animation-fill-mode: both;
						animation-fill-mode: both;
					}
				}
				.col-lg-8 {
					.mb-3 {
						font-size: 1.15rem;
						margin-bottom: 1rem !important;
					}
					.btn-primary {
						color: #fff !important;
						background-color: #ff6f00 !important;
						border-color: #ff6f00 !important;
					}
					.btn {
						border-radius: 5px;
						font-family: Rubik;
						display: inline-block;
						font-weight: 400;
						line-height: 1.5;
						color: #ebebeb;
						text-align: center;
						text-decoration: none;
						vertical-align: middle;
						cursor: pointer;
						user-select: none;
						background-color: transparent;
						border: 1px solid transparent;
						padding: 0.375rem 0.75rem;
						font-size: 1rem;
						border-radius: 0;
						transition: color 0.15s ease-in-out background-color 0.15s
								ease-in-out,
							border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
					}
					.mr-2 {
						margin-right: 0.5rem !important;
					}
					.mt-3 {
						margin-top: 1rem !important;
					}
					.btn-group-lg .btn .btn-lg {
						padding: 0.5rem 1rem;
						font-size: 1.25rem;
						border-radius: 0;
					}
				}
			}
		}
	}
	header .d-flex {
		display: flex !important;
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


