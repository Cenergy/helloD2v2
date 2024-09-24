<template>
  <div>
    <footer>
      <div class="container">
        <div class="row">
          <div class="col-md-7">
            <h3 class="footer-title">我是有底线的!!</h3>
            <!-- <p v-for="(value,index) in links" class="col-sm-6 col-xs-6 col-md-4" :key="index">
              <a :href="value.url" :title="value.name" target="_blank">{{value.name}}</a>
            </p>-->
            <h3 class="footer-title">
              <a href="http://www.gishai.top/blog/links/" title="友情链接" target="_blank">友情链接>>></a>
            </h3>

            <!-- LICENSE -->
            <!-- <div style="text-align:center;" class="col-sm-12 col-xs-12 col-md-12">
              <span>©2019 及时嗨版权所有</span>
              <a rel="license" href="https://beian.miit.gov.cn/">赣ICP备18013338号</a>
            </div>-->
          </div>
          <!-- /col-xs-7 -->

          <div class="col-md-5">
            <div class="footer-banner">
              <h3 class="footer-title">关于小站</h3>
              <ul>
                <li>地理信息</li>
                <li>空间智能</li>
                <li>AI/GIS/诗</li>
              </ul>
            </div>
          </div>
        </div>
        <div style="text-align:center; margin:1rem" class="col-sm-12 col-xs-12 col-md-12">
          <span>©2019-2024 及时嗨版权所有</span>
          <a rel="license" href="https://beian.miit.gov.cn/">赣ICP备18013338-2号</a>
        </div>
      </div>
    </footer>
  </div>
</template>
<script>
import { FRIEND_LINKS } from "common/constants";
export default {
  data() {
    return {
      links: FRIEND_LINKS
    };
  }
};
</script>
<style scoped>
</style>