<template>
  <a-dropdown>
    <div class="header-avatar" style="cursor: pointer">
      <a-avatar
        class="avatar"
        size="small"
        shape="circle"
        :src="
          'https://gw.alipayobjects.com/zos/rmsportal/gaOngJwsRYRaVAuXXcmB.png'
        "
      />
      <span class="name">{{ userInfo.displayName }}</span>
    </div>
    <a-menu class="avatar-menu" slot="overlay">
      <a-menu-item>
        <a-icon type="user" />
        <span>个人中心</span>
      </a-menu-item>
      <a-menu-item>
        <a-icon type="setting" />
        <span>设置</span>
      </a-menu-item>
      <a-menu-divider />
      <a-menu-item @click="logout">
        <a-icon style="margin-right: 8px;" type="poweroff" />
        <span>退出登录</span>
      </a-menu-item>
    </a-menu>
  </a-dropdown>
</template>

<script>
export default {
  name: "HeaderAvatar",
  data() {
    return {
      username: null,
      photoURL: "",
    };
  },
  props: {
    userInfo: {
      type: Object,
      default() {
        return {
          about: "Hello World.",
          displayName: "",
          photoURL: "https://www.aigisss.com/view/static/img/avatar-s-11.1a620230.jpg",
          status: "online",
          uid: 0,
          userRole: "admin",
        };
      },
    },
  },
  computed: {},
  mounted() {},
  methods: {
    logout() {},
  },
};
</script>

<style lang="less">
.header-avatar {
  display: inline-flex;
  .avatar,
  .name {
    align-self: center;
  }
  .avatar {
    margin-right: 8px;
  }
  .name {
    font-weight: 500;
  }
}
.avatar-menu {
  // width: 150px;
  margin-top: 20px;
}
</style>
