<template>
<!--导航栏组件-->
  <div class="nav">
   nav
  </div>
</template>

<script>

export default {
  name: 'Nav',
  data(){
    return{

    }
  }
}
</script>
<style lang="less" scoped>
/**导入nav配置样式 */
@import '../assets/less/nav.less';
  .nav{
    background-color:@navbackgroundcolor;
    color:@navbackgroundcolor
  }
</style>
