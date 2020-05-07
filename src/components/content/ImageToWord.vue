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
      <p class="ant-upload-text">点击上传图片或将图片拖到此处</p>
      <p class="ant-upload-hint">
        <b>或者截图复制后直接control+v</b>
      </p>
    </a-upload-dragger>

    <div class="modal">
      <a-modal
        title="图像识别"
        centered
        v-model="modal2Visible"
        @cancel="cancel"
        @ok="() => (modal2Visible = false)"
        width="95%"
      >
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
    cancel() {
      this.modal2Visible = false;
      this.src = "";
      this.recognition_result = "";
      deleteOriginImg(this.handleImgId);
    },
    handleError() {
      this.$notify.error({
        title: "错误",
        message: "上传失败！！",
        type: "success",
        duration: 3000,
      });
    },
    async imgHandleSuccess(res) {
      const { data } = res;
      const { id: imgUuid } = data;
      this.handleImgId = imgUuid;
      const messageBox = this.$message({
        message: "正在解析中，请稍后！",
        duration: 0,
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
        duration: 3000,
      });
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
        const { data } = info.file.response;
        const { id: imgUuid } = data;
        this.handleImgId = imgUuid;
        const messageBox = this.$message.success(
          `${info.file.name}正在解析中...`,
          0
        );
        const result = await getImgConvertWord(imgUuid);
        messageBox();
        this.modal2Visible = true;
        this.src = `${BASE_URL}${result.data.img_path}`;
        this.recognition_result = result.data.vector_words;
      } else if (status === "error") {
        this.$message.error(`${info.file.name} 上传失败.`);
      }
    },
  },
  mounted() {
    document.addEventListener("paste", (event) => {
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
        this.$message.warning({
          content: `<strong>当前浏览器不支持粘贴图片</strong>`,
          duration: 3000,
        });
        return;
      }
      if (!file) {
        this.$message.warning({
          content: `<strong>粘贴内容非图片</strong>`,
          duration: 3000,
        });
        return;
      }
      // 此时file就是我们的剪切板中的图片对象
      // 如果需要预览，可以执行下面代码
      let reader = new FileReader();
      reader.onload = async (event) => {
        const img = event.target.result;
        const { code = -1, data } = await uploadImage(img);
        if (code === 200) {
          const messageBox = this.$message.loading({
            content: "正在解析中，请稍后！",
            duration: 0,
          });
          const imgUuid = data.id;
          this.handleImgId = imgUuid;
          const result = await getImgConvertWord(imgUuid);
          messageBox();
          this.modal2Visible = true;
          this.src = `${BASE_URL}${result.data.img_path}`;
          this.recognition_result = result.data.vector_words;
        }
      };
      reader.readAsDataURL(file);
    });
  },
};
</script>
<style scoped>
@import url("~assets/css/homeContent.css");
</style>

