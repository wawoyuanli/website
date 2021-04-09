<template>
  <div class="js home" id="page-top">
    <!--导航组件-->
    <Nav :navitemlist="navitemlist" id="nav" :isActive="isActive" :color="color" />
    <div class="intro d-flex">
      <div class="container my-auto">
        <div class="row">
          <div class="col-lg-6" style="padding:7.3rem 0px">
            <h1 class="page-header mb-3 animated fadeIn" style="font-size: 2.7rem; color: #fff">
              Earth Money
              <br /> For the things you do online
            </h1>
            <p style="font-size: 1rem; color: #fff; padding: 20px 0px">
              All-in-one script for earning money online.
            </p>
            <div class="joinus-btn">
              <a href="/register">Join Us</a>
            </div>
          </div>
          <div class="col-lg-6">
            <img src="../../assets/images/iphone-x-mockup.png" alt="" style="margin-left: 40%; z-index: 100;position:absolute" width='50%'
            />
          </div>
        </div>
      </div>
      <div class="layer" style="
					width: 100%;
					z-index: 0;
					border-top: 160px solid transparent;
					border-right: 100vw solid #fff;
				"></div>
      <div class="skew skew-right" id="features" style="width: 100vw; height: auto; background: #fff">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 text-center">
              <h2 class="section-heading wow fadeInUp" data-wow-delay="0.1s" style="
									font-size: 2rem;
									visibility: visible;
									animation-delay: 0.1s;
									animation-name: fadeInUp;
									margin-bottom: 3rem;
								">
                Easy ways to earn money
              </h2>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <p class="lead text-center" style="font-size: 1.1rem">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </div>
        <div class="container pt-5 pb-5">
          <div class="row">
            <div class="col-lg-4 col-md-6 text-center">
              <div class="status-box mx-auto mb-3 mb-lg-0">

                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar-month-fill" viewBox="0 0 16 16">
                  <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zm.104 7.305L4.9 10.18H3.284l.8-2.375h.02zm9.074 2.297c0-.832-.414-1.36-1.062-1.36-.692 0-1.098.492-1.098 1.36v.253c0 .852.406 1.364 1.098 1.364.671 0 1.062-.516 1.062-1.364v-.253z"
                  />
                  <path d="M16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2zM2.56 12.332h-.71L3.748 7h.696l1.898 5.332h-.719l-.539-1.602H3.1l-.54 1.602zm7.29-4.105v4.105h-.668v-.539h-.027c-.145.324-.532.605-1.188.605-.847 0-1.453-.484-1.453-1.425V8.227h.676v2.554c0 .766.441 1.012.98 1.012.59 0 1.004-.371 1.004-1.023V8.227h.676zm1.273 4.41c.075.332.422.636.985.636.648 0 1.07-.378 1.07-1.023v-.605h-.02c-.163.355-.613.648-1.171.648-.957 0-1.64-.672-1.64-1.902v-.34c0-1.207.675-1.887 1.64-1.887.558 0 1.004.293 1.195.64h.02v-.577h.648v4.03c0 1.052-.816 1.579-1.746 1.579-1.043 0-1.574-.516-1.668-1.2h.687z"
                  />
                </svg>

                <h3>
                  <span class="counter"> $ 16,5000 </span>
                </h3>
                <p class="mb-0">users monthly</p>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 text-center">
              <div class="status-box mx-auto mb-3 mb-lg-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-watch" viewBox="0 0 16 16">
                  <path d="M8.5 5a.5.5 0 0 0-1 0v2.5H6a.5.5 0 0 0 0 1h2a.5.5 0 0 0 .5-.5V5z" />
                  <path d="M5.667 16C4.747 16 4 15.254 4 14.333v-1.86A5.985 5.985 0 0 1 2 8c0-1.777.772-3.374 2-4.472V1.667C4 .747 4.746 0 5.667 0h4.666C11.253 0 12 .746 12 1.667v1.86a5.99 5.99 0 0 1 1.918 3.48.502.502 0 0 1 .582.493v1a.5.5 0 0 1-.582.493A5.99 5.99 0 0 1 12 12.473v1.86c0 .92-.746 1.667-1.667 1.667H5.667zM13 8A5 5 0 1 0 3 8a5 5 0 0 0 10 0z"
                  />
                </svg>
                <h3>
                  <span class="counter"> $16,5000 </span>
                </h3>
                <p class="mb-0">total payout</p>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 text-center">
              <div class="status-box mx-auto mb-3 mb-lg-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-watch" viewBox="0 0 16 16">
                  <path d="M8.5 5a.5.5 0 0 0-1 0v2.5H6a.5.5 0 0 0 0 1h2a.5.5 0 0 0 .5-.5V5z" />
                  <path d="M5.667 16C4.747 16 4 15.254 4 14.333v-1.86A5.985 5.985 0 0 1 2 8c0-1.777.772-3.374 2-4.472V1.667C4 .747 4.746 0 5.667 0h4.666C11.253 0 12 .746 12 1.667v1.86a5.99 5.99 0 0 1 1.918 3.48.502.502 0 0 1 .582.493v1a.5.5 0 0 1-.582.493A5.99 5.99 0 0 1 12 12.473v1.86c0 .92-.746 1.667-1.667 1.667H5.667zM13 8A5 5 0 1 0 3 8a5 5 0 0 0 10 0z"
                  />
                </svg>
                <h3>
                  <span class="counter"> $16,5000 </span>
                </h3>
                <p class="mb-0">countries</p>
              </div>
            </div>
          </div>
        </div>
        <div class="middle">
          <div class="layer" style="	width: 100%;
						z-index: 100; 	border-bottom: 100px solid transparent;	border-left: 100vw solid #fff;
					"></div>
          <div class="container">
            <div class="row" style="margin-top:100px">
              <div class="col-lg-5 left" style="font-size:2.5rem">Easy ways to earn money</div>
              <div class="col-lg-6 right">
                <p>
                  Companies often need feedback on their products to make sure they’re heading in the right direction; this information can
                  save them a lot of time and money in the long run.
                </p>
                <div class="image" style="
										display: flex;
										justify-content: space-between;
										padding: 20px 0px;
									">
                  <img src="@/assets/images/earth.png" alt="" />
                  <img src="@/assets/images/earth.png" alt="" />
                  <img src="@/assets/images/earth.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="map-desc">
          <div class="container">
            <div class="row">
              <div class="col-lg-6">
                <img src="@/assets/images/map.jpg" alt="">
              </div>
              <div class="col-lg-6">
                <p>Our Trusted Partners</p>
                <p>Redeem your points for gift cards to your favorite retailers like Amazon and Netflix or get cash back from
                  PayPal.
                </p>
              </div>
            </div>
          </div>
        </div>
        <a href="#" name="contact">contact</a>
        <div class="testimonials">
          <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel" style="padding:40px 0px">
            <ol class="carousel-indicators">
              <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
              <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
              <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="@/assets/images/btc.png" class="" alt="..." style="width:10%">
                <div class="carousel-caption d-none d-md-block">
                  <h5>First slide label</h5>
                  <p>Some representative placeholder content for the first slide.</p>
                </div>
              </div>
              <div class="carousel-item">
                <img src="@/assets/images/btc.png" class="" alt="..." style="width:10%">
                <div class="carousel-caption d-none d-md-block">
                  <h5>Second slide label</h5>
                  <p>Some representative placeholder content for the second slide.</p>
                </div>
              </div>
              <div class="carousel-item">
                <img src="@/assets/images/btc.png" class="" alt="..." style="width:10%">
                <div class="carousel-caption d-none d-md-block">
                  <h5>Third slide label</h5>
                  <p>Some representative placeholder content for the third slide.</p>
                </div>
              </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>

          </div>
        </div>

      </div>
    </div>
    <a href="#" name="support">support</a>
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
  data () {
    return {
      navitemlist: [
        { name: 'Features', path: '#', active: 'active' },
        { name: 'support', path: '#support', active: 'active' },
        { name: 'Contact', path: '#contact', active: 'active' },
      ],
      color: '',
      background: '',
      isActive: false
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    signClick () {
      this.$router.push('/login')
    },
    handleScroll () {
      const _th = this
      let scrollTop = window.pageYOffset
      //设置背景颜色的透明读
      if (scrollTop < 10) {
        document.getElementById("nav").classList.remove("nav-bg");
        _th.color = '#fff'
        _th.isActive = false
      } else if (scrollTop > 10) {
        document.getElementById("nav").classList.add("nav-bg");
        _th.isActive = true
        _th.color = '#ff6f00'
      }
    },
  },
}
</script>
 <style scoped  lang="less">
