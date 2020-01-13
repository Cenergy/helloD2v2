<!--  -->
<template>
  <div>
    <el-upload
      class="upload-excel"
      :action="uploadImgURL"
      :file-list="fileList"
      :multiple="false"
      :on-error="handleError"
      :on-success="imgHandleSuccess"
      list-type="picture"
      :on-change="changeUpload"
    >
      <el-badge :value="excelCount" class="item" type="primary">
        <el-button size="small" type="primary">点击上传</el-button>
      </el-badge>
      <div slot="tip" class="el-upload__tip">只能上传图片</div>
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
          <el-col :span="12" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
            <h4 class="demonstration textCenter">识别的图片</h4>
            <img :src="src" alt style="max-width:100%" />
          </el-col>
          <el-col :span="12" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
            <div class="grid-content">
              <h4 class="demonstration textCenter">识别的结果</h4>
              <div
                v-html="recognition_result"
                class="bg-purple-light textLeft"
              ></div>
            </div>
          </el-col>
        </el-row>
      </div>
      <span slot="footer" class="dialog-footer">
        <a :href="excelURL" class="excelDownload">下载</a>
        <el-button type="primary" @click="centerDialogVisible = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { uploadImgURL, BLOG_URL, BASE_URL } from "common/constants";
import { getImgConvertExcel, deleteOriginImg } from "network/home";
export default {
  name: "ImageToWord",
  data() {
    return {
      centerDialogVisible: false,
      uploadImgURL,
      fileList: [],
      src: "",
      recognition_result: "",
      handleImgId: "",
      excelCount: this.$store.state.count,
      excelURL: ""
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
      this.handleImgId = imgUuid;
      const messageBox = this.$message({
        message: "正在解析中，请稍后！",
        duration: 0
      });

      const result = await getImgConvertExcel(imgUuid);
      messageBox.close();
      this.centerDialogVisible = true;
      this.src = `${BASE_URL}${result.data.imgpath}`;
      this.excelURL = `${BASE_URL}${result.data.excelpath}`;
      this.recognition_result = result.data.excel_html;
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
.excelDownload {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  color: #606266;
  -webkit-appearance: none;
  text-align: center;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  outline: 0;
  margin: 0;
  -webkit-transition: 0.1s;
  transition: 0.1s;
  font-weight: 500;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
  background-color: #409eff;
  border-color: #409eff;
  margin: 0 10px;
}
</style>
