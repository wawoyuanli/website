<template>
  <div class="faq">
    <Nav id="borderBottom" :color="color" :isActive="isActive"></Nav>
    <div class="container-fluid pt">
      <div class="row">
        <div class="col-md-12">
          <div class="title">
            <p class="h3 text-center">
              Frequently Asked Questions About Our Paid Surveys
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid mt-5 mb-5">
      <div class="row">
        <div class="col-md-2"></div>
        <div class="col-md-8 text-center">
          <div class="row">
            <div class="col-md-12 border">
              <div class="accordion" id="accordionExample">
                <div class="card">
                  <div class="card-header bg-white" id="headingOne">
                    <h2 class="mb-0" style="display:flex;align-items:center">
                      <img
                        :src="oneImg"
                        alt=""
                        width="20px"
                        height="20px"
                        @click="collapseClickOne(one)"
                      />
                      <button
                        class="btn btn-link btn-block text-left text-dark"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapseOne"
                        aria-expanded="false"
                        aria-controls="collapseOne"
                        style="font-weight:600"
                      >
                        How do I participate in surveys?
                      </button>
                    </h2>
                  </div>

                  <div
                    id="collapseOne"
                    class="collapse"
                    aria-labelledby="headingOne"
                    data-parent="#accordionExample"
                  >
                    <div class="card-body">
                      <div class="panel">
                        After registration, members are provided with a list of
                        available offers and surveys that they qualify for. Once
                        a member takes an initial screening, members are
                        redirected to the client’s site to begin completing the
                        offer or survey. 
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="card-header bg-white" id="headingTwo">
                    <h2 class="mb-0" style="display:flex;align-items:center">
                      <img
                        :src="twoImg"
                        alt=""
                        width="20px"
                        height="20px"
                        @click="collapseClickTwo(two)"
                      />
                      <button
                        class="btn btn-link btn-block text-left collapsed text-dark"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                        style="font-weight:600"
                      >
                        Are there any eligibility requirements in order to
                        register?
                      </button>
                    </h2>
                  </div>
                  <div
                    id="collapseTwo"
                    class="collapse"
                    aria-labelledby="headingTwo"
                    data-parent="#accordionExample"
                  >
                    <div class="card-body">
                      <div class="panel">
                        To be eligible for Salient Surveys, you must meet the
                        following criteria: You must be 18 years old and Account
                        information must be accurate and complete. You must
                        register using your valid e-mail address. Signing up
                        through a proxy server is strictly prohibited. Proxies
                        are no allowed and will be traced and all guilty parties
                        will be blacklisted. Turn off any website accelerators
                        you may use. You will get paid if you meet all our
                        criteria. If you do not follow our rules or our Terms
                        and Conditions, you won’t be eligible for payment and
                        your account will be removed. In addition, please use a
                        reputable browser such as Chrome, Firefox, Safari, or
                        Internet Explorer. If you are not using a reputable
                        browser, we cannot guarantee that you will be eligible
                        to view or complete our offers and surveys properly. We
                        also cannot guarantee credits if you are not using a
                        reputable browser.
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="card-header bg-white" id="headingThree">
                    <h2 class="mb-0" style="display:flex;align-items:center">
                      <img
                        :src="threeImg"
                        alt=""
                        width="20px"
                        height="20px"
                        @click="collapseClickThree(three)"
                      />
                      <button
                        class="btn btn-link btn-block text-left collapsed text-dark"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                        style="font-weight:600"
                      >
                        Why do you ask personal information when I register?
                      </button>
                    </h2>
                  </div>
                  <div
                    id="collapseThree"
                    class="collapse"
                    aria-labelledby="headingThree"
                    data-parent="#accordionExample"
                  >
                    <div class="card-body">
                      <div class="panel">
                        We ask demographic questions such as age, gender,
                        marital status, etc. to ensure we have a diverse
                        membership database. Also, so we can match you up with
                        offers and surveys that you will immediately qualify
                        for.
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="card-header bg-white" id="headingFour">
                    <h2 class="mb-0" style="display:flex;align-items:center">
                      <img
                        :src="fourImg"
                        alt=""
                        width="20px"
                        height="20px"
                        @click="collapseClickFour(four)"
                      />
                      <button
                        class="btn btn-link btn-block text-left collapsed text-dark"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapseFour"
                        aria-expanded="false"
                        aria-controls="collapseFour"
                        style="font-weight:600"
                      >
                        How many accounts may I have?
                      </button>
                    </h2>
                  </div>
                  <div
                    id="collapseFour"
                    class="collapse"
                    aria-labelledby="headingFour"
                    data-parent="#accordionExample"
                  >
                    <div class="card-body">
                      <div class="panel">
                        You may only have one account per household. Having
                        multiple accounts is considered fraud and will result in
                        termination of your account and all earnings forfeited.
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="card-header bg-white" id="headingFive">
                    <h2 class="mb-0" style="display:flex;align-items:center">
                      <img
                        :src="fiveImg"
                        alt=""
                        width="20px"
                        height="20px"
                        @click="collapseClickFive(five)"
                      />
                      <button
                        class="btn btn-link btn-block text-left collapsed text-dark"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapseFive"
                        aria-expanded="false"
                        aria-controls="collapseFive"
                        style="font-weight:600"
                      >
                        How long do surveys take to complete?
                      </button>
                    </h2>
                  </div>
                  <div
                    id="collapseFive"
                    class="collapse"
                    aria-labelledby="headingFive"
                    data-parent="#accordionExample"
                  >
                    <div class="card-body">
                      <div class="panel">
                        Based on what is required from our client(s), surveys
                        can take anywhere between 10-15 minutes to complete.
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="card-header bg-white" id="headingSix">
                    <h2 class="mb-0" style="display:flex;align-items:center">
                      <img
                        :src="sixImg"
                        alt=""
                        width="20px"
                        height="20px"
                        @click="collapseClickSix(six)"
                      />
                      <button
                        class="btn btn-link btn-block text-left collapsed text-dark"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapseSix"
                        aria-expanded="false"
                        aria-controls="collapseSix"
                        style="font-weight:600"
                      >
                        How long does it take for offers to get approved?
                      </button>
                    </h2>
                  </div>
                  <div
                    id="collapseSix"
                    class="collapse"
                    aria-labelledby="headingSix"
                    data-parent="#accordionExample"
                  >
                    <div class="card-body">
                      <div class="panel">
                        After you have successfully met all the advertiser’s
                        requirements you will earn credit from Salient 
                        Surveys. Credit(s) can be applied upwards of 7
                        business days after advertiser approval to reach your
                        account
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="card-header bg-white" id="headingSeven">
                    <h2 class="mb-0" style="display:flex;align-items:center">
                      <img
                        :src="sevenImg"
                        alt=""
                        width="20px"
                        height="20px"
                        @click="collapseClickSeven(seven)"
                      />
                      <button
                        class="btn btn-link btn-block text-left collapsed text-dark"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapseSeven"
                        aria-expanded="false"
                        aria-controls="collapseSeven"
                        style="font-weight:600"
                      >
                        How long are your offers / surveys usually posted?
                      </button>
                    </h2>
                  </div>
                  <div
                    id="collapseSeven"
                    class="collapse"
                    aria-labelledby="headingSeven"
                    data-parent="#accordionExample"
                  >
                    <div class="card-body">
                      <div class="panel">
                        The lifespan of our offers and surveys varies based on
                        our client’s needs. Typically they will be posted for
                        two weeks. However, if there is a tremendous response to
                        an offer or survey it may close with-in 24 hours.
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="card-header bg-white" id="headingEight">
                    <h2 class="mb-0" style="display:flex;align-items:center">
                      <img
                        :src="eightImg"
                        alt=""
                        width="20px"
                        height="20px"
                        @click="collapseClickEight(eight)"
                      />
                      <button
                        class="btn btn-link btn-block text-left collapsed text-dark"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapseEight"
                        aria-expanded="false"
                        aria-controls="collapseEight"
                        style="font-weight:600"
                      >
                        It’s been over 7 business days since I completed an
                        offer and I still haven’t been credited.
                      </button>
                    </h2>
                  </div>
                  <div
                    id="collapseEight"
                    class="collapse"
                    aria-labelledby="headingEight"
                    data-parent="#accordionExample"
                  >
                    <div class="card-body">
                      <div class="panel">
                        If you feel like you have met all the necessary
                        requirements and have not been credited after 7 business
                        days, please go to our support page and submit a support
                        ticket. When you submit a support ticket please include
                        the offer ID(s) in question and please take screen shots
                        (PDF or JPEG) of all email communication you received
                        from the advertiser. Without this information we cannot
                        reach out to the advertiser and ask for your credit(s).
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="card-header bg-white" id="headingNine">
                    <h2 class="mb-0" style="display:flex;align-items:center">
                      <img
                        :src="nineImg"
                        alt=""
                        width="20px"
                        height="20px"
                        @click="collapseClickNine(nine)"
                      />
                      <button
                        class="btn btn-link btn-block text-left collapsed text-dark"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapseNine"
                        aria-expanded="false"
                        aria-controls="collapseNine"
                        style="font-weight:600"
                      >
                        What is the difference between APPROVED and VIEWED
                        amounts in my account?
                      </button>
                    </h2>
                  </div>
                  <div
                    id="collapseNine"
                    class="collapse"
                    aria-labelledby="headingNine"
                    data-parent="#accordionExample"
                  >
                    <div class="card-body">
                      <div class="panel">
                        “APPROVED” status means that you have completed all the
                        requirements of an offer or survey. The requirements of
                        each survey can be found on the survey details page.
                        “VIEWED” status means that you have no completed all the
                        requirements of the offer or survey. This means you are
                        not yet eligible for payment on that offer or survey.
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="card-header bg-white" id="headingTen">
                    <h2 class="mb-0" style="display:flex;align-items:center">
                      <img
                        :src="tenImg"
                        alt=""
                        width="20px"
                        height="20px"
                        @click="collapseClickTen(ten)"
                      />
                      <button
                        class="btn btn-link btn-block text-left collapsed text-dark"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapseTen"
                        aria-expanded="false"
                        aria-controls="collapseTen"
                        style="font-weight:600"
                      >
                        How do I get paid?
                      </button>
                    </h2>
                  </div>
                  <div
                    id="collapseTen"
                    class="collapse"
                    aria-labelledby="headingTen"
                    data-parent="#accordionExample"
                  >
                    <div class="card-body">
                      <div class="panel">
                        Once you have been approved for $10.00 the “Get Paid”
                        button will be activated in the Account Status Tab. Once
                        you click on the “Get Paid” button, a pop-up will appear
                        on your screen with the phone number to our verification
                        department. You will need to call this number and speak
                        with our verification department to verify your
                        information and payment request. We ask that you do this
                        to help fraud related activity in check. Once your
                        request has been verified, your payment request will be
                        submitted. Once submitted, there will be a mandatory 30
                        day wait period after you have gotten phone verified for
                        the payment to be released to you. (The Verification
                        Department is open Monday – Friday 8:30AM – 5:30PM
                        Central Standard Time, except on holidays) Payments are
                        sent on the 1st and 15th of each month solely through
                        PayPal. If the 1st or the 15th fall on a weekend or
                        holiday, the payment will be sent on the first business
                        day. Payments will be made in $10.00 increments. (ex. If
                        you request $102.50, you will be paid $100.00 and the
                        remaining $2.50 will carry over for a future payment
                        request).
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="card-header bg-white" id="headingEleven">
                    <h2 class="mb-0" style="display:flex;align-items:center">
                      <img
                        :src="elevenImg"
                        alt=""
                        width="20px"
                        height="20px"
                        @click="collapseClickEleven(eleven)"
                      />
                      <button
                        class="btn btn-link btn-block text-left collapsed text-dark"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapseEleven"
                        aria-expanded="false"
                        aria-controls="collapseEleven"
                        style="font-weight:600"
                      >
                        Do members get paid for referring Salient Surveys to
                        friends?
                      </button>
                    </h2>
                  </div>
                  <div
                    id="collapseEleven"
                    class="collapse"
                    aria-labelledby="headingEleven"
                    data-parent="#accordionExample"
                  >
                    <div class="card-body">
                      <div class="panel">
                        YES! You can refer your friends to Salient Surveys
                        and earn 10% of their offer earnings for the life of
                        their account. For example, you refer Bob to Salient 
                        Surveys, Bob becomes a member and completes $30.00 in
                        offers. Once Bob requests payment for $30.00, Salient Surveys will
                        immediately credit $3.00 (10% of Offer Earnings) into your account.
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="card-header bg-white" id="headingTwenty">
                    <h2 class="mb-0" style="display:flex;align-items:center">
                      <img
                        :src="twentyImg"
                        alt=""
                        width="20px"
                        height="20px"
                        @click="collapseClickTwenty(twenty)"
                      />
                      <button
                        class="btn btn-link btn-block text-left collapsed text-dark"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapseTwenty"
                        aria-expanded="false"
                        aria-controls="collapseTwenty"
                        style="font-weight:600"
                      >
                        How do I unsubscribe?
                      </button>
                    </h2>
                  </div>
                  <div
                    id="collapseTwenty"
                    class="collapse"
                    aria-labelledby="headingTwenty"
                    data-parent="#accordionExample"
                  >
                    <div class="card-body">
                      <div class="panel">
                        If you wish to unsubscribe, please go to our Unsubscribe
                        Page, which will remove your date from our database.
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="mt-1 card text-center p-4 m-4"
                  style="font-size: 16px; background-color: #f6f6f6"
                >
                  PLEASE NOTE: If you still have a question, please feel free to
                  contact us. We will respond
                  promptly.
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
import $ from "jquery";
// import "font-awesome/css/font-awesome.min.css";
export default {
  name: "Faq",
  components: {
    Nav: Nav,
    Footer: Footer,
  },
  data() {
    return {
      isActive: true,
      color: "#26a4c3",
      oneImg: require("@/assets/images/close.png"),
      twoImg: require("@/assets/images/close.png"),
      threeImg: require("@/assets/images/close.png"),

      fourImg: require("@/assets/images/close.png"),
      fiveImg: require("@/assets/images/close.png"),
      sixImg: require("@/assets/images/close.png"),
      sevenImg: require("@/assets/images/close.png"),
      eightImg: require("@/assets/images/close.png"),
      nineImg: require("@/assets/images/close.png"),
      tenImg: require("@/assets/images/close.png"),
      elevenImg: require("@/assets/images/close.png"),
      twentyImg: require("@/assets/images/close.png"),
      one: "close",
      two: "close",
      three: "close",
      four: "close",
      five: "close",
      six: "close",
      seven: "close",
      eight: "close",
      nine: "close",
      ten: "close",
      eleven: "close",
      twenty: "close",
    };
  },
  mounted() {
    document.getElementById("borderBottom").classList.add("borderBottom");
  },
  methods: {
    collapseClickOne(one) {
      if (one === "close") {
        this.oneImg = require("@/assets/images/open.png");
        $("#collapseOne").collapse("show");
        this.one = "open";
      } else {
        $("#collapseOne").collapse("hide");
        this.one = "close";
        this.oneImg = require("@/assets/images/close.png");
      }
    },
    collapseClickTwo(two) {
      if (two === "close") {
        this.twoImg = require("@/assets/images/open.png");
        $("#collapseTwo").collapse("show");
        this.two = "open";
      } else {
        $("#collapseTwo").collapse("hide");
        this.two = "close";
        this.twoImg = require("@/assets/images/close.png");
      }
    },
    collapseClickThree(three) {
      if (three === "close") {
        this.threeImg = require("@/assets/images/open.png");
        $("#collapseThree").collapse("show");
        this.three = "open";
      } else {
        $("#collapseThree").collapse("hide");
        this.three = "close";
        this.threeImg = require("@/assets/images/close.png");
      }
    },
    collapseClickFour(four) {
      if (four === "close") {
        this.fourImg = require("@/assets/images/open.png");
        $("#collapseFour").collapse("show");
        this.four = "open";
      } else {
        $("#collapseFour").collapse("hide");
        this.four = "close";
        this.fourImg = require("@/assets/images/close.png");
      }
    },
    collapseClickFive(five) {
      if (five === "close") {
        this.fiveImg = require("@/assets/images/open.png");
        $("#collapseFive").collapse("show");
        this.five = "open";
      } else {
        $("#collapseFive").collapse("hide");
        this.five = "close";
        this.fiveImg = require("@/assets/images/close.png");
      }
    },
    collapseClickSix(six) {
      if (six === "close") {
        this.sixImg = require("@/assets/images/open.png");
        $("#collapseSix").collapse("show");
        this.six = "open";
      } else {
        $("#collapseSix").collapse("hide");
        this.six = "close";
        this.sixImg = require("@/assets/images/close.png");
      }
    },
    collapseClickSeven(seven) {
      if (seven === "close") {
        this.sevenImg = require("@/assets/images/open.png");
        $("#collapseSeven").collapse("show");
        this.seven = "open";
      } else {
        $("#collapseSeven").collapse("hide");
        this.seven = "close";
        this.sevenImg = require("@/assets/images/close.png");
      }
    },
    collapseClickEight(eight) {
      if (eight === "close") {
        this.eightImg = require("@/assets/images/open.png");
        $("#collapseEight").collapse("show");
        this.eight = "open";
      } else {
        $("#collapseEight").collapse("hide");
        this.eight = "close";
        this.eightImg = require("@/assets/images/close.png");
      }
    },
    collapseClickNine(nine) {
      if (nine === "close") {
        this.nineImg = require("@/assets/images/open.png");
        $("#collapseNine").collapse("show");
        this.nine = "open";
      } else {
        $("#collapseNine").collapse("hide");
        this.nine = "close";
        this.nineImg = require("@/assets/images/close.png");
      }
    },
    collapseClickTen(ten) {
      if (ten === "close") {
        this.tenImg = require("@/assets/images/open.png");
        $("#collapseTen").collapse("show");
        this.ten = "open";
      } else {
        $("#collapseTen").collapse("hide");
        this.ten = "close";
        this.tenImg = require("@/assets/images/close.png");
      }
    },
    collapseClickEleven(eleven) {
      if (eleven === "close") {
        this.elevenImg = require("@/assets/images/open.png");
        $("#collapseEleven").collapse("show");
        this.eleven = "open";
      } else {
        $("#collapseEleven").collapse("hide");
        this.eleven = "close";
        this.elevenImg = require("@/assets/images/close.png");
      }
    },
    collapseClickTwenty(twenty) {
      if (twenty === "close") {
        this.twentyImg = require("@/assets/images/open.png");
        $("#collapseTwenty").collapse("show");
        this.twenty = "open";
      } else {
        $("#collapseTwenty").collapse("hide");
        this.twenty = "close";
        this.twentyImg = require("@/assets/images/close.png");
      }
    },
  },
};
</script>
<style lang="less" scoped>
.faq {
  // width: 100vw;
  background-color: #ffffff;
  .pt {
    padding-top: 8rem;
  }
  .card-header {
    border: none !important;
  }
  .card {
    border: none !important;
  }
  .panel {
    border: 1px solid #bfbfbf;
    background: #f6f6f6;
    padding: 20px;
    max-height: 126px;
    overflow: hidden;
    font-size: 14px;
  }
  .div ::after {
    content: "\f196";
    font-family: FontAwesome;
    color: #ff553e;
    padding: 1px;
    font-weight: bold;
    float: left;
    margin: -1px 15px 0 -35px;
  }
  .faq-content {
    width: 90vw;
    text-align: center;
    min-height: 75vh;
    padding-top: 7rem;
  }
}
</style>
