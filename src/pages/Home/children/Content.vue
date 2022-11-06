<template>
  <div>
    <div id="whatis" class="content-section-b" style="border-top: 0">
      <div class="container">
        <div class="col-md-6 col-md-offset-3 text-center wrap_title">
          <h2>工具</h2>
          <p class="lead" style="margin-top: 0">一些便捷的小工具</p>
        </div>

        <div class="row">
          <div class="col-sm-4 wow fadeInDown text-center">
            <img
              class="rotate"
              src="~assets/img/icon/laptop.svg"
              alt="Generic placeholder image"
            />
            <h3>在线GLSL</h3>
            <p class="lead">有一些GLSL例子,并且支持在线编辑并看效果!!</p>
            <a-button type="primary" icon="global" @click="enterGLSL"
              >试一试</a-button
            >
            <!-- <p><a class="btn btn-embossed btn-primary view" role="button">View Details</a></p> -->
          </div>
          <!-- /.col-lg-4 -->

          <div class="col-sm-4 wow fadeInDown text-center">
            <img
              class="rotate"
              src="~assets/img/icon/picture.svg"
              alt="Generic placeholder image"
            />
            <h3>图像识别</h3>
            <ImageToWord></ImageToWord>
            <!-- <p><a class="btn btn-embossed btn-primary view" role="button">View Details</a></p> -->
          </div>
          <!-- /.col-lg-4 -->

          <div class="col-sm-4 wow fadeInDown text-center">
            <img
              class="rotate"
              src="~assets/img/icon/retina.svg"
              alt="Generic placeholder image"
            />
            <h3>人脸识别</h3>
            <p>
              本功能针对那些账号与人脸绑定的用户，
              <br />再次访问本站可以快速登录
            </p>
            <a-button type="primary" icon="user">快速登录</a-button>
            <!-- <p><a class="btn btn-embossed btn-primary view" role="button">View Details</a></p> -->
          </div>
          <!-- /.col-lg-4 -->
        </div>
        <!-- /.row -->

        <div class="row tworow">
          <!-- /.col-lg-4 -->

          <div class="col-sm-4 wow fadeInDown text-center">
            <img
              class="rotate"
              src="~assets/img/icon/browser.svg"
              alt="Generic placeholder image"
            />
            <h3>图表转换</h3>
            点击上传含有表格的图片
            <p class="lead">
              <ImageToExcel></ImageToExcel>
            </p>
            <!-- <p><a class="btn btn-embossed btn-primary view" role="button">View Details</a></p> -->
          </div>

          <div class="col-sm-4 wow fadeInDown text-center">
            <img
              class="rotate"
              src="~assets/img/icon/map.svg"
              alt="Generic placeholder image"
            />
            <h3>地图</h3>
            Map Show
            <p class="lead">
              <a-button type="primary" icon="global" @click="enterMap"
                >瞧一瞧</a-button
              >
            </p>
            <!-- <p><a class="btn btn-embossed btn-primary view" role="button">View Details</a></p> -->
          </div>
          <!-- /.col-lg-4 -->

          <div class="col-sm-4 wow fadeInDown text-center">
            <img
              class="rotate"
              src="~assets/img/icon/tweet.svg"
              alt="Generic placeholder image"
            />
            <h3>待定</h3>
            <a
              target="_blank"
              href="http://bj.bcebos.com/v1/ai-edgecloud/F0D2BA5B8C1445A4953E53C685872C32.xls?authorization=bce-auth-v1%2Fd9272b4e9a38476db4470c2714e1339a%2F2021-05-25T06%3A41%3A26Z%2F172800%2F%2Fd0436d22696d20fdef7163a5f5fa0716854d8362293107a4869e6ea1cefd50f9"
              >ddddd</a
            >
            <p class="lead">功能正在开发中，敬请期待！</p>
            <a-button id="excelDownload">下载</a-button>
          </div>
          <!-- /.col-lg-4 -->
        </div>
        <!-- /.row -->
      </div>
    </div>

    <div class="content-section-c" id="blog">
      <div class="container">
        <div class="row">
          <div class="col-md-6 col-md-offset-3 text-center wrap_title white">
            <h2>博客</h2>
            <p class="lead" style="margin-top: 0">
              源于“Web Log(网络日志)”，后来缩写为Blog
            </p>
          </div>
          <div class="mockup-content" @click="enterBlog">
            <div
              class="morph-button wow pulse morph-button-inflow morph-button-inflow-1"
            >
              <button type="button ">
                <span>Subscribe to our Newsletter</span>
              </button>
              <div class="morph-content">
                <div>
                  <div class="content-style-form content-style-form-4">
                    <h2 class="morph-clone">
                      <span class="enter-blog">去我的博客瞧瞧！！！</span>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ImageToWord from "components/content/ImageToWord";
import ImageToExcel from "components/content/ImageToExcel";
import {
  uploadImgURL,
  BLOG_URL,
  MAP_URL,
  BASE_URL,
  GLSL_URL,
} from "common/constants";
import { getImgConvertWord, deleteOriginImg } from "network/home";

import download from "downloadjs";
export default {
  components: {
    ImageToWord,
    ImageToExcel,
  },
  data() {
    return {
      input3: "",
      fileList2: [],
    };
  },
  methods: {
    enterBlog() {
      window.location = BLOG_URL;
    },
    enterGLSL() {
      window.location = GLSL_URL;
    },
    enterMap() {
      window.location = MAP_URL;
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
  },
  mounted() {

    document.getElementById("excelDownload").onclick = (e) => {
    var newWindow = window.open();

      let url =
        "http://bj.bcebos.com/v1/ai-edgecloud/F0D2BA5B8C1445A4953E53C685872C32.xls?authorization=bce-auth-v1%2Fd9272b4e9a38476db4470c2714e1339a%2F2021-05-25T06%3A41%3A26Z%2F172800%2F%2Fd0436d22696d20fdef7163a5f5fa0716854d8362293107a4869e6ea1cefd50f9";
      // window.open(url, "_blank","alwaysRaised");
      setTimeout(() => {
        newWindow.location.href = url;
      }, 1000);
    };
  },
};
</script>
<style scoped>
.enter-blog {
  color: #34495e;
  font-size: bold;
}
.el-upload__tip {
  color: #f56c6c;
}
</style>
