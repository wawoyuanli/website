<template>
  <div class="privacy">
    <Nav :navitemlist="list" id="borderBottom" :color="color" :isActive="isActive"></Nav>
    <div class="privacy-content">
      <p>
        Privacy Notice PRIVACY NOTICE Last updated September 29, 2020 Thank you for choosing to be part of our community at colossalscope.com
        (“Company”, “we”, “us”, or “our”). We are committed to protecting your personal information and your right to privacy.
        If you have any questions or concerns about this privacy notice, or our practices with regards to your personal information,
        please contact us at security@colossalscope.com or Vestis Consulting LLC 1002 N Meridian Ste 100, PMB 170, Puyallup,
        WA 98371. When you use any of our Services (“Services” include access to colossalscope.com and any sub-pages, use
        of surveys, games, videos, coupons or shopping functions delivered via our platform to gather feedback and access
        to our customer care professionals), we appreciate that you are trusting us with your personal information. We take
        your privacy very seriously. In this privacy notice, we seek to explain to you in the clearest way possible what
        information we collect, how we use it and what rights you have in relation to it. We hope you take some time to read
        through it carefully, as it is important. If there are any terms in this privacy notice that you do not agree with,
        please discontinue use of our Services immediately. This privacy notice applies to all information collected through
        our Services (which, as described above, includes use of our website, surveys, games, videos, coupons or shopping
        functions delivered via our platform and access to our customer care professionals), as well as any related services,
        sales, marketing or events. Please read this privacy notice carefully as it will help you understand what we do with
        the information that we collect.
      </p>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
import Nav from '@c/nav.vue'
import Footer from '@c/footer.vue'
export default {
  name: 'Privacy',
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
.privacy {
  width: 100vw;
  background-color: #ffffff;
  .privacy-content {
    width: 90vw;
    text-align: center;
    min-height: 75vh;
    padding-top: 7rem;
  }
}
</style>

