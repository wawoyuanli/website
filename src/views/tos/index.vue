<template>
  <div class="tos">
    <Nav :navitemlist="list" id="borderBottom" :color="color" :isActive="isActive"></Nav>
    <p class="tos-content">Terms of Service</p>
    <Footer></Footer>
  </div>
</template>
<script>
import Nav from '@c/nav.vue'
import Footer from '@c/footer.vue'
export default {
  name: 'Tos',
  components: {
    Nav: Nav,
    Footer: Footer
  },
  data () {
    return {
      list: [
        { name: 'Features', path: '/home#features' },
        { name: 'support', path: '/support' },
        { name: 'Contact', path: '/contact' },
      ],
      isActive: true,
      color: '#26a4c3',
    }
  },
  mounted () {
    document.getElementById('borderBottom').classList.add('borderBottom')
  }
}
</script>
<style lang="less" scoped>
.tos {
  padding-top: 7rem;
  background-color: #ffffff;
  .tos-content {
    width: 70vw;
    text-align: left;
    margin: 0 auto;
    font-size: 1.75rem;
    min-height: 70vh;
  }
}
</style>
