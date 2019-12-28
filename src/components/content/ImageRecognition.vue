<!--  -->
<template>
  <div>
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
            <h4 class="demonstration textCenter">识别的图片</h4>
            <img :src="src" alt style="max-width:100%" />
          </el-col>
          <el-col :span="12">
            <div class="grid-content">
              <h4 class="demonstration textCenter">识别的结果</h4>
              <div v-html="recognition_result" class="bg-purple-light textLeft"></div>
            </div>
          </el-col>
        </el-row>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button
          type="primary"
          v-clipboard:copy="recognition_result"
          v-clipboard:success="onCopy"
          v-clipboard:error="onError"
        >复制</el-button>
        <el-button type="primary" @click="centerDialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { uploadImgURL, BLOG_URL, BASE_URL } from "common/constants";
import { getImgConvertWord, deleteOriginImg } from "network/home";
export default {
  name: "ImageRecognition",
  data() {
    return {
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
      this.$notify.error({
        title: "错误",
        message: "上传失败！！",
        type: "success",
        duration: 3000
      });
    },
    async imgHandleSuccess(res) {
      const { data } = res;
      const { id: imgUuid } = data;
      this.centerDialogVisible = true;
      this.handleImgId = imgUuid;
      const result = await getImgConvertWord(imgUuid);
      console.log("Go: imgHandleSuccess -> result", result);
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
    },
    onCopy(e) {
      console.log("Go: onCopy -> e", e);
      // 复制成功

      this.centerDialogVisible = false;
      this.$copyText($(e.text).text());
      this.$notify({
        title: "成功",
        message: "复制成功！",
        type: "success",
        duration: 3000
      });
    },
    onError(e) {
      // 复制失败
      this.$message({
        message: "复制失败！",
        type: "error"
      });
    }
  }
};
</script>
<style scoped>
@import url("~assets/css/homeContent.css");
.image_reg {
  text-align: left;
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
.textLeft {
  text-align: left;
}
.textCenter {
  text-align: center;
}
</style>
