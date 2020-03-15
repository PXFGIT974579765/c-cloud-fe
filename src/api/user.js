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

// 系统操作相关
export function getQueryUser(params) {
  return request({
    url: '/sys/user/page',
    method: 'get',
    params
  });
}

export function addUser(data) {
  return request({
    url: '/sys/user/save',
    method: 'post',
    data
  });
}

export function updateUser(data) {
  return request({
    url: '/sys/user/update',
    method: 'put',
    data
  });
}

export function deleteUser(id) {
  return request({
    url: `/sys/user/delete/${id}`,
    method: 'delete'
  });
}

// 初始化用户密码
export function initUserPwd(id) {
  return request({
    url: `/sys/user/init-pwd/${id}`,
    method: 'put'
  });
}

// 根据用户id获取角色的分配情况
export function getRolesByUserId(id) {
  return request({
    url: `/sys/user/roles/${id}`,
    method: 'get'
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
