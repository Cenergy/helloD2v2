<!--  -->
<template>
  <div>
    <a-upload
      name="file"
      :multiple="true"
      :action="uploadImgURL"
      :fileList="fileList"
      @change="handleChange"
      accept="image/*"
    >
      <a-button> <a-icon type="upload" /> 上传图表</a-button>
    </a-upload>

    <div class="modal">
      <a-modal
        title="图像识别"
        centered
        v-model="modal2Visible"
        @cancel="cancel"
        width="95%"
      >
        <template slot="footer">
          <a-button  @click="excelDownload">下载</a-button>
          <a-button
            type="primary"
             @click="cancel"
          >
            确定
          </a-button>
        </template>
        <div class="modalCard">
          <a-row :gutter="[16, 16]">
            <a-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
              <a-card title="识别图片" hoverable>
                <img
                  :src="src"
                  alt=""
                  width="100%"
                  height="100%"
                  style="max-height:60vh;object-fit:contain"
                />
              </a-card>
            </a-col>

            <a-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
              <a-card title="识别结果" hoverable>
                <p v-html="recognition_result"></p>
              </a-card>
            </a-col>
          </a-row>
        </div>
      </a-modal>
    </div>
  </div>
</template>

<script>
import { uploadImgURL, BLOG_URL, BASE_URL } from "common/constants";
import { getImgConvertExcel, deleteOriginExcelImg } from "network/home";
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
      excelURL: "",
      modal2Visible: false,
    };
  },
  methods: {
    enterBlog() {
      window.location = BLOG_URL;
    },
    cancel() {
      this.modal2Visible = false;
      this.src = "";
      this.recognition_result = "";
      deleteOriginExcelImg(this.handleImgId);
    },
    excelDownload(){
      window.location.href=this.excelURL
    },
    async handleChange(info) {
      const status = info.file.status;

      let fileList = [...info.fileList];
      fileList = fileList.slice(-1);
      fileList = fileList.map((file) => {
        if (file.response) {
          file.url = file.response.url;
        }
        return file;
      });
      this.fileList = fileList;

      if (status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (status === "done") {
        console.log(`Rd: handleChange -> status`, status);
        const { data } = info.file.response;
        const { id: imgUuid } = data;
        this.handleImgId = imgUuid;
        const messageBox = this.$message.success(
          `${info.file.name}正在解析中...`,
          0
        );
        const result = await getImgConvertExcel(imgUuid);
        messageBox();
        if (result.code === 200) {
          this.modal2Visible = true;
          this.src = `${BASE_URL}${result.data.imgpath}`;
          this.excelURL = `${BASE_URL}${result.data.excelpath}`;
          this.recognition_result = result.data.excel_html;
          return;
        }
        this.$message.warning(`解析表格失败，建议图像识别`);
      } else if (status === "error") {
        this.$message.error(`${info.file.name} file upload failed.`);
      }
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
        duration: 3000,
      });
    },
    onError(e) {
      // 复制失败
      this.$message({
        message: "复制失败！",
        type: "error",
      });
    },
  },
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
