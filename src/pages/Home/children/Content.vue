<template>
  <div>
    <div id="whatis" class="content-section-b" style="border-top: 0">
      <div class="container">
        <div class="col-md-6 col-md-offset-3 text-center wrap_title">
          <h2>这是什么?</h2>
          <p class="lead" style="margin-top:0">这是一个关于AI和GIS的地方</p>
        </div>

        <div class="row">
          <div class="col-sm-4 wow fadeInDown text-center">
            <img class="rotate" src="~assets/img/icon/tweet.svg" alt="Generic placeholder image" />
            <h3>语音识别</h3>
            <p class="lead">
              点击开始录音识别，
              <br />再次点击即可停止录音！
            </p>
            <el-input placeholder="点击话筒开始录音" v-model="input3" class="input-with-select">
              <el-button slot="append" icon="el-icon-mic"></el-button>
            </el-input>

            <!-- <p><a class="btn btn-embossed btn-primary view" role="button">View Details</a></p> -->
          </div>
          <!-- /.col-lg-4 -->

          <div class="col-sm-4 wow fadeInDown text-center">
            <img class="rotate" src="~assets/img/icon/picture.svg" alt="Generic placeholder image" />
            <h3>图像识别</h3>
            <el-upload
              class="upload-img-recognition"
              :accept="'image/*'"
              drag
              action="https://jsonplaceholder.typicode.com/posts/"
              :on-error="handleError"
            >
              <i class="el-icon-upload"></i>
              <div class="el-upload__text">
                <p>
                  <em>点击上传</em>图片或将图片拖到此处
                </p>
                <p>
                  或者截图复制后直接
                  <em>control+v</em>
                </p>
              </div>
            </el-upload>
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
            <el-button type="primary" icon="el-icon-s-custom" size="medium">快速登录</el-button>
            <!-- <p><a class="btn btn-embossed btn-primary view" role="button">View Details</a></p> -->
          </div>
          <!-- /.col-lg-4 -->
        </div>
        <!-- /.row -->

        <div class="row tworow">
          <div class="col-sm-4 wow fadeInDown text-center">
            <img class="rotate" src="~assets/img/icon/laptop.svg" alt="Generic placeholder image" />
            <h3>机器学习</h3>
            <p class="lead">
              Epsum factorial non deposit quid pro quo hic escorol. Olypian
              quarrels et gorilla congolium sic ad nauseum.
            </p>
            <!-- <p><a class="btn btn-embossed btn-primary view" role="button">View Details</a></p> -->
          </div>
          <!-- /.col-lg-4 -->

          <div class="col-sm-4 wow fadeInDown text-center">
            <img class="rotate" src="~assets/img/icon/map.svg" alt="Generic placeholder image" />
            <h3>地图</h3>
            <p class="lead">
              Epsum factorial non deposit quid pro quo hic escorol. Olypian
              quarrels et gorilla congolium sic ad nauseum.
            </p>
            <!-- <p><a class="btn btn-embossed btn-primary view" role="button">View Details</a></p> -->
          </div>
          <!-- /.col-lg-4 -->

          <div class="col-sm-4 wow fadeInDown text-center">
            <img class="rotate" src="~assets/img/icon/browser.svg" alt="Generic placeholder image" />
            <h3>图表转换</h3>点击上传含有表格的图片
            <p class="lead">
              <el-badge :value="1" class="item" type="primary">
                <el-button size="small" icon="el-icon-upload">上传图片</el-button>
              </el-badge>
            </p>
            <!-- <p><a class="btn btn-embossed btn-primary view" role="button">View Details</a></p> -->
          </div>
          <!-- /.col-lg-4 -->
        </div>
        <!-- /.row -->
      </div>
    </div>

    <!-- <div class="content-section-a">
      <div class="container">
        <div class="row">
          <div class="col-sm-6 pull-right wow fadeInRightBig">
            <img class="img-responsive" src="~assets/img/icon/doge.png" alt />
          </div>

          <div class="col-sm-6 wow fadeInLeftBig" data-animation-delay="200">
            <h3 class="section-heading">物体识别</h3>
            <p class="lead">
              A special thanks to Death to the Stock Photo for providing the
              photographs that you see in this template.
            </p>

            <ul class="descp lead2">
              <li>
                <i class="glyphicon glyphicon-signal"></i> Reliable and Secure
                Platform
              </li>
              <li>
                <i class="glyphicon glyphicon-refresh"></i> Everything is
                perfectly orgainized for future
              </li>
              <li>
                <i class="glyphicon glyphicon-headphones"></i> Attach large file
                easily
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>-->
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
                    </h2>>
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
export default {
  data() {
    return {
      input3: ""
    };
  },
  methods: {
    enterBlog() {
      window.location = "http://blog.aigisss.com";
    },
    handleError() {
      console.error("上传失败");

      this.$alert("这是一段内容", "标题名称", {
        confirmButtonText: "确定",
        callback: action => {
          this.$message({
            type: "info",
            message: `action: ${action}`
          });
        }
      });
    }
  }
};
</script>
<style scoped>
@import url("~assets/css/homeContent.css");
.enter-blog {
  color: #34495e;
  font-size: bold;
}
</style>
