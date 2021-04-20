<template>
  <div class="antispam">
    <Nav id="borderBottom" :color="color" :isActive="isActive"></Nav>
    <div class="antispam-content">
      <div class="container">
        <div class="row">
          <div class="col-md-2"></div>
          <div class="col-md-9 h3">
            Anti-Spam Policy
          </div>
        </div>
        <div class="row">
          <div class="col-md-2"></div>
          <div
            class="col-md-9 border mt-5 text-left ml-2 mb-5 shadow-lg p-3 mb-5 bg-white rounded"
          >
            <div class="ml-2 mt-5">
              You may not promote your referral links or your own surveys
              through unsolicited emailing (i.e. SPAMMING), newsgroup postings,
              or any other method of mass communication. Failure to comply will
              result in immediate termination of your membership with
              PandaResearch and may result in legal prosecution.
            </div>
            <div class="mt-3 ml-2">
              PandaResearch strictly enforces anti-spamming laws. Spamming is an
              internationally monitored crime that has severe criminal and civil
              penalties. Any member caught spamming will not only have their
              account terminated immediately and lose any past, present and
              future earnings, but shall also be held liable for Spamming as we
              shall cooperate with any authorities and investigations that may
              arise from the Spamming incident. PandaResearch may charge a fee
              per email sent. Multiple signups shall be grounds for immediate
              termination of all involved accounts. Signing up multiple times
              from the same computer also constitutes fraud.
            </div>
            <div class="mt-2 ml-2">
              PandaResearch will file charges for recovery of any earnings
              received from multiple signups.
            </div>
            <div class="mt-3 ml-2">
              Popular Member questions regarding SPAM:
            </div>
            <div class="mt-2 ml-2">
              Q :- Is it okay to put my PandaResearch paid surveys link on free
              offline bulletin boards that allow it, or online forums/boards
              that SPECIFICALLY allow it? A :- Sure!
            </div>
            <div class="mt-2 ml-2">
              Q :- Is it okay to deface public property with PandaResearch links
              or randomly post flyers with a PandaResearch link all over the
              place? A :- No
            </div>
            <div class="mt-2 ml-2">
              Q :- Is it okay to tell people that I already know such as my
              friends, relatives and acquaintances about PandaResearch? A :-
              Sure!
            </div>
            <div class="mt-2 ml-2">
              Q :- Is it okay to advertise PandaResearch at my website or at
              another website that agreed to post my PandaResearch link or
              banner? A :- Sure!
            </div>
            <div class="mt-2 ml-2">
              Q :- Is it okay to send emails with a PandaResearch link to people
              that I don't know? A :- No
            </div>
            <div class="mt-2 ml-2">
              Q :- If I am in doubt as to whether something is SPAM or not,
              should I go ahead and do it? A :- No
            </div>
            <div class="mt-2 ml-2">
              PLEASE NOTE: If you still find spam, please feel free to email us
              at abuse@test.com. We will respond promptly.
            </div>
            		<div
							class="mt-1 card text-center p-4 m-4"
							style="font-size: 16px; background-color: #f6f6f6"
						>
							PLEASE NOTE: If you still have a question, please feel free to
							contact us at Genting Consulting  Support. We will respond promptly.
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
  name: "Privacy",
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
<style lang="less" scoped>
.antispam {
  width: 100vw;
  background-color: #ffffff;
  .antispam-content {
    width: 90vw;
    text-align: center;
    min-height: 75vh;
    padding-top: 7rem;
  }
}
</style>
