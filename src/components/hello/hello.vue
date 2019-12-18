<template>
  <div>
    <el-button @click="decrement">减小</el-button>
    <el-button type="primary" @click="increment">增加</el-button>
    <el-button type="text" @click="asyncMethod">先增加后减小</el-button>
    <p>当前数字为：{{count}}</p>
    <router-link to="/world">world</router-link>
    <haha></haha>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import worlds from "../world/world.vue";
import haha from "./haha.vue";

export default {
  data() {
    return {
      msg: "HelloWorld"
    };
  },
  computed: {
    ...mapGetters(["count"])
  },
  methods: {
    ...mapActions(["increment", "decrement", "asyncMethod"])
  },
  components: {
    worlds,
    haha
  }
};
</script>

<style>
</style>