.home {
  // color: #343a40;
  min-height: 100vh;
  .joinus-btn {
    border: none;
    background-color: #ff6f00;
    border-color: #ff6f00;
    width: 100px;
    height: 40px;
    border-radius: 5px;
    text-align: center;
    a {
      font-size: 1.4rem;
      color: white;
    }
  }
  .icon-credit-card:before {
    content: '\9997';
  }
  .parallax-mirror {
    // visibility: hidden;
    // z-index: -10;
    // position: fixed;
    // top: 0px;
    // left: 0px;
    // overflow: hidden;
    // height: 716px;
    // width: 1703px;
    // transform: translate3d(0px, 458px, 0px);
    .parallax-slider {
      // position: absolute;
      // height: 1047px;
      // width: 1703px;
      // max-width: none;
      // transform: translate3d(0px, -633.4px, 0px);
    }
  }
  .intro {
    display: flex;
    flex-direction: column;
    overflow: hidden;
    min-height: 500px;
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
    .middle {
      width: 100vw;
      padding-bottom: 10rem;
      background: linear-gradient(
        90deg,
        rgb(31, 117, 167) 0px,
        rgb(3, 190, 197)
      );
      .left {
        font-size: 2rem;
        color: #fff;
      }
      .right {
        color: #fff;
        font-size: 1.2rem;
      }
    }
    .map-desc {
      padding: 8rem 0px;
    }
    .testimonials {
      width: 100vw;
      height: 200px;
      background: linear-gradient(
        90deg,
        rgb(31, 117, 167) 0px,
        rgb(3, 190, 197)
      ) !important;
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


