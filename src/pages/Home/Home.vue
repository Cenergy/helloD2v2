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
import Banner from "../../components/Banner/Banner.vue";
import Content from "../../components/Content/Content.vue";
import Source from "../../components/Source/Source.vue";
import Contact from "../../components/Contact/Contact.vue";
import Footer from "../../components/Footer/Footer.vue";
import $ from "jquery";

window.$ = window.jquery = window.jQuery = $;

import { WOW } from "wowjs";
window.WOW = WOW;

import "common/js/owl";
import "bootstrap";
import "stickUp/build/js/stickUp";
import "classie";
import "jquery-migrate/dist/jquery-migrate";
import "imports-loader?this=>window!common/js/modernizr";
import "magnific-popup";
import "common/js/uiMorphingButton_inflow.js";
import "common/js/script.js";

export default {
  mounted() {
    jQuery(function($) {
      $(document).ready(function() {
        $(".navbar-default").stickUp();
      });
    });
    new WOW().init();
  },
  methods: {},
  components: {
    Banner,
    Content,
    Source,
    Contact,
    Footer
  }
};
</script>

<style></style>
