<template>
  <div class="app-wrapper">
    <div class="header flex">
      <div class="title">中云文化版权交易平台</div>
      <div class="btn-menu flex">
        <router-link
          v-for="route in menuRoutes"
          :key="route.path"
          :class="{ active: route.active, menu: true }"
          :to="route.path"
        >{{ (userInfo.username&&(route.path==='/login'))?`${userInfo.username}`: route.title }}</router-link>
        <!-- <div>商品信息</div>
        <div>登录</div> -->
      </div>
    </div>
    <app-main />
  </div>
</template>

<script>
import { menuRoutes } from '@/router';
import { AppMain } from './components';
import ResizeMixin from './mixin/ResizeHandler';
import { mapState } from 'vuex';

export default {
  name: 'Layout',
  components: {
    AppMain
  },
  mixins: [ResizeMixin],
  data() {
    return {
      menuRoutes
    };
  },
  computed: {
    ...mapState({
      userInfo: state => state.user.userInfo
    })
  },
  watch: {
    $route(to, from) {
      this.initMenuStyle(to.path);
    }
  },
  created() {
    this.initMenuStyle(this.$route.path);
  },
  methods: {
    initMenuStyle(path) {
      const newMenu = this.menuRoutes.map(item => {
        return {
          ...item,
          active: item.path === path
        };
      });
      this.menuRoutes = newMenu;
    }
  }
};
</script>

<style lang="scss" scoped>
@import '~@/styles/mixin.scss';
@import '~@/styles/variables.scss';

.app-wrapper {
  .header {
    position: fixed;
    justify-content: space-between;
    padding-left: 100px;
    padding: 15px;
    width: 100%;
    background-color: #9eb5c354;
    color: white;
    z-index: 9999;

    .title {
      height: 60px;
      line-height: 60px;
      font-size: 40px;
      letter-spacing: 1px;
    }

    .btn-menu {
      height: 60px;
      line-height: 60px;
      font-size: 20px;

      .menu {
        margin-left: 20px;
      }
      .active {
        border-bottom: 3px solid #fff;
      }
    }
  }
}
</style>
