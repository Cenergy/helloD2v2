<template>
  <div id="app">
    <transition name="router-fade" mode="out-in">
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view>
      </keep-alive>
    </transition>
    <transition name="router-fade" mode="out-in">
      <router-view v-if="!$route.meta.keepAlive"></router-view>
    </transition>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  mounted() {
    // this.$store.dispatch("getUsername");
    this.getUsername();
  },
  methods: {
    ...mapActions(["getUsername"])
  }
};
</script>

<style>
@import url("assets/css/base.css");
</style>
