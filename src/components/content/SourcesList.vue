<!--  -->
<template>
  <div>
    <div class="container projects">
      <div class="projects-header page-header">
        <div class="row">
          <div class="input-group">
            <input type="text" class="form-control" placeholder="输入资源名" v-model="key_word" />
            <span class="input-group-btn">
              <el-button type="primary" @keydown.enter="searchSource" @click="searchSource">搜索一下</el-button>
              <!-- <button class="btn btn-default" type="button" id="search">搜索一下</button> -->
            </span>
          </div>
          <!-- /input-group -->
        </div>
        <!-- /.row -->
      </div>

      <div class="row" id="sourcesList"></div>
    </div>
    <hr />
    <footer class="footer">
      <div class="container">
        <div class="row footer-top">
          <div class="col-md-6 col-lg-6">
            <p>致力于提供优质的GIS和AI技术文档和辅助开发工具！</p>
            <p>申明：如有侵权，请立即联系作者删除。673598118@qq.com</p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      key_word: ""
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    append_html(emt, obj) {
      let res = obj;
      for (var i = 0; i < res.data.length; i++) {
        var card_html =
          '<div class="col-sm-6 col-md-4 col-lg-3 ">' +
          '<div class="thumbnail">' +
          '<a href="' +
          res.data[i].sourceurl +
          '" title="' +
          res.data[i].sourcename +
          '" target="_blank">' +
          '<div style="background:green; width:100%;height:150px;"><img class="lazy" src="' +
          res.data[i].source_img +
          '"   alt="AIGIS资源补给" style="overflow: hidden;width:100%;height:100%;"></div>' +
          '</a><div class="caption"><h3 style="color:blue">' +
          "" +
          res.data[i].sourcename +
          "</h3>" +
          '<br><b><a target="_blank" class="layui-btn layui-btn-sm" href="' +
          res.data[i].sourceurl +
          '"><i class="layui-icon layui-icon-download-circle"></i>下载地址</a></b><br><br>' +
          "<p>资源" +
          res.data[i].sourcename +
          "的提取码或密码是：" +
          res.data[i].code +
          "</p>" +
          "</div></div></div>";
        $(emt).append(card_html);
      }
    },
    searchSource() {
      if (this.key_word === "") {
        this.$message({
          message: "不能空空如也！",
          type: "error"
        });
      }
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    const res = {
      data: [
        {
          sourceurl: "123",
          sourcename: "234",
          source_img: "123",
          code: "ggg"
        },
        {
          sourceurl: "123",
          sourcename: "234",
          source_img: "123",
          code: "ggg"
        },
        {
          sourceurl: "123",
          sourcename: "234",
          source_img: "123",
          code: "ggg"
        },
        {
          sourceurl: "123",
          sourcename: "234",
          source_img: "123",
          code: "ggg"
        },
        {
          sourceurl: "123",
          sourcename: "234",
          source_img: "123",
          code: "ggg"
        },
        {
          sourceurl: "123",
          sourcename: "234",
          source_img: "123",
          code: "ggg"
        }
      ]
    };
    this.append_html("#sourcesList", res);
  },
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {} //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style  scoped>
@import url("~assets/css/bootstrap.min.css");
</style>