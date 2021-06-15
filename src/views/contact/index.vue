<template>
  <div class="contact">
    <Nav id="borderBottom" :color="color" :isActive="isActive" />
    <div class="content-section">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="content" data-scrollview="true">
              <div
                class="container"
                data-animation="true"
                data-animation-type="fadeInDown"
              >
                <h2 class="content-title">Contact</h2>
                <p class="text-left">
                  Do you need to contact us? Fill the form below or email us
                  directly: service@salientsurveys.com
                </p>
                <div class="row">
                  <div class="col-md-12">
                    <br />
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
                                <input class="form-control" v-model="email" />
                              </div>
                            </div>
                            <div class="form-group">
                              <label class="control-label col-md-2">
                                Text:
                              </label>
                              <div class="col-md-6">
                                <textarea
                                  class="form-control"
                                  rows="2"
                                  v-model="text"
                                ></textarea>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-6 text-center">
                    <input
                      type="submit"
                      class="btn btn-primary col-md-3 m-5"
                      @click="submit"
                    />
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
  name: "Contact",
  components: {
    Nav: Nav,
    Footer: Footer,
  },
  data() {
    return {
      iconList: [
        {
          name: "people",
          path: require("../../assets/images/People Plus.png"),
        },
        { name: "earth", path: require("../../assets/images/earth.png") },
        { name: "seat", path: require("../../assets/images/seat.png") },
      ],
      isActive: true,
      color: "#26a4c3",
      email: "",
      text: "",
    };
  },
  mounted() {
    document.getElementById("borderBottom").classList.add("borderBottom");
  },
  methods: {
    submit() {
      var reg = new RegExp(
        "^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$"
      ); //姝ｅ垯琛ㄨ揪寮�
      if (!reg.test(this.email)) {
        alert("E-mail format is incorrect");
        return false;
      }
      if (this.text === "") {
        alert("Text cannot be empty");
        return false;
      }
      this.email = "";
      this.text = "";
      alert("Data submitted");
    },
  },
};
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
    .col-md-6 {
      .btn-success {
        color: #fff;
        background-color: #ff6f00;
        border-color: #ff6f00;
      }
      .btn {
        border-radius: 5px;
        font-family: Rubik;

        .fa {
          display: inline-block;
          font-size: inherit;
          text-rendering: auto;
          -webkit-font-smoothing: antialiased;
          font: normal normal normal 14px/1 FontAwesome;
        }
        .fa-plus:before {
          content: "\f067";
        }
      }
      .btn-primary {
        background-color: #ff6f00;
        border-color: #ff6f00;
        font-size: 1rem;
        // padding: 0px 0.75rem;
        margin-left: 0.75rem;
      }
    }
  }
}
</style>
