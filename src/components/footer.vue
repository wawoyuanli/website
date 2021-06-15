<template>
  <div class="container-fluid bg-dark">
    <div class="row pt-5 pb-5 ">
      <div class="col-md-4 text-right">
        <ul class="">
          <li>
            <a href="#/home" class="text-white text-decoration-none h4">Home</a>
          </li>
          <li class="mt-3">
            <a href="#/home#aboutUs" class="text-white text-decoration-none"
              >About Us</a
            >
          </li>
          <li class="mt-2">
            <a href="#/faq" class="text-white text-decoration-none">FAQ</a>
          </li>
          <li class="mt-2">
            <a href="#/contact" class="text-white text-decoration-none"
              >Contact Us</a
            >
          </li>
        </ul>
      </div>
      <div class="col-md-4"></div>
      <div class="col-md-4 text-left">
        <div class="support text-light h4">{{ $t("home.support") }}</div>
        <ul class="text-left">
          <li class="mt-3">
            <a href="#/terms" class="text-white text-decoration-none"
              >Terms And Conditions</a
            >
          </li>
          <li class="mt-2">
            <a href="#/antispam" class="text-white text-decoration-none"
              >Anti-Spam Policy</a
            >
          </li>
          <li class="mt-2">
            <a href="#/agreement" class="text-white text-decoration-none"
              >Affiliate Agreement</a
            >
          </li>
          <li class="mt-2">
            <a href="#/privacy" class="text-white text-decoration-none"
              >Privacy Policy</a
            >
          </li>
          <li class="mt-2">
            <a href="#" class="text-white text-decoration-none">
              Don't Sell My Info
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="row pb-5">
      <div class="col-md-3"></div>
      <div class="col-md-6 border-bottom"></div>
      <div class="col-md-3"></div>
    </div>
    <div class="row pb-3">
      <div class="col-md-3"></div>
      <div class="col-md-6 text-center text-white">
        © 2021 Salient Surveys. All Rights Reserved.
      </div>
      <div class="col-md-3"></div>
    </div>
  </div>
</template>
<script>
import $ from "jquery";
export default {
  name: "Footer",
  data() {
    return {
      color: "#fff",
    };
  },
  mounted() {},
  methods: {
    mouseOver: function() {
      this.color = "#ff6f00";
    },
    mouseLeave: function() {
      this.color = "#fff";
    },
  },
};
</script>
<style lang="less" scoped>
// .col,
// .col-1,
// .col-10,
// .col-11,
// .col-12,
// .col-2,
// .col-3,
// .col-4,
// .col-5,
// .col-6,
// .col-7,
// .col-8,
// .col-9,
// .col-auto,
// .col-lg,
// .col-lg-1,
// .col-lg-10,
// .col-lg-11,
// .col-lg-12,
// .col-lg-2,
// .col-lg-3,
// .col-lg-4,
// .col-lg-5,
// .col-lg-6,
// .col-lg-7,
// .col-lg-8,
// .col-lg-9,
// .col-lg-auto,
// .col-md,
// .col-md-1,
// .col-md-10,
// .col-md-11,
// .col-md-12,
// .col-md-2,
// .col-md-3,
// .col-md-4,
// .col-md-5,
// .col-md-6,
// .col-md-7,
// .col-md-8,
// .col-md-9,
// .col-md-auto,
// .col-sm,
// .col-sm-1,
// .col-sm-10,
// .col-sm-11,
// .col-sm-12,
// .col-sm-2,
// .col-sm-3,
// .col-sm-4,
// .col-sm-5,
// .col-sm-6,
// .col-sm-7,
// .col-sm-8,
// .col-sm-9,
// .col-sm-auto,
// .col-xl,
// .col-xl-1,
// .col-xl-10,
// .col-xl-11,
// .col-xl-12,
// .col-xl-2,
// .col-xl-3,
// .col-xl-4,
// .col-xl-5,
// .col-xl-6,
// .col-xl-7,
// .col-xl-8,
// .col-xl-9,
// .col-xl-auto {
// 	position: relative;
// 	width: 100%;
// 	padding-right: 0;
// 	padding-left: 0;
// }
</style>
