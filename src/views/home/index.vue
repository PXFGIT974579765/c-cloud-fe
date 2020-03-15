<template>
  <div class="index-container">
    <img
      src="http://www.zhongyunwenhua.cn/img/slider/slider1.jpg"
      class="bg_img"
      alt=""
    />
  </div>
</template>

<script>
export default {
  name: 'Index',
  data() {
    return {};
  },

  created() {
    // window.addEventListener('storage', this.afterQRScan)
  },
  methods: {}
};
</script>

<style lang="scss">
/* reset element-ui css */
.index-container {
  .bg_img {
    width: 100%;
    height: auto;
  }
}
</style>
