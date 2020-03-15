import request from '@/utils/request';
import qs from 'qs';

export function login(data) {
  return request({
    url: '/user/login',
    method: 'post',
    data
  });
}

export function logout() {
  return request({
    url: '/user/logout',
    method: 'post'
  });
}

// 给用户分配角色
export function changeRoles(data) {
  return request({
    url: '/sys/user/changeRoles',
    method: 'post',
    data: qs.stringify(data)
  });
}
