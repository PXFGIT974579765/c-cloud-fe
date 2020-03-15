import request from '@/utils/request';

export function productList(data) {
  return request({
    url: '/product/product/list',
    method: 'get'
  });
}
