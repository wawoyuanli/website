<template>
  <div id="app">
    <router-view v-if="isReload" />
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  provide() {
    return {
      reload: this.reload,
    };
  },
  data() {
    return {
      isReload: true,
    };
  },
  methods: {
    reload() {
      this.isReload = false;
      this.$nextTick(() => {
        this.isReload = true;
      });
    },
  },
};
</script>

<style></style>
