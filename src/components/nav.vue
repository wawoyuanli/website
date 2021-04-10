<template>
  <!--导航栏组件-->
  <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
    <div class="container">
      <a href="/home" class="navbar-brand">
        <strong :style="{color:color}">ColossalScope</strong>
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup"
        aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <!--Main menu-->
        <ul class="navbar-nav ml-auto mr-3">
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger actived" href="/home" :style="{ color: color }">Home
              <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item" v-for="(item, index) in navitemlist" :key="index">
            <a class="nav-link js-scroll-trigger" :href="item.path" :class="{navitemcolor:isActive}">{{ item.name }}
            </a>
          </li>
        </ul>
        <a class="btn btn-outline-primary btn-lg animated mr-3" href="/login">Sign In</a>
        <a class="btn btn-primary btn-lg" href="/register">Get started</a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Nav',
  props: {
    navitemlist: {
      type: Array,
      default () {
        //默认数组 可从父组件中传入 需要几个对象传几个对象
        return [
          { name: 'Features', path: '#', active: 'active' },
          { name: 'support', path: '#', active: 'active' },
          { name: 'Contact', path: '#', active: 'active' },
        ]
      },
    },
    color: {
      type: String,
      default: ''
    },
    background: {
      type: String,
      default: ''
    },
    isActive: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
    }
  },
  mounted () {

  },
  methods: {

    signinClick () {
      //向父组件传递事件
      this.$emit('signClick')
    },
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.handleScroll)
  },
}
</script>
<style lang="less" scoped>
/**导入nav配置样式 */
@import '../assets/less/nav.less';
.navbar {
  font-size: 0.875rem;
}
.borderBottom {
  background-color: #fff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
}
.navbar-brand {
  // font-size: 1.75rem;
}
.navbar-brand :hover {
  color: #ff6f00;
}
.navbar-expand-lg {
  flex-wrap: nowrap;
  justify-content: flex-start;
}
#mainNav {
  padding: 0.25rem 0px;
  transition: all 0.5s;
  padding-left: 3rem;
  padding-right: 3rem;
  border: none;
}
.nav-bg {
  background-color: #ffffff;
}

.logoname {
  color: #ff6f00;
}
.fixed-top {
  .container {
    .navbar-brand {
      color: #fff;
      font-size: 1.7rem;
    }

    .collapse {
      .navbar-nav {
        .nav-item {
          .nav-link:hover {
            opacity: 1;
          }
          .nav-link {
            color: #fff;
            opacity: 0.8;
            font-size: 1.1rem;
          }
          .navitemcolor {
            color: rgb(17, 15, 15);
          }
          .actived {
            opacity: 1;
            font-size: 1.1rem;
          }
        }
      }
      .btn-outline-primary {
        border: 1px solid #fff;
        color: #fff;
        font-size: 1.56rem;
      }
      .btn-outline-primary:hover,
      .btn-outline-primary:focus {
        color: rgb(10, 10, 10);
        background-color: #fff;
        border: none;
      }
      .btn-primary,
      .btn-success {
        color: #fff;
        background-color: #ff6f00;
        border-color: #ff6f00;
      }
      .btn-primary:hover,
      .btn-success:hover,
      .btn-primary:focus,
      .btn-success:focus {
        color: #fff;
        background-color: #ff8526;
        border-color: #ff7d1a;
      }
    }
  }
}
</style>
