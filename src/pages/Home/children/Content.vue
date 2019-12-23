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
              :action="uploadImgURL"
              :multiple="false"
              :file-list="fileList"
              :on-error="handleError"
              :on-success="imgHandleSuccess"
              :on-change="changeUpload"
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

    <el-dialog
      title="文字识别"
      :visible.sync="centerDialogVisible"
      width="80%"
      @close="closeD"
      :show-close="false"
      custom-class="abow_dialog"
    >
      <span slot="title" class="dialog-header">hello</span>
      <div>
        <el-row :gutter="20">
          <el-col :span="12">
            <h4 class="demonstration">识别的图片</h4>
            <img :src="src" alt style="max-width:100%" />
          </el-col>
          <el-col :span="12">
            <div class="grid-content">
              <h4 class="demonstration">识别的结果</h4>
              <div v-html="recognition_result" class="bg-purple-light"></div>
            </div>
          </el-col>
        </el-row>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="centerDialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import { uploadImgURL, BLOG_URL, BASE_URL } from "common/constants";
import { getImgConvertWord, deleteOriginImg } from "network/home";
import hello from "./hello";
export default {
  components: {
    hello
  },
  data() {
    return {
      input3: "",
      centerDialogVisible: false,
      uploadImgURL,
      fileList: [],
      src: "",
      recognition_result: "",
      handleImgId: ""
    };
  },
  methods: {
    enterBlog() {
      window.location = BLOG_URL;
    },
    handleError() {
      console.error("上传失败");
      this.centerDialogVisible = true;
    },
    async imgHandleSuccess(res) {
      const { data } = res;
      const { id: imgUuid } = data;
      this.centerDialogVisible = true;
      this.handleImgId = imgUuid;
      const result = await getImgConvertWord(imgUuid);
      this.src = `${BASE_URL}${result.data.img_path}`;
      this.recognition_result = result.data.vector_words;
    },
    closeD() {
      this.src = "";
      this.recognition_result = "";
      deleteOriginImg(this.handleImgId);
      console.error("close!!!");
    },
    changeUpload(files, fileList) {
      console.log("Go: changeUpload -> files, fileList", files, fileList);
      this.fileList = fileList.slice(-1);
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
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
</style>
