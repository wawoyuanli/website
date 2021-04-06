<template>
  <div class="js home" id="page-top">

    <!--导航组件-->
    <Nav :navitemlist="navitemlist" />
    <div class="intro d-flex">
      <div class="container my-auto">
        <div class="row">
          <div class="col-lg-4">
            <h1 class="page-header mb-3 animated fadeIn" style="font-size:2rem;color:#fff">
              Earth Money
              <br> For the things you do online
            </h1>
            <p style="font-size:1rem;color:#fff;padding:20px 0px">All-in-one script for earning money online.</p>
            <input type="button" value="Join Us" class="joinus-btn">
          </div>
          <img src="../../assets/images/iphone-x-mockup.png" alt="" style="margin-left:37%;z-index:10">
        </div>

      </div>
      <div class="layer" style="margin-top:-160px;width:100%;background: linear-gradient(90deg, #1f75a7 0, #03bec5) !important;;z-index:0;border-top:100px solid transparent; border-right:100vw solid #fff;">
      </div>
      <div class="skew skew-right" id="features" style="width:100vw;height:auto;background:#fff">

        <div class="container">
          <div class="row">
            <div class="col-lg-12 text-center ">
              <h2 class="section-heading wow fadeInUp" data-wow-delay="0.1s" style="font-size:2rem;visibility: visible; animation-delay: 0.1s; animation-name: fadeInUp;margin-bottom:3rem;">Easy ways to earn money</h2>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <p class="lead text-center" style="font-size:1.1rem">
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
                <i class="my-3">图片</i>
                <h3>
                  <span class="counter">
                    16,5000
                  </span>
                </h3>
                <p class="mb-0">users monthly</p>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 text-center">
              <div class="status-box mx-auto mb-3 mb-lg-0">
                <i class="my-3">图片</i>
                <h3>
                  <span class="counter">
                    16,5000
                  </span>
                </h3>
                <p class="mb-0">users monthly</p>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 text-center">
              <div class="status-box mx-auto mb-3 mb-lg-0">
                <i class="my-3">图片</i>
                <h3>
                  <span class="counter">
                    16,5000
                  </span>
                </h3>
                <p class="mb-0">users monthly</p>
              </div>
            </div>
          </div>
        </div>
        <div class="layer" style="width:100%;background: linear-gradient(90deg, #1f75a7 0, #03bec5) !important;;z-index:100;border-top:100px solid transparent; border-right: 100vw solid rgba(3, 190, 197,.2);">
        </div>
        <div class="parallax-mirror" style="width:100%;z-index:0">
          <img class="parallax-slider" src="../../assets/images/parallax.jpeg" />
        </div>
      </div>

    </div>

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
        // { name: 'Home', path: '/', active: 'active' },
        { name: 'Features', path: '#', active: 'active' },
        { name: 'support', path: '/support', active: 'active' },
        { name: 'Contact', path: '/contact', active: 'active' },
      ],
    }
  },
  mounted () {
    // a()
  },
  methods: {
    signClick () {
      this.$router.push('/login')
    },
  },
}
</script>
 <style scoped  lang="less">
.home {
  background: linear-gradient(90deg, #1f75a7 0, #03bec5) !important;
  color: #343a40;
  min-height: 100vh;
  .joinus-btn {
    border: none;
    background-color: #ff6f00;
    border-color: #ff6f00;
    height: 30px;
    border-radius: 5px;
    color: #fff;
    font-size: 1.2rem;
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
  }
  header .d-flex {
    // display: flex !important;
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


