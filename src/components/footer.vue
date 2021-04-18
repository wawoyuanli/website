<template>
  <footer class="footer">
    <div class="bg-dark text-white">
      <div class="container">
        <div class="row">
          <div class="col-md-10 col-md-offset-2 col-sm-10 col-sm-offset-1">
            <div class="row">
              <div class="col-md-6 col-sm-6 col-xs-6 text-left">
                <div class="company">{{ $t("home.company") }}</div>
                <div style="margin-top:20px">
                  <ul>
                    <li>
                      <a href="/home" class="text-white decration">Home</a>
                    </li>
                    <li><a href="/home" class="text-white">About Us</a></li>
                    <li><a href="/faq" class="text-white">FAQ</a></li>
                    <li>
                      <a href="/contact" class="text-white">Contact Us</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-md-6 col-sm-6 col-xs-6 text-left">
                <div class="support">{{ $t("home.support") }}</div>
                <div style="margin-top:20px">
                  <ul>
                    <li>
                      <a href="/terms" class="text-white"
                        >Terms And Conditions</a
                      >
                    </li>
                    <li>
                      <a href="/antispam" class="text-white"
                        >Anti-Spam Policy</a
                      >
                    </li>
                    <li>
                      <a href="/agreement" class="text-white"
                        >Affiliate Agreement</a
                      >
                    </li>
                    <li>
                      <a href="/privacy" class="text-white">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="#" class="text-white"> Don't Sell My Info </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="row" style="height:40px">
          <div
            class="col-md-12"
            style="border-bottom:1px solid white;margin-top:10px"
          ></div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <p class="text-center" style="padding-top:40px;font-size:14px">
              © Copyright Genting Consulting, 2008 - 2021 All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
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
.footer {
  .bg-dark {
    background: #000 !important;
    padding: 3rem 0px;
    .col-md-offset-2 {
      margin-left: 17%;
      .company {
        font-size: 20px;
      }
      .support {
        font-size: 20px;
      }
    }
  }
  a {
    color: #9a9a9a;
    text-decoration: none;
    font-size: 15px;
    line-height: 30px;
  }
}
</style>
