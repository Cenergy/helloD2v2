<!--  -->
<template>
  <div>
   <a-upload-dragger
    name="file"
    :multiple="false"
    :action="uploadImgURL"
    @change="handleChange"
    :fileList="fileList"
  >
    <p class="ant-upload-drag-icon">
      <a-icon type="inbox" />
    </p>
    <p class="ant-upload-text">Click or drag file to this area to upload</p>
    <p class="ant-upload-hint">
      Support for a single or bulk upload. Strictly prohibit from uploading company data or other
      band files
    </p>
  </a-upload-dragger>

  <div class="modal" >
<a-modal
      title="Vertically centered modal dialog"
      centered
      v-model="modal2Visible"
      @cancel="cancel"
      @ok="() => (modal2Visible = false)"
    >
      <p>some contents...</p>
      <p>some contents...</p>
      <p>some contents...</p>
      <p>some contents...</p>
      <p>some contents...</p>
      <p>some contents...</p>
      <p>some contents...</p>
      <p>some contents...</p>
      <p>some contents...</p>
      <p>some contents...</p>
      <p>some contents...</p>
      <p>some contents...</p>
      <p>some contents...</p>
      <p>some contents...</p>
      <p>some contents...</p>
      <p>some contents...</p>
      <p>some contents...</p>
      <p>some contents...</p>
      <p>some contents...</p>
      <p>some contents...</p>
      <p>some contents...</p>
      <p>some contents...</p>
      <p>some contents...</p>
      <p>some contents...</p>
    </a-modal>

  </div>

  
  </div>
</template>

<script>
import { uploadImgURL, BLOG_URL, BASE_URL } from "common/constants";
import { getImgConvertWord, uploadImage, deleteOriginImg } from "network/home";
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
       modal2Visible: false,
    };
  },
  methods: {
    enterBlog() {
      window.location = BLOG_URL;
    },
    cancel(){
      this.modal2Visible = false
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

      const result = await getImgConvertWord(imgUuid);
      messageBox.close();
      this.centerDialogVisible = true;
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
    },
    handleChange(info) {
      console.log(`Rd: handleChange -> info`, info)
      const status = info.file.status;


      let fileList = [...info.fileList];
      fileList = fileList.slice(-1);
      fileList = fileList.map(file => {
        if (file.response) {
          file.url = file.response.url;
        }
        return file;
      });
      this.fileList = fileList;
      
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (status === 'done') {
        this.modal2Visible = true
        this.$message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === 'error') {
        this.$message.error(`${info.file.name} file upload failed.`);
      }
    },
  },
  mounted() {
    document.addEventListener("paste", event => {
      var items = (event.clipboardData || window.clipboardData).items;
      var file = null;
      if (items && items.length) {
        // 搜索剪切板items
        for (var i = 0; i < items.length; i++) {
          if (items[i].type.indexOf("image") !== -1) {
            file = items[i].getAsFile();
            break;
          }
        }
      } else {
        this.$message({
          dangerouslyUseHTMLString: true,
          message: `<strong>当前浏览器不支持粘贴图片</strong>`,
          duration: 3000,
          showClose: true,
          type: "warning"
        });
        return;
      }
      if (!file) {
        this.$message({
          dangerouslyUseHTMLString: true,
          message: `<strong>粘贴内容非图片</strong>`,
          duration: 3000,
          showClose: true,
          type: "warning"
        });
        return;
      }
      // 此时file就是我们的剪切板中的图片对象
      // 如果需要预览，可以执行下面代码
      let reader = new FileReader();
      reader.onload = async event => {
        const img = event.target.result;
        const { code = -1, data } = await uploadImage(img);
        if (code === 200) {
          const messageBox = this.$message({
            message: "正在解析中，请稍后！",
            duration: 0
          });
          const imgUuid = data.id;
          this.handleImgId = imgUuid;
          const result = await getImgConvertWord(imgUuid);
          messageBox.close();
          this.centerDialogVisible = true;
          this.src = `${BASE_URL}${result.data.img_path}`;
          this.recognition_result = result.data.vector_words;
        }
      };
      reader.readAsDataURL(file);
    });
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
<style>
  .con-input-upload{
  width: 100%;
  height:100px;
  margin: 0;
  padding: 0px;
}
.con-img-upload{
    margin-top: 0px;
    padding-right: 0px;
}
.con-img-upload .img-upload{
  width: 100%;
  height: 100%;
  margin: 0 !important;
}
.con-img-upload .img-upload img{
  width: 100%;
  height: 150px;
}
.con-input-upload .img-upload{
  width: 100%;
  height:100%;
  margin: 0;
  padding: 0px;
}
.con-input-upload .img-upload img{
  width: 100%;
  height:100%;
  margin: 0;
  padding: 0px;
}
.vs-card--content {
    padding: 5px;
}
</style>
