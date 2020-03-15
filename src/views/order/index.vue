<template>
  <div class="order-container">
    <img
      src="http://www.zhongyunwenhua.cn/img/banner/2.jpg"
      class="bg_img"
      alt=""
    />
    <div class="container">
      <el-table :data="list" style="width: 100%" stripe border>
        <el-table-column prop="orderId" label="订单id" width="360" />
        <el-table-column prop="orderAmount" label="订单金额" />
        <el-table-column prop="orderStatusStr" label="订单状态" width="180" />
        <el-table-column prop="payStatusStr" label="订单支付状态" />
        <el-table-column prop="createTime" label="创建订单时间">
          <template slot-scope="scope">
            {{ parseDate(scope.row.createTime) }}
          </template>
        </el-table-column>
        <el-table-column fixed="right" label="操作" width="120">
          <template slot-scope="scope">
            <el-button type="text" size="small">
              查看详情
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import { userOrders } from '@/api/order';
import { parseTime } from '@/utils';
import { mapState } from 'vuex';

export default {
  name: 'Order',
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
    this.getOrders();
  },
  methods: {
    async getOrders() {
      if (!this.userInfo.id) {
        this.$message('您还没有登录，请先登录');
        this.$router.push('/login');
        return;
      }
      const { data } = await userOrders(this.userInfo.id);
      this.list = data;
    },
    parseDate(number) {
      return parseTime(number);
    }
  }
};
</script>

<style lang="scss">
/* reset element-ui css */
.order-container {
  .bg_img {
    width: 100%;
    height: auto;
  }
  .container {
    padding-top: 40px;
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
