<template>
  <div class="antispam">
    <Nav id="borderBottom" :color="color" :isActive="isActive"></Nav>
    <div class="antispam-content">
      <div class="container">
        <p class="text-left" style="line-height:35px;padding-bottom:20px">
          {{ $t("protocol.policy") }}
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
