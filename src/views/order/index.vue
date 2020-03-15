<template>
  <div class="order-container">
    <img
      src="http://www.zhongyunwenhua.cn/img/banner/2.jpg"
      class="bg_img"
      alt=""
    />
    订单页面
  </div>
</template>

<script>
import { productList } from '@/api/product';

export default {
  name: 'Order',
  data() {
    return {
      list: []
    };
  },

  created() {
    this.getProductList();
  },
  methods: {
    async getProductList() {
      const result = await productList();
      const list = [];
      result.data.forEach(item => {
        const products = item.foods.map(i => {
          return {
            ...i,
            type: item.name
          };
        });
        list.push(products);
      });
      this.list = list.flat();
    }
  }
};
</script>

<style lang="scss">
/* reset element-ui css */
.order-container  {
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
