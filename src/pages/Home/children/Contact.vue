<template>
  <div>
    <div id="contact" class="content-section-a">
      <div class="container">
        <div class="row">
          <div class="col-md-6 col-md-offset-3 text-center wrap_title">
            <h2>反馈</h2>
            <p class="lead" style="margin-top:0">提提您的建议或者意见！</p>
          </div>

          <div class="col-md-6">
            <div class="form-group">
              <a-form-model
                ref="ruleForm"
                :model="ruleForm"
                :rules="rules"
                :label-col="labelCol"
                :wrapper-col="wrapperCol"
              >
                <a-form-model-item label="邮箱" prop="email">
                  <a-input v-model="ruleForm.email"></a-input>
                </a-form-model-item>
                <a-form-model-item label="用户名" prop="name">
                  <a-input v-model="ruleForm.name"></a-input>
                </a-form-model-item>
                <a-form-model-item label="内容" prop="desc">
                  <a-input
                    type="textarea"
                    v-model="ruleForm.desc"
                    :autoSize="{ minRows: 3, maxRows: 5 }"
                  ></a-input>
                </a-form-model-item>
                <input
                  type="submit"
                  name="submit"
                  id="submit"
                  value="提交"
                  @click.prevent.once="submitForm('ruleForm')"
                  class="btn wow tada btn-embossed btn-info pull-right"
                />
              </a-form-model>
            </div>
          </div>

          <hr class="featurette-divider hidden-lg" />
          <div class="col-md-5 col-md-push-1 address">
            <address>
              <h3>你提我改</h3>
              <p class="lead">
                <a href>
                  牛顿第三定律告诉我们，
                  <br />您的意见是我的动力。
                </a>
                <!-- <br />您的建议是我的方向！ -->
              </p>
            </address>

            <!-- <h3>Social</h3>
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
            </li>-->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { setSuggest } from "network/home";
export default {
  data() {
    return {
      labelCol: { span: 4 },
      wrapperCol: { span: 20 },
      ruleForm: {
        name: "",
        email: "",
        desc: "",
      },
      rules: {
        name: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          {
            min: 3,
            max: 15,
            message: "长度在 3 到 15 个字符",
            trigger: "blur",
          },
        ],
        email: [
          { required: true, message: "请输入邮箱地址", trigger: "blur" },
          {
            type: "email",
            message: "请输入正确的邮箱地址",
            trigger: ["blur", "change"],
          },
        ],
        desc: [{ required: true, message: "请填写反馈信息", trigger: "blur" }],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(async (valid) => {
        if (valid) {
          const { name, email, desc } = this.ruleForm;
          console.log(`Rd: submitForm -> this.ruleForm`, this.ruleForm);
          const messageBox = this.$message.info("正在反馈中，稍等一会！", 0);
          const { code = 400 } = await setSuggest({
            suggest_email: email,
            suggest_user: name,
            suggest_message: desc,
          });
          messageBox();
          if (code === 400) {
            this.$message.error("反馈信息失败!!");
            return;
          }
          this.$message.success("恭喜你，反馈信息成功!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>
<style scoped>
.form-group {
  margin-top: 30px !important;
}
</style>
