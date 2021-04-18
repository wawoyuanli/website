<template>
  <div class="faq">
    <Nav id="borderBottom" :color="color" :isActive="isActive"></Nav>
    <div class="faq-content">
      <h1>
        Frequently Asked Questions About Our Paid Surveys
      </h1>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
import Nav from "@c/nav.vue";
import Footer from "@c/footer.vue";
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
    };
  },
  mounted() {
    document.getElementById("borderBottom").classList.add("borderBottom");
  },
};
</script>
<style lang="less" scoped>
.faq {
  width: 100vw;
  background-color: #ffffff;
  .faq-content {
    width: 90vw;
    text-align: center;
    min-height: 75vh;
    padding-top: 7rem;
  }
}
</style>
