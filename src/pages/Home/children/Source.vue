<template>
  <div>
    <div id="credits" class="content-section-a">
      <div class="container">
        <div class="row">
          <div class="col-md-6 col-md-offset-3 text-center wrap_title">
            <h2>资源</h2>
            <p class="lead" style="margin-top:0">一些收集的资源</p>
          </div>

          <div class="col-sm-6 block wow bounceIn">
            <div class="row" @click="selectSourceType(1)">
              <div class="col-md-4 box-icon rotate">
                <i class="fa fa-desktop fa-4x"></i>
              </div>
              <div class="col-md-8 box-ct">
                <h3>视频资源</h3>
                <p>
                  看过比较好的学习视频或者娱乐视频。
                  <br />若侵权，邮件告知，删之。
                </p>
              </div>
            </div>
          </div>
          <div class="col-sm-6 block wow bounceIn">
            <div class="row" @click="selectSourceType(2)">
              <div class="col-md-4 box-icon rotate">
                <i class="fa fa-picture-o fa-4x"></i>
              </div>
              <div class="col-md-8 box-ct">
                <h3>专业资源</h3>
                <p>
                  关于GIS的一些资源。
                  <br />若失效，邮件告知，加之。
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="row tworow">
          <div class="col-sm-6 block wow bounceIn">
            <div class="row" @click="selectSourceType(3)">
              <div class="col-md-4 box-icon rotate">
                <i class="fa fa-magic fa-4x"></i>
              </div>
              <div class="col-md-8 box-ct">
                <h3>办公资源</h3>
                <p>各种软件资源</p>
              </div>
            </div>
          </div>
          <div class="col-sm-6 block wow bounceIn">
            <div class="row" @click="selectSourceType(0)">
              <div class="col-md-4 box-icon rotate">
                <i class="fa fa-heart fa-4x"></i>
              </div>
              <div class="col-md-8 box-ct">
                <h3>编程资源</h3>
                <p>其他资源，但是无论在哪，搜索框都可以搜到！！</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="downloadlink" class="banner">
      <div class="container">
        <div class="row text-center wrap_title">
          <h2>求关注</h2>
          <div class="row">
            <div class="col-sm-6">
              <p class="lead">公众号</p>
              <img src="~assets/img/qrcode_for_weixin.jpg" alt style />
            </div>
            <div class="col-sm-6">
              <p class="lead">小程序</p>
              <img src="~assets/img/qrcode_for_weixin.jpg" alt style />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="modal">
      <a-modal
        title="资源集合"
        centered
        v-model="sourceDialogVisible"
        @cancel="closeSourcesPage"
        @ok="() => (sourceDialogVisible = false)"
        width="95%"
      >
        <SourcesList :sourcesList="sourcesData"></SourcesList>
      </a-modal>
    </div>
  </div>
</template>
<script>
import SourcesList from "components/content/SourcesList";
import { BASE_URL } from "common/constants";
import { getSources } from "network/home";
export default {
  data() {
    return {
      sourceDialogVisible: false,
      sourcesData: []
    };
  },
  methods: {
    async selectSourceType(type) {
      console.log("Go: selectSourceType -> type", type);
      const { data } = await getSources(String(type));
      console.log("Go: selectSourceType -> data", data);
      if (!data.length) return;
      this.sourcesData = data;
      this.sourceDialogVisible = true;
    },
    closeSourcesPage() {
      this.sourcesData = [];
      this.sourceDialogVisible = false;
    }
  },
  components: {
    SourcesList
  }
};
</script>
<style>
.el-dialog__header {
  padding: 10px !important;
  background: #f8f8f8;
}

.abow_dialog {
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
.abow_dialog .el-dialog .el-dialog__body {
  position: absolute;
  left: 0;
  top: 54px;
  bottom: 0;
  right: 0;
  padding: 0;
  z-index: 1;
  overflow-x: hidden;
  overflow-y: auto;
}

.abow_dialog .el-dialog {
  margin: 0 auto !important;
  height: 100%;
  overflow: hidden;
}
</style>
<style scoped>
.sourceTitle {
  display: flex;
  color: #333;
}
.sourceTitleLeft {
  flex: 5;
}
.sourceTitleRight {
  flex: 5;
  text-align: right;
}
.sourceTitleRight i {
  cursor: pointer;
}
</style>
