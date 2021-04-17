<template>
  <div class="js home" id="page-top">
    <!--导航组件-->
    <div class="nav-bg-liner">
      <Nav :navitemlist="navitemlist" id="nav" :isActive="isActive" :color="color" />
    </div>
    <div class="bg-image"></div>
    <div class="phone">
      <div class="container">
        <div class="row">
          <div class="col-lg-6" style="padding: 7.3rem 0px">
            <h1 class="page-header mb-3 animated fadeIn" style="font-size: 2.7rem; color: #fff">
              {{ $t('home.earnMoney') }}
            </h1>
            <p style="font-size: 1rem; color: #fff; padding: 20px 0px">
              {{ $t('home.refer') }}
            </p>
            <div class="joinus-btn">
              <a href="/register">{{ $t('home.join') }}</a>
            </div>
          </div>
          <div class="col-lg-6">
            <img src="../../assets/images/iphone-x-mockup.png" alt="" style="margin-left: 40%; z-index: 100; position: absolute" width="50%"
            />
          </div>
        </div>
      </div>
      <div class="layer" style="
					width: 100%;
					z-index: 0;
					border-top: 280px solid transparent;
					border-right: 100vw solid #fff;
				"></div>
    </div>
    <a href="#" name="features"></a>
    <a href="#" name="home#features"></a>
    <div class="middle-user-payout">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 text-center">
            <h2 class="section-heading wow fadeInUp" data-wow-delay="0.1s">
              Easy ways to earn money
            </h2>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <p class="lead text-center">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-4 col-md-6 text-center">
            <div class="status-box mx-auto mb-3 mb-lg-0">
              <img src="@/assets/images/user.png" alt="" style="margin: 0 auto" />
              <h3>
                <span class="counter"> $ 16,5000 </span>
              </h3>
              <p class="mb-0">users monthly</p>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 text-center">
            <div class="status-box mx-auto mb-3 mb-lg-0">
              <img src="@/assets/images/payout.png" alt="" style="margin: 0 auto" />
              <h3>
                <span class="counter"> $16,5000 </span>
              </h3>
              <p class="mb-0">total payout</p>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 text-center">
            <div class="status-box mx-auto mb-3 mb-lg-0">
              <img src="@/assets/images/countries.png" alt="" style="margin: 0 auto" />
              <h3>
                <span class="counter"> $16,5000 </span>
              </h3>
              <p class="mb-0">countries</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--Easy  -->
    <div class="middle">
      <div class="layer" style="
					width: 100%;
					z-index: 100;
					border-bottom: 280px solid transparent;
					border-left: 100vw solid #fff;
				"></div>
      <div class="container">
        <div class="row" style="margin-top: 100px">
          <div class="col-lg-5 left" style="font-size: 2.5rem">
            Easy ways to earn money
          </div>
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
              <img src="@/assets/images/camrecorder.png" alt="" style="width: 80px; height: 70px" />
              <img src="@/assets/images/note.png" alt="" style="width: 80px; height: 70px" />
              <img src="@/assets/images/game.png" alt="" style="width: 80px; height: 70px" />
            </div>
          </div>
        </div>
      </div>
      <div class="layer" style="
					width: 100%;
					z-index: 100;
					border-top: 160px solid transparent;
					border-left: 100vw solid #fff;
				"></div>
    </div>
    <div class="map">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <img src="@/assets/images/map.png" alt="" style="width: 90%" />
          </div>
          <div class="col-lg-5">
            <p style="padding-top: 3rem; font-size: 2rem">
              Our Trusted Partners
            </p>
            <p style="padding-top: 2rem; font-size: 1rem">
              Redeem your points for gift cards to your favorite retailers like Amazon and Netflix or get cash back from PayPal.
            </p>
          </div>
        </div>
      </div>
    </div>
    <!--swiper-->
    <div class="swiper">
      <div class="layer" style="
					width: 100%;
					z-index: 100;
					border-bottom: 160px solid transparent;
					border-right: 100vw solid #fff;
				"></div>
      <p class="title-swiper">Testimonials</p>
      <div id="myCarousel" class="carousel slide slide-swiper" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
          <li data-target="#myCarousel" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="@/assets/images/swiper1.png" class="d-block w-60" alt="..." style="margin: 0 auto" />
          </div>
          <div class="carousel-item">
            <img src="@/assets/images/swiper1.png" class="d-block w-60" alt="..." style="margin: 0 auto" />
          </div>
          <div class="carousel-item">
            <img src="@/assets/images/swiper1.png" class="d-block w-60" alt="..." style="margin: 0 auto" />
          </div>
        </div>
        <a class="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
      <div class="owl-carousel">
        <div class="owl-list">
          <img src="@/assets/images/banner3.png" alt="" />
          <img src="@/assets/images/btc.png" alt="" />
          <img src="@/assets/images/ethereum.png" alt="" />
          <img src="@/assets/images/coinbase.png" alt="" />
        </div>
      </div>
    </div>
    <!-- <a href="#" name="support">support</a> -->
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
        { name: this.$t('nav.features'), path: '#features', active: 'active' },
        { name: this.$t('nav.support'), path: '/support', active: 'active' },
        { name: this.$t('nav.contact'), path: '/contact', active: 'active' },
      ],
      color: '',
      background: '',
      isActive: false,
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  compoted () { },
  methods: {
    signClick () {
      this.$router.push('/login')
    },
    handleScroll () {
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
  },
}
</script>
 <style scoped  lang="less">
.home {
  min-height: 100vh;
  .nav-bg-liner {
    width: 100vw;
    height: 80px;
    background: linear-gradient(90deg, rgb(31, 117, 167) 0px, rgb(3, 190, 197));
    // background: linear-gradient(90deg, #4179c3, #84c7f1, #ddedfa);
  }
  .bg-image {
    position: absolute;
    top: 0px;
    left: 0px;
    background-attachment: scroll;
    transform: translate3d(0px, 900px, 0px);
    background-image: url('../../assets/images/parallax.jpeg');
    background-size: 100vw 100vh;
    min-height: 100vh;
    width: 100vw;
    overflow: hidden;
    z-index: -100;
  }
  .phone {
    // background: linear-gradient(90deg, #4179c3, #84c7f1, #ddedfa);
    background: linear-gradient(90deg, rgb(31, 117, 167) 0px, rgb(3, 190, 197));
  }
  .middle-user-payout {
    background: #ffffff;
    .section-heading {
      font-size: 2.6rem;
      visibility: visible;
      margin-bottom: 3rem;
    }
    .lead {
      font-size: 1.1rem;
      color: #343a40;
    }
  }
  .middle {
    width: 100vw;
    // background: linear-gradient(90deg, #4179c3 ,#84c7f1, #ddedfa);
    background: rgba(1, 93, 97, 0.6);
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
  .joinus-btn {
    border: none;
    background-color: #ff6f00;
    border-color: #ff6f00;
    width: 100px;
    height: 40px;
    line-height: 40px;
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


