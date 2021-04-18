<template>
  <div class="resetpwd">
    <Nav id="borderBottom" :color="color" :isActive="isActive"></Nav>
    <div class="pt"></div>
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <p class="h2 text-center">Reset my password</p>
        </div>
      </div>
      <div class="row">
        <div class="col-md-3"></div>
        <div class="col-md-6">
          <input type="text" class="form-controler" />
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>
<script>
import Nav from "@c/nav.vue";
import Footer from "@c/footer.vue";
export default {
  name: "Resetpwd",
  components: {
    Nav,
    Footer,
  },

  data() {
    return {
      isActive: true,
      color: "#26a4c3",
    };
  },
  mounted() {
    document.getElementById("borderBottom").classList.add("borderBottom");
    s;
  },
};
</script>
<style lang="less" scoped>
.resetpwd {
  .pt {
    padding-top: 8rem;
  }
}
</style>
