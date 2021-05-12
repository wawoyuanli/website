<template>
  <!--导航栏组件-->
  <div class="container-fluid  fixed-top">
    <div class="row">
      <div class="col-md-4 pt-2" v-if="lang == 'en' || lang === 'zh'">
        <a href="#/home" class="navbar-brand col-md-12">
          <div :style="{ color: color }" class="h3 text-center">
            {{ $t("nav.webLogo") }}
          </div>
        </a>
      </div>
      <div class="col-md-3 pt-2" v-if="lang === 'ge'">
        <a href="#/home" class="navbar-brand col-md-12">
          <div :style="{ color: color }" class="h3 text-center">
            {{ $t("nav.webLogo") }}
          </div>
        </a>
      </div>
       <div class="col-md-2 pt-2" v-if="lang === 'fr'">
        <a href="#/home" class="navbar-brand col-md-12">
          <div :style="{ color: color }" class="h3 text-center">
            {{ $t("nav.webLogo") }}
          </div>
        </a>
      </div>
      <!--中文 英文 显示样式-->
      <div class="col-md-1" v-if="lang === 'en' || lang === 'zh'"></div>
      <div class="col-md-6" v-if="lang === 'en' || lang === 'zh'">
        <nav
          class="navbar navbar-expand-lg navbar-light navbar-shrink"
          id="mainNav"
        >
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <ul class="navbar-nav ml-3">
              <li class="nav-item">
                <a
                  class="nav-link actived h6 "
                  href="#/home"
                  :style="{ color: color }"
                  >{{ $t("nav.home") }}
                  <span class="sr-only">(current)</span>
                </a>
              </li>
              <li class="nav-item">
                <a
                  :href="'#/home?maodian=about'"
                  class="nav-link h6"
                  :class="{ navitemcolor: isActive }"
                  @click="aboutUrlClick('#about')"
                  >{{ $t("nav.about") }}
                </a>
              </li>
              <li class="nav-item">
                <a
                  :href="'#/home?maodian=reviews'"
                  class="nav-link h6"
                  :class="{ navitemcolor: isActive }"
                  @click="reviewsUrlClick('#reviews')"
                  >{{ $t("nav.reviews") }}
                </a>
              </li>
              <li class="nav-item">
                <a
                  href="#/faq"
                  class="nav-link h6"
                  :class="{ navitemcolor: isActive }"
                  >{{ $t("nav.FAQ") }}
                </a>
              </li>
              <li class="nav-item">
                <a
                  href="#/contact"
                  class="nav-link h6"
                  :class="{ navitemcolor: isActive }"
                  >{{ $t("nav.contact") }}
                </a>
              </li>
              <li class="nav-item">
                <a
                  href="#/privacy"
                  class="nav-link h6"
                  :class="{ navitemcolor: isActive }"
                  >{{ $t("nav.privacy") }}
                </a>
              </li>
            </ul>
            <a
              class="btn h4"
              href="#/login"
              :style="{ color: color }"
              id="signin"
              >{{ $t("nav.signIn") }}</a
            >
            <a
              class="btn btn-primary ml-4 border-0"
              href="#/registerInfo"
              style="background-color:#ff6f00"
              >{{ $t("nav.getStarted") }}</a
            >

            <div class="dropdown ml-4">
              <button
                class="btn btn-primary dropdown-toggle border-0"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                style="background-color:#ff6f00"
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
                <a class="dropdown-item" href="#" @click="changeLanguage('ge')"
                  >Deutsche</a
                >
                <a class="dropdown-item" href="#" @click="changeLanguage('fr')"
                  >Französisch</a
                >
              </div>
            </div>
          </div>
        </nav>
      </div>
      <!---->
      <!-- <div class="col-md-2" v-show="lang === 'ge'"></div> -->
      <div class="col-md-9" v-if="lang === 'ge'">
        <nav
          class="navbar navbar-expand-lg navbar-light navbar-shrink"
          id="mainNav"
        >
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <ul class="navbar-nav ml-3">
              <li class="nav-item">
                <a
                  class="nav-link actived h6 "
                  href="#/home"
                  :style="{ color: color }"
                  >{{ $t("nav.home") }}
                  <span class="sr-only">(current)</span>
                </a>
              </li>
              <li class="nav-item">
                <a
                  :href="'#/home?maodian=about'"
                  class="nav-link h6"
                  :class="{ navitemcolor: isActive }"
                  @click="aboutUrlClick('#about')"
                  >{{ $t("nav.about") }}
                </a>
              </li>
              <li class="nav-item">
                <a
                  :href="'#/home?maodian=reviews'"
                  class="nav-link h6"
                  :class="{ navitemcolor: isActive }"
                  @click="reviewsUrlClick('#reviews')"
                  >{{ $t("nav.reviews") }}
                </a>
              </li>
              <li class="nav-item">
                <a
                  href="#/faq"
                  class="nav-link h6"
                  :class="{ navitemcolor: isActive }"
                  >{{ $t("nav.FAQ") }}
                </a>
              </li>
              <li class="nav-item">
                <a
                  href="#/contact"
                  class="nav-link h6"
                  :class="{ navitemcolor: isActive }"
                  >{{ $t("nav.contact") }}
                </a>
              </li>
              <li class="nav-item">
                <a
                  href="#/privacy"
                  class="nav-link h6"
                  :class="{ navitemcolor: isActive }"
                  >{{ $t("nav.privacy") }}
                </a>
              </li>
            </ul>
            <a
              class="btn h4"
              href="#/login"
              :style="{ color: color }"
              id="signin"
              >{{ $t("nav.signIn") }}</a
            >
            <a
              class="btn btn-primary ml-4 border-0"
              href="#/registerInfo"
              style="background-color:#ff6f00"
              >{{ $t("nav.getStarted") }}</a
            >

            <div class="dropdown ml-4">
              <button
                class="btn btn-primary dropdown-toggle border-0"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                style="background-color:#ff6f00"
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
                <a class="dropdown-item" href="#" @click="changeLanguage('ge')"
                  >Deutsche</a
                >
                <a class="dropdown-item" href="#" @click="changeLanguage('fr')"
                  >Französisch</a
                >
              </div>
            </div>
          </div>
        </nav>
      </div>
      <!--fr-->
      <div class="col-md-10" v-if="lang === 'fr'">
        <nav
          class="navbar navbar-expand-lg navbar-light navbar-shrink"
          id="mainNav"
        >
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <ul class="navbar-nav ml-3">
              <li class="nav-item">
                <a
                  class="nav-link actived h6"
                  href="#/home"
                  :style="{ color: color }"
                  >{{ $t("nav.home") }}
                  <span class="sr-only">(current)</span>
                </a>
              </li>
              <li class="nav-item">
                <a
                  :href="'#/home?maodian=about'"
                  class="nav-link h6"
                  :class="{ navitemcolor: isActive }"
                  @click="aboutUrlClick('#about')"
                  >{{ $t("nav.about") }}
                </a>
              </li>
              <li class="nav-item">
                <a
                  :href="'#/home?maodian=reviews'"
                  class="nav-link h6"
                  :class="{ navitemcolor: isActive }"
                  @click="reviewsUrlClick('#reviews')"
                  >{{ $t("nav.reviews") }}
                </a>
              </li>
              <li class="nav-item">
                <a
                  href="#/faq"
                  class="nav-link h6"
                  :class="{ navitemcolor: isActive }"
                  >{{ $t("nav.FAQ") }}
                </a>
              </li>
              <li class="nav-item">
                <a
                  href="#/contact"
                  class="nav-link h6"
                  :class="{ navitemcolor: isActive }"
                  >{{ $t("nav.contact") }}
                </a>
              </li>
              <li class="nav-item">
                <a
                  href="#/privacy"
                  class="nav-link h6"
                  :class="{ navitemcolor: isActive }"
                  >{{ $t("nav.privacy") }}
                </a>
              </li>
            </ul>
            <a
              class="btn h4"
              href="#/login"
              :style="{ color: color }"
              id="signin"
              >{{ $t("nav.signIn") }}</a
            >
            <a
              class="btn btn-primary ml-4 border-0"
              href="#/registerInfo"
              style="background-color:#ff6f00"
              >{{ $t("nav.getStarted") }}</a
            >

            <div class="dropdown ml-4">
              <button
                class="btn btn-primary dropdown-toggle border-0"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                style="background-color:#ff6f00"
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
                <a class="dropdown-item" href="#" @click="changeLanguage('ge')"
                  >Deutsche</a
                >
                <a class="dropdown-item" href="#" @click="changeLanguage('fr')"
                  >Französisch</a
                >
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
import { goAnchor, getQueryString } from "../utils/common.js";
export default {
  name: "Nav",
  inject: ["reload"],
  props: {
    color: {
      type: String,
      default: "#fff",
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
    return {
      lang: "",
    };
  },
  mounted() {
    let lang = localStorage.getItem("lang") || 'en';
    this.lang = lang;
  },
  computed: {
    navitemlist() {
      return [
        { name: this.$t("nav.about"), path: "#/home#about" },
        { name: this.$t("nav.reviews"), path: "#/home#reviews" },
        { name: this.$t("nav.FAQ"), path: "#/faq" },
        { name: this.$t("nav.contact"), path: "#/contact" },
        { name: this.$t("nav.privacy"), path: "#/privacy" },
      ];
    },
  },
  watch: {},
  methods: {
    signinClick() {
      //向父组件传递事件
      this.$emit("signClick");
    },
    /**更换语言事件 */
    changeLanguage(type) {
      this.$i18n.locale = type;
      localStorage.setItem("lang", type);
      // location.reload();
      // this.$forceUpdate();
      this.reload();
    },
    aboutUrlClick(selector) {
      this.$emit("aboutUrlClick", selector);
    },
    reviewsUrlClick(selector) {
      this.$emit("reviewsUrlClick", selector);
    },
  },

  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>
<style lang="less" scoped>
/**导入nav配置样式 */
// @import '../assets/less/nav.less';

.navbar {
  font-size: 0.875rem;
}
.borderBottom {
  background-color: #fff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
}
.nav-bg {
  background-color: #ffffff;
  transition: all 1s;
  animation: mymove 2s initial;
  transform-origin: 0 100% 0 scaleY(2);
}
@keyframes mymove {
  100% {
    height: 100px;
  }
  80% {
    height: 80px;
  }
}
.container-fluid {
  .navbar-brand {
    color: #fff;
  }
  .collapse {
    .navbar-nav {
      .nav-item {
        // width: 93px;
        a {
          color: #ffffff;
        }
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
        }
      }
    }
    .btn-outline-primary {
      width: 140px;
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
    .dropdown {
      margin-left: 3rem !important;
    }
  }
}
#signin {
  color: #fff;
  font-size: 18px;
}
</style>
