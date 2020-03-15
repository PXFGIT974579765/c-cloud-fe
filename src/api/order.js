import request from '@/utils/request';

export function productList(data) {
  return request({
    url: '/product/product/list',
    method: 'get'
  });
}

export function createOrder(data) {
  return request({
    url: 'order/buyer/order/create',
    method: 'post',
    data
  });
}
