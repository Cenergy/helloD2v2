<template>
  <div style="height:100%;width:100%;">
    <div class="intro-header">
      <div class="col-xs-12 text-center abcen1">
        <h1 class="h1_home wow fadeIn" data-wow-delay="0.4s">AIGISSS</h1>
        <h4 class="h4_home wow fadeIn" data-wow-delay="0.5s">爱即是诗</h4>
        <h3 class="h3_home wow fadeIn" data-wow-delay="0.6s">AI & GIS</h3>
        <!-- <ul class="list-inline intro-social-buttons">
            <li><a href="https://twitter.com/galantiandrea" class="btn  btn-lg mybutton_cyano wow fadeIn" data-wow-delay="0.8s"><span class="network-name">Twitter</span></a>
            </li>
            <li id="download" ><a href="#downloadlink" class="btn  btn-lg mybutton_standard wow swing wow fadeIn" data-wow-delay="1.2s"><span class="network-name">Free Download</span></a>
            </li>
        </ul>-->
      </div>
      <!-- /.container -->
      <div class="col-xs-12 text-center abcen wow fadeIn">
        <div class="button_down">
          <a class="imgcircle wow bounceInUp" data-wow-duration="1.5s" href="#whatis">
            <img class="img_scroll" src="~assets/img/icon/circle.png" alt />
          </a>
        </div>
      </div>
    </div>

    <!-- NavBar-->
    <nav class="navbar-default" role="navigation">
      <div class="container">
        <div class="navbar-header">
          <button
            type="button"
            class="navbar-toggle"
            data-toggle="collapse"
            data-target=".navbar-ex1-collapse"
          >
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#whatis">AIGISSS爱即是诗</a>
        </div>

        <div class="collapse navbar-collapse navbar-right navbar-ex1-collapse">
          <ul class="nav navbar-nav">
            <li class="menuItem" :key="index" v-for="(item, index) in nav">
              <a @click.prevent="flyTo(item.to)">{{item.title}}</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  props: {
    nav: {
      type: Array,
      default() {
        return [{ title: "这是啥", to: "#whatis" }];
      }
    }
  },
  methods: {
    flyTo(path) {
      if (path.includes("#")) {
        document.querySelector(path).scrollIntoView({
          behavior: "smooth"
        });
      } else if (path.includes("/")) {
        this.$router.push(path);
      } else {
        window.location = "/" + path;
      }
    }
  }
};
</script>

<style scoped>
.menuItem a {
  cursor: pointer;
}
</style>
