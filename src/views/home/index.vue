<template>
  <div class="js home container-fluid" id="page-top">
    <!--导航组件-->
    <div class="row">
      <div class="col-md-12">
        <div class="phone">
          <Nav
            :navitemlist="navitemlist"
            id="nav"
            :isActive="isActive"
            :color="color"
            @aboutUrlClick="aboutUrlClick"
            @reviewsUrlClick="reviewsUrlClick"
            class=""
            style="background-color:#14184b"
          />
        </div>
      </div>
    </div>
    <!-- <div class="pt-5 mt-2 "></div> -->

    <div class="row homebg">
      <div class="col-md-12 top">
        <div class="row">
          <div class="col-md-2"></div>
          <div class="col-md-6 text-center">
            <div class="pt-5 mt-5"></div>
            <div class="pt-5"></div>
            <div class="pt-5"></div>
            <h1 class="h2 text-white col-md-8 text-left">
              {{ $t("home.earnMoney") }}
            </h1>
            <p class="text-white h5 text-left mt-3">
              {{ $t("home.refer") }}
            </p>
            <div class="joinus-btn col-md-3 mt-5">
              <a href="#/registerInfo" class="text-decoration-none">{{
                $t("home.join")
              }}</a>
            </div>
          </div>
          <div class="col-md-2 mt-5 pt-5">
            <img
              src="../../assets/images/flower01.png"
              alt=""
              style="width:391px;height:470px"
            />
          </div>
        </div>
        <div class="row phone mb-5"></div>
        <div class="row phone pt-5 mb-5"></div>
        <!-- <div
          class="layer phone"
          style="
						width: 100%;
						z-index: 0;
						border-top: 200px solid transparent;
						border-right:100vw solid #fff;
					"
        ></div> -->
      </div>
    </div>
    <div class="row pt-5 pb-5"></div>
    <div class="row  pb-4 pt-5">
      <div class="col-md-12 text-center">
        <div class="section-heading h2" style="color:#5140bd">
          {{ $t("home.easyTitle") }}
        </div>
      </div>
    </div>
    <div class="row middle-user-payout pb-2">
      <div class="col-md-12">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-2 ht">&nbsp;</div>
            <div class="col-md-2 ht">&nbsp;</div>
            <div class="col-md-2 ht">&nbsp;</div>
            <div class="col-md-2 ht bor_lt">&nbsp;</div>
            <div class="col-md-2 ht">&nbsp;</div>
            <div class="col-md-2 ht">&nbsp;</div>
          </div>
          <div class="row">
            <div class="col-md-2 ht">&nbsp;</div>
            <div class="col-md-2 ht bor_tp bor_lt">&nbsp;</div>
            <div class="col-md-2 ht bor_tp">&nbsp;</div>
            <div class="col-md-2 ht bor_tp bor_lt">&nbsp;</div>
            <div class="col-md-2 ht bor_tp">&nbsp;</div>
            <div class="col-md-2 ht bor_lt">&nbsp;</div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-4 text-center">
        <div class="mx-auto mb-3 mb-lg-0">
          <img
            src="@/assets/images/signup.png"
            alt=""
            style="margin: 0 auto;width:107px"
          />

          <p class="counter mt-2 h5" style="color:#6647c0">
            {{ $t("home.signUpFree") }}
          </p>

          <p class="mt-1 text-center" style="color:#6647c0">
            {{ $t("home.signUpDesc") }}
          </p>
        </div>
      </div>
      <div class="col-md-4 text-center">
        <div class="mx-auto mb-3">
          <img
            src="@/assets/images/complete offer.png"
            alt=""
            style="margin: 0 auto;width:107px"
          />
          <p class="counter mt-2 h5" style="color:#6647c0">
            {{ $t("home.completeOffers") }}
          </p>
          <p class="mt-1" style="font-size: 1.1rem;color:#6647c0">
            {{ $t("home.completeOffersDesc") }}
          </p>
        </div>
      </div>
      <div class="col-md-4 text-center">
        <div class="mb-3">
          <img
            src="@/assets/images/money.png"
            alt=""
            style="margin: 0 auto;width:107px"
          />
          <p class="counter mt-3 h5" style="color:#6647c0">
            {{ $t("home.getPaid") }}
          </p>
          <p class="mt-1" style="font-size: 1.1rem;color:#6647c0">
            {{ $t("home.getPaidDesc") }}
          </p>
        </div>
      </div>
    </div>
    <div class=" row pt-5 pb-5"></div>
    <!--aboutUs 页面锚点-->
    <a name="about" id="about"></a>
    <!--Our Achievement-->
    <div class="row">
      <div class="col-md-12 middle pt-5 m-0">
        <!-- <div
          class="layer"
          style="
						width: 100%;
						z-index: 100;
						border-bottom: 200px solid transparent;
						border-left: 100vw solid #fff;
					"
        ></div> -->
        <div class="container-fluid">
          <div class="row pt-5 pb-5"></div>
          <div class="row">
            <div class="col-md-12">
              <div class="text-center section-heading" style="color:#f5af19">
                {{ $t("home.our") }}
              </div>
              <div
                class="mb-5 text-center col-md-7"
                style="font-size: 1.2rem; margin: 0 auto;color:#fff"
              >
                {{ $t("home.second_title") }}
              </div>
              <div class="row">
                <div class="col-md-4 text-center">
                  <div class="mb-3">
                    <img
                      src="@/assets/images/USERS FLOW.png"
                      alt=""
                      style="margin: 0 auto"
                      width="85px"
                    />
                    <countTo
                      :startVal="0"
                      :endVal="159182"
                      :duration="5600"
                      class="counter h4 text-white"
                      style=""
                    ></countTo>
                    <p class="mt-2 text-white" style="font-size: 20px">
                      {{ $t("home.monthly") }}
                    </p>
                  </div>
                </div>
                <div class="col-md-4 text-center">
                  <div class="mx-auto mb-3 mb-lg-0">
                    <img
                      src="@/assets/images/payout.png"
                      alt=""
                      style="margin: 0 auto"
                      width="85px"
                    />
                    <countTo
                      :startVal="0"
                      :endVal="3408381"
                      :duration="5600"
                      class="counter h4 text-white"
                    ></countTo>

                    <p class="mt-2 text-white" style="font-size: 20px">
                      {{ $t("home.total") }}
                    </p>
                  </div>
                </div>
                <div class="col-md-4 text-center">
                  <div class="mb-3">
                    <img
                      src="@/assets/images/PARTNERSHIP.png"
                      alt=""
                      style="margin: 0 auto"
                      width="85px"
                    />

                    <countTo
                      :startVal="0"
                      :endVal="62"
                      :duration="5600"
                      class="counter h4 text-white"
                      >$</countTo
                    >
                    <p class="mt-2 text-white" style="font-size: 20px">
                      {{ $t("home.partner") }}
                    </p>
                  </div>
                </div>
              </div>
              <div class="row pt-5 pb-5"></div>
              <div class="row pt-5 pb-5"></div>
              <div class="row pt-5 pb-5"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--Reviews 页面锚点-->
    <a name="Reviews" id="reviews"></a>
    <div class="row mb-5 pb-5">
      <div class="col-md-12">
        <p class="text-center mt-4 pt-4  pb-5" style="font-size: 30px">
          {{ $t("home.testimonials") }}
        </p>
        <div class="row">
          <div class="col-md-4">
            <div
              class="card  shadow  bg-white rounded col-md-7"
              style="margin: 0 auto; line-height: 40px"
            >
              <div class="card-body">
                <p class="card-text">{{ $t("home.user1Text") }}</p>
                <p class="card-text h6">{{ $t("home.user1") }}</p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div
              class="card  shadow mb-5 bg-white rounded col-md-7"
              style="margin: 0 auto; line-height: 40px"
            >
              <div class="card-body">
                <p class="card-text">{{ $t("home.user2Text") }}</p>
                <br />
                <p class="card-text h6">{{ $t("home.user2") }}</p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div
              class="card shadow mb-5 bg-white rounded col-md-7"
              style="margin: 0 auto; line-height: 40px"
            >
              <div class="card-body">
                <p class="card-text">{{ $t("home.user3Text") }}</p>
                <!-- <br /> -->
                <p class="card-text h6">{{ $t("home.user3") }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--Why sign up to OYA Survey?-->
    <div class="row">
      <div class="col-md-12 p-0">
        <div class="container-fluid">
          <div class="row four-part">
            <div class="col-md-12 bg">
              <div class="row">
                <div class="col-md-1"></div>
                <div class="col-md-6">
                  <div class="h2 mt-5 text-center text-white">
                    {{ $t("home.why") }}
                  </div>
                  <p class="text-center" style="color: #829eb0">
                    {{ $t("home.reasons") }}
                  </p>
                </div>
              </div>
              <div class="row">
                <div class="col-md-1"></div>
                <div class="col-md-6 mt-5" style="display: flex">
                  <div class="col-md-3">
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
                        {{ $t("home.cashPayments") }}
                      </p>
                    </div>
                  </div>
                  <div class="col-md-3 ">
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
                        {{ $t("home.dataPrivacy") }}
                      </p>
                    </div>
                  </div>
                  <div class="col-md-3">
                    <div
                      class="sprite03"
                      width="100px"
                      height="100px"
                      style="
												background-image: url('https://s3.amazonaws.com/leadgen-prod/10/images/sprite.png');
											"
                    ></div>

                    <!-- <div class="col-md-12"> -->
                    <p class="h6 text-white mt-4">
                      {{ $t("home.supportTeam") }}
                    </p>
                    <!-- </div> -->
                  </div>
                  <div class="col-md-3">
                    <div
                      class="sprite04"
                      width="100px"
                      height="100px"
                      style="
												background-image: url('https://s3.amazonaws.com/leadgen-prod/10/images/sprite.png');
											"
                    ></div>

                    <div class="col-md-12">
                      <p class="h6 text-white mt-4">
                        {{ $t("home.anydevices") }}
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
    <!--What are you waiting for?-->
    <div class="row linerColor mt-5 mb-5">
      <div class="col-md-12">
        <div class="row pt-3"></div>
        <p
          class="text-center title mt-5 pt-5 mb-4"
          id="title"
          style="color: #00074e; font-size: 30px"
        >
          {{ $t("home.fiveTitle") }}
        </p>
        <div class="text-center">
          {{ $t("home.fiveText1") }}
        </div>
        <p class="text-center mb-5">
          {{ $t("home.fiveText2") }}
        </p>
        <div class="row mb-5">
          <div class="col-md-12 text-center">
            <button
              class="btn btn-primary border-0 col-md-2 btn-lg"
              style="background: #ff6f00"
            >
              <a
                href="#/registerInfo"
                class="text-white text-decoration-none h5"
                >{{ $t("nav.getStarted") }}</a
              >
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <Footer class="" />
    </div>
  </div>
</template>
<script>
import Nav from "@c/nav.vue"; //引入导航栏组件
import Footer from "@c/footer.vue"; //引入底部组件
// import  DatePicker from '@c/datepicker.vue'
import $ from "jquery";
import countTo from "vue-count-to";
// import { goAnchor, getQueryString } from '@/utils/common.js'
export default {
  name: "Home",
  components: {
    Nav: Nav,
    Footer: Footer,
    countTo: countTo,
    // DatePicker:DatePicker
  },
  data() {
    return {
      navitemlist: [
        { name: this.$t("nav.features"), path: "#features", active: "active" },
        { name: this.$t("nav.support"), path: "/support", active: "active" },
        { name: this.$t("nav.contact"), path: "/contact", active: "active" },
      ],
      color: "",
      background: "",
      isActive: false,
      showCounter: false,
    };
  },
  mounted() {
    // var _th = this;
    // window.addEventListener("scroll", _th.handleScroll);
  },
  compoted() {},
  methods: {
    signClick() {
      this.$router.push("#/login");
    },
    handleScroll() {
      const _th = this;
      let scrollTop = window.pageYOffset;
      //设置背景颜色的透明读
      if (scrollTop < 10) {
        document.getElementById("nav").classList.remove("nav-bg");
        _th.color = "#fff";
        _th.isActive = false;
      } else if (scrollTop > 10) {
        document.getElementById("nav").classList.add("nav-bg");
        _th.isActive = true;
        _th.color = "#ff6f00";
      }
    },
    aboutUrlClick(selector) {
      var anchor = document.querySelector(selector);
      //   没有动画
      document.documentElement.scrollTop = anchor.offsetTop;
      //   有动画
      // this.scrollTo(anchor.offsetTop, 530)
    },
    reviewsUrlClick(selector) {
      var anchor = document.querySelector(selector);
      document.documentElement.scrollTop = anchor.offsetTop;
    },
    scrollTo(y, duration) {
      /* y:目标纵坐标,duration:时间(毫秒) */

      var scrollTop = document.body.scrollTop; /* 页面当前滚动距离 */

      var distance =
        y - scrollTop; /* 结果大于0,说明目标在下方,小于0,说明目标在上方 */

      var scrollCount = duration / 10; /* 10毫秒滚动一次,计算滚动次数 */

      var everyDistance = parseInt(
        distance / scrollCount
      ); /* 滚动距离除以滚动次数计算每次滚动距离 */

      for (
        var index = 1;
        index <= scrollCount;
        index++ /* 循环设置scrollBy事件,在duration之内,完成滚动效果 */
      ) {
        setTimeout(function() {
          window.scrollBy(0, everyDistance);
        }, 10 * index);
      }
      let deviation = y - scrollCount * everyDistance;
      window.scrollBy(0, deviation);
    },
  },
};
</script>
<style scoped lang="less">
.home {
  .homebg {
    background-image: url("../../assets/images/banner.png");
    background-size: 100vw 100%;
    height: 100vh;
    background-repeat: no-repeat;
    padding-top: 65px;
  }
  .top {
  }
  .middle-user-payout {
    // background: #ffffff;
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

  .middle {
    background: #4568dc; /* fallback for old browsers */
    background: -webkit-linear-gradient(
      to right,
      #b06ab3,
      #4568dc
    ); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(
      to right,
      #b06ab3,
      #4568dc
    ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

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

  .four-part {
    background: #124769;
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

  .joinus-btn {
    border: none;
    background-color: #ff6f00;
    border-color: #ff6f00;
    height: 50px;
    line-height: 50px;
    border-radius: 5px;
    text-align: center;
    a {
      font-size: 1.4rem;
      color: white;
    }
  }
  .linerColor {
    // background: #4b6cb7;
    // background: -webkit-linear-gradient(to right, #182848, #4b6cb7);
    // background: linear-gradient(to right, #182848, #4b6cb7);
  }
}
</style>
