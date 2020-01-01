<!--  -->
<template>
  <div>
    <div class="container projects">
      <div class="projects-header">
        <div class="row">
          <div class="input-group">
            <input type="text" class="form-control" placeholder="输入资源名" v-model="key_word" />
            <span class="input-group-btn">
              <el-button
                type="primary"
                @keydown.enter="searchSource"
                @click="searchSource"
                plain
              >搜索一下</el-button>
              <!-- <button class="btn btn-default" type="button" id="search">搜索一下</button> -->
            </span>
          </div>
          <!-- /input-group -->
        </div>
        <!-- /.row -->
      </div>

      <div class="row" id="sourcesList">
        <div class="col-sm-6 col-md-4 col-lg-3" v-for="item in sourcesList" :key="item.id">
          <div class="thumbnail">
            <a :href="item.sourceurl" :title="item.sourcename" target="_blank">
              <div style="background:green; width:100%;height:150px;">
                <el-image
                  :fit="'cover'"
                  :src="sourcesBaseURL+item.source_img"
                  lazy
                  alt="AIGIS资源补给"
                  style="width: 100%; height: 100%"
                ></el-image>
              </div>
            </a>
            <div class="caption">
              <h4 style="color:blue">{{item.sourcename}}</h4>

              <b>
                <a target="_blank" class="layui-btn layui-btn-sm" :href="item.sourceurl">
                  <i class="layui-icon layui-icon-download-circle"></i>下载地址
                </a>
              </b>
              <br />
              <br />
              <p>{{item.sourcename}}的提取码是{{item.code}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footer class="footer">
      <div class="container">
        <div class="row footer-top">
          <div class="col-md-6 col-lg-6">
            <p>致力于提供GIS和AI技术文档和辅助开发工具！</p>
            <p>申明：如有侵权，请立即联系作者删除。673598118@qq.com</p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
<script>
export default {
  name: "SourcesList",
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      key_word: ""
    };
  },
  props: {
    sourcesList: {
      type: Array,
      default() {
        return [];
      }
    },
    sourcesBaseURL: {
      type: String,
      default() {
        return "";
      }
    }
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    searchSource() {
      if (this.key_word === "") {
        this.$message({
          message: "不能空空如也！",
          type: "error"
        });
      }
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    console.log("Go: mounted -> this.sourcesList", this.sourcesList);
    // this.append_html("#sourcesList", this.sourcesList);
  },
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {
    console.log("Go: destroyed -> destroyed", "destroyed");
  }, //生命周期 - 销毁完成
  activated() {
    console.log("Go: destroyed -> destroyed", "activated");
  } //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style  scoped>
@import url("~assets/css/bootstrap.min.css");
/* @import url("~assets/css/sourcesList.css"); */

.el-button {
  border-radius: 0px !important;
}
footer {
  background: #fff !important;
}

@media (min-width: 768px) {
  .navbar {
    min-height: 40px;
  }
  .navbar-nav > li > a {
    font-size: 14px;
    padding-top: 11px;
    padding-bottom: 11px;
  }
  .navbar-brand {
    padding-top: 0;
    padding-bottom: 0;
    line-height: 42px;
    height: 42px;
  }
}
.jumbotron {
  position: relative;
  padding: 40px 0;
  color: #fff;
  text-align: center;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.4), 0 0 30px rgba(0, 0, 0, 0.075);
  background: #020031;
  background: -webkit-gradient(
    linear,
    left bottom,
    right top,
    color-stop(0, #020031),
    color-stop(100%, #6d3353)
  );
  background: -webkit-linear-gradient(45deg, #020031 0, #6d3353 100%);
  background: -o-linear-gradient(45deg, #020031 0, #6d3353 100%);
  background: linear-gradient(45deg, #020031 0, #6d3353 100%);
  -webkit-box-shadow: inset 0 3px 7px rgba(0, 0, 0, 0.2),
    inset 0 -3px 7px rgba(0, 0, 0, 0.2);
  box-shadow: inset 0 3px 7px rgba(0, 0, 0, 0.2),
    inset 0 -3px 7px rgba(0, 0, 0, 0.2);
}
.jumbotron a {
  color: #fff;
  color: rgba(255, 255, 255, 0.5);
  -webkit-transition: all 0.2s ease-in-out;
  -o-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
}
.jumbotron aa:hover {
  color: #fff;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.25);
}
.jumbotron .container {
  position: relative;
  z-index: 2;
}
.jumbotron:after {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  /* background: url(../img/bs-docs-masthead-pattern.png) repeat center center; */
  opacity: 0.4;
}
@media only screen and (-webkit-min-device-pixel-ratio: 2),
  only screen and (min--moz-device-pixel-ratio: 2),
  only screen and (-o-min-device-pixel-ratio: 2/1) {
  .jumbotron:after {
    -webkit-background-size: 150px 150px;
    background-size: 150px 150px;
  }
}
.masthead {
  padding: 60px 0 80px;
  margin-bottom: 0;
  color: #fff;
}
@media screen and (min-width: 768px) {
  .masthead {
    padding: 90px 0 110px;
  }
}
.masthead h1 {
  font-size: 60px;
  line-height: 1;
  letter-spacing: -2px;
  font-weight: 700;
}
@media screen and (min-width: 768px) {
  .masthead h1 {
    font-size: 90px;
  }
}
@media screen and (min-width: 992px) {
  .masthead h1 {
    font-size: 100px;
  }
}
.masthead h2 {
  font-size: 18px;
  font-weight: 200;
  line-height: 1.25;
}
@media screen and (min-width: 768px) {
  .masthead h2 {
    font-size: 24px;
  }
}
@media screen and (min-width: 992px) {
  .masthead h2 {
    font-size: 30px;
  }
}
.masthead p {
  font-size: 40px;
  font-weight: 200;
  line-height: 1.25;
}
.masthead .masthead-button-links {
  margin-top: 30px;
}
.masthead-links {
  margin: 0;
  padding: 0;
  list-style: none;
}
.masthead-links li {
  display: inline;
  padding: 0 10px;
  color: rgba(255, 255, 255, 0.25);
}
.masthead-links li a:hover {
  color: #fff;
}
.subhead {
  text-align: center;
  border-bottom: 1px solid #ddd;
}
@media screen and (min-width: 768px) {
  .subhead {
    text-align: left;
  }
}
.subhead h1 {
  font-size: 60px;
}
.subhead p {
  margin-bottom: 20px;
}
@media screen and (min-width: 768px) {
  .subhead p {
    text-align: left;
  }
}
.btn-primary.btn-shadow {
  -webkit-box-shadow: inset 0 -4px 0 #2a6496;
  box-shadow: inset 0 -4px 0 #2a6496;
  border: 0;
  color: #fff;
}
.btn-lg.btn-shadow {
  padding: 13px 35px 17px;
}
.bc-social {
  padding: 15px 0;
  text-align: center;
  background-color: #f5f5f5;
  border-top: 1px solid #fff;
  border-bottom: 1px solid #ddd;
}
.bc-social-buttons {
  margin-left: 0;
  margin-bottom: 0;
  padding-left: 0;
  list-style: none;
}
.bc-social-buttons li {
  display: inline-block;
  line-height: 1;
  color: #555;
}
.bc-social-buttons li .fa {
  font-size: 18px;
  margin-right: 3px;
}
.bc-social-buttons li .fa-weibo {
  font-size: 20px;
}
.bc-social-buttons li a {
  color: #555;
}
.bc-social-buttons li.social-qq:hover {
  color: #428bca;
}
.bc-social-buttons li.social-weibo a:hover {
  color: #d9534f;
}
.bc-social-buttons > li + li:before {
  padding: 0 10px;
  color: #ccc;
  content: "|";
}
.projects .thumbnail {
  display: block;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  max-width: 310px;
  margin-bottom: 30px;
  border-radius: 0;
}
.projects .thumbnail .caption {
  height: 200px;
  overflow-y: hidden;
  color: #555;
}
.projects .thumbnail .caption a:focus,
.projects .thumbnail .caption a:hover {
  text-decoration: none;
}
.projects .thumbnail img {
  max-width: 100%;
  height: auto;
}
.projects-header {
  width: 60%;
  text-align: center;
  margin: 60px 0 10px;
  font-weight: 200;
  margin-bottom: 40px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
.projects-header h2 {
  font-size: 30px;
  letter-spacing: -1px;
}
@media screen and (min-width: 768px) {
  .projects-header h2 {
    font-size: 42px;
  }
}
.nav-sub {
  padding-top: 10px;
  padding-bottom: 10px;
  margin-top: 70px;
  border-top: 1px solid #eee;
}
.footer {
  color: #777;
  padding: 30px 0;
  border-top: 1px solid #e5e5e5;
  margin-top: 70px;
}
.footer a {
  color: #777;
}
.footer-top .about > div {
  height: 110px;
  margin-bottom: 10px;
}
.footer-top .about > div h4 {
  color: #563d7c;
  font-size: 16px;
}
.footer-bottom {
  font-size: 13px;
}
.footer-bottom ul > li {
  padding: 0;
}
.footer-bottom ul > li + li:before {
  padding: 0 10px;
  color: #ccc;
  content: "|";
}
#scrollUp {
  background-color: #777;
  color: #eee;
  font-size: 40px;
  line-height: 1;
  text-align: center;
  text-decoration: none;
  bottom: 70px;
  right: 20px;
  overflow: hidden;
  width: 46px;
  height: 46px;
  border: none;
  opacity: 0.8;
}
#scrollUp:hover {
  background-color: #333;
}
@media screen and (min-width: 992px) {
  #scrollUp {
    bottom: 100px;
  }
}
.bc-sidebar {
  margin-top: 30px;
}
.bc-sidebar > ul > li > a {
  display: block;
  margin: 0 0 -1px;
  padding: 8px 14px;
  border: 1px solid #e5e5e5;
}
.excerpt-list {
  margin-top: 60px;
}
.excerpt {
  min-height: 120px;
  border: 1px solid #eee;
  position: relative;
  margin-bottom: 10px;
  padding: 20px 20px 20px 24px;
}
.excerpt-title {
  font-size: 24px;
  margin-top: 0;
}
.excerpt-title a {
  color: #555;
}
.excerpt-title a:active,
.excerpt-title a:hover {
  color: #3071a9;
}
.excerpt-meta {
  position: absolute;
  bottom: 12px;
}
.excerpt-tags {
  color: #777;
}
.excerpt-tags .glyphicon {
  position: relative;
  top: 2px;
  color: #eee;
}
.excerpt-tags a,
.excerpt-tags span {
  color: #777;
  font-size: 12px;
}
.post {
  position: relative;
  margin-top: 60px;
  max-width: 680px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
.post-header h1,
.post-header h2 {
  font-size: 32px;
  margin: 0 0 45px 0;
  position: relative;
  text-align: center;
}
@media (min-width: 768px) {
  .post-header h1,
  .post-header h2 {
    font-size: 36px;
  }
}
.post-header h1:after,
.post-header h2:after {
  border-top: 1px solid #e5e5e5;
  bottom: 0;
  content: "";
  left: 50%;
  margin: 0 0 0 -30%;
  position: absolute;
  width: 60%;
}
.post-header h1 a,
.post-header h2 a {
  color: #363636;
  display: block;
  padding: 65px 0 20px;
  position: relative;
}
.post-header h1 a:hover,
.post-header h2 a:hover {
  color: #428bca;
}
.post-header h1 a:before,
.post-header h2 a:before {
  border-top: 1px solid #e5e5e5;
  bottom: -4px;
  content: "";
  left: 50%;
  margin: 0 0 0 -27%;
  position: absolute;
  width: 60%;
}
.post-header h1 a:after,
.post-header h2 a:after {
  border-top: 1px solid #e5e5e5;
  bottom: -3px;
  content: "";
  left: 50%;
  margin: 0 0 0 -28%;
  position: absolute;
  width: 60%;
}
@media (min-width: 768px) {
  .post-header h1 a,
  .post-header h2 a {
    padding-left: 65px;
    padding-right: 65px;
  }
}
.post-content {
  font-size: 16px;
  line-height: 1.8;
  padding-top: 20px;
  padding-bottom: 20px;
}
.post-content blockquote,
.post-content dl,
.post-content form,
.post-content hr,
.post-content ol,
.post-content p,
.post-content pre,
.post-content table,
.post-content ul {
  margin-bottom: 1.8em;
}
.post-content blockquote {
  font-size: 16px;
}
.post-content pre {
  margin-top: -20px;
}
.post-content li > p {
  margin-bottom: 5px;
}
.post-content embed,
.post-content iframe,
.post-content img,
.post-content video {
  max-width: 100%;
}
.post-content img {
  height: auto;
}
article.page {
  margin-top: 0;
  max-width: none;
}
article.page .post-content {
  padding-top: 0;
}
article.page .post-content h2 {
  font-size: 36px;
  padding-bottom: 9px;
  margin: 40px 0 20px;
  border-bottom: 1px solid #eee;
}
.reddot:after {
  content: "";
  color: #fff;
  position: absolute;
  top: 8px;
  right: 5px;
  right: 0;
  padding: 2px;
  z-index: 9999999;
  background: #d9534f;
  border-radius: 50%;
  font-size: 12px;
  line-height: 1;
  border: 1px solid #d43f3a;
}
</style>