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
            <img class="rotate" src="./img/icon/tweet.svg" alt="Generic placeholder image" />
            <h3>语音识别</h3>
            <p class="lead">
              点击开始录音识别，<br />
              再次点击即可停止录音！
            </p>
            <el-input placeholder="点击话筒开始录音" v-model="input3" class="input-with-select">
              <el-button slot="append" icon="el-icon-mic"></el-button>
            </el-input>

            <!-- <p><a class="btn btn-embossed btn-primary view" role="button">View Details</a></p> -->
          </div>
          <!-- /.col-lg-4 -->

          <div class="col-sm-4 wow fadeInDown text-center">
            <img class="rotate" src="./img/icon/picture.svg" alt="Generic placeholder image" />
            <h3>图像识别</h3>
            <el-upload
                class="upload-demo"
                drag
                action="https://jsonplaceholder.typicode.com/posts/"
                multiple 
              >
                <i class="el-icon-upload"></i>
                <div class="el-upload__text">
                  <p><em>点击上传</em>图片或将图片拖到此处</p>
                  <p>或者截图复制后直接<em>control+v</em></p>
                </div>
              </el-upload>
            <!-- <p><a class="btn btn-embossed btn-primary view" role="button">View Details</a></p> -->
          </div>
          <!-- /.col-lg-4 -->

          <div class="col-sm-4 wow fadeInDown text-center">
            <img class="rotate" src="./img/icon/retina.svg" alt="Generic placeholder image" />
            <h3>人脸识别</h3>
            <p>本功能针对那些账号与人脸绑定的用户，<br />再次访问本站可以快速登录</p>
            <el-button type="primary" icon="el-icon-s-custom" size="medium">
              快速登录
            </el-button>
            <!-- <p><a class="btn btn-embossed btn-primary view" role="button">View Details</a></p> -->
          </div>
          <!-- /.col-lg-4 -->
        </div>
        <!-- /.row -->

        <div class="row tworow">
          <div class="col-sm-4 wow fadeInDown text-center">
            <img class="rotate" src="./img/icon/laptop.svg" alt="Generic placeholder image" />
            <h3>机器学习</h3>
            <p class="lead">
              Epsum factorial non deposit quid pro quo hic escorol. Olypian quarrels et gorilla
              congolium sic ad nauseum.
            </p>
            <!-- <p><a class="btn btn-embossed btn-primary view" role="button">View Details</a></p> -->
          </div>
          <!-- /.col-lg-4 -->

          <div class="col-sm-4 wow fadeInDown text-center">
            <img class="rotate" src="./img/icon/map.svg" alt="Generic placeholder image" />
            <h3>地图</h3>
            <p class="lead">
              Epsum factorial non deposit quid pro quo hic escorol. Olypian quarrels et gorilla
              congolium sic ad nauseum.
            </p>
            <!-- <p><a class="btn btn-embossed btn-primary view" role="button">View Details</a></p> -->
          </div>
          <!-- /.col-lg-4 -->

          <div class="col-sm-4 wow fadeInDown text-center">
            <img class="rotate" src="./img/icon/browser.svg" alt="Generic placeholder image" />
            <h3>网络爬虫</h3>
            点击上传含有表格的图片
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
    <div id="useit" class="content-section-a">
      <div class="container">
        <div class="row">
          <div class="col-sm-6 pull-right wow fadeInRightBig">
            <img class="img-responsive" src="./img/ipad.png" alt />
          </div>

          <div class="col-sm-6 wow fadeInLeftBig" data-animation-delay="200">
            <h3 class="section-heading">文字识别</h3>
            <div class="sub-title lead3">
              Lorem ipsum dolor sit atmet sit dolor greand fdanrh
              <br />sdfs sit atmet sit dolor greand fdanrh sdfs
            </div>
            <p class="lead">
              In his igitur partibus duabus nihil erat, quod Zeno commuta rest gestiret. Sed
              virtutem ipsam inchoavit, nihil ampliusuma. Scien tiam pollicentur, uam non erat
              mirum sapientiae lorem cupido patria esse cariorem. Quae qui non vident, nihilamane
              umquam magnum ac cognitione.
            </p>

            <p>
              <a class="btn btn-embossed btn-primary" href="#" role="button">View Details</a>
              <a class="btn btn-embossed btn-info" href="#" role="button">Visit Website</a>
            </p>
          </div>
        </div>
      </div>
      <!-- /.container -->
    </div>
    <div class="content-section-a">
      <div class="container">
        <div class="row">
          <div class="col-sm-6 pull-right wow fadeInRightBig">
            <img class="img-responsive" src="./img/doge.png" alt />
          </div>

          <div class="col-sm-6 wow fadeInLeftBig" data-animation-delay="200">
            <h3 class="section-heading">物体识别</h3>
            <p class="lead">
              A special thanks to Death to the Stock Photo for providing the photographs that you
              see in this template.
            </p>

            <ul class="descp lead2">
              <li><i class="glyphicon glyphicon-signal"></i> Reliable and Secure Platform</li>
              <li>
                <i class="glyphicon glyphicon-refresh"></i> Everything is perfectly orgainized for
                future
              </li>
              <li><i class="glyphicon glyphicon-headphones"></i> Attach large file easily</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="content-section-c">
      <div class="container">
        <div class="row">
          <div class="col-md-6 col-md-offset-3 text-center wrap_title white">
            <h2>非常感谢</h2>
            <p class="lead" style="margin-top:0">能看这么久也是不容易</p>
          </div>
          <div class="mockup-content">
            <div class="morph-button wow pulse morph-button-inflow morph-button-inflow-1">
              <button type="button ">
                <span>Subscribe to our Newsletter</span>
              </button>
              <div class="morph-content">
                <div>
                  <div class="content-style-form content-style-form-4">
                    <h2 class="morph-clone">
                      <a href="#credits">下面将是一些资源与个人信息</a>
                    </h2>
                    >
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
      input3: '',
    };
  },
};
</script>
<style scoped>
@import url('../../common/css/bootstrap.min.css');
@import url('../../common/font-awesome/css/font-awesome.min.css');
@import url('../../common/css/general.css');
@import url('../../common/css/custom.css');
@import url('../../common/css/owl.carousel.css');
@import url('../../common/css/owl.theme.css');
@import url('../../common/css/style.css');
@import url('../../common/css/animate.css');
@import url('../../common/css/magnific-popup.css');

</style>