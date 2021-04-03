<template>
  <div class="contact">
    <Nav />
    <div class="content-section">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="content" data-scrollview='true'>
              <div class="container" data-animation='true' data-animation-type="fadeInDown">
                <h2 class="content-title">Contact</h2>
                <p class="text-center">
                  Do you need to contact us? Fill the form below or email us directly: contact@colossalscope.com
                </p>
                <div class="row">
                  <div class="col-md-12">
                    <br/>
                    <div class="TitanViewElement">
                      <h3>Contact form</h3>
                      <div class="row m-t-30">
                        <div class="col-md-12">
                          <div class="form-horizontal">
                            <div class="form-group">
                              <label class="control-label col-md-2">
                                Email:
                              </label>
                              <div class="col-md-6">
                                <input class="form-control">
                              </div>
                            </div>
                            <div class="form-group">
                              <label class="control-label col-md-2">
                                Email:
                              </label>
                              <div class="col-md-6">
                                <textarea class="form-control" rows="2"></textarea>
                              </div>
                            </div>

                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
    <Footer/>
  </div>
</template>
<script>
import Nav from '@c/nav.vue'
import Footer from '@c/footer.vue'
export default {
  name: 'Contact',
  components: {
    Nav: Nav,
    Footer: Footer
  },
}
</script>
<style scoped lang="less">
.contact {
  .content-section {
    padding: 8rem 0rem;
    min-height: 75vh;
    h2 {
      font-size: 2rem;
    }
    p {
      margin-bottom: 1rem;
    }
    h3 {
      font-size: 1.75rem;
    }
    .m-t-30 {
      margin-top: 30px !important;
    }
    textarea {
      height: 100px;
    }
  }
}
</style>