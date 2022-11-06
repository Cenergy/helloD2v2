<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h3>{{ msg }}</h3>
    <button ref="btn" @click="clickHandler">button</button>
  </div>
</template>
<script>
export default {
  props: {
    msg: {
      required: true,
      type: String,
    },
  },
  data() {
    let url =
      "http://bj.bcebos.com/v1/ai-edgecloud/F0D2BA5B8C1445A4953E53C685872C32.xls?authorization=bce-auth-v1%2Fd9272b4e9a38476db4470c2714e1339a%2F2021-05-25T06%3A41%3A26Z%2F172800%2F%2Fd0436d22696d20fdef7163a5f5fa0716854d8362293107a4869e6ea1cefd50f9";

    return {
      url,
      newTab: null,
    };
  },
  mounted() {},
  methods: {
    clickHandler() {
      this.newTab = window.open("about:blank");
      let $ajax = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve();
        }, 1000);
      });
      $ajax.then(() => {
        this.newTab.location.href = this.url;
        setTimeout(() => {
          this.newTab = null;
        }, 1);
      });
    },
  },
};
</script>
