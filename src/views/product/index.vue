<template>
  <div class="product-container">
    <img
      src="http://www.zhongyunwenhua.cn/img/banner/2.jpg"
      class="bg_img"
      alt=""
    />
    <div class="container">
      <div v-for="item in list" :key="item.id">
        <div></div>
        <div class="list-item flex">
          <img :src="item.icon" />
          <div class="desc-area">
            <div class="title">{{ item.name }}</div>
            <div class="type">版权类型：{{ item.type }}</div>
            <div class="description">详情：{{ item.description }}</div>
            <div class="price">版权费：{{ item.price }}元</div>
            <div class="btn-buy" @click="buyProduct(item.id)">购买版权</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { productList } from '@/api/product';
import { createOrder } from '@/api/order';
import { mapState } from 'vuex';

export default {
  name: 'Index',
  data() {
    return {
      list: []
    };
  },
  computed: {
    ...mapState({
      userInfo: state => state.user.userInfo,
      token: state => state.user.token
    })
  },
  created() {
    this.getProductList();
  },
  methods: {
    async getProductList() {
      const { data } = await productList();
      const list = [];
      data.forEach(item => {
        const products = item.foods.map(i => {
          return {
            ...i,
            type: item.name
          };
        });
        list.push(products);
      });
      this.list = list.flat();
    },
    async buyProduct(productId) {
      if (!this.userInfo.id) {
        this.$message('您还没有登录，请先登录');
        this.$router.push('/login');
        return;
      }
      const result = await createOrder({
        userId: this.userInfo.id,
        phone: this.userInfo.phone,
        productId
      });

      if (result.code === 0) {
        this.$message({
          type: 'success',
          message: '下单成功，订单处理中'
        });
        this.$router.push('/order');
      } else {
        this.$message({
          type: 'success',
          message: result.msg
        });
      }
    }
  }
};
</script>

<style lang="scss">
/* reset element-ui css */
.product-container {
  .bg_img {
    width: 100%;
    height: auto;
  }
  .container {
    padding-left: 300px;
    padding-right: 300px;
    padding-bottom: 40px;

    .list-item {
      margin-top: 40px;
      padding-bottom: 40px;
      border-bottom: 3px solid #cec5c5;

      img {
        width: 300px;
        height: 400px;
      }

      .desc-area {
        margin-left: 40px;
        position: relative;

        .title {
          font-weight: bold;
          font-size: 25px;
          letter-spacing: 4px;
        }
        .description {
          margin-top: 30px;
          line-height: 25px;
        }
        .type {
          margin-top: 30px;
        }
        .price {
          margin-top: 30px;
        }
        .btn-buy {
          position: absolute;
          width: 100px;
          height: 40px;
          line-height: 40px;
          background-color: #0ba2ea;
          color: #fff;
          text-align: center;
          border-radius: 4px;
          bottom: 0px;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
