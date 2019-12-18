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
            <img class="img_scroll" src="./img/circle.png" alt />
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
          <a class="navbar-brand" href="#home">AIGISSS爱即是诗</a>
        </div>

        <div class="collapse navbar-collapse navbar-right navbar-ex1-collapse">
          <ul class="nav navbar-nav">
            <li class="menuItem">
              <a href="#whatis">这是什么?</a>
            </li>
            <li class="menuItem">
              <a href="#useit">作品</a>
            </li>
            <li class="menuItem">
              <a href="#credits">资源</a>
            </li>
            <li class="menuItem">
              <a href="#contact">反馈</a>
            </li>
            <li class="menuItem">
              <router-link to="/about">关于</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: 'hahah',
    };
  },
};
</script>

<style scoped>
@import url('../../common/css/bootstrap.min.css');
@import url('../../common/font-awesome/css/font-awesome.min.css');
@import url('../../common/css/general.css');
@import url('../../common/css/custom.css');
@import url('../../common/css/owl.carousel.css');
@import url('../../common/css/owl.theme.css');
@import url('../../common/css/style.css');
@import url('../../common/css/animate.css');
@import url('../../common/css/magnific-popup.css');
</style>
