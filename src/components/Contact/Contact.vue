<template>
  <div>
    <div id="contact" class="content-section-a">
      <div class="container">
        <div class="row">
          <div class="col-md-6 col-md-offset-3 text-center wrap_title">
            <h2>反馈</h2>
            <p class="lead" style="margin-top:0">提提您的建议或者意见！</p>
          </div>

          <form role="form" action method="post">
            <div class="col-md-6">
              <div class="form-group">
                <label for="InputName">名称</label>
                <div class="input-group">
                  <input
                    type="text"
                    class="form-control"
                    name="InputName"
                    id="InputName"
                    placeholder="请输入用户名"
                    required
                  />
                  <span class="input-group-addon">
                    <i class="glyphicon glyphicon-ok form-control-feedback"></i>
                  </span>
                </div>
              </div>

              <div class="form-group">
                <label for="InputEmail">邮箱</label>
                <div class="input-group">
                  <input
                    type="email"
                    class="form-control"
                    id="InputEmail"
                    name="InputEmail"
                    placeholder="请输入你的邮箱"
                    required
                  />
                  <span class="input-group-addon">
                    <i class="glyphicon glyphicon-ok form-control-feedback"></i>
                  </span>
                </div>
              </div>

              <div class="form-group">
                <label for="InputMessage">信息</label>
                <div class="input-group">
                  <textarea
                    name="InputMessage"
                    id="InputMessage"
                    class="form-control"
                    rows="5"
                    required
                  ></textarea>
                  <span class="input-group-addon">
                    <i class="glyphicon glyphicon-ok form-control-feedback"></i>
                  </span>
                </div>
              </div>

              <input
                type="submit"
                name="submit"
                id="submit"
                value="提交"
                class="btn wow tada btn-embossed btn-primary pull-right"
              />
            </div>
          </form>

          <hr class="featurette-divider hidden-lg" />
          <div class="col-md-5 col-md-push-1 address">
            <address>
              <h3>你提我改</h3>
              <p class="lead">
                <a href>
                  牛顿第三定律告诉我们，
                  <br />您的意见是我的动力。
                </a>
                <br />您的建议是我的方向！
              </p>
            </address>

            <h3>Social</h3>
            <li class="social">
              <a href="#">
                <i class="fa fa-facebook-square fa-size"></i>
              </a>
              <a href="#">
                <i class="fa fa-twitter-square fa-size"></i>
              </a>
              <a href="#">
                <i class="fa fa-google-plus-square fa-size"></i>
              </a>
              <a href="#">
                <i class="fa fa-flickr fa-size"></i>
              </a>
            </li>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
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