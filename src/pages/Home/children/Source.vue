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
            <div class="row" @click="selectSourceType(0)">
              <div class="col-md-4 box-icon rotate">
                <i class="fa fa-desktop fa-4x"></i>
              </div>
              <div class="col-md-8 box-ct">
                <h3>视频资源</h3>
                <p>Lorem ipsum dolor sit ametconsectetur adipiscing elit. Suspendisse orci quam.</p>
              </div>
            </div>
          </div>
          <div class="col-sm-6 block wow bounceIn">
            <div class="row" @click="selectSourceType(1)">
              <div class="col-md-4 box-icon rotate">
                <i class="fa fa-picture-o fa-4x"></i>
              </div>
              <div class="col-md-8 box-ct">
                <h3>专业资源</h3>
                <p>
                  Nullam mo arcu ac molestie scelerisqu vulputate, molestie ligula gravida, tempus
                  ipsum.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="row tworow">
          <div class="col-sm-6 block wow bounceIn">
            <div class="row" @click="selectSourceType(2)">
              <div class="col-md-4 box-icon rotate">
                <i class="fa fa-magic fa-4x"></i>
              </div>
              <div class="col-md-8 box-ct">
                <h3>办公资源</h3>
                <p>Lorem ipsum dolor sit ametconsectetur adipiscing elit. Suspendisse orci quam.</p>
              </div>
            </div>
          </div>
          <div class="col-sm-6 block wow bounceIn">
            <div class="row" @click="selectSourceType(3)">
              <div class="col-md-4 box-icon rotate">
                <i class="fa fa-heart fa-4x"></i>
              </div>
              <div class="col-md-8 box-ct">
                <h3>编程资源</h3>
                <p>
                  Nullam mo arcu ac molestie scelerisqu vulputate, molestie ligula gravida, tempus
                  ipsum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="downloadlink" class="banner">
      <div class="container">
        <div class="row">
          <div class="col-md-6 col-md-offset-3 text-center wrap_title">
            <h2>免费下载</h2>
            <p class="lead" style="margin-top:0">开源的思想</p>
            <p>
              <a class="btn btn-embossed btn-primary view" role="button">免费下载</a>
            </p>
          </div>
        </div>
      </div>
    </div>

    <el-dialog
      title="资源列表"
      :visible.sync="sourceDialogVisible"
      :fullscreen="true"
      :lock-scroll="true"
      custom-class="'sourceList'"
      @close="closeSourcesPage"
    >
      <SourcesList :sourcesList="sourcesData"></SourcesList>
    </el-dialog>
  </div>
</template>
<script>
import SourcesList from "components/content/SourcesList";
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
      console.log("Go: closeSourcesPage -> closeSourcesPage");
      this.sourcesData = [];
    }
  },
  components: {
    SourcesList
  }
};
</script>
<style scoped>
</style>