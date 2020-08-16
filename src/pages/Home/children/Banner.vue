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
          <a
            class="imgcircle wow bounceInUp"
            data-wow-duration="1.5s"
            href="#whatis"
          >
            <img class="img_scroll" src="~assets/img/icon/circle.png" alt />
          </a>
        </div>
      </div>
      <img
        src="/static/img/intro/st_min.jpg"
        ref="bannerImg"
        alt
        style="width:100%;height:100%; object-fit:cover"
      />
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
              <a @click.prevent="flyTo(item.to)">{{ item.title }}</a>
            </li>
            <li class="menuItem" v-if="showLogin">
              <a @click.prevent="loginTo()">{{ loginParams.title }}</a>
            </li>
            <li class="menuItem" v-else>
              <a href="javascript:void(0)">
                <HeaderAvatar
                  class="header-item"
                  :userInfo="userInfo"
                  @logout="logout"
                ></HeaderAvatar>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import HeaderAvatar from "components/content/HeaderAvatar";
export default {
  data() {
    return {
      userInfo: null,
      showLogin: true,
    };
  },
  props: {
    nav: {
      type: Array,
      default() {
        return [{ title: "这是啥", to: "#whatis" }];
      },
    },
    loginParams: {
      type: Object,
      default() {
        return {
          title: "登录",
          to: "https://www.aigisss.com/view/#/login",
        };
      },
    },
  },
  components: {
    HeaderAvatar,
  },
  methods: {
    flyTo(path) {
      if (path.includes("#") && !path.includes(":")) {
        document.querySelector(path).scrollIntoView({
          behavior: "smooth",
        });
      } else if (path.includes(":")) {
        window.location = path;
        return;
      } else if (path.includes("/")) {
        this.$router.push(path);
        return;
      } else {
        window.location = "/" + path;
        return;
      }
    },
    loginTo() {
      const path = this.loginParams.to;
      const { origin } = window;
      const path2 = `${path}?to=${origin}`;
      window.location = path2;
    },
    logout(data) {
      this.showLogin = true;
      this.userInfo = null;
      if (localStorage.getItem("accessToken")) {
        localStorage.removeItem("accessToken");
        this.$router.push("/").catch(() => {});
      }
      localStorage.removeItem("userInfo");
    },
  },
  mounted() {
    const bannerImg = this.$refs.bannerImg;
    const image = new Image();
    const bannerImgPath = "/static/img/intro/st.png";
    image.onload = () => {
      $(bannerImg).attr("src", bannerImgPath);
    };
    image.src = bannerImgPath;

    const userInfo = JSON.parse(localStorage.getItem("userInfo") || "{}");
    this.userInfo = userInfo;
    if (Object.keys(userInfo).length) this.showLogin = false;
  },
};
</script>

<style scoped>
.menuItem a {
  cursor: pointer;
}
.navbar-default .navbar-nav > li > a {
  display: flex;
  justify-content: center;
}
</style>
