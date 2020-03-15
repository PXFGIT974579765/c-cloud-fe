import request from '@/utils/request';

export function userOrders(userId) {
  return request({
    url: `/order/buyer/list/${userId}`,
    method: 'get'
  });
}

export function createOrder(data) {
  return request({
    url: '/order/buyer/create',
    method: 'post',
    data
  });
}
