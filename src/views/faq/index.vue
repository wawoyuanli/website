<template>
  <div class="faq">
    <Nav :navitemlist="list" id="borderBottom" :color="color" :isActive="isActive"></Nav>
    <div class="faq-content">
      <p>
        Frequently Asked Questions
      </p>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
import Nav from '@c/nav.vue'
import Footer from '@c/footer.vue'
export default {
  name: 'Faq',
  components: {
    Nav: Nav,
    Footer: Footer
  },
  data () {
    return {
      list: [
        { name: 'Features', path: '/home' },
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

