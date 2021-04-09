<template>
  <div class="footer">
    <div class="container">
      <div class="row">
        <div class="col-sm">
          <a href="/home" class="footer-brand wow fadeIn cc_pointer" data-wow-delay="0.1s">
            ColossalScope
          </a>
          <p class="mt-3 wow fadeIn cc_cursor" data-wow-delay="0.2s">
            ColossalScope has everything you need to get your new business up and running in no time!
          </p>
        </div>
        <div class="col-sm"></div>
        <div class="col-sm">
          <ul class="list-unstyled text-right">
            <li>
              <a href="/home" class="footer-link">About us</a>
            </li>
            <li>
              <a href="/support" class="footer-link">Support</a>
            </li>

            <li>
              <a href="/contact" class="footer-link">Contact</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="privacy">
        <div class="row">
          <div class="col-sm">
            <a href="/privacy" style="color:#ff6f00">Privacy Policy</a>
            <a href="/tos" style="color:#ff6f00;margin-left:10px">Terms of Service</a>
          </div>
          <div class="col-sm"></div>
          <div class="col-sm" style="text-align: right">
            2020 © ColossalScope
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
 <script>
export default {
  name: 'Footer',
  data () {
    return {}
  },
  methods: {},
}
</script>
 <style lang="less" scoped>
.footer {
  // position: absolute;
  // bottom: 0;
  width: 100vw;
  height: auto;
  min-height: 258px;
  background: black;
  color: white;
  .container {
    width: 100%;
    padding: 3rem 0 0;
    .row {
      --bs-gutter-x: 1.5rem;
      --bs-gutter-y: 0;
      display: flex;
      flex-wrap: wrap;
      margin-top: calc(var(--bs-gutter-y) * -1);
      margin-right: calc(var(--bs-gutter-x) / -2);
      margin-left: calc(var(--bs-gutter-x) / -2);

      .col-sm {
        .footer-brand {
          visibility: visible;
          animation-delay: 0.1s;
          animation-name: fadeIn;
          color: #fff;
          font-weight: 700;
          font-family: Rubik;
          text-decoration: none;
          line-height: 40px;
          font-size: 1.25rem;
        }

        .mt-3 {
          visibility: visible;
          animation-delay: 0.2s;
          animation-name: fadeIn;
        }
        .fadeIn {
          -webkit-animation-name: fadeIn;
          animation-name: fadeIn;
        }
        .list-unstyled {
          padding-left: 0;
          list-style: none;
        }
        .text-right {
          text-align: right !important;
          .footer-link :hover {
            color: red;
          }
          .footer-link {
            color: #fff;
            text-decoration: none;
            line-height: 25px;
          }
        }
      }
    }
    .privacy {
      padding: 40px 0px;
    }
  }
}
</style>
