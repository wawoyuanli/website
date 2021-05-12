<template>
  <div id="support">
    <Nav :color="color" :isActive="isActive" id="borderBottom" />
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-12">
          <div class="content" data-scrollview="true">
            <div
              class="container"
              data-animation="true"
              data-animation-type="fadeInDown"
            >
              <h2 class="content-title">Support</h2>
              <p class="text-center">
                Do you need some help? You are in the right place
              </p>
              <div class="row p-t-30">
                <div class="col-md-6 col-sm-6">
                  <div class="service service-vertical help-box">
                    <a href="#">
                      <div class="info">
                        <h4 class="title">
                          <a href="/faq">FAQ</a>
                        </h4>
                        <p class="desc">
                          <a href="/faq">
                            Check Frequently Asked Questions first. Maybe your
                            issue is a common one and you will find the solution
                            here</a
                          >
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
                <div class="col-md-6 col-sm-6">
                  <div class="service service-vertical help-box">
                    <a href="#">
                      <div class="info">
                        <h4 class="title">
                          <a href="/contact">Contact</a>
                        </h4>
                        <p class="desc" id="descright">
                          <a href="/contact">
                            Finally, if your case is urgent or you can't find
                            any answers, feel free to contact us</a
                          >
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
import Nav from "@c/nav.vue";
import Footer from "@c/footer.vue";
export default {
  name: "Support",
  components: {
    Nav: Nav,
    Footer: Footer,
  },
  data() {
    return {
      isActive: true,
      color: "#26a4c3",
    };
  },
  mounted() {
    document.getElementById("borderBottom").classList.add("borderBottom");
  },
};
</script>
<style scoped lang="less">
#support {
  .container {
    padding-top: 5rem;
    width: 100%;
    min-height: 75vh;
    .row {
      .col-lg-12 {
        .content {
          .content-title {
            font-size: 2rem;
            margin-bottom: 0.5rem;
          }
          .text-center {
            text-align: center !important;
            font-size: 1rem;
            margin-bottom: 1rem;
          }
          .p-t-30 {
            padding-top: 2rem;
            .col-md-6 {
              .help-box {
                a {
                  color: #ff6f00;
                  text-decoration: underline;
                  .info {
                    .title {
                      margin-bottom: 0.5rem;
                      font-size: 1.5rem;
                    }
                    .desc {
                      margin-bottom: 1rem;
                    }
                    #descright :hover {
                      color: red;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
#descright :hover {
  color: red;
}
</style>
