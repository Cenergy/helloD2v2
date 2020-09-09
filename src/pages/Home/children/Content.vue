<template>
  <div>
    <div id="whatis" class="content-section-b" style="border-top: 0">
      <div class="container">
        <div class="col-md-6 col-md-offset-3 text-center wrap_title">
          <h2>工具</h2>
          <p class="lead" style="margin-top:0">一些便捷的小工具</p>
        </div>

        <div class="row">
          <div class="col-sm-4 wow fadeInDown text-center">
            <img class="rotate" src="~assets/img/icon/laptop.svg" alt="Generic placeholder image" />
            <h3>GLSL在线调试</h3>
            <p class="lead">
              有一些GLSL例子,并且支持在线调试!!
               <a-button type="primary" icon="global"  @click="enterGLSL">试一试</a-button>
            </p>
            <!-- <p><a class="btn btn-embossed btn-primary view" role="button">View Details</a></p> -->
          </div>
          <!-- /.col-lg-4 -->

          <div class="col-sm-4 wow fadeInDown text-center">
            <img class="rotate" src="~assets/img/icon/picture.svg" alt="Generic placeholder image" />
            <h3>图像识别</h3>
            <ImageToWord></ImageToWord>
            <!-- <p><a class="btn btn-embossed btn-primary view" role="button">View Details</a></p> -->
          </div>
          <!-- /.col-lg-4 -->

          <div class="col-sm-4 wow fadeInDown text-center">
            <img class="rotate" src="~assets/img/icon/retina.svg" alt="Generic placeholder image" />
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
            <img class="rotate" src="~assets/img/icon/browser.svg" alt="Generic placeholder image" />
            <h3>图表转换</h3>点击上传含有表格的图片
            <p class="lead">
              <ImageToExcel></ImageToExcel>
            </p>
            <!-- <p><a class="btn btn-embossed btn-primary view" role="button">View Details</a></p> -->
          </div>

          <div class="col-sm-4 wow fadeInDown text-center">
            <img class="rotate" src="~assets/img/icon/map.svg" alt="Generic placeholder image" />
            <h3>地图</h3>Map Show
            <p class="lead">
              <a-button type="primary" icon="global"  @click="enterMap">瞧一瞧</a-button>
            </p>
            <!-- <p><a class="btn btn-embossed btn-primary view" role="button">View Details</a></p> -->
          </div>
          <!-- /.col-lg-4 -->

          <div class="col-sm-4 wow fadeInDown text-center">
            <img class="rotate" src="~assets/img/icon/tweet.svg" alt="Generic placeholder image" />
            <h3>待定</h3>
            <p class="lead">功能正在开发中，敬请期待！</p>
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
            <p class="lead" style="margin-top:0">源于“Web Log(网络日志)”，后来缩写为Blog</p>
          </div>
          <div class="mockup-content" @click="enterBlog">
            <div class="morph-button wow pulse morph-button-inflow morph-button-inflow-1">
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
import { uploadImgURL, BLOG_URL, MAP_URL, BASE_URL,GLSL_URL } from "common/constants";
import { getImgConvertWord, deleteOriginImg } from "network/home";
export default {
  components: {
    ImageToWord,
    ImageToExcel
  },
  data() {
    return {
      input3: "",
      fileList2: []
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
    }
  }
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
