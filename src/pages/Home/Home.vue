<template>
  <div style="height:100%;width:100%;">
    <Banner :nav="navList" :loginParams="loginParams" />
    <Content />
    <Source />
    <Contact />
    <Footer />
  </div>
</template>

<script>
import Banner from "./children/Banner";
import Content from "./children/Content";
import Source from "./children/Source";
import Contact from "./children/Contact";
import Footer from "./children/Footer";
import $ from "jquery";

window.$ = window.jquery = window.jQuery = $;

// import { WOW } from "wowjs";
// window.WOW = WOW;

import "common/libs/owl";
import "bootstrap";
import "stickUp/build/js/stickUp";
import "jquery-migrate/dist/jquery-migrate";
import "imports-loader?this=>window!common/libs/modernizr";
// import "magnific-popup";
import "common/libs/uiMorphingButton_inflow.js";
import homeInit from "common/libs/homeInit.js";

export default {
  mounted() {
    homeInit();
    // this.$message({
    //   dangerouslyUseHTMLString: true,
    //   message: `<strong>${this.news.show}</strong>`,
    //   duration: this.news.duration,
    //   showClose: true,
    //   type: this.news.type
    // });
  },
  data() {
    return {
      news: {
        show: `重要公告：目前已全面升级，欢迎浏览！！`,
        type: "warning",
        duration: 10000,
      },
      navList: [
        { title: "工具", to: "#whatis" },
        { title: "博客", to: "#blog" },
        { title: "资源", to: "#credits" },
        { title: "反馈", to: "#contact" },
        { title: "关于", to: "https://www.gishai.top/about" },
      ],
      loginParams: {
        title: "登录",
        to: "https://www.gishai.top/view/#/login",
      },
    };
  },
  methods: {},
  components: {
    Banner,
    Content,
    Source,
    Contact,
    Footer,
  },
};
</script>

<style scoped>
@import url("~assets/css/bootstrap.min.css");
@import url("~assets/font-awesome/css/font-awesome.min.css");
@import url("~assets/css/general.css");
@import url("~assets/css/custom.css");
@import url("~assets/css/owl.carousel.css");
@import url("~assets/css/owl.theme.css");
@import url("~assets/css/style.css");
@import url("~assets/css/animate.css");
/* @import url("~assets/css/magnific-popup.css"); */
</style>
