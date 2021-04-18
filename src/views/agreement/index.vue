<template>
  <div class="agreement">
    <Nav id="borderBottom" :color="color" :isActive="isActive"></Nav>
    <div class="agreement-content">
      <div class="container">
        <p class="text-left" style="line-height:35px;padding-bottom:20px">
          {{ $t("protocol.agreement") }}
        </p>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
import Nav from "@c/nav.vue";
import Footer from "@c/footer.vue";
export default {
  name: "Agreement",
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
.agreement {
  width: 100vw;
  background-color: #ffffff;
  .agreement-content {
    width: 90vw;
    text-align: center;
    min-height: 75vh;
    padding-top: 7rem;
  }
}
</style>
