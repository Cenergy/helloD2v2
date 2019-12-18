<template>
  <div style="height:100%;width:100%;">
    <Banner />
    <Content />
    <Source />
    <Contact />
    <Footer />
  </div>
</template>

<script>
import Banner from '../../components/Banner/Banner.vue';
import Content from '../../components/Content/Content.vue';
import Source from '../../components/Source/Source.vue';
import Contact from '../../components/Contact/Contact.vue';
import Footer from '../../components/Footer/Footer.vue';
import $ from 'jquery';

window.$ = window.jquery = window.jQuery = $;
import * as hello from 'bootstrap';
console.log('Go: hello', hello);
import { WOW } from 'wowjs';
window.WOW = WOW;
// import { owlCarousel } from 'owlcarousel';
console.log('Go: owlCarousel', owlCarousel);
console.log('Go: WoW', WOW);
export default {
  mounted() {
    this.loadJsScript('./static/js/bootstrap.js');
    this.loadJsScript('./static/js/owl.carousel.js');
    this.loadJsScript('./static/js/script.js');
    this.loadJsScript('./static/js/stickUp.min.js');
    // 测试

    this.loadJsScript('./static/js/modernizr-2.6.2.min.js');
    this.loadJsScript('./static/js/jquery.corner.js');
    this.loadJsScript('./static/js/wow.min.js');

    this.loadJsScript('./static/js/classie.js');
    this.loadJsScript('./static/js/uiMorphingButton_inflow.js');
    this.loadJsScript('./static/js/jquery.magnific-popup.js');
    this.loadJsScript('./static/js/home.js');
  },
  methods: {
    loadJsScript(url) {
      var script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = url;
      const head = document.getElementsByTagName('head')[0];
      head.appendChild(script);
    },
    loadCssStyle(cssText) {
      const style = document.createElement('style');
      style.type = 'text/css';
      style.rel = 'stylesheet';
      const head = document.getElementsByTagName('head')[0];
      style.innerHTML = cssText;
      head.appendChild(style);
    },
    loadScriptString(code) {
      var script = document.createElement('script');
      script.type = 'text/javascript';
      try {
        script.appendChild(document.createTextNode(code));
      } catch (ex) {
        script.text = code;
      }
      const head = document.getElementsByTagName('head')[0];
      head.appendChild(script);
    },
  },
  components: {
    Banner,
    Content,
    Source,
    Contact,
    Footer,
  },
};
</script>

<style>
</style>