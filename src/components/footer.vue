<template>

  <footer class="footer">
    <div class="bg-dark text-white">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 ml-auto mb-5">
            <a href="#page-top" class="footer-brand wow fadeIn" data-wow-delay="0.1s">
              ColossalScope
            </a>
            <p class="mt-3 wow fadeIn cc_cursor" data-wow-delay="0.2s">
              ColossalScope has everything you need to get your new business up and running in no time!
            </p>
          </div>
          <div class="col-lg-3 mr-auto"></div>
          <div class="col-lg-5 mr-auto mb-5">
            <div class="row">
              <div class="col-sm-6"></div>
              <div class="col-sm-6">
                <nav class="wow fadeIn" data-wow-delay='0.2s'>
                  <ul class="list-unstyled text-right">
                    <li>
                      <a href="/home" class="footer-link  change-link-color" @mouseleave="mouseLeave" @mouseover="mouseOver" :style="{color:color}">About us</a>
                    </li>
                    <li>
                      <a href="/support" class="footer-link text-white">Support</a>
                    </li>

                    <li>
                      <a href="/contact" class="footer-link text-white">Contact</a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div class="bg-black text-white p-2">
        <div class="container">

          <div class="row">
            <div class="col-md-6 tex-left">
              <a href="/privacy" style="color:#ff6f00">Privacy Policy</a>
              <a href="/tos" style="color:#ff6f00;margin-left:.5rem">Terms of Service</a>
            </div>

            <div class="col-md-6 text-right">
              2020 © ColossalScope
            </div>
          </div>
        </div>
      </div>
    </div>

  </footer>
</template>
 <script>
import $ from 'jquery'
export default {
  name: 'Footer',
  data () {
    return {
      color: '#fff',
    }
  },
  mounted () {

  },
  methods: {
    mouseOver: function () {

      this.color = '#ff6f00'
    },
    mouseLeave: function () {
      this.color = '#fff'
    }
  },
}
</script>
 <style lang="less" scoped>
.footer {
  .bg-dark {
    background: #000 !important;
    padding: 3rem 0px;
    .mb-5 {
      margin-bottom: 3rem !important;
      .footer-brand {
        color: #fff;
        font-weight: 700;
        font-family: Rubik;
        text-decoration: none;
        line-height: 40px;
        font-size: 1.25rem;
      }
    }
  }
}
</style>
