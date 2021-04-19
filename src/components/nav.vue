<template>
  <!--导航栏组件-->
  <nav
    class="navbar navbar-expand-lg navbar-light fixed-top navbar-shrink"
    id="mainNav"
  >
    <div class="container">
      <a href="/home" class="navbar-brand">
        <strong :style="{ color: color }">{{ $t("nav.webLogo") }}</strong>
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <!--Main menu-->
        <ul class="navbar-nav ml-auto mr-3">
          <li class="nav-item">
            <a
              class="nav-link js-scroll-trigger actived"
              href="/home"
              :style="{ color: color }"
              >{{ $t("nav.home") }}
              <span class="sr-only">(current)</span>
            </a>
          </li>
          <li
            class="nav-item"
            v-for="(item, index) in navitemlist"
            :key="index"
          >
            <a
              class="nav-link js-scroll-trigger"
              :href="item.path"
              :class="{ navitemcolor: isActive }"
              >{{ item.name }}
            </a>
          </li>
        </ul>
        <a
          class="btn btn-outline-primary btn-lg  mr-3"
          href="/login"
          :style="{ color: color }"
          >{{ $t("nav.signIn") }}</a
        >
        <a class="btn btn-primary btn-lg" href="/register">{{
          $t("nav.getStarted")
        }}</a>

        <div class="dropdown">
          <button
            class="btn btn-primary dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            {{ $t("nav.changeLanguage") }}
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item" href="#" @click="changeLanguage('en')"
              >English</a
            >
            <a class="dropdown-item" href="#" @click="changeLanguage('zh')"
              >中文</a
            >
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Nav",
  props: {
    color: {
      type: String,
      default: "",
    },
    background: {
      type: String,
      default: "",
    },
    isActive: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {};
  },
  mounted() {},
  computed: {
    navitemlist() {
      return [
        { name: this.$t("nav.about"), path: "/home#aboutUs" },
        { name: this.$t("nav.FAQ"), path: "/faq" },
        { name: this.$t("nav.contact"), path: "/contact" },
        { name: "Privacy", path: "/privacy" },
        { name: "Reviews", path: "/home#Reviews" },
      ];
    },
  },
  watch: {},
  methods: {
    signinClick() {
      //向父组件传递事件
      this.$emit("signClick");
    },
    changeLanguage(type) {
      this.$i18n.locale = type;
      localStorage.setItem("lang", type);
    },
  },

  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>
<style lang="less" scoped>
/**导入nav配置样式 */
@import "../assets/less/nav.less";
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
  transition: all 1s;
  animation: mymove 2s initial;
  // transform: scaleY(1.1);
  transform-origin: 0 100% 0 scaleY(2);
}
@keyframes mymove {
  100% {
    height: 1000px;
  }
  80% {
    height: 80px;
  }
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
        font-size: 1.5rem;
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
      .dropdown {
        margin-left: 3rem !important;
      }
    }
  }
}
</style>
